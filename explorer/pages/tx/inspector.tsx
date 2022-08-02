import React from "react";
import { useRouter } from "next/router";
import { Message, PACKET_DATA_SIZE } from "@solana/web3.js";

import { TableCardBody } from "src/components/common/TableCardBody";
import { SolBalance } from "src/utils";
import { useQuery } from "src/utils/url";
import {
  useFetchRawTransaction,
  useRawTransactionDetails,
} from "src/providers/transactions/raw";
import { FetchStatus } from "src/providers/cache";
import { LoadingCard } from "src/components/common/LoadingCard";
import { ErrorCard } from "src/components/common/ErrorCard";
import { TransactionSignatures } from "src/components/inspector/SignaturesCard";
import { AccountsCard } from "src/components/inspector/AccountsCard";
import {
  AddressWithContext,
  createFeePayerValidator,
} from "src/components/inspector/AddressWithContext";
import { SimulatorCard } from "src/components/inspector/SimulatorCard";
import { MIN_MESSAGE_LENGTH, RawInput } from "src/components/inspector/RawInputCard";
import { InstructionsSection } from "src/components/inspector/InstructionsSection";
import base58 from "bs58";
import { dummyUrl } from "src/constants/urls";

export type TransactionData = {
  rawMessage: Uint8Array;
  message: Message;
  signatures?: (string | null)[];
};

// Decode a url param and return the result. If decoding fails, return whether
// the param should be deleted.
function decodeParam(params: URLSearchParams, name: string): string | boolean {
  const param = params.get(name);
  if (param === null) return false;
  try {
    return decodeURIComponent(param);
  } catch (err) {
    return true;
  }
}

// Decode a signatures param and throw an error on failure
function decodeSignatures(signaturesParam: string): (string | null)[] {
  let signatures;
  try {
    signatures = JSON.parse(signaturesParam);
  } catch (err) {
    throw new Error("Signatures param is not valid JSON");
  }

  if (!Array.isArray(signatures)) {
    throw new Error("Signatures param is not a JSON array");
  }

  const validSignatures: (string | null)[] = [];
  for (const signature of signatures) {
    if (signature === null) {
      validSignatures.push(signature);
      continue;
    }

    if (typeof signature !== "string") {
      throw new Error("Signature is not a string");
    }

    try {
      base58.decode(signature);
      validSignatures.push(signature);
    } catch (err) {
      throw new Error("Signature is not valid base58");
    }
  }

  return validSignatures;
}

// Decodes url params into transaction data if possible. If decoding fails,
// URL params are returned as a string that will prefill the transaction
// message input field for debugging. Returns a tuple of [result, shouldRefreshUrl]
function decodeUrlParams(
  params: URLSearchParams
): [TransactionData | string, boolean] {
  const messageParam = decodeParam(params, "message");
  const signaturesParam = decodeParam(params, "signatures");

  let refreshUrl = false;
  if (signaturesParam === true) {
    params.delete("signatures");
    refreshUrl = true;
  }

  if (typeof messageParam === "boolean") {
    if (messageParam) {
      params.delete("message");
      params.delete("signatures");
      refreshUrl = true;
    }
    return ["", refreshUrl];
  }

  let signatures: (string | null)[] | undefined = undefined;
  if (typeof signaturesParam === "string") {
    try {
      signatures = decodeSignatures(signaturesParam);
    } catch (err) {
      params.delete("signatures");
      refreshUrl = true;
    }
  }

  try {
    const buffer = Uint8Array.from(atob(messageParam), (c) => c.charCodeAt(0));

    if (buffer.length < MIN_MESSAGE_LENGTH) {
      throw new Error("message buffer is too short");
    }

    const message = Message.from(buffer);
    const data = {
      message,
      rawMessage: buffer,
      signatures,
    };
    return [data, refreshUrl];
  } catch (err) {
    params.delete("message");
    refreshUrl = true;
    return [messageParam, true];
  }
}

