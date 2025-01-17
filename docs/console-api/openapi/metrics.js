module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "q123cebmjcdll"
  },
  "info": {
    "title": "console/v1",
    "version": "1.0",
    "description": "Metrics Endpoint"
  },
  "servers": [
    {
      "url": "https://statsigapi.net/console/v1"
    }
  ],
  "paths": {
    "/metrics": {
      "post": {
        "summary": "Create Metric",
        "operationId": "post-metrics",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "object",
                      "x-stoplight": {
                        "id": "qeiqgpakou71n"
                      },
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "2mjdc9d8l6e6j"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "d5a90zmvy3woy"
                          }
                        },
                        "description": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "ozwemsbc1cehp"
                          }
                        },
                        "isHidden": {
                          "type": "boolean",
                          "x-stoplight": {
                            "id": "rjvjj1okzm2wx"
                          }
                        },
                        "isReadOnly": {
                          "type": "boolean",
                          "x-stoplight": {
                            "id": "fi1igkx2q6hcz"
                          }
                        },
                        "warehouseNative": {
                          "$ref": "#/components/schemas/WarehouseNativeMetric"
                        },
                        "team": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "666nzllt5tqun"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Metric created successfully.",
                      "data": {
                        "name": "test_sum_metric",
                        "type": "sum",
                        "description": "Sum user count",
                        "isHidden": false
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        },
        "x-stoplight": {
          "id": "vpucl6wt3kj45"
        },
        "description": "Create Cloud Metrics or Warehouse Native Metrics\n\nFor creating Warehouse Native Metrics: See [documentation](https://docs.statsig.com/statsig-warehouse-native/guides/metrics). Configuration of warehouse native metric goes to warehouseNative field. Fields NOT under warehouseNative, only name, tags, isPermanent, and description ",
        "tags": [
          "Metrics"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "name",
                  "type"
                ],
                "properties": {
                  "name": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "v6wplqgc7ohzw"
                    },
                    "description": "The name of the new metric"
                  },
                  "isReadOnly": {
                    "type": "boolean",
                    "x-stoplight": {
                      "id": "az4xm5oypoq6e"
                    },
                    "description": "Set the metric definition as editable only from Console API"
                  },
                  "type": {
                    "x-stoplight": {
                      "id": "macnydefvpx3r"
                    },
                    "type": "string",
                    "enum": [
                      "sum",
                      "ratio",
                      "mean",
                      "event_count_sum",
                      "composite",
                      "composite_sum",
                      "undefined",
                      "funnel",
                      "user_warehouse"
                    ],
                    "description": "Type of the metric"
                  },
                  "unitTypes": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "b1koshiknnl34"
                    },
                    "description": "Unit of the metirc: stableID, userID, and other custom ids",
                    "items": {
                      "x-stoplight": {
                        "id": "ufchwavzxc109"
                      },
                      "type": "string"
                    }
                  },
                  "directionality": {
                    "x-stoplight": {
                      "id": "9e2xoz36fby1f"
                    },
                    "type": "string",
                    "enum": [
                      "increase",
                      "decrease"
                    ],
                    "description": "Allowed increase | decrease. Metric directionality will be used in pulse to signify desired or undesired changes."
                  },
                  "metricEvents": {
                    "x-stoplight": {
                      "id": "1sb55esyu69uf"
                    },
                    "type": "array",
                    "description": "Event(s) used to compute the metric",
                    "items": {
                      "$ref": "#/components/schemas/MetricEvent"
                    }
                  },
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "6iyt42od6wcn6"
                    },
                    "description": "Description of the new metric"
                  },
                  "tags": {
                    "type": [
                      "string",
                      "array"
                    ],
                    "x-stoplight": {
                      "id": "kklvni6rifhih"
                    },
                    "items": {
                      "x-stoplight": {
                        "id": "9sthmib918cdt"
                      },
                      "type": "string"
                    }
                  },
                  "isPermanent": {
                    "type": "boolean",
                    "x-stoplight": {
                      "id": "dx0z0wwu1iqkz"
                    }
                  },
                  "metricComponentMetrics": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "j9o3tga71jpbu"
                    },
                    "description": "List of input metrics used to calculate the new metric\nFor composite_sum and composite type of metric. ",
                    "items": {
                      "x-stoplight": {
                        "id": "15war9ld2wy6j"
                      },
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "3bqzox50pyj1c"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "vienzyq2qo8u8"
                          }
                        }
                      }
                    }
                  },
                  "rollup": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "gfo1eslrp7eth"
                    },
                    "description": "Time window for metric.\nSpecify \"custom\", if you want to provide customized time window. Default to be same as experiment time window"
                  },
                  "customRollUpStart": {
                    "type": "number",
                    "x-stoplight": {
                      "id": "h57sfwreqbkfz"
                    },
                    "description": "Custom time window start date (Days since exposure)\n"
                  },
                  "customRollUpEnd": {
                    "type": "number",
                    "x-stoplight": {
                      "id": "pj87b1u48tlol"
                    },
                    "description": "Custom time window end date(Days since exposure)"
                  },
                  "funnelEventList": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "6gaqo8te62muf"
                    },
                    "description": "For funnel metric type. \nNames of events used to create metric",
                    "items": {
                      "x-stoplight": {
                        "id": "8i5r8fud4va8z"
                      },
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "m8jk7qsr2vajl"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "buaizmo8n25aj"
                          }
                        }
                      }
                    }
                  },
                  "funnelCountDistinct": {
                    "x-stoplight": {
                      "id": "9hrzfmw1wl6oj"
                    },
                    "description": "For funnel metric type. \nIf you care about counting each time a user goes through a given sequence of events, choose 'Events'. If you care about counting the number of distinct users that go through a given sequence of events, choose 'Users'.",
                    "type": "string",
                    "enum": [
                      "events",
                      "users"
                    ]
                  },
                  "warehouseNative": {
                    "$ref": "#/components/schemas/WarehouseNativeMetric"
                  },
                  "team": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "d5btfmgb93ri7"
                    },
                    "description": "Enterprise only"
                  }
                }
              },
              "examples": {
                "Incomplete metric creation": {
                  "value": {
                    "name": "test_metrics",
                    "type": "undefined",
                    "description": "Metrics with minimum information, more details can be setup later"
                  }
                },
                "Sum Event Metric": {
                  "value": {
                    "name": "test_sum_metric",
                    "type": "sum",
                    "unitTypes": [
                      "userID"
                    ],
                    "metricEvents": [
                      {
                        "name": "test_event",
                        "type": "value",
                        "criteria": {}
                      }
                    ],
                    "description": "Sum user count",
                    "rollup": "custom",
                    "rollupStartDate": 3,
                    "rollupEndDate": 10
                  }
                },
                "Funnel Metric": {
                  "value": {
                    "name": "test_funnel_metric",
                    "type": "funnel",
                    "unitTypes": [
                      "useID"
                    ],
                    "description": "For testing funnel metric",
                    "funnelCountDistinct": "events"
                  }
                },
                "Warehouse Native Count": {
                  "value": {
                    "name": "whn_count_metric_v1",
                    "description": "Creating warehouse native metric and aggregation type of this metric is count",
                    "tags": [
                      "non_production"
                    ],
                    "type": "user_warehouse",
                    "warehouseNative": {
                      "aggregation": "count",
                      "metricSourceName": "Log Events"
                    }
                  }
                },
                "Warehouse Native Funnel": {
                  "value": {
                    "name": "whn_funnel_metric",
                    "description": "Creating warehouse native metric and aggregation type of this metric is count",
                    "tags": [
                      "non_production"
                    ],
                    "type": "user_warehouse",
                    "warehouseNative": {
                      "aggregation": "funnel",
                      "funnelEvents": [
                        {
                          "metricSourceName": "Log Events",
                          "name": "page_view",
                          "criteria": [
                            {
                              "type": "metadata",
                              "key": "page",
                              "condition": "in",
                              "values": [
                                "product_page"
                              ]
                            }
                          ]
                        },
                        {
                          "metricSourceName": "Log Events",
                          "name": "add_to_cart",
                          "criteria": [
                            {
                              "type": "metadata",
                              "key": "page",
                              "condition": "in",
                              "values": [
                                "product_page"
                              ]
                            }
                          ]
                        },
                        {
                          "metricSourceName": "Log Events",
                          "name": "cart_view",
                          "criteria": [
                            {
                              "type": "metadata",
                              "key": "page",
                              "condition": "in",
                              "values": [
                                "cart"
                              ]
                            }
                          ]
                        }
                      ],
                      "funnelCalculationWindow": 7,
                      "funnelCountDistinct": "users",
                      "funnelStartCriteria": "start_event"
                    }
                  }
                },
                "Warehouse Native Sum": {
                  "value": {
                    "name": "whn_sum_metric",
                    "description": "Creating warehouse native metric and aggregation type of this metric is sum",
                    "tags": [
                      "non_production"
                    ],
                    "type": "user_warehouse",
                    "warehouseNative": {
                      "metricSourceName": "Checkout Events",
                      "aggregation": "sum",
                      "valueColumn": "price_usd",
                      "criteria": [
                        {
                          "type": "metadata",
                          "key": "event",
                          "condition": "in",
                          "values": [
                            "purchase"
                          ]
                        }
                      ]
                    }
                  }
                },
                "Warehouse Native Ratio": {
                  "value": {
                    "name": "whn_ratio_metric_v1",
                    "description": "Creating warehouse native metric and aggregation type of this metric is ratio",
                    "tags": [
                      "non_production"
                    ],
                    "type": "user_warehouse",
                    "warehouseNative": {
                      "metricSourceName": "Support Events",
                      "aggregation": "ratio",
                      "denominatorMetricSourceName": "Support Events",
                      "denominatorMetricAggregation": "count"
                    }
                  }
                }
              }
            },
            "application/xml": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            },
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          },
          "description": ""
        }
      },
      "get": {
        "summary": "Read Single Metric Value",
        "operationId": "get-users-userId",
        "description": "Get metric data on a given date",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Metric read successfully.",
                      "data": [
                        {
                          "value": 20995,
                          "unit_type": "companyID"
                        },
                        {
                          "value": 3048,
                          "unit_type": "orgID"
                        },
                        {
                          "value": 23502,
                          "unit_type": "overall"
                        },
                        {
                          "value": 23502,
                          "unit_type": "stableID"
                        },
                        {
                          "value": 21094,
                          "unit_type": "userID"
                        }
                      ]
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "array",
                      "description": "Data corresponding each unit_type of the queried metric",
                      "items": {
                        "$ref": "#/components/schemas/MetricValue"
                      }
                    }
                  },
                  "required": [
                    "message",
                    "data"
                  ]
                },
                "examples": {
                  "basic metric": {
                    "value": {
                      "message": "Metric read successfully.",
                      "data": [
                        {
                          "value": 20995,
                          "unit_type": "companyID"
                        },
                        {
                          "value": 3048,
                          "unit_type": "orgID"
                        },
                        {
                          "value": 23502,
                          "unit_type": "overall"
                        },
                        {
                          "value": 23502,
                          "unit_type": "stableID"
                        },
                        {
                          "value": 21094,
                          "unit_type": "userID"
                        }
                      ]
                    }
                  },
                  "imported ratio metric": {
                    "value": {
                      "message": "Metric read successfully.",
                      "data": [
                        {
                          "value": 105,
                          "unit_type": "userID",
                          "input_rows": 5,
                          "numerator": 525,
                          "denominator": 5
                        }
                      ]
                    }
                  },
                  "ratio metric": {
                    "value": {
                      "message": "Metric read successfully.",
                      "data": [
                        {
                          "value": 1,
                          "unit_type": "userID",
                          "numerator": 5,
                          "denominator": 5
                        }
                      ]
                    }
                  },
                  "Lineage": {
                    "value": {
                      "name": "Experiment interactions funnel metric",
                      "type": "funnel",
                      "id": "Experiment interactions metric::funnel",
                      "description": "",
                      "isHidden": false,
                      "tags": [],
                      "lineage": {
                        "events": [],
                        "metrics": [
                          "create_experiment::event_count",
                          "start_experiment::event_count",
                          "make_experiment_decision::event_count",
                          "abandon_experiment::event_count",
                          "delete_experiment::event_count"
                        ]
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "status": 400,
                      "message": "No metric found for the given id, recieved: button_click::event_counta"
                    }
                  },
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "No metric found": {
                    "value": {
                      "status": 400,
                      "message": "No metric found for the given id, recieved: not_a::real_metric"
                    }
                  },
                  "No data found": {
                    "value": {
                      "status": 400,
                      "message": "No metric data found for the given date, recieved: 2022-11-25"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "schema": {
              "type": "string",
              "example": "2022-10-31"
            },
            "in": "query",
            "name": "date",
            "description": "date to query (YYYY-MM-DD)",
            "required": true
          },
          {
            "schema": {
              "type": "string",
              "example": "d1_retention_rate::user"
            },
            "in": "query",
            "name": "id",
            "description": "metric id to query (metric_name::metric_type) found in /metrics/list response",
            "required": true
          }
        ],
        "tags": [
          "Metrics"
        ],
        "x-stoplight": {
          "id": "ogudtjrt0v2ck"
        }
      }
    },
    "/metrics/{metric_id}": {
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "d1_retention_rate::user"
          },
          "name": "metric_id",
          "in": "path",
          "required": true,
          "description": "metric id to query (metric_name::metric_type) found in /metrics/list response"
        }
      ],
      "post": {
        "summary": "Update a Metric",
        "operationId": "post-metrics",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "#/components/schemas/MetricDefinition"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Metric updated successfully.",
                      "data": {
                        "name": "daily_stickiness",
                        "type": "user",
                        "description": "new description",
                        "isHidden": false
                      }
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "status": 404,
                      "message": "Metric not found"
                    }
                  },
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "Not found": {
                    "value": {
                      "status": 404,
                      "message": "Metric not found"
                    }
                  }
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "description": {
                    "type": "string",
                    "description": "Update metric's description"
                  },
                  "tags": {
                    "type": "array",
                    "description": "Updated list of tags. Tags must exist first",
                    "items": {
                      "type": "string"
                    }
                  },
                  "isVerified": {
                    "type": "boolean",
                    "description": "This is used to display a \"verified\" icon next to this metric throughout the Statsig Console."
                  },
                  "warehouseNative": {
                    "$ref": "#/components/schemas/WarehouseNativeMetric"
                  },
                  "unitTypes": {
                    "type": "array",
                    "description": "Update unit types for the metric",
                    "items": {
                      "type": "string"
                    }
                  },
                  "team": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "8o7lpt1mdlvf2"
                    }
                  }
                }
              },
              "examples": {
                "Example 1": {
                  "value": {
                    "description": "Updated description"
                  }
                }
              }
            }
          }
        },
        "description": "Update Metric",
        "tags": [
          "Metrics"
        ]
      },
      "delete": {
        "summary": "",
        "operationId": "delete-metrics-metric_id",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "ulptneel8ms0f"
                      }
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "x-stoplight": {
          "id": "rbkrn0v51eckz"
        },
        "description": "Delete Metric",
        "tags": [
          "Metrics"
        ]
      },
      "get": {
        "summary": "Get definition of a metric",
        "tags": [
          "Metrics"
        ],
        "responses": {
          "2XX": {
            "description": "Metric read successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Metric read successfully.",
                      "data": {
                        "name": "Purchase Revenue",
                        "directionality": "increase",
                        "type": "user_warehouse",
                        "description": "",
                        "isPermanent": false,
                        "warehouseNative": {
                          "aggregation": "sum",
                          "metricSourceName": "Checkout Events",
                          "criteria": [
                            {
                              "type": "metadata",
                              "column": "event",
                              "condition": "in",
                              "values": [
                                "purchase"
                              ]
                            }
                          ],
                          "denominatorCriteria": [],
                          "metricDimensionColumns": [
                            "product_category",
                            "page"
                          ],
                          "valueColumn": "price_usd"
                        }
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "#/components/schemas/MetricDefinition"
                    }
                  }
                },
                "examples": {
                  "Read Success": {
                    "value": {
                      "message": "Metric read successfully.",
                      "data": {
                        "name": "Purchase Revenue",
                        "directionality": "increase",
                        "type": "user_warehouse",
                        "description": "",
                        "isPermanent": false,
                        "tags": [
                          "★ Core"
                        ],
                        "warehouseNative": {
                          "aggregation": "sum",
                          "metricSourceName": "Checkout Events",
                          "criteria": [
                            {
                              "type": "metadata",
                              "column": "event",
                              "condition": "in",
                              "values": [
                                "purchase"
                              ]
                            }
                          ],
                          "denominatorCriteria": [],
                          "metricDimensionColumns": [
                            "product_category",
                            "page"
                          ],
                          "valueColumn": "price_usd",
                          "cupedAttributionWindow": 7
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-metrics-metric_id",
        "x-stoplight": {
          "id": "i1c6sr9on23ks"
        },
        "description": "Get Metric Definition: Returned schema should be consistent with schema required for metric creation. (Tags is still WIP)"
      }
    },
    "/metrics/list": {
      "get": {
        "summary": "List All Metrics",
        "operationId": "get-user",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "User listed successfully.",
                      "data": [
                        {
                          "email": "jacob@statsig.com",
                          "firstName": "jacob",
                          "lastName": "O'Quinn",
                          "role": "admin"
                        },
                        {
                          "email": "joe@statsig.com",
                          "firstName": "Joe",
                          "lastName": "Zeng",
                          "role": "admin"
                        }
                      ]
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "array",
                      "description": "Array of metrics in the project",
                      "items": {
                        "$ref": "#/components/schemas/MetricListItem"
                      }
                    },
                    "pagination": {
                      "$ref": "../models/pagination.json"
                    }
                  },
                  "required": [
                    "message",
                    "data"
                  ]
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Metrics listed successfully.",
                      "data": [
                        {
                          "name": "metric_name",
                          "type": "composite",
                          "id": "metric_name::composite",
                          "tags": [
                            "★ Core"
                          ]
                        },
                        {
                          "name": "d1_retention_rate",
                          "type": "user",
                          "id": "d1_retention_rate::user",
                          "description": "this metric has a description and isHidden field",
                          "isHidden": false,
                          "tags": []
                        }
                      ]
                    }
                  },
                  "example-2": {
                    "value": {
                      "message": "Metrics listed successfully.",
                      "data": [
                        {
                          "name": "metric_1",
                          "type": "composite",
                          "id": "metric_1::composite"
                        },
                        {
                          "name": "metric_2",
                          "type": "event_count",
                          "id": "metric_2::event_count"
                        }
                      ]
                    }
                  },
                  "Filtered by tag ": {
                    "value": {
                      "message": "Metrics listed successfully.",
                      "data": [
                        {
                          "name": "d1_retention_rate",
                          "type": "user",
                          "id": "d1_retention_rate::user",
                          "description": "description",
                          "isHidden": false,
                          "tags": [
                            "queried_tag"
                          ]
                        },
                        {
                          "name": "l14",
                          "type": "user",
                          "id": "l14::user",
                          "description": "a description",
                          "isHidden": false,
                          "tags": [
                            "queried_tag",
                            "other_tag"
                          ]
                        },
                        {
                          "name": "mau@d56_retention_rate",
                          "type": "user",
                          "id": "mau@d56_retention_rate::user",
                          "description": "",
                          "isHidden": false,
                          "tags": [
                            "queried_tag",
                            "another_tag"
                          ]
                        }
                      ]
                    }
                  },
                  "Pagination Example": {
                    "value": {
                      "message": "Metrics listed successfully.",
                      "data": [
                        {
                          "name": "my_metric",
                          "type": "ratio",
                          "id": "my_metric::ratio",
                          "description": "",
                          "isHidden": false,
                          "creatorName": "jacob O'Quinn",
                          "creatorEmail": "jacob@statsig.com",
                          "tags": [],
                          "lineage": {
                            "events": [
                              "gql_query",
                              "custom_event"
                            ],
                            "metrics": []
                          }
                        },
                        {
                          "name": "gql_query",
                          "type": "event_count",
                          "id": "gql_query::event_count",
                          "lineage": {
                            "events": [
                              "gql_query"
                            ],
                            "metrics": []
                          }
                        },
                        {
                          "name": "gql_query",
                          "type": "event_dau",
                          "id": "gql_query::event_dau",
                          "lineage": {
                            "events": [
                              "gql_query"
                            ],
                            "metrics": []
                          }
                        },
                        {
                          "name": "hello",
                          "type": "setup_incomplete",
                          "id": "hello::setup_incomplete",
                          "description": "",
                          "isHidden": false,
                          "creatorName": "jacob O'Quinn",
                          "creatorEmail": "jacob@statsig.com",
                          "tags": [
                            "★ Core"
                          ],
                          "lineage": {
                            "events": [],
                            "metrics": []
                          }
                        },
                        {
                          "name": "joe loves event names",
                          "type": "event_count",
                          "id": "joe loves event names::event_count",
                          "lineage": {
                            "events": [
                              "joe loves event names"
                            ],
                            "metrics": []
                          }
                        }
                      ],
                      "pagination": {
                        "itemsPerPage": 5,
                        "pageNumber": 2,
                        "totalItems": 38,
                        "nextPage": "/console/v1/metrics/list?page=3&limit=5",
                        "previousPage": "/console/v1/metrics/list?page=1&limit=5",
                        "all": "/console/v1/metrics/list"
                      }
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          }
        },
        "description": "List all metrics in the project",
        "tags": [
          "Metrics"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string",
              "enum": [
                "true",
                "false"
              ]
            },
            "in": "query",
            "name": "showHiddenMetrics",
            "description": "Should hidden metrics be returned"
          },
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "tags",
            "description": "Filter metrics based on a given tagID, found on /tags endpoint"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "page",
            "description": "Page to query"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "limit",
            "description": "Elements per page"
          }
        ],
        "x-stoplight": {
          "id": "e4czhou0mk9ut"
        }
      },
      "parameters": []
    },
    "/metrics/values": {
      "get": {
        "summary": "List All Metric Values",
        "operationId": "get-user",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "User listed successfully.",
                      "data": [
                        {
                          "email": "jacob@statsig.com",
                          "firstName": "jacob",
                          "lastName": "O'Quinn",
                          "role": "admin"
                        },
                        {
                          "email": "joe@statsig.com",
                          "firstName": "Joe",
                          "lastName": "Zeng",
                          "role": "admin"
                        }
                      ]
                    }
                  },
                  "required": [
                    "message",
                    "data",
                    "pagination"
                  ],
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "array",
                      "description": "Array of metrics in the project",
                      "items": {
                        "$ref": "#/components/schemas/MetricValue"
                      }
                    },
                    "pagination": {
                      "$ref": "../models/pagination.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Metric values listed successfully.",
                      "data": [
                        {
                          "value": 21377,
                          "unitType": "overall",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Page Loads",
                          "metricType": "event_count_custom"
                        },
                        {
                          "value": 21377,
                          "unitType": "stableID",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Page Loads",
                          "metricType": "event_count_custom"
                        },
                        {
                          "value": 21355,
                          "unitType": "userID",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Page Loads",
                          "metricType": "event_count_custom"
                        },
                        {
                          "value": 646524,
                          "unitType": "stableID",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Average Time Spent on Page",
                          "metricType": "event_user"
                        },
                        {
                          "value": 5676,
                          "unitType": "stableID",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Page Latency",
                          "metricType": "mean"
                        }
                      ],
                      "pagination": {
                        "itemsPerPage": 5,
                        "pageNumber": 1,
                        "totalItems": 5767,
                        "nextPage": "/console/v1/metrics/values?date=2024-02-04&page=2&limit=5",
                        "previousPage": null
                      }
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          }
        },
        "description": "List all metric values in the project",
        "tags": [
          "Metrics"
        ],
        "parameters": [
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "page",
            "description": "Page to query",
            "required": true
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "limit",
            "description": "Elements per page",
            "required": true
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "date",
            "description": "Get values on select date (YYYY-MM-DD)",
            "required": true
          }
        ],
        "x-stoplight": {
          "id": "jct4x0y75f71i"
        }
      },
      "parameters": []
    },
    "/metrics/metric_source": {
      "post": {
        "summary": "Create Metric Source (Warehouse Native)",
        "operationId": "post-metrics-metric_source",
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        },
        "x-stoplight": {
          "id": "z2ujt3x6wa3qw"
        },
        "description": "Create Warehouse Native Metric Source.\n \nSee [guidance](https://docs.statsig.com/statsig-warehouse-native/guides/metric-sources)",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "name",
                  "description",
                  "timestampColumn",
                  "sql",
                  "idTypeMapping"
                ],
                "properties": {
                  "name": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "nbn893ry37uql"
                    }
                  },
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "mq127hfj2b285"
                    }
                  },
                  "tags": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "fgb7312xpqbzd"
                    },
                    "description": "List of tags. Tag must already exists in your project",
                    "items": {
                      "x-stoplight": {
                        "id": "61rgo7jk9qhgf"
                      },
                      "type": "string"
                    }
                  },
                  "timestampColumn": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "y11nc7rnf43pt"
                    },
                    "description": "Timestamp "
                  },
                  "sql": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "9deuqlyvy2ee6"
                    },
                    "description": "SQL query you want to "
                  },
                  "idTypeMapping": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "mjzy1qweouv0k"
                    },
                    "items": {
                      "x-stoplight": {
                        "id": "e7zr5k7cc3dhm"
                      },
                      "type": "object",
                      "properties": {
                        "statsigUnitID": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "lnnmj60odzi6j"
                          },
                          "description": "Type of Unit ID this column represents. Configure a custom ID in project settings. [View Documentation](https://docs.statsig.com/guides/experiment-on-custom-id-types)"
                        },
                        "column": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "cxhq14p63ln00"
                          },
                          "description": "Column name containing this unit type's values"
                        }
                      }
                    }
                  },
                  "timestampAsDay": {
                    "type": "boolean",
                    "x-stoplight": {
                      "id": "yy9e9ngw5du3c"
                    }
                  }
                }
              },
              "examples": {
                "Example 1": {
                  "value": {
                    "name": "test_metric_source",
                    "description": "Test description for metric source",
                    "tags": [
                      "non_production"
                    ],
                    "sql": "SELECT * FROM shoppy-sales.logging.events WHERE event = 'visit'",
                    "idTypeMapping": [
                      {
                        "statsigUnitID": "userID",
                        "column": "userID"
                      }
                    ],
                    "timestampColumn": "ts",
                    "timestampAsDay": true
                  }
                }
              }
            },
            "application/xml": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            },
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            },
            "text/html": {
              "schema": {
                "type": "object",
                "properties": {
                  "": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "sinsnklxlrxvn"
                    }
                  }
                }
              }
            }
          },
          "description": ""
        },
        "tags": [
          "Metric Source (Warehouse Native)"
        ]
      }
    },
    "/metrics/metric_source/{name}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "name",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "Update Metric Source",
        "operationId": "post-metrics-metric_source-name",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "x-stoplight": {
          "id": "dp7ont9iduy88"
        },
        "description": "Update description and tags of the given metric source",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "hkqkzhvzxkepy"
                    }
                  },
                  "tags": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "dkb8e61zlmi0z"
                    },
                    "description": "Updated list of tags. Tag must be created first",
                    "items": {
                      "x-stoplight": {
                        "id": "hi62k1flm6dsc"
                      },
                      "type": "string"
                    }
                  }
                }
              },
              "examples": {
                "Update description only": {
                  "value": {
                    "description": "Updated description"
                  }
                },
                "Update tags only": {
                  "value": {
                    "tags": [
                      "non_production"
                    ]
                  }
                }
              }
            }
          },
          "description": ""
        },
        "tags": [
          "Metric Source (Warehouse Native)"
        ]
      }
    },
    "/metrics/metric_source/list": {
      "get": {
        "summary": "List Metric Sources",
        "tags": [
          "Metric Source (Warehouse Native)"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Metric sources listed successfully.",
                      "data": [
                        {
                          "name": "Log Events",
                          "description": "events",
                          "tags": [
                            "helo"
                          ],
                          "sql": "SELECT * FROM shoppy-sales.logging.events\n",
                          "timestampColumn": "ts",
                          "timestampAsDay": true,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            },
                            {
                              "statsigUnitID": "deviceID",
                              "column": "device_id"
                            },
                            {
                              "statsigUnitID": "companyID",
                              "column": "device_id"
                            }
                          ]
                        },
                        {
                          "name": "Visits",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  *, 1 as abc, 2 as abc2\nFROM shoppy-sales.logging.events\nWHERE event = 'visit'",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            },
                            {
                              "statsigUnitID": "deviceID",
                              "column": "device_id"
                            }
                          ]
                        },
                        {
                          "name": "Navigation Events",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  ts,\n  userID,\n  device_id,\n  page,\n  PRODUCT_CATEGORY\nFROM shoppy-sales.logging.events\nWHERE event = 'page_view'",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            },
                            {
                              "statsigUnitID": "deviceID",
                              "column": "device_id"
                            }
                          ]
                        },
                        {
                          "name": "Checkout Events",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  ts,\n  event,\n  userID,\n  page,\n  product_category,\n  price_usd\nFROM shoppy-sales.logging.events",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        },
                        {
                          "name": "Support Events",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT \n  event, \n  ts, \n  userID, \n  device_id\nFROM shoppy-sales.logging.events",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        },
                        {
                          "name": "123213",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  ts,\n  event,\n  userID,\n  page,\n  product_category,\n  price_usd\nFROM shoppy-sales.logging.events ",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        },
                        {
                          "name": "Visits DeviceID",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  *, 1 as thing\nFROM shoppy-sales.logging.events\nWHERE event = 'visit'\n  AND farm_fingerprint(device_id) > 0",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "deviceID",
                              "column": "device_id"
                            }
                          ]
                        },
                        {
                          "name": "Users who generated event X",
                          "description": "",
                          "tags": [],
                          "sql": "",
                          "timestampColumn": "",
                          "timestampAsDay": false,
                          "idTypeMapping": []
                        },
                        {
                          "name": "12345",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT * except(group_id) FROM `shoppy-sales.statsig.statsig_forwarded_exposures`",
                          "timestampColumn": "timestamp",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        },
                        {
                          "name": "123456",
                          "description": "",
                          "tags": [],
                          "sql": "",
                          "timestampColumn": "",
                          "timestampAsDay": false,
                          "idTypeMapping": []
                        },
                        {
                          "name": "555",
                          "description": "",
                          "tags": [],
                          "sql": "",
                          "timestampColumn": "",
                          "timestampAsDay": false,
                          "idTypeMapping": []
                        },
                        {
                          "name": "Search Event",
                          "description": "",
                          "tags": [],
                          "sql": "",
                          "timestampColumn": "",
                          "timestampAsDay": false,
                          "idTypeMapping": []
                        },
                        {
                          "name": "test_metric_source",
                          "description": "Test description for metric source",
                          "tags": [
                            "helo"
                          ],
                          "sql": "SELECT * FROM shoppy-sales.logging.events WHERE event = 'visit'",
                          "timestampColumn": "ts",
                          "timestampAsDay": true,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "description": {
                            "type": "string"
                          },
                          "tags": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "sql": {
                            "type": "string"
                          },
                          "timestampColumn": {
                            "type": "string"
                          },
                          "timestampAsDay": {
                            "type": "boolean"
                          },
                          "idTypeMapping": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "statsigUnitID": {
                                  "type": "string"
                                },
                                "column": {
                                  "type": "string"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Metric sources listed successfully.",
                      "data": [
                        {
                          "name": "Log Events",
                          "description": "events",
                          "tags": [
                            "Core"
                          ],
                          "sql": "SELECT * FROM shoppy-sales.logging.events",
                          "timestampColumn": "ts",
                          "timestampAsDay": true,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "user",
                              "column": "string"
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-metrics-metric_source-list",
        "x-stoplight": {
          "id": "zlb6viwg6ryc1"
        },
        "description": "List all Metric Sources in the project"
      }
    }
  },
  "components": {
    "schemas": {
      "MetricListItem": {
        "title": "MetricListItem",
        "x-stoplight": {
          "id": "igvn9y7kjvjv3"
        },
        "type": "object",
        "x-tags": [
          "Metrics"
        ],
        "x-examples": {
          "d1_retention_rate": {
            "name": "d1_retention_rate",
            "type": "user",
            "id": "d1_retention_rate::user",
            "description": "ab",
            "isHidden": false,
            "lineage": {
              "events": [],
              "metrics": []
            }
          },
          "daily_stickiness": {
            "name": "daily_stickiness",
            "type": "user",
            "id": "daily_stickiness::user",
            "description": "new description",
            "isHidden": false
          },
          "Lineage": {
            "name": "Example Experiment funnel metric",
            "type": "funnel",
            "id": "Alison funnel metric::funnel",
            "description": "",
            "isHidden": false,
            "tags": [],
            "lineage": {
              "events": [],
              "metrics": [
                "create_experiment::event_count",
                "start_experiment::event_count",
                "make_experiment_decision::event_count",
                "abandon_experiment::event_count",
                "delete_experiment::event_count"
              ]
            }
          }
        },
        "required": [
          "id",
          "name",
          "type",
          "description",
          "isHidden",
          "lineage"
        ],
        "properties": {
          "id": {
            "type": "string",
            "description": "The formatted id used for queries"
          },
          "name": {
            "type": "string",
            "description": "Metric name"
          },
          "type": {
            "type": "string",
            "description": "Metric type"
          },
          "description": {
            "type": "string"
          },
          "isHidden": {
            "type": "boolean"
          },
          "lineage": {
            "type": "object",
            "x-stoplight": {
              "id": "mid78b269dgua"
            },
            "required": [
              "events",
              "metrics"
            ],
            "properties": {
              "events": {
                "type": "array",
                "x-stoplight": {
                  "id": "0usvcexwz7lld"
                },
                "description": "Events used in the calculation of this metric",
                "items": {
                  "x-stoplight": {
                    "id": "05xyvx5fzd8k3"
                  },
                  "type": "string"
                }
              },
              "metrics": {
                "type": "array",
                "x-stoplight": {
                  "id": "qo8uvlbwp1mc8"
                },
                "description": "Other metrics used in the calculation this metric",
                "items": {
                  "x-stoplight": {
                    "id": "cvh0slo112dkd"
                  },
                  "type": "string"
                }
              }
            }
          },
          "team": {
            "type": "string",
            "x-stoplight": {
              "id": "9i9d9j9rbyzsg"
            },
            "description": "Enterprise only"
          }
        }
      },
      "MetricValue": {
        "title": "MetricValue",
        "x-stoplight": {
          "id": "rrwb1zi0llrj1"
        },
        "type": "object",
        "required": [
          "value",
          "unit_type"
        ],
        "properties": {
          "value": {
            "type": "number",
            "description": "Metric value for the given unit_type"
          },
          "unit_type": {
            "type": "string",
            "description": "Which unitType"
          },
          "row_count": {
            "type": "integer",
            "description": "row count for imported metric",
            "x-stoplight": {
              "id": "ymzgfdzz1p850"
            }
          },
          "numerator": {
            "type": "number",
            "description": "Numerator of a ratio metric"
          },
          "denominator": {
            "type": "number",
            "description": "Denominator of a ratio metric"
          }
        }
      },
      "MetricEventCriteria": {
        "title": "MetricEventCriteria",
        "x-stoplight": {
          "id": "dd58049m3s3ve"
        },
        "type": "object",
        "properties": {
          "type": {
            "x-stoplight": {
              "id": "3ek2n08bgdjfd"
            },
            "type": "string",
            "enum": [
              "value",
              "meta_data"
            ]
          },
          "key": {
            "type": "string",
            "x-stoplight": {
              "id": "t3t24pwfcltx5"
            }
          },
          "condition": {
            "x-stoplight": {
              "id": "7jsl6ds2wuhjy"
            },
            "type": "string",
            "enum": [
              "in",
              "not_in",
              "=",
              ">",
              "<",
              "is_null",
              "non_null",
              "contains",
              "not_contains",
              "sql_filter",
              "starts_with",
              "ends_with",
              "after_exposure"
            ],
            "description": "sql_filter, start_withs, ends_with, and after_exposure are only applicable in Warehouse Native"
          },
          "values": {
            "type": "array",
            "x-stoplight": {
              "id": "1n4i8d2ivepj9"
            },
            "items": {
              "x-stoplight": {
                "id": "6veb6jqyiuohb"
              },
              "type": "string"
            }
          },
          "nullVacuousOverride": {
            "type": "boolean",
            "x-stoplight": {
              "id": "tw08j0l574wyc"
            }
          }
        }
      },
      "MetricEvent": {
        "type": "object",
        "x-stoplight": {
          "id": "x4xrxw4c84j52"
        },
        "properties": {
          "name": {
            "type": "string",
            "x-stoplight": {
              "id": "tll2doo9f72qr"
            }
          },
          "type": {
            "type": "string",
            "x-stoplight": {
              "id": "p3ck0r18jntot"
            }
          },
          "metadataKey": {
            "type": "string",
            "x-stoplight": {
              "id": "kojh2kt3cv4rc"
            }
          },
          "criteria": {
            "$ref": "#/components/schemas/MetricEventCriteria"
          }
        },
        "title": "MetricEvent",
        "description": ""
      },
      "MetricEvents": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "x-stoplight": {
              "id": "rdf4ea4dxnnn8"
            }
          },
          "type": {
            "x-stoplight": {
              "id": "quj6ludcf5btd"
            },
            "type": "string",
            "enum": [
              "count",
              "count_distinct",
              "value",
              "metadata"
            ]
          },
          "metadataKey": {
            "type": "string",
            "x-stoplight": {
              "id": "b2dqb30f18nxh"
            }
          },
          "criteria": {
            "$ref": "#/components/schemas/MetricEventCriteria"
          }
        },
        "x-stoplight": {
          "id": "aba65c846oix6"
        }
      },
      "WarehuseNativeFunnelEvent": {
        "title": "WarehuseNativeFunnelEvent",
        "x-stoplight": {
          "id": "hcuw2oc41j6d5"
        },
        "type": "object",
        "properties": {
          "criteria": {
            "x-stoplight": {
              "id": "f31c0fravk949"
            },
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MetricEventCriteria"
            }
          },
          "metricSourceName": {
            "type": "string",
            "x-stoplight": {
              "id": "v2w1q55id1mnd"
            }
          },
          "name": {
            "x-stoplight": {
              "id": "e24o4boy2oo7y"
            },
            "type": "string",
            "description": "Step name",
            "nullable": true
          },
          "sessionIdentifierField": {
            "type": "string",
            "x-stoplight": {
              "id": "86nyjespkr46c"
            },
            "description": "Name of column which being used as session identifier. Funnel event with the same metric source have to have the same identifier column"
          }
        }
      },
      "WarehouseNativeMetric": {
        "title": "WarehouseNativeMetric",
        "x-stoplight": {
          "id": "wptayqp5ccog0"
        },
        "type": "object",
        "properties": {
          "aggregation": {
            "x-stoplight": {
              "id": "lfjmt17tch06m"
            },
            "type": "string",
            "enum": [
              "count",
              "sum",
              "mean",
              "daily_participation",
              "ratio",
              "funnel",
              "count_distinct",
              "percentile"
            ]
          },
          "metricSourceName": {
            "type": "string",
            "x-stoplight": {
              "id": "ayvlt60sjw1p8"
            },
            "description": "For Count, Sum, Mean, User Count aggregation types: the name of metric source\n\nFor Ratio aggregation type: the name of numerator metric source\n\nFor funnel aggregation type: you can ignore. Metric sources information are defined with funnelEvents"
          },
          "criteria": {
            "$ref": "#/components/schemas/MetricEventCriteria"
          },
          "waitForCohortWindow": {
            "type": "boolean",
            "x-stoplight": {
              "id": "cbkz9ptj7w1kl"
            }
          },
          "denominatorCriteria": {
            "$ref": "#/components/schemas/MetricEventCriteria"
          },
          "denominatorAggregation": {
            "x-stoplight": {
              "id": "t368xcah2n2kj"
            },
            "type": "string",
            "enum": [
              "count",
              "sum",
              "mean",
              "daily_participation",
              "ratio",
              "funnel",
              "count_distinct",
              "percentile"
            ]
          },
          "denominatorCustomRollupEnd": {
            "type": "number",
            "x-stoplight": {
              "id": "8arfqv78bbooy"
            }
          },
          "denominatorCustomRollupStart": {
            "type": "number",
            "x-stoplight": {
              "id": "r4rdlv63xbire"
            }
          },
          "denominatorMetricSourceName": {
            "type": "string",
            "x-stoplight": {
              "id": "tpbnwnw3mvcsz"
            }
          },
          "denominatorRollupTimeWindow": {
            "type": "string",
            "x-stoplight": {
              "id": "y43ozaitlu5yb"
            },
            "description": "Time window for metric. Specify \"custom\", if you want to provide customized time window. Default to be same as experiment time window"
          },
          "denominatorValueColumn": {
            "type": "string",
            "x-stoplight": {
              "id": "6rhr8t7q80ej1"
            }
          },
          "funnelCalculationWindow": {
            "type": "number",
            "x-stoplight": {
              "id": "5s3k75ecev4rv"
            },
            "description": "How long to count funnel events"
          },
          "funnelCountDistinct": {
            "x-stoplight": {
              "id": "b88udrm0pw3yt"
            },
            "type": "string",
            "enum": [
              "users",
              "sessions"
            ]
          },
          "funnelEvents": {
            "type": "array",
            "x-stoplight": {
              "id": "hsvjlcsr3164x"
            },
            "items": {
              "$ref": "#/components/schemas/WarehuseNativeFunnelEvent"
            }
          },
          "funnelStartCriteria": {
            "x-stoplight": {
              "id": "tfxypp65o1su4"
            },
            "type": "string",
            "enum": [
              "start_event",
              "exposure"
            ]
          },
          "metricDimensionColumns": {
            "type": "array",
            "x-stoplight": {
              "id": "cjyjhk3a4jhef"
            },
            "description": "Specify metadata that you wish to breakdown in experiment analysis.",
            "items": {
              "x-stoplight": {
                "id": "k1tuqu1n6cqcc"
              },
              "type": "string"
            }
          },
          "metricBakeDays": {
            "type": "number",
            "x-stoplight": {
              "id": "mlmmzgu74p027"
            },
            "description": "[Documentation](https://docs.statsig.com/statsig-warehouse-native/features/cohort-metrics)"
          },
          "numeratorAggregation": {
            "x-stoplight": {
              "id": "ieknkdluxzu8e"
            },
            "type": "string",
            "enum": [
              "count",
              "sum",
              "mean",
              "daily_participation",
              "ratio",
              "funnel",
              "count_distinct",
              "percentile"
            ],
            "description": "For ratio aggregation type. \nAggregation type for numerator"
          },
          "valueColumn": {
            "type": "string",
            "x-stoplight": {
              "id": "6fe6gdpmt0hmd"
            }
          },
          "winsorizationHigh": {
            "type": "number",
            "x-stoplight": {
              "id": "zgspx5dslu0gp"
            },
            "description": "See [document](https://docs.statsig.com/stats-engine/methodologies/winsorization)",
            "minimum": 0,
            "maximum": 1
          },
          "winsorizationLow": {
            "type": "number",
            "x-stoplight": {
              "id": "pf1c88kumboh7"
            },
            "description": "See [document](https://docs.statsig.com/stats-engine/methodologies/winsorization)",
            "minimum": 0,
            "maximum": 1
          },
          "cupedAttributionWindow": {
            "type": "number",
            "x-stoplight": {
              "id": "1qig1jsbvvmbk"
            }
          },
          "rollupTimeWindow": {
            "x-stoplight": {
              "id": "nk6tt9qmhty60"
            },
            "type": "string",
            "enum": [
              "max",
              "latest",
              "custom"
            ]
          },
          "customRollUpStart": {
            "type": "number",
            "x-stoplight": {
              "id": "9paq73h2m0gwh"
            },
            "description": "Custom time window start date (Days since exposure)\n"
          },
          "customRollUpEnd": {
            "type": "number",
            "x-stoplight": {
              "id": "hkolnyqm8whud"
            },
            "description": "Custom time window end date(Days since exposure)"
          }
        }
      },
      "MetricDefinition": {
        "title": "MetricCreation",
        "x-stoplight": {
          "id": "9npn4c8dq0tku"
        },
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "x-stoplight": {
              "id": "y4bouei2kcsu3"
            }
          },
          "type": {
            "x-stoplight": {
              "id": "hk74y9tzkiqzl"
            },
            "enum": [
              "ratio",
              "mean",
              "event_count_custom",
              "funnel",
              "composite",
              "composite_sum",
              "sum",
              "undefined",
              "user_warehouse"
            ]
          },
          "isHidden": {
            "type": "boolean",
            "x-stoplight": {
              "id": "6vhumtxumwu5t"
            }
          },
          "isVerified": {
            "type": "boolean",
            "x-stoplight": {
              "id": "r345p7sc72w4q"
            }
          },
          "isReadOnly": {
            "type": "boolean",
            "x-stoplight": {
              "id": "alruvzb8zekf9"
            }
          },
          "unitTypes": {
            "type": "array",
            "x-stoplight": {
              "id": "hmsqnxu0g3l5o"
            },
            "items": {
              "x-stoplight": {
                "id": "d0re76uib15e0"
              },
              "type": "string"
            }
          },
          "metricEvents": {
            "$ref": "#/components/schemas/MetricEvents"
          },
          "metricComponentMetrics": {
            "type": "array",
            "x-stoplight": {
              "id": "ohjyt7vh268zp"
            },
            "items": {
              "x-stoplight": {
                "id": "mpebwt92gy4bv"
              },
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "1v29bn5wg6cc7"
                  }
                },
                "type": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "nw4bzon2c6qod"
                  }
                }
              }
            }
          },
          "description": {
            "type": "string",
            "x-stoplight": {
              "id": "0n21w1msiaa73"
            }
          },
          "directionality": {
            "x-stoplight": {
              "id": "u1kuzoxsu18v9"
            },
            "enum": [
              "increase",
              "decrease"
            ],
            "description": "default: increase"
          },
          "tags": {
            "type": "array",
            "x-stoplight": {
              "id": "bmqblvjep51fv"
            },
            "items": {
              "x-stoplight": {
                "id": "hkk7895a1ye6a"
              },
              "type": "string"
            }
          },
          "isPermanent": {
            "type": "boolean",
            "x-stoplight": {
              "id": "1y9mu17zkfyug"
            }
          },
          "rollupTimeWindow": {
            "type": "string",
            "x-stoplight": {
              "id": "c47j2yi9537i5"
            }
          },
          "customRollUpStart": {
            "type": "number",
            "x-stoplight": {
              "id": "828233rpvhumk"
            }
          },
          "customRollUpEnd": {
            "type": "number",
            "x-stoplight": {
              "id": "ajqodb8yamog5"
            }
          },
          "funnelEventList": {
            "type": "array",
            "x-stoplight": {
              "id": "fskp8bmrrgphd"
            },
            "items": {
              "x-stoplight": {
                "id": "5y86c1287nbog"
              },
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "h9tzqgtt3xh1o"
                  }
                },
                "type": {
                  "x-stoplight": {
                    "id": "za69di76bhyeo"
                  },
                  "enum": [
                    "event_dau",
                    "event_user",
                    "event_count",
                    "event_count_custom"
                  ]
                }
              }
            }
          },
          "funnelCountDistinct": {
            "x-stoplight": {
              "id": "wbn2t499fg910"
            },
            "enum": [
              "events",
              "users"
            ]
          },
          "warehouseNative": {
            "$ref": "#/components/schemas/WarehouseNativeMetric"
          },
          "team": {
            "type": "string",
            "x-stoplight": {
              "id": "kx5ihpgmfvirl"
            }
          },
          "id": {
            "type": "string",
            "x-stoplight": {
              "id": "xw3fu6vgz7qk3"
            }
          }
        }
      }
    },
    "responses": {},
    "securitySchemes": {
      "STATSIG-API-KEY": {
        "name": "STATSIG-API-KEY",
        "type": "apiKey",
        "in": "header"
      }
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ]
}