// 20220710221826
// https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json

export const mapStyle={
    "version": 8,
    "name": "Dark Matter without labels",
    "metadata": {
      
    },
    "sources": {
      "carto": {
        "type": "vector",
        "url": "https://tiles.basemaps.cartocdn.com/vector/carto.streets/v1/tiles.json"
      }
    },
    "sprite": "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/sprite",
    "glyphs": "https://tiles.basemaps.cartocdn.com/fonts/{fontstack}/{range}.pbf",
    "layers": [
      {
        "id": "background",
        "type": "background",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "background-color": "#5f6163",
          "background-opacity": 1
        }
      },
      {
        "id": "landcover",
        "type": "fill",
        "source": "carto",
        "source-layer": "landcover",
        "filter": [
          "any",
          [
            "==",
            "class",
            "wood"
          ],
          [
            "==",
            "class",
            "grass"
          ],
          [
            "==",
            "subclass",
            "recreation_ground"
          ]
        ],
        "paint": {
          "fill-color": {
            "stops": [
              [
                8,
                "#0e0e0e"
              ],
              [
                9,
                "#0e0e0e"
              ],
              [
                11,
                "#0e0e0e"
              ],
              [
                13,
                "#0e0e0e"
              ],
              [
                15,
                "#0e0e0e"
              ]
            ]
          },
          "fill-opacity": 1
        }
      },
      {
        "id": "park_national_park",
        "type": "fill",
        "source": "carto",
        "source-layer": "park",
        "minzoom": 9,
        "filter": [
          "all",
          [
            "==",
            "class",
            "national_park"
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": {
            "stops": [
              [
                8,
                "#0e0e0e"
              ],
              [
                9,
                "#0e0e0e"
              ],
              [
                11,
                "#0e0e0e"
              ],
              [
                13,
                "#0e0e0e"
              ],
              [
                15,
                "#0e0e0e"
              ]
            ]
          },
          "fill-opacity": 1,
          "fill-translate-anchor": "map"
        }
      },
      {
        "id": "park_nature_reserve",
        "type": "fill",
        "source": "carto",
        "source-layer": "park",
        "minzoom": 0,
        "filter": [
          "all",
          [
            "==",
            "class",
            "nature_reserve"
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": {
            "stops": [
              [
                8,
                "#0e0e0e"
              ],
              [
                9,
                "#0e0e0e"
              ],
              [
                11,
                "#0e0e0e"
              ],
              [
                13,
                "#0e0e0e"
              ],
              [
                15,
                "#0e0e0e"
              ]
            ]
          },
          "fill-antialias": true,
          "fill-opacity": {
            "stops": [
              [
                6,
                0.7
              ],
              [
                9,
                0.9
              ]
            ]
          }
        }
      },
      {
        "id": "landuse_residential",
        "type": "fill",
        "source": "carto",
        "source-layer": "landuse",
        "minzoom": 6,
        "filter": [
          "any",
          [
            "==",
            "class",
            "residential"
          ]
        ],
        "paint": {
          "fill-color": {
            "stops": [
              [
                5,
                "rgba(0, 0, 0, 0.5)"
              ],
              [
                8,
                "rgba(0, 0, 0, 0.45)"
              ],
              [
                9,
                "rgba(0, 0, 0, 0.4)"
              ],
              [
                11,
                "rgba(0, 0, 0, 0.35)"
              ],
              [
                13,
                "rgba(0, 0, 0, 0.3)"
              ],
              [
                15,
                "rgba(0, 0, 0, 0.25)"
              ],
              [
                16,
                "rgba(0, 0, 0, 0.15)"
              ]
            ]
          },
          "fill-opacity": {
            "stops": [
              [
                6,
                0.6
              ],
              [
                9,
                1
              ]
            ]
          }
        }
      },
      {
        "id": "landuse",
        "type": "fill",
        "source": "carto",
        "source-layer": "landuse",
        "filter": [
          "any",
          [
            "==",
            "class",
            "cemetery"
          ],
          [
            "==",
            "class",
            "stadium"
          ]
        ],
        "paint": {
          "fill-color": {
            "stops": [
              [
                8,
                "#0e0e0e"
              ],
              [
                9,
                "#0e0e0e"
              ],
              [
                11,
                "#0e0e0e"
              ],
              [
                13,
                "#0e0e0e"
              ],
              [
                15,
                "#0e0e0e"
              ]
            ]
          }
        }
      },
      {
        "id": "waterway",
        "type": "line",
        "source": "carto",
        "source-layer": "waterway",
        "paint": {
          "line-color": "#151515",
          "line-width": {
            "stops": [
              [
                8,
                0.5
              ],
              [
                9,
                1
              ],
              [
                15,
                2
              ],
              [
                16,
                3
              ]
            ]
          }
        }
      },
      {
        "id": "boundary_county",
        "type": "line",
        "source": "carto",
        "source-layer": "boundary",
        "minzoom": 9,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "admin_level",
            6
          ],
          [
            "==",
            "maritime",
            0
          ]
        ],
        "paint": {
          "line-color": {
            "stops": [
              [
                4,
                "#222"
              ],
              [
                5,
                "#222"
              ],
              [
                6,
                "#292929"
              ]
            ]
          },
          "line-width": {
            "stops": [
              [
                4,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-dasharray": {
            "stops": [
              [
                6,
                [
                  1
                ]
              ],
              [
                7,
                [
                  2,
                  2
                ]
              ]
            ]
          }
        }
      },
      {
        "id": "boundary_state",
        "type": "line",
        "source": "carto",
        "source-layer": "boundary",
        "minzoom": 4,
        "filter": [
          "all",
          [
            "==",
            "admin_level",
            4
          ],
          [
            "==",
            "maritime",
            0
          ]
        ],
        "paint": {
          "line-color": {
            "stops": [
              [
                4,
                "#222"
              ],
              [
                5,
                "#222"
              ],
              [
                6,
                "#292929"
              ]
            ]
          },
          "line-width": {
            "stops": [
              [
                4,
                0.5
              ],
              [
                7,
                1
              ],
              [
                8,
                1
              ],
              [
                9,
                1.2
              ]
            ]
          },
          "line-dasharray": {
            "stops": [
              [
                6,
                [
                  1
                ]
              ],
              [
                7,
                [
                  2,
                  2
                ]
              ]
            ]
          }
        }
      },
      {
        "id": "water",
        "type": "fill",
        "source": "carto",
        "source-layer": "water",
        "minzoom": 0,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "$type",
            "Polygon"
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#292e2f",
          "fill-antialias": true,
          "fill-translate-anchor": "map",
          "fill-opacity": 1
        }
      },
      {
        "id": "water_shadow",
        "type": "fill",
        "source": "carto",
        "source-layer": "water",
        "minzoom": 0,
        "filter": [
          "all",
          [
            "==",
            "$type",
            "Polygon"
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "transparent",
          "fill-antialias": true,
          "fill-translate-anchor": "map",
          "fill-opacity": 1,
          "fill-translate": {
            "stops": [
              [
                0,
                [
                  0,
                  2
                ]
              ],
              [
                6,
                [
                  0,
                  1
                ]
              ],
              [
                14,
                [
                  0,
                  1
                ]
              ],
              [
                17,
                [
                  0,
                  2
                ]
              ]
            ]
          }
        }
      },
      {
        "id": "aeroway-runway",
        "type": "line",
        "source": "carto",
        "source-layer": "aeroway",
        "minzoom": 12,
        "filter": [
          "all",
          [
            "==",
            "class",
            "runway"
          ]
        ],
        "layout": {
          "line-cap": "square"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                1
              ],
              [
                13,
                4
              ],
              [
                14,
                6
              ],
              [
                15,
                8
              ],
              [
                16,
                10
              ]
            ]
          },
          "line-color": "#111"
        }
      },
      {
        "id": "aeroway-taxiway",
        "type": "line",
        "source": "carto",
        "source-layer": "aeroway",
        "minzoom": 13,
        "filter": [
          "all",
          [
            "==",
            "class",
            "taxiway"
          ]
        ],
        "paint": {
          "line-color": "#111",
          "line-width": {
            "stops": [
              [
                13,
                0.5
              ],
              [
                14,
                1
              ],
              [
                15,
                2
              ],
              [
                16,
                4
              ]
            ]
          }
        }
      },
      {
        "id": "tunnel_service_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "service"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                1
              ],
              [
                16,
                3
              ],
              [
                17,
                6
              ],
              [
                18,
                8
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#1a1a1a"
        }
      },
      {
        "id": "tunnel_minor_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "minor"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "miter"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                0.5
              ],
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                15,
                4
              ],
              [
                16,
                6
              ],
              [
                17,
                10
              ],
              [
                18,
                14
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#1a1a1a"
        }
      },
      {
        "id": "tunnel_sec_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                0.5
              ],
              [
                12,
                1
              ],
              [
                13,
                2
              ],
              [
                14,
                5
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#1a1a1a"
        }
      },
      {
        "id": "tunnel_pri_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 8,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.8
              ],
              [
                8,
                1
              ],
              [
                11,
                3
              ],
              [
                13,
                4
              ],
              [
                14,
                6
              ],
              [
                15,
                8
              ],
              [
                16,
                10
              ],
              [
                17,
                14
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": "#1a1a1a"
        }
      },
      {
        "id": "tunnel_trunk_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 5,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.8
              ],
              [
                8,
                1
              ],
              [
                11,
                3
              ],
              [
                13,
                4
              ],
              [
                14,
                6
              ],
              [
                15,
                8
              ],
              [
                16,
                10
              ],
              [
                17,
                14
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": "#232323"
        }
      },
      {
        "id": "tunnel_mot_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 5,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.8
              ],
              [
                8,
                1
              ],
              [
                11,
                3
              ],
              [
                12,
                4
              ],
              [
                13,
                5
              ],
              [
                14,
                7
              ],
              [
                15,
                9
              ],
              [
                16,
                11
              ],
              [
                17,
                13
              ],
              [
                18,
                22
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": "#232323"
        }
      },
      {
        "id": "tunnel_path",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "path"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                0.5
              ],
              [
                16,
                1
              ],
              [
                18,
                3
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#262626",
          "line-dasharray": {
            "stops": [
              [
                15,
                [
                  2,
                  2
                ]
              ],
              [
                18,
                [
                  3,
                  3
                ]
              ]
            ]
          }
        }
      },
      {
        "id": "tunnel_service_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "service"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                2
              ],
              [
                16,
                2
              ],
              [
                17,
                4
              ],
              [
                18,
                6
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#161616"
        }
      },
      {
        "id": "tunnel_minor_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "minor"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                3
              ],
              [
                16,
                4
              ],
              [
                17,
                8
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "rgba(22, 22, 22, 1)"
        }
      },
      {
        "id": "tunnel_sec_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                2
              ],
              [
                13,
                2
              ],
              [
                14,
                3
              ],
              [
                15,
                4
              ],
              [
                16,
                6
              ],
              [
                17,
                10
              ],
              [
                18,
                14
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#161616"
        }
      },
      {
        "id": "tunnel_pri_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                1
              ],
              [
                13,
                2
              ],
              [
                14,
                4
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#161616"
        }
      },
      {
        "id": "tunnel_trunk_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                1
              ],
              [
                13,
                2
              ],
              [
                14,
                4
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#161616"
        }
      },
      {
        "id": "tunnel_mot_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 10,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                10,
                1
              ],
              [
                12,
                2
              ],
              [
                13,
                3
              ],
              [
                14,
                5
              ],
              [
                15,
                7
              ],
              [
                16,
                9
              ],
              [
                17,
                11
              ],
              [
                18,
                20
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#161616"
        }
      },
      {
        "id": "tunnel_rail",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 13,
        "filter": [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "visibility": "visible",
          "line-join": "round"
        },
        "paint": {
          "line-color": "#1a1a1a",
          "line-width": {
            "base": 1.3,
            "stops": [
              [
                13,
                0.5
              ],
              [
                14,
                1
              ],
              [
                15,
                1
              ],
              [
                16,
                3
              ],
              [
                21,
                7
              ]
            ]
          },
          "line-opacity": 0.5
        }
      },
      {
        "id": "tunnel_rail_dash",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "filter": [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "==",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "visibility": "visible",
          "line-join": "round"
        },
        "paint": {
          "line-color": "#111",
          "line-width": {
            "base": 1.3,
            "stops": [
              [
                15,
                0.5
              ],
              [
                16,
                1
              ],
              [
                20,
                5
              ]
            ]
          },
          "line-dasharray": {
            "stops": [
              [
                15,
                [
                  5,
                  5
                ]
              ],
              [
                16,
                [
                  6,
                  6
                ]
              ]
            ]
          },
          "line-opacity": 0.5
        }
      },
      {
        "id": "road_service_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "service"
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                1
              ],
              [
                16,
                3
              ],
              [
                17,
                6
              ],
              [
                18,
                8
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#1c1c1c"
        }
      },
      {
        "id": "road_minor_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "minor"
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                0.5
              ],
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                15,
                3
              ],
              [
                16,
                4.3
              ],
              [
                17,
                10
              ],
              [
                18,
                14
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": {
            "stops": [
              [
                13,
                "#161616"
              ],
              [
                15.7,
                "#161616"
              ],
              [
                16,
                "#1c1c1c"
              ]
            ]
          }
        }
      },
      {
        "id": "road_pri_case_ramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "==",
            "ramp",
            1
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                12,
                2
              ],
              [
                13,
                3
              ],
              [
                14,
                4
              ],
              [
                15,
                5
              ],
              [
                16,
                8
              ],
              [
                17,
                10
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": "#232323"
        }
      },
      {
        "id": "road_trunk_case_ramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "==",
            "ramp",
            1
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                12,
                2
              ],
              [
                13,
                3
              ],
              [
                14,
                4
              ],
              [
                15,
                5
              ],
              [
                16,
                8
              ],
              [
                17,
                10
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": {
            "stops": [
              [
                12,
                "#1a1a1a"
              ],
              [
                14,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "road_mot_case_ramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "==",
            "ramp",
            1
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                12,
                2
              ],
              [
                13,
                3
              ],
              [
                14,
                4
              ],
              [
                15,
                5
              ],
              [
                16,
                8
              ],
              [
                17,
                10
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": {
            "stops": [
              [
                12,
                "#1a1a1a"
              ],
              [
                14,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "road_sec_case_noramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                0.5
              ],
              [
                12,
                1.5
              ],
              [
                13,
                3
              ],
              [
                14,
                5
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": {
            "stops": [
              [
                11,
                "#1a1a1a"
              ],
              [
                12.99,
                "#1a1a1a"
              ],
              [
                13,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "road_pri_case_noramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 7,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.8
              ],
              [
                8,
                1
              ],
              [
                11,
                3
              ],
              [
                13,
                4
              ],
              [
                14,
                6
              ],
              [
                15,
                8
              ],
              [
                16,
                10
              ],
              [
                17,
                14
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": {
            "stops": [
              [
                7,
                "#1a1a1a"
              ],
              [
                12,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "road_trunk_case_noramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 5,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.8
              ],
              [
                8,
                1
              ],
              [
                11,
                3
              ],
              [
                13,
                4
              ],
              [
                14,
                6
              ],
              [
                15,
                8
              ],
              [
                16,
                10
              ],
              [
                17,
                14
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": {
            "stops": [
              [
                5,
                "#1a1a1a"
              ],
              [
                12,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "road_mot_case_noramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 5,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.7
              ],
              [
                8,
                0.8
              ],
              [
                11,
                3
              ],
              [
                12,
                4
              ],
              [
                13,
                5
              ],
              [
                14,
                7
              ],
              [
                15,
                9
              ],
              [
                16,
                11
              ],
              [
                17,
                13
              ],
              [
                18,
                22
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": {
            "stops": [
              [
                5,
                "#1a1a1a"
              ],
              [
                12,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "road_path",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "in",
            "class",
            "path",
            "track"
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                0.5
              ],
              [
                16,
                1
              ],
              [
                18,
                3
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#262626",
          "line-dasharray": {
            "stops": [
              [
                15,
                [
                  2,
                  2
                ]
              ],
              [
                18,
                [
                  3,
                  3
                ]
              ]
            ]
          }
        }
      },
      {
        "id": "road_service_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "service"
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                2
              ],
              [
                16,
                2
              ],
              [
                17,
                4
              ],
              [
                18,
                6
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "road_minor_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "minor"
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                3
              ],
              [
                16,
                4
              ],
              [
                17,
                8
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "road_pri_fill_ramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "==",
            "ramp",
            1
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                1.5
              ],
              [
                14,
                2
              ],
              [
                15,
                3
              ],
              [
                16,
                6
              ],
              [
                17,
                8
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "road_trunk_fill_ramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "==",
            "ramp",
            1
          ]
        ],
        "layout": {
          "line-cap": "square",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                1.5
              ],
              [
                14,
                2
              ],
              [
                15,
                3
              ],
              [
                16,
                6
              ],
              [
                17,
                8
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "road_mot_fill_ramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "==",
            "ramp",
            1
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                1.5
              ],
              [
                14,
                2
              ],
              [
                15,
                3
              ],
              [
                16,
                6
              ],
              [
                17,
                8
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "road_sec_fill_noramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                2
              ],
              [
                13,
                2
              ],
              [
                14,
                3
              ],
              [
                15,
                4
              ],
              [
                16,
                6
              ],
              [
                17,
                10
              ],
              [
                18,
                14
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "road_pri_fill_noramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 10,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                10,
                0.3
              ],
              [
                13,
                2
              ],
              [
                14,
                4
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "road_trunk_fill_noramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 10,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                1
              ],
              [
                13,
                2
              ],
              [
                14,
                4
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "road_mot_fill_noramp",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 10,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "!has",
            "brunnel"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                10,
                1
              ],
              [
                12,
                2
              ],
              [
                13,
                3
              ],
              [
                14,
                5
              ],
              [
                15,
                7
              ],
              [
                16,
                9
              ],
              [
                17,
                11
              ],
              [
                18,
                20
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "rail",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 13,
        "filter": [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "!=",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "visibility": "visible",
          "line-join": "round"
        },
        "paint": {
          "line-color": "#1a1a1a",
          "line-width": {
            "base": 1.3,
            "stops": [
              [
                13,
                0.5
              ],
              [
                14,
                1
              ],
              [
                15,
                1
              ],
              [
                16,
                3
              ],
              [
                21,
                7
              ]
            ]
          }
        }
      },
      {
        "id": "rail_dash",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "filter": [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "!=",
            "brunnel",
            "tunnel"
          ]
        ],
        "layout": {
          "visibility": "visible",
          "line-join": "round"
        },
        "paint": {
          "line-color": "#111",
          "line-width": {
            "base": 1.3,
            "stops": [
              [
                15,
                0.5
              ],
              [
                16,
                1
              ],
              [
                20,
                5
              ]
            ]
          },
          "line-dasharray": {
            "stops": [
              [
                15,
                [
                  5,
                  5
                ]
              ],
              [
                16,
                [
                  6,
                  6
                ]
              ]
            ]
          }
        }
      },
      {
        "id": "bridge_service_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "service"
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                1
              ],
              [
                16,
                3
              ],
              [
                17,
                6
              ],
              [
                18,
                8
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#1c1c1c"
        }
      },
      {
        "id": "bridge_minor_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "minor"
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "miter"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                0.5
              ],
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                15,
                3
              ],
              [
                16,
                4.3
              ],
              [
                17,
                10
              ],
              [
                18,
                14
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": {
            "stops": [
              [
                13,
                "#161616"
              ],
              [
                15.7,
                "#161616"
              ],
              [
                16,
                "#1c1c1c"
              ]
            ]
          }
        }
      },
      {
        "id": "bridge_sec_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "miter"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                0.5
              ],
              [
                12,
                1.5
              ],
              [
                13,
                3
              ],
              [
                14,
                5
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": {
            "stops": [
              [
                11,
                "#1a1a1a"
              ],
              [
                12.99,
                "#1a1a1a"
              ],
              [
                13,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "bridge_pri_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 8,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.8
              ],
              [
                8,
                1
              ],
              [
                11,
                3
              ],
              [
                13,
                4
              ],
              [
                14,
                6
              ],
              [
                15,
                8
              ],
              [
                16,
                10
              ],
              [
                17,
                14
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": {
            "stops": [
              [
                8,
                "#1a1a1a"
              ],
              [
                12,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "bridge_trunk_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 5,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.8
              ],
              [
                8,
                1
              ],
              [
                11,
                3
              ],
              [
                13,
                4
              ],
              [
                14,
                6
              ],
              [
                15,
                8
              ],
              [
                16,
                10
              ],
              [
                17,
                14
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": {
            "stops": [
              [
                5,
                "#1a1a1a"
              ],
              [
                12,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "bridge_mot_case",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 5,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                0.8
              ],
              [
                8,
                1
              ],
              [
                11,
                3
              ],
              [
                12,
                4
              ],
              [
                13,
                5
              ],
              [
                14,
                7
              ],
              [
                15,
                9
              ],
              [
                16,
                11
              ],
              [
                17,
                13
              ],
              [
                18,
                22
              ]
            ]
          },
          "line-opacity": {
            "stops": [
              [
                6,
                0.5
              ],
              [
                7,
                1
              ]
            ]
          },
          "line-color": {
            "stops": [
              [
                5,
                "#1a1a1a"
              ],
              [
                10,
                "#232323"
              ]
            ]
          }
        }
      },
      {
        "id": "bridge_path",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "path"
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                0.5
              ],
              [
                16,
                1
              ],
              [
                18,
                3
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#262626",
          "line-dasharray": {
            "stops": [
              [
                15,
                [
                  2,
                  2
                ]
              ],
              [
                18,
                [
                  3,
                  3
                ]
              ]
            ]
          }
        }
      },
      {
        "id": "bridge_service_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "service"
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                2
              ],
              [
                16,
                2
              ],
              [
                17,
                4
              ],
              [
                18,
                6
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "bridge_minor_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "minor"
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                15,
                3
              ],
              [
                16,
                4
              ],
              [
                17,
                8
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "bridge_sec_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                2
              ],
              [
                13,
                2
              ],
              [
                14,
                3
              ],
              [
                15,
                4
              ],
              [
                16,
                6
              ],
              [
                17,
                10
              ],
              [
                18,
                14
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "bridge_pri_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                1
              ],
              [
                13,
                2
              ],
              [
                14,
                4
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "bridge_trunk_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                11,
                1
              ],
              [
                13,
                2
              ],
              [
                14,
                4
              ],
              [
                15,
                6
              ],
              [
                16,
                8
              ],
              [
                17,
                12
              ],
              [
                18,
                16
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "bridge_mot_fill",
        "type": "line",
        "source": "carto",
        "source-layer": "transportation",
        "minzoom": 10,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "!=",
            "ramp",
            1
          ],
          [
            "==",
            "brunnel",
            "bridge"
          ]
        ],
        "layout": {
          "line-cap": "butt",
          "line-join": "round"
        },
        "paint": {
          "line-width": {
            "stops": [
              [
                10,
                1
              ],
              [
                12,
                2
              ],
              [
                13,
                3
              ],
              [
                14,
                5
              ],
              [
                15,
                7
              ],
              [
                16,
                9
              ],
              [
                17,
                11
              ],
              [
                18,
                20
              ]
            ]
          },
          "line-opacity": 1,
          "line-color": "#0b0b0b"
        }
      },
      {
        "id": "building",
        "type": "fill",
        "source": "carto",
        "source-layer": "building",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": {
            "base": 1,
            "stops": [
              [
                15.5,
                "transparent"
              ],
              [
                16,
                "transparent"
              ]
            ]
          },
          "fill-antialias": true
        }
      },
      {
        "id": "building-top",
        "type": "fill",
        "source": "carto",
        "source-layer": "building",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-translate": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  0,
                  0
                ]
              ],
              [
                16,
                [
                  -2,
                  -2
                ]
              ]
            ]
          },
          "fill-outline-color": "#0e0e0e",
          "fill-color": "#000",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                13,
                0
              ],
              [
                16,
                1
              ]
            ]
          }
        }
      },
      {
        "id": "boundary_country_outline",
        "type": "line",
        "source": "carto",
        "source-layer": "boundary",
        "minzoom": 6,
        "maxzoom": 24,
        "filter": [
          "all",
          [
            "==",
            "admin_level",
            2
          ],
          [
            "==",
            "maritime",
            0
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-color": "#0e0e0e",
          "line-opacity": 0.5,
          "line-width": 8,
          "line-offset": 0
        }
      },
      {
        "id": "boundary_country_inner",
        "type": "line",
        "source": "carto",
        "source-layer": "boundary",
        "minzoom": 0,
        "filter": [
          "all",
          [
            "==",
            "admin_level",
            2
          ],
          [
            "==",
            "maritime",
            0
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round"
        },
        "paint": {
          "line-color": {
            "stops": [
              [
                4,
                "#222"
              ],
              [
                5,
                "#292929"
              ],
              [
                6,
                "#292929"
              ]
            ]
          },
          "line-opacity": 1,
          "line-width": {
            "stops": [
              [
                3,
                1
              ],
              [
                6,
                1.5
              ]
            ]
          },
          "line-offset": 0
        }
      }
    ],
    "id": "voyager",
    "owner": "Carto"
  }