export function TransactionInspectorPage({
  signature,
}: {
  signature?: string;
}) {
  const [transaction, setTransaction] = React.useState<TransactionData>();
  const query = useQuery();
  const router = useRouter();
  const [paramString, setParamString] = React.useState<string>();

  const location = React.useMemo(() => new URL(router.asPath, dummyUrl), [router.asPath]);

  // Sync message with url search params
  React.useEffect(() => {
    if (signature) return;
    if (transaction) {
      let shouldRefreshUrl = false;

      if (transaction.signatures !== undefined) {
        const signaturesParam = encodeURIComponent(
          JSON.stringify(transaction.signatures)
        );
        if (query.get("signatures") !== signaturesParam) {
          shouldRefreshUrl = true;
          query.set("signatures", signaturesParam);
        }
      }

      const base64 = btoa(
        String.fromCharCode.apply(null, [...transaction.rawMessage])
      );
      const newParam = encodeURIComponent(base64);
      if (query.get("message") !== newParam) {
        shouldRefreshUrl = true;
        query.set("message", newParam);
      }

      if (shouldRefreshUrl) {
        router.push(`${location.pathname}?${query.toString()}`);
      }
    }
  }, [query, transaction, signature, router, location]);

  const reset = React.useCallback(() => {
    query.delete("message");

    if (query.toString().length > 0)
      router.push(`${location.pathname}?${query.toString()}`);
    else
      router.push(location.pathname);

    setTransaction(undefined);
  }, [query, location, router]);

  // Decode the message url param whenever it changes
  React.useEffect(() => {
    if (transaction || signature) return;

    const [result, refreshUrl] = decodeUrlParams(query);
    if (refreshUrl) {
      if (query.toString().length > 0)
      router.push(`${location.pathname}?${query.toString()}`);
      else
        router.push(location.pathname);
    }

    if (typeof result === "string") {
      setParamString(result);
    } else {
      setTransaction(result);
    }
  }, [query, transaction, signature, router, location]);

  return (
    <div className="container mt-4">
      <div className="header">
        <div className="header-body">
          <h2 className="header-title">Transaction Inspector</h2>
        </div>
      </div>
      {signature ? (
        <PermalinkView signature={signature} reset={reset} />
      ) : transaction ? (
        <LoadedView transaction={transaction} onClear={reset} />
      ) : (
        <RawInput value={paramString} setTransactionData={setTransaction} />
      )}
    </div>
  );
}

function PermalinkView({
  signature,
}: {
  signature: string;
  reset: () => void;
}) {
  const details = useRawTransactionDetails(signature);
  const fetchTransaction = useFetchRawTransaction();
  const refreshTransaction = () => fetchTransaction(signature);
  const router = useRouter();
  const transaction = details?.data?.raw;

  const location = React.useMemo(() => new URL(router.asPath, dummyUrl), [router.asPath]);

  const reset = React.useCallback(() => {
    if (location.search.length > 0)
      router.push(`/tx/inspector${location.search}`);
    else 
      router.push("/tx/inspector");
  }, [router, location]);

  // Fetch details on load
  React.useEffect(() => {
    if (!details) fetchTransaction(signature);
  }, [signature, details, fetchTransaction]);

  if (!details || details.status === FetchStatus.Fetching) {
    return <LoadingCard />;
  } else if (details.status === FetchStatus.FetchFailed) {
    return (
      <ErrorCard
        retry={refreshTransaction}
        text="Failed to fetch transaction"
      />
    );
  } else if (!transaction) {
    return (
      <ErrorCard
        text="Transaction was not found"
        retry={reset}
        retryText="Reset"
      />
    );
  }

  const { message, signatures } = transaction;
  const tx = { message, rawMessage: message.serialize(), signatures };

  return <LoadedView transaction={tx} onClear={reset} />;
}

function LoadedView({
  transaction,
  onClear,
}: {
  transaction: TransactionData;
  onClear: () => void;
}) {
  const { message, rawMessage, signatures } = transaction;

  return (
    <>
      <OverviewCard message={message} raw={rawMessage} onClear={onClear} />
      <SimulatorCard message={message} />
      {signatures && (
        <TransactionSignatures
          message={message}
          signatures={signatures}
          rawMessage={rawMessage}
        />
      )}
      <AccountsCard message={message} />
      <InstructionsSection message={message} />
    </>
  );
}

const DEFAULT_FEES = {
  lamportsPerSignature: 5000,
};

function OverviewCard({
  message,
  raw,
  onClear,
}: {
  message: Message;
  raw: Uint8Array;
  onClear: () => void;
}) {
  const fee =
    message.header.numRequiredSignatures * DEFAULT_FEES.lamportsPerSignature;
  const feePayerValidator = createFeePayerValidator(fee);

  const size = React.useMemo(() => {
    const sigBytes = 1 + 64 * message.header.numRequiredSignatures;
    return sigBytes + raw.length;
  }, [message, raw]);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-header-title">Transaction Overview</h3>
          <button className="btn btn-sm d-flex btn-white" onClick={onClear}>
            Clear
          </button>
        </div>
        <TableCardBody>
          <tr>
            <td>Serialized Size</td>
            <td className="text-lg-end">
              <div className="d-flex align-items-end flex-column">
                {size} bytes
                <span
                  className={
                    size <= PACKET_DATA_SIZE ? "text-muted" : "text-warning"
                  }
                >
                  Max transaction size is {PACKET_DATA_SIZE} bytes
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Fees</td>
            <td className="text-lg-end">
              <div className="d-flex align-items-end flex-column">
                <SolBalance lamports={fee} />
                <span className="text-muted">
                  {`Each signature costs ${DEFAULT_FEES.lamportsPerSignature} lamports`}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-start flex-column">
                Fee payer
                <span className="mt-1">
                  <span className="badge bg-info-soft me-2">Signer</span>
                  <span className="badge bg-danger-soft me-2">Writable</span>
                </span>
              </div>
            </td>
            <td className="text-end">
              {message.accountKeys.length === 0 ? (
                "No Fee Payer"
              ) : (
                <AddressWithContext
                  pubkey={message.accountKeys[0]}
                  validator={feePayerValidator}
                />
              )}
            </td>
          </tr>
        </TableCardBody>
      </div>
    </>
  );
}

export default TransactionInspectorPage;