import json

data = {
  "_id": {
    "$oid": "6667d49174cc2f22a312d359"
  },
  "Doc": {
    "$numberLong": "810"
  },
  "Version": "X12 4010",
  "Segments": [
    {
      "Position": {
        "$numberLong": "1"
      },
      "Segment": "ST",
      "Requirement": "M",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "2"
      },
      "Segment": "BIG",
      "Requirement": "M",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "3"
      },
      "Segment": "NTE",
      "Requirement": "OP",
      "Max": "100"
    },
    {
      "Position": {
        "$numberLong": "4"
      },
      "Segment": "CUR",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "5"
      },
      "Segment": "REF",
      "Requirement": "OP",
      "Max": "12"
    },
    {
      "Position": {
        "$numberLong": "6"
      },
      "Segment": "YNQ",
      "Requirement": "OP",
      "Max": "10"
    },
    {
      "Position": {
        "$numberLong": "7"
      },
      "Segment": "PER",
      "Requirement": "OP",
      "Max": "3"
    },
    {
      "Position": {
        "$numberLong": "8"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "200",
      "Segments": [
        {
          "Position": 1,
          "Segment": "N1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "N2",
          "Requirement": "M",
          "Max": "2"
        },
        {
          "Position": 3,
          "Segment": "N3",
          "Requirement": "OP",
          "Max": "2"
        },
        {
          "Position": 4,
          "Segment": "N4",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 5,
          "Segment": "REF",
          "Requirement": "OP",
          "Max": "12"
        },
        {
          "Position": 6,
          "Segment": "PER",
          "Requirement": "OP",
          "Max": "3"
        },
        {
          "Position": 7,
          "Segment": "DMG",
          "Requirement": "OP",
          "Max": "1"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "9"
      },
      "Segment": "ITD",
      "Requirement": "OP",
      "Max": ">1"
    },
    {
      "Position": {
        "$numberLong": "10"
      },
      "Segment": "DTM",
      "Requirement": "OP",
      "Max": "10"
    },
    {
      "Position": {
        "$numberLong": "11"
      },
      "Segment": "FOB",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "12"
      },
      "Segment": "PID",
      "Requirement": "OP",
      "Max": "200"
    },
    {
      "Position": {
        "$numberLong": "13"
      },
      "Segment": "MEA",
      "Requirement": "OP",
      "Max": "40"
    },
    {
      "Position": {
        "$numberLong": "14"
      },
      "Segment": "PWK",
      "Requirement": "OP",
      "Max": "25"
    },
    {
      "Position": {
        "$numberLong": "15"
      },
      "Segment": "PKG",
      "Requirement": "OP",
      "Max": "25"
    },
    {
      "Position": {
        "$numberLong": "16"
      },
      "Segment": "L7",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "17"
      },
      "Segment": "BAL",
      "Requirement": "OP",
      "Max": ">1"
    },
    {
      "Position": {
        "$numberLong": "18"
      },
      "Segment": "INC",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "19"
      },
      "Segment": "PAM",
      "Requirement": "OP",
      "Max": ">1"
    },
    {
      "Position": {
        "$numberLong": "20"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "10",
      "Segments": [
        {
          "Position": 1,
          "Segment": "LM",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "LQ",
          "Requirement": "OP",
          "Max": "100"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "21"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "1",
      "Segments": [
        {
          "Position": 1,
          "Segment": "N9",
          "Requirement": "M",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "MSG",
          "Requirement": "M",
          "Max": "10"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "22"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": ">1",
      "Segments": [
        {
          "Position": 3,
          "Segment": "DTM",
          "Requirement": "M",
          "Max": ">1"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "23"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": ">1",
      "Segments": [
        {
          "Position": 1,
          "Segment": "FA1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "FA2",
          "Requirement": "M",
          "Max": ">1"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "24"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "200000",
      "Segments": [
        {
          "Position": 1,
          "Segment": "IT1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 3,
          "Segment": "QTY",
          "Requirement": "OP",
          "Max": "5"
        },
        {
          "Position": 4,
          "Segment": "CUR",
          "Requirement": "M",
          "Max": "1"
        },
        {
          "Position": 5,
          "Segment": "IT3",
          "Requirement": "M",
          "Max": "5"
        },
        {
          "Position": 6,
          "Segment": "TXI",
          "Requirement": "OP",
          "Max": "10"
        },
        {
          "Position": 7,
          "Segment": "CTP",
          "Requirement": "M",
          "Max": "25"
        },
        {
          "Position": 8,
          "Segment": "PAM",
          "Requirement": "OP",
          "Max": "10"
        },
        {
          "Position": 9,
          "Segment": "MEA",
          "Requirement": "OP",
          "Max": "40"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "25"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "1000",
      "Segments": [
        {
          "Position": 1,
          "Segment": "PID",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "MEA",
          "Requirement": "OP",
          "Max": "10"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "26"
      },
      "Segment": "PWK",
      "Requirement": "OP",
      "Max": "25"
    },
    {
      "Position": {
        "$numberLong": "27"
      },
      "Segment": "PKG",
      "Requirement": "OP",
      "Max": "25"
    },
    {
      "Position": {
        "$numberLong": "28"
      },
      "Segment": "PO4",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "29"
      },
      "Segment": "ITD",
      "Requirement": "OP",
      "Max": "2"
    },
    {
      "Position": {
        "$numberLong": "30"
      },
      "Segment": "REF",
      "Requirement": "OP",
      "Max": ">1"
    },
    {
      "Position": {
        "$numberLong": "31"
      },
      "Segment": "YNQ",
      "Requirement": "M",
      "Max": "10"
    },
    {
      "Position": {
        "$numberLong": "32"
      },
      "Segment": "PER",
      "Requirement": "OP",
      "Max": "5"
    },
    {
      "Position": {
        "$numberLong": "33"
      },
      "Segment": "SDQ",
      "Requirement": "OP",
      "Max": "500"
    },
    {
      "Position": {
        "$numberLong": "34"
      },
      "Segment": "DTM",
      "Requirement": "OP",
      "Max": "10"
    },
    {
      "Position": {
        "$numberLong": "35"
      },
      "Segment": "CAD",
      "Requirement": "OP",
      "Max": ">1"
    },
    {
      "Position": {
        "$numberLong": "36"
      },
      "Segment": "L7",
      "Requirement": "OP",
      "Max": ">1"
    },
    {
      "Position": {
        "$numberLong": "37"
      },
      "Segment": "SR",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "38"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "25",
      "Segments": [
        {
          "Position": 1,
          "Segment": "SAC",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "TXI",
          "Requirement": "OP",
          "Max": "10"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "39"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "1000",
      "Segments": [
        {
          "Position": 1,
          "Segment": "SLN",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "DTM",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 3,
          "Segment": "REF",
          "Requirement": "OP",
          "Max": ">1"
        },
        {
          "Position": 4,
          "Segment": "PID",
          "Requirement": "OP",
          "Max": "1000"
        },
        {
          "Position": 5,
          "Segment": "SAC",
          "Requirement": "OP",
          "Max": "25"
        },
        {
          "Position": 6,
          "Segment": "TC2",
          "Requirement": "OP",
          "Max": "2"
        },
        {
          "Position": 7,
          "Segment": "TXI",
          "Requirement": "M",
          "Max": "10"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "40"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "200",
      "Segments": [
        {
          "Position": 1,
          "Segment": "N1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "N2",
          "Requirement": "OP",
          "Max": "2"
        },
        {
          "Position": 3,
          "Segment": "N3",
          "Requirement": "M",
          "Max": "2"
        },
        {
          "Position": 4,
          "Segment": "N4",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 5,
          "Segment": "REF",
          "Requirement": "OP",
          "Max": "12"
        },
        {
          "Position": 6,
          "Segment": "PER",
          "Requirement": "OP",
          "Max": "3"
        },
        {
          "Position": 7,
          "Segment": "DMG",
          "Requirement": "OP",
          "Max": "1"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "41"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "10",
      "Segments": [
        {
          "Position": 1,
          "Segment": "LM",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "LQ",
          "Requirement": "OP",
          "Max": "100"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "42"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": ">1",
      "Segments": [
        {
          "Position": 3,
          "Segment": "DTM",
          "Requirement": "OP",
          "Max": ">1"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "43"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": ">1",
      "Segments": [
        {
          "Position": 1,
          "Segment": "FA1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "FA2",
          "Requirement": "OP",
          "Max": ">1"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "44"
      },
      "Segment": "TDS",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "45"
      },
      "Segment": "TXI",
      "Requirement": "OP",
      "Max": "10"
    },
    {
      "Position": {
        "$numberLong": "46"
      },
      "Segment": "CAD",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "47"
      },
      "Segment": "AMT",
      "Requirement": "OP",
      "Max": ">1"
    },
    {
      "Position": {
        "$numberLong": "48"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "25",
      "Segments": [
        {
          "Position": 1,
          "Segment": "SAC",
          "Requirement": "M",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "TXI",
          "Requirement": "M",
          "Max": "10"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "49"
      },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": ">1",
      "Segments": [
       
        {
          "Position": 2,
          "Segment": "PID",
          "Requirement": "M",
          "Max": "1"
        }
      ]
    },
    {
      "Position": {
        "$numberLong": "50"
      },
      "Segment": "CTT",
      "Requirement": "OP",
      "Max": "1"
    },
    {
      "Position": {
        "$numberLong": "51"
      },
      "Segment": "SE",
      "Requirement": "OP",
      "Max": "1"
    }
  ]
}

segment_element = {
  "Segments": [
    {
      "Segment": "ST",
      "Name": "Transaction Set Header",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "ST-01",
          "Element": "143",

          "Requirement": "M"
        },
        {
          "Position": "ST-02",
          "Element": "329",

          "Requirement": "M"
        }
      ]
    },
    {
      "Segment": "BEG",
      "Name": "Beginning Segment for Purchase Order",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "BEG-01",
          "Element": "353",

          "Requirement": "M"
        },
        {
          "Position": "BEG-02",
          "Element": "92",

          "Requirement": "M"
        },
        {
          "Position": "BEG-03",
          "Element": "324",

          "Requirement": "M"
        },
        {
          "Position": "BEG-04",
          "Element": "328",

          "Requirement": "OP"
        },
        {
          "Position": "BEG-05",
          "Element": "373",

          "Requirement": "M"
        },
        {
          "Position": "BEG-06",
          "Element": "367",

          "Requirement": "OP"
        },
        {
          "Position": "BEG-07",
          "Element": "587",

          "Requirement": "OP"
        },
        {
          "Position": "BEG-08",
          "Element": "1019",

          "Requirement": "OP"
        },
        {
          "Position": "BEG-09",
          "Element": "1166",

          "Requirement": "OP"
        },
        {
          "Position": "BEG-10",
          "Element": "1232",

          "Requirement": "OP"
        },
        {
          "Position": "BEG-11",
          "Element": "786",

          "Requirement": "OP"
        },
        {
          "Position": "BEG-12",
          "Element": "640",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "CUR",
      "Name": "Currency",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "CUR-01",
          "Element": "98",

          "Requirement": "M"
        },
        {
          "Position": "CUR-02",
          "Element": "100",

          "Requirement": "M"
        },
        {
          "Position": "CUR-03",
          "Element": "280",

          "Requirement": "OP"
        },
        {
          "Position": "CUR-04",
          "Element": "98",

          "Requirement": "OP"
        },
        {
          "Position": "CUR-05",
          "Element": "100",

          "Requirement": "OP"
        },
        {
          "Position": "CUR-06",
          "Element": "669",

          "Requirement": "OP"
        },
        {
          "Position": "CUR-07",
          "Element": "374",

          "Requirement": "C"
        },
        {
          "Position": "CUR-08",
          "Element": "373",

          "Requirement": "OP"
        },
        {
          "Position": "CUR-09",
          "Element": "337",

          "Requirement": "OP"
        },
        {
          "Position": "CUR-10",
          "Element": "374",

          "Requirement": "C"
        },
        {
          "Position": "CUR-11",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "CUR-12",
          "Element": "337",

          "Requirement": "C"
        },
        {
          "Position": "CUR-13",
          "Element": "374",

          "Requirement": "C"
        },
        {
          "Position": "CUR-14",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "CUR-15",
          "Element": "337",

          "Requirement": "C"
        },
        {
          "Position": "CUR-16",
          "Element": "374",

          "Requirement": "C"
        },
        {
          "Position": "CUR-17",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "CUR-18",
          "Element": "337",

          "Requirement": "C"
        },
        {
          "Position": "CUR-19",
          "Element": "374",

          "Requirement": "C"
        },
        {
          "Position": "CUR-20",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "CUR-21",
          "Element": "337",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "REF",
      "Name": "Reference Identification",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "REF-01",
          "Element": "128",

          "Requirement": "M"
        },
        {
          "Position": "REF-02",
          "Element": "127",

          "Requirement": "C"
        },
        {
          "Position": "REF-03",
          "Element": "352",

          "Requirement": "C"
        },
        {
          "Position": "REF-04",
          "Element": "C040",

          "Requirement": "OP",
          "Composites": [
            {
              "Position": "01",
              "Element": "128",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "127",

              "Requirement": "M"
            },
            {
              "Position": "03",
              "Element": "128",

              "Requirement": "C"
            },
            {
              "Position": "04",
              "Element": "127",

              "Requirement": "C"
            },
            {
              "Position": "05",
              "Element": "128",

              "Requirement": "C"
            },
            {
              "Position": "06",
              "Element": "127",

              "Requirement": "C"
            }
          ]
        }
      ]
    },
    {
      "Segment": "PER",
      "Name": "Administrative Communications Contact",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PER-01",
          "Element": "366",

          "Requirement": "M"
        },
        {
          "Position": "PER-02",
          "Element": "93",

          "Requirement": "OP"
        },
        {
          "Position": "PER-03",
          "Element": "365",

          "Requirement": "C"
        },
        {
          "Position": "PER-04",
          "Element": "364",

          "Requirement": "C"
        },
        {
          "Position": "PER-05",
          "Element": "365",

          "Requirement": "C"
        },
        {
          "Position": "PER-06",
          "Element": "364",

          "Requirement": "C"
        },
        {
          "Position": "PER-07",
          "Element": "365",

          "Requirement": "C"
        },
        {
          "Position": "PER-08",
          "Element": "364",

          "Requirement": "C"
        },
        {
          "Position": "PER-09",
          "Element": "443",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "TAX",
      "Name": "Tax Reference",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "TAX-01",
          "Element": "325",

          "Requirement": "C"
        },
        {
          "Position": "TAX-02",
          "Element": "309",

          "Requirement": "C"
        },
        {
          "Position": "TAX-03",
          "Element": "310",

          "Requirement": "C"
        },
        {
          "Position": "TAX-04",
          "Element": "309",

          "Requirement": "C"
        },
        {
          "Position": "TAX-05",
          "Element": "310",

          "Requirement": "C"
        },
        {
          "Position": "TAX-06",
          "Element": "309",

          "Requirement": "C"
        },
        {
          "Position": "TAX-07",
          "Element": "310",

          "Requirement": "C"
        },
        {
          "Position": "TAX-08",
          "Element": "309",

          "Requirement": "C"
        },
        {
          "Position": "TAX-09",
          "Element": "310",

          "Requirement": "C"
        },
        {
          "Position": "TAX-10",
          "Element": "309",

          "Requirement": "C"
        },
        {
          "Position": "TAX-11",
          "Element": "310",

          "Requirement": "C"
        },
        {
          "Position": "TAX-12",
          "Element": "441",

          "Requirement": "OP"
        },
        {
          "Position": "TAX-13",
          "Element": "1179",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "FOB",
      "Name": "F.O.B. Related Instructions",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "FOB-01",
          "Element": "146",

          "Requirement": "M"
        },
        {
          "Position": "FOB-02",
          "Element": "309",

          "Requirement": "C"
        },
        {
          "Position": "FOB-03",
          "Element": "352",

          "Requirement": "OP"
        },
        {
          "Position": "FOB-04",
          "Element": "334",

          "Requirement": "OP"
        },
        {
          "Position": "FOB-05",
          "Element": "335",

          "Requirement": "C"
        },
        {
          "Position": "FOB-06",
          "Element": "309",

          "Requirement": "C"
        },
        {
          "Position": "FOB-07",
          "Element": "352",

          "Requirement": "OP"
        },
        {
          "Position": "FOB-08",
          "Element": "54",

          "Requirement": "OP"
        },
        {
          "Position": "FOB-09",
          "Element": "352",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "CTP",
      "Name": "Pricing Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "CTP-01",
          "Element": "687",

          "Requirement": "OP"
        },
        {
          "Position": "CTP-02",
          "Element": "236",

          "Requirement": "C"
        },
        {
          "Position": "CTP-03",
          "Element": "212",

          "Requirement": "C"
        },
        {
          "Position": "CTP-04",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "CTP-05",
          "Element": "C001",

          "Requirement": "C",
          "Composites": [
            {
              "Position": "01",
              "Element": "355",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "03",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "04",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "05",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "06",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "07",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "08",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "09",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "10",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "11",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "12",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "13",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "14",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "15",
              "Element": "649",

              "Requirement": "OP"
            }
          ]
        },
        {
          "Position": "CTP-06",
          "Element": "648",

          "Requirement": "OP"
        },
        {
          "Position": "CTP-07",
          "Element": "649",

          "Requirement": "C"
        },
        {
          "Position": "CTP-08",
          "Element": "782",

          "Requirement": "OP"
        },
        {
          "Position": "CTP-09",
          "Element": "639",

          "Requirement": "OP"
        },
        {
          "Position": "CTP-10",
          "Element": "499",

          "Requirement": "OP"
        },
        {
          "Position": "CTP-11",
          "Element": "289",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "PAM",
      "Name": "Period Amount",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PAM-01",
          "Element": "673",

          "Requirement": "C"
        },
        {
          "Position": "PAM-02",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "PAM-03",
          "Element": "C001",

          "Requirement": "C",
          "Composites": [
            {
              "Position": "01",
              "Element": "355",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "03",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "04",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "05",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "06",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "07",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "08",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "09",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "10",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "11",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "12",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "13",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "14",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "15",
              "Element": "649",

              "Requirement": "OP"
            }
          ]
        },
        {
          "Position": "PAM-04",
          "Element": "522",

          "Requirement": "C"
        },
        {
          "Position": "PAM-05",
          "Element": "782",

          "Requirement": "C"
        },
        {
          "Position": "PAM-06",
          "Element": "344",

          "Requirement": "C"
        },
        {
          "Position": "PAM-07",
          "Element": "374",

          "Requirement": "C"
        },
        {
          "Position": "PAM-08",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "PAM-09",
          "Element": "337",

          "Requirement": "C"
        },
        {
          "Position": "PAM-10",
          "Element": "374",

          "Requirement": "C"
        },
        {
          "Position": "PAM-11",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "PAM-12",
          "Element": "337",

          "Requirement": "C"
        },
        {
          "Position": "PAM-13",
          "Element": "1004",

          "Requirement": "C"
        },
        {
          "Position": "PAM-14",
          "Element": "954",

          "Requirement": "C"
        },
        {
          "Position": "PAM-15",
          "Element": "1073",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "CSH",
      "Name": "Sales Requirements",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "CSH-01",
          "Element": "563",

          "Requirement": "OP"
        },
        {
          "Position": "CSH-02",
          "Element": "306",

          "Requirement": "OP"
        },
        {
          "Position": "CSH-03",
          "Element": "610",

          "Requirement": "C"
        },
        {
          "Position": "CSH-04",
          "Element": "508",

          "Requirement": "OP"
        },
        {
          "Position": "CSH-05",
          "Element": "373",

          "Requirement": "OP"
        },
        {
          "Position": "CSH-06",
          "Element": "559",

          "Requirement": "C"
        },
        {
          "Position": "CSH-07",
          "Element": "560",

          "Requirement": "C"
        },
        {
          "Position": "CSH-08",
          "Element": "566",

          "Requirement": "OP"
        },
        {
          "Position": "CSH-09",
          "Element": "954",

          "Requirement": "C"
        },
        {
          "Position": "CSH-10",
          "Element": "1004",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "TC2",
      "Name": "Commodity",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "TC2-01",
          "Element": "23",

          "Requirement": "M"
        },
        {
          "Position": "TC2-02",
          "Element": "22",

          "Requirement": "M"
        }
      ]
    },
    {
      "Segment": "SAC",
      "Name": "Service, Promotion, Allowance, or Charge Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "SAC-01",
          "Element": "248",

          "Requirement": "M"
        },
        {
          "Position": "SAC-02",
          "Element": "1300",

          "Requirement": "C"
        },
        {
          "Position": "SAC-03",
          "Element": "559",

          "Requirement": "C"
        },
        {
          "Position": "SAC-04",
          "Element": "1301",

          "Requirement": "C"
        },
        {
          "Position": "SAC-05",
          "Element": "610",

          "Requirement": "OP"
        },
        {
          "Position": "SAC-06",
          "Element": "378",

          "Requirement": "C"
        },
        {
          "Position": "SAC-07",
          "Element": "332",

          "Requirement": "C"
        },
        {
          "Position": "SAC-08",
          "Element": "118",

          "Requirement": "OP"
        },
        {
          "Position": "SAC-09",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "SAC-10",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SAC-11",
          "Element": "380",

          "Requirement": "OP"
        },
        {
          "Position": "SAC-12",
          "Element": "331",

          "Requirement": "OP"
        },
        {
          "Position": "SAC-13",
          "Element": "127",

          "Requirement": "C"
        },
        {
          "Position": "SAC-14",
          "Element": "770",

          "Requirement": "OP"
        },
        {
          "Position": "SAC-15",
          "Element": "352",

          "Requirement": "C"
        },
        {
          "Position": "SAC-16",
          "Element": "819",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "ITD",
      "Name": "Terms of Sale/Deferred Terms of Sale",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "ITD-01",
          "Element": "336",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-02",
          "Element": "333",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-03",
          "Element": "338",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-04",
          "Element": "370",

          "Requirement": "C"
        },
        {
          "Position": "ITD-05",
          "Element": "351",

          "Requirement": "C"
        },
        {
          "Position": "ITD-06",
          "Element": "446",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-07",
          "Element": "386",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-08",
          "Element": "362",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-09",
          "Element": "388",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-10",
          "Element": "389",

          "Requirement": "C"
        },
        {
          "Position": "ITD-11",
          "Element": "342",

          "Requirement": "C"
        },
        {
          "Position": "ITD-12",
          "Element": "352",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-13",
          "Element": "765",

          "Requirement": "C"
        },
        {
          "Position": "ITD-14",
          "Element": "107",

          "Requirement": "OP"
        },
        {
          "Position": "ITD-15",
          "Element": "954",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "DIS",
      "Name": "Discount Detail",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "DIS-01",
          "Element": "653",

          "Requirement": "M"
        },
        {
          "Position": "DIS-02",
          "Element": "654",

          "Requirement": "M"
        },
        {
          "Position": "DIS-03",
          "Element": "655",

          "Requirement": "M"
        },
        {
          "Position": "DIS-04",
          "Element": "656",

          "Requirement": "M"
        },
        {
          "Position": "DIS-05",
          "Element": "657",

          "Requirement": "M"
        },
        {
          "Position": "DIS-06",
          "Element": "657",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "INC",
      "Name": "Installment Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "INC-01",
          "Element": "336",

          "Requirement": "M"
        },
        {
          "Position": "INC-02",
          "Element": "C001",

          "Requirement": "M",
          "Composites": [
            {
              "Position": "01",
              "Element": "355",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "03",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "04",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "05",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "06",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "07",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "08",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "09",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "10",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "11",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "12",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "13",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "14",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "15",
              "Element": "649",

              "Requirement": "OP"
            }
          ]
        },
        {
          "Position": "INC-03",
          "Element": "380",

          "Requirement": "M"
        },
        {
          "Position": "INC-04",
          "Element": "380",

          "Requirement": "M"
        },
        {
          "Position": "INC-05",
          "Element": "782",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "DTM",
      "Name": "Date/Time Reference",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "DTM-01",
          "Element": "374",

          "Requirement": "M"
        },
        {
          "Position": "DTM-02",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "DTM-03",
          "Element": "337",

          "Requirement": "C"
        },
        {
          "Position": "DTM-04",
          "Element": "623",

          "Requirement": "OP"
        },
        {
          "Position": "DTM-05",
          "Element": "1250",

          "Requirement": "C"
        },
        {
          "Position": "DTM-06",
          "Element": "1251",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "LDT",
      "Name": "Lead Time",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "LDT-01",
          "Element": "345",

          "Requirement": "M"
        },
        {
          "Position": "LDT-02",
          "Element": "380",

          "Requirement": "M"
        },
        {
          "Position": "LDT-03",
          "Element": "344",

          "Requirement": "M"
        },
        {
          "Position": "LDT-04",
          "Element": "373",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "LIN",
      "Name": "Item Identification",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "LIN-01",
          "Element": "350",

          "Requirement": "OP"
        },
        {
          "Position": "LIN-02",
          "Element": "235",

          "Requirement": "M"
        },
        {
          "Position": "LIN-03",
          "Element": "234",

          "Requirement": "M"
        },
        {
          "Position": "LIN-04",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-05",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-06",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-07",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-08",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-09",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-10",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-11",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-12",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-13",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-14",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-15",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-16",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-17",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-18",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-19",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-20",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-21",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-22",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-23",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-24",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-25",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-26",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-27",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-28",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-29",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "LIN-30",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "LIN-31",
          "Element": "234",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "SI",
      "Name": "Service Characteristic Identification",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "SI-01",
          "Element": "559",

          "Requirement": "M"
        },
        {
          "Position": "SI-02",
          "Element": "1000",

          "Requirement": "M"
        },
        {
          "Position": "SI-03",
          "Element": "234",

          "Requirement": "M"
        },
        {
          "Position": "SI-04",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-05",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SI-06",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-07",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SI-08",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-09",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SI-10",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-11",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SI-12",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-13",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SI-14",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-15",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SI-16",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-17",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SI-18",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-19",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SI-20",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "SI-21",
          "Element": "234",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "PID",
      "Name": "Product/Item Description",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PID-01",
          "Element": "349",

          "Requirement": "M"
        },
        {
          "Position": "PID-02",
          "Element": "750",

          "Requirement": "OP"
        },
        {
          "Position": "PID-03",
          "Element": "559",

          "Requirement": "C"
        },
        {
          "Position": "PID-04",
          "Element": "751",

          "Requirement": "C"
        },
        {
          "Position": "PID-05",
          "Element": "352",

          "Requirement": "C"
        },
        {
          "Position": "PID-06",
          "Element": "752",

          "Requirement": "OP"
        },
        {
          "Position": "PID-07",
          "Element": "822",

          "Requirement": "OP"
        },
        {
          "Position": "PID-08",
          "Element": "1073",

          "Requirement": "OP"
        },
        {
          "Position": "PID-09",
          "Element": "819",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "MEA",
      "Name": "Measurements",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "MEA-01",
          "Element": "737",

          "Requirement": "OP"
        },
        {
          "Position": "MEA-02",
          "Element": "738",

          "Requirement": "OP"
        },
        {
          "Position": "MEA-03",
          "Element": "739",

          "Requirement": "C"
        },
        {
          "Position": "MEA-04",
          "Element": "C001",

          "Requirement": "C",
          "Composites": [
            {
              "Position": "01",
              "Element": "355",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "03",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "04",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "05",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "06",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "07",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "08",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "09",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "10",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "11",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "12",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "13",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "14",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "15",
              "Element": "649",

              "Requirement": "OP"
            }
          ]
        },
        {
          "Position": "MEA-05",
          "Element": "740",

          "Requirement": "C"
        },
        {
          "Position": "MEA-06",
          "Element": "741",

          "Requirement": "C"
        },
        {
          "Position": "MEA-07",
          "Element": "935",

          "Requirement": "OP"
        },
        {
          "Position": "MEA-08",
          "Element": "936",

          "Requirement": "C"
        },
        {
          "Position": "MEA-09",
          "Element": "752",

          "Requirement": "OP"
        },
        {
          "Position": "MEA-10",
          "Element": "1373",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "PWK",
      "Name": "Paperwork",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PWK-01",
          "Element": "755",

          "Requirement": "M"
        },
        {
          "Position": "PWK-02",
          "Element": "756",

          "Requirement": "OP"
        },
        {
          "Position": "PWK-03",
          "Element": "757",

          "Requirement": "OP"
        },
        {
          "Position": "PWK-04",
          "Element": "98",

          "Requirement": "OP"
        },
        {
          "Position": "PWK-05",
          "Element": "66",

          "Requirement": "C"
        },
        {
          "Position": "PWK-06",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "PWK-07",
          "Element": "352",

          "Requirement": "OP"
        },
        {
          "Position": "PWK-08",
          "Element": "C002",

          "Requirement": "OP",
          "Composites": [
            {
              "Position": "01",
              "Element": "704",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "704",

              "Requirement": "OP"
            },
            {
              "Position": "03",
              "Element": "704",

              "Requirement": "OP"
            },
            {
              "Position": "04",
              "Element": "704",

              "Requirement": "OP"
            },
            {
              "Position": "05",
              "Element": "704",

              "Requirement": "OP"
            }
          ]
        },
        {
          "Position": "PWK-09",
          "Element": "1525",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "PKG",
      "Name": "Marking, Packaging, Loading",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PKG-01",
          "Element": "349",

          "Requirement": "C"
        },
        {
          "Position": "PKG-02",
          "Element": "753",

          "Requirement": "OP"
        },
        {
          "Position": "PKG-03",
          "Element": "559",

          "Requirement": "C"
        },
        {
          "Position": "PKG-04",
          "Element": "754",

          "Requirement": "C"
        },
        {
          "Position": "PKG-05",
          "Element": "352",

          "Requirement": "C"
        },
        {
          "Position": "PKG-06",
          "Element": "400",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "TD1",
      "Name": "Carrier Details (Quantity and Weight)",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "TD1-01",
          "Element": "103",

          "Requirement": "OP"
        },
        {
          "Position": "TD1-02",
          "Element": "80",

          "Requirement": "C"
        },
        {
          "Position": "TD1-03",
          "Element": "23",

          "Requirement": "OP"
        },
        {
          "Position": "TD1-04",
          "Element": "22",

          "Requirement": "C"
        },
        {
          "Position": "TD1-05",
          "Element": "79",

          "Requirement": "OP"
        },
        {
          "Position": "TD1-06",
          "Element": "187",

          "Requirement": "OP"
        },
        {
          "Position": "TD1-07",
          "Element": "81",

          "Requirement": "C"
        },
        {
          "Position": "TD1-08",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "TD1-09",
          "Element": "183",

          "Requirement": "C"
        },
        {
          "Position": "TD1-10",
          "Element": "355",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "TD5",
      "Name": "Carrier Details (Routing Sequence/Transit Time)",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "TD5-01",
          "Element": "133",

          "Requirement": "OP"
        },
        {
          "Position": "TD5-02",
          "Element": "66",

          "Requirement": "C"
        },
        {
          "Position": "TD5-03",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "TD5-04",
          "Element": "91",

          "Requirement": "C"
        },
        {
          "Position": "TD5-05",
          "Element": "387",

          "Requirement": "C"
        },
        {
          "Position": "TD5-06",
          "Element": "368",

          "Requirement": "C"
        },
        {
          "Position": "TD5-07",
          "Element": "309",

          "Requirement": "OP"
        },
        {
          "Position": "TD5-08",
          "Element": "310",

          "Requirement": "C"
        },
        {
          "Position": "TD5-09",
          "Element": "731",

          "Requirement": "OP"
        },
        {
          "Position": "TD5-10",
          "Element": "732",

          "Requirement": "OP"
        },
        {
          "Position": "TD5-11",
          "Element": "733",

          "Requirement": "C"
        },
        {
          "Position": "TD5-12",
          "Element": "284",

          "Requirement": "C"
        },
        {
          "Position": "TD5-13",
          "Element": "284",

          "Requirement": "C"
        },
        {
          "Position": "TD5-14",
          "Element": "284",

          "Requirement": "OP"
        },
        {
          "Position": "TD5-15",
          "Element": "26",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "TD3",
      "Name": "Carrier Details (Equipment)",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "TD3-01",
          "Element": "40",

          "Requirement": "C"
        },
        {
          "Position": "TD3-02",
          "Element": "206",

          "Requirement": "OP"
        },
        {
          "Position": "TD3-03",
          "Element": "207",

          "Requirement": "C"
        },
        {
          "Position": "TD3-04",
          "Element": "187",

          "Requirement": "OP"
        },
        {
          "Position": "TD3-05",
          "Element": "81",

          "Requirement": "C"
        },
        {
          "Position": "TD3-06",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "TD3-07",
          "Element": "102",

          "Requirement": "OP"
        },
        {
          "Position": "TD3-08",
          "Element": "407",

          "Requirement": "OP"
        },
        {
          "Position": "TD3-09",
          "Element": "225",

          "Requirement": "OP"
        },
        {
          "Position": "TD3-10",
          "Element": "24",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "TD4",
      "Name": "Carrier Details (Special Handling, or Hazardous Materials, or Both)",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "TD4-01",
          "Element": "152",

          "Requirement": "C"
        },
        {
          "Position": "TD4-02",
          "Element": "208",

          "Requirement": "C"
        },
        {
          "Position": "TD4-03",
          "Element": "209",

          "Requirement": "C"
        },
        {
          "Position": "TD4-04",
          "Element": "352",

          "Requirement": "C"
        },
        {
          "Position": "TD4-05",
          "Element": "1073",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "MAN",
      "Name": "Marks and Numbers",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "MAN-01",
          "Element": "88",

          "Requirement": "M"
        },
        {
          "Position": "MAN-02",
          "Element": "87",

          "Requirement": "M"
        },
        {
          "Position": "MAN-03",
          "Element": "87",

          "Requirement": "OP"
        },
        {
          "Position": "MAN-04",
          "Element": "88",

          "Requirement": "C"
        },
        {
          "Position": "MAN-05",
          "Element": "87",

          "Requirement": "C"
        },
        {
          "Position": "MAN-06",
          "Element": "87",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "PCT",
      "Name": "Percent Amounts",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PCT-01",
          "Element": "1004",

          "Requirement": "M"
        },
        {
          "Position": "PCT-02",
          "Element": "954",

          "Requirement": "M"
        }
      ]
    },
    {
      "Segment": "CTB",
      "Name": "Restrictions/Conditions",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "CTB-01",
          "Element": "688",

          "Requirement": "M"
        },
        {
          "Position": "CTB-02",
          "Element": "352",

          "Requirement": "C"
        },
        {
          "Position": "CTB-03",
          "Element": "673",

          "Requirement": "C"
        },
        {
          "Position": "CTB-04",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "CTB-05",
          "Element": "522",

          "Requirement": "C"
        },
        {
          "Position": "CTB-06",
          "Element": "610",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "TXI",
      "Name": "Tax Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "TXI-01",
          "Element": "963",

          "Requirement": "M"
        },
        {
          "Position": "TXI-02",
          "Element": "782",

          "Requirement": "C"
        },
        {
          "Position": "TXI-03",
          "Element": "954",

          "Requirement": "C"
        },
        {
          "Position": "TXI-04",
          "Element": "955",

          "Requirement": "C"
        },
        {
          "Position": "TXI-05",
          "Element": "956",

          "Requirement": "C"
        },
        {
          "Position": "TXI-06",
          "Element": "441",

          "Requirement": "C"
        },
        {
          "Position": "TXI-07",
          "Element": "662",

          "Requirement": "OP"
        },
        {
          "Position": "TXI-08",
          "Element": "828",

          "Requirement": "OP"
        },
        {
          "Position": "TXI-09",
          "Element": "325",

          "Requirement": "OP"
        },
        {
          "Position": "TXI-10",
          "Element": "350",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "AMT",
      "Name": "Monetary Amount",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "AMT-01",
          "Element": "522",

          "Requirement": "M"
        },
        {
          "Position": "AMT-02",
          "Element": "782",

          "Requirement": "M"
        },
        {
          "Position": "AMT-03",
          "Element": "478",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "FA1",
      "Name": "Type of Financial Accounting Data",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "FA1-01",
          "Element": "559",

          "Requirement": "M"
        },
        {
          "Position": "FA1-02",
          "Element": "1300",

          "Requirement": "OP"
        },
        {
          "Position": "FA1-03",
          "Element": "248",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "FA2",
      "Name": "Accounting Data",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "FA2-01",
          "Element": "1196",

          "Requirement": "M"
        },
        {
          "Position": "FA2-02",
          "Element": "1195",

          "Requirement": "M"
        }
      ]
    },
    {
      "Segment": "N9",
      "Name": "Reference Identification",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "N9-01",
          "Element": "128",

          "Requirement": "M"
        },
        {
          "Position": "N9-02",
          "Element": "127",

          "Requirement": "C"
        },
        {
          "Position": "N9-03",
          "Element": "369",

          "Requirement": "C"
        },
        {
          "Position": "N9-04",
          "Element": "373",

          "Requirement": "OP"
        },
        {
          "Position": "N9-05",
          "Element": "337",

          "Requirement": "C"
        },
        {
          "Position": "N9-06",
          "Element": "623",

          "Requirement": "OP"
        },
        {
          "Position": "N9-07",
          "Element": "C040",

          "Requirement": "OP",
          "Composites": [
            {
              "Position": "01",
              "Element": "128",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "127",

              "Requirement": "M"
            },
            {
              "Position": "03",
              "Element": "128",

              "Requirement": "C"
            },
            {
              "Position": "04",
              "Element": "127",

              "Requirement": "C"
            },
            {
              "Position": "05",
              "Element": "128",

              "Requirement": "C"
            },
            {
              "Position": "06",
              "Element": "127",

              "Requirement": "C"
            }
          ]
        }
      ]
    },
    {
      "Segment": "MSG",
      "Name": "Message Text",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "MSG-01",
          "Element": "933",

          "Requirement": "M"
        },
        {
          "Position": "MSG-02",
          "Element": "934",

          "Requirement": "C"
        },
        {
          "Position": "MSG-03",
          "Element": "1470",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "N1",
      "Name": "Name",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "N1-01",
          "Element": "98",

          "Requirement": "M"
        },
        {
          "Position": "N1-02",
          "Element": "93",

          "Requirement": "C"
        },
        {
          "Position": "N1-03",
          "Element": "66",

          "Requirement": "C"
        },
        {
          "Position": "N1-04",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "N1-05",
          "Element": "706",

          "Requirement": "OP"
        },
        {
          "Position": "N1-06",
          "Element": "98",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "N2",
      "Name": "Additional Name Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "N2-01",
          "Element": "93",

          "Requirement": "M"
        },
        {
          "Position": "N2-02",
          "Element": "93",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "N3",
      "Name": "Address Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "N3-01",
          "Element": "166",

          "Requirement": "M"
        },
        {
          "Position": "N3-02",
          "Element": "166",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "N4",
      "Name": "Geographic Location",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "N4-01",
          "Element": "19",

          "Requirement": "OP"
        },
        {
          "Position": "N4-02",
          "Element": "156",

          "Requirement": "OP"
        },
        {
          "Position": "N4-03",
          "Element": "116",

          "Requirement": "OP"
        },
        {
          "Position": "N4-04",
          "Element": "26",

          "Requirement": "OP"
        },
        {
          "Position": "N4-05",
          "Element": "309",

          "Requirement": "C"
        },
        {
          "Position": "N4-06",
          "Element": "310",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "NX2",
      "Name": "Location ID Component",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "NX2-01",
          "Element": "1106",

          "Requirement": "M"
        },
        {
          "Position": "NX2-02",
          "Element": "166",

          "Requirement": "M"
        },
        {
          "Position": "NX2-03",
          "Element": "1096",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "LM",
      "Name": "Code Source Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "LM-01",
          "Element": "559",

          "Requirement": "M"
        },
        {
          "Position": "LM-02",
          "Element": "822",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "LQ",
      "Name": "Industry Code",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "LQ-01",
          "Element": "1270",

          "Requirement": "OP"
        },
        {
          "Position": "LQ-02",
          "Element": "1271",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "SPI",
      "Name": "Specification Identifier",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "SPI-01",
          "Element": "786",

          "Requirement": "M"
        },
        {
          "Position": "SPI-02",
          "Element": "128",

          "Requirement": "C"
        },
        {
          "Position": "SPI-03",
          "Element": "127",

          "Requirement": "C"
        },
        {
          "Position": "SPI-04",
          "Element": "790",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-05",
          "Element": "791",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-06",
          "Element": "792",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-07",
          "Element": "353",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-08",
          "Element": "755",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-09",
          "Element": "786",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-10",
          "Element": "559",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-11",
          "Element": "822",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-12",
          "Element": "554",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-13",
          "Element": "1322",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-14",
          "Element": "1401",

          "Requirement": "OP"
        },
        {
          "Position": "SPI-15",
          "Element": "1005",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "G61",
      "Name": "Contact",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "G61-01",
          "Element": "366",

          "Requirement": "M"
        },
        {
          "Position": "G61-02",
          "Element": "93",

          "Requirement": "M"
        },
        {
          "Position": "G61-03",
          "Element": "365",

          "Requirement": "C"
        },
        {
          "Position": "G61-04",
          "Element": "364",

          "Requirement": "C"
        },
        {
          "Position": "G61-05",
          "Element": "443",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "CB1",
      "Name": "Contract and Cost Accounting Standards Data",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "CB1-01",
          "Element": "1309",

          "Requirement": "M"
        },
        {
          "Position": "CB1-02",
          "Element": "1310",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "ADV",
      "Name": "Advertising Demographic Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "ADV-01",
          "Element": "559",

          "Requirement": "M"
        },
        {
          "Position": "ADV-02",
          "Element": "1000",

          "Requirement": "M"
        },
        {
          "Position": "ADV-03",
          "Element": "740",

          "Requirement": "OP"
        },
        {
          "Position": "ADV-04",
          "Element": "741",

          "Requirement": "OP"
        },
        {
          "Position": "ADV-05",
          "Element": "729",

          "Requirement": "OP"
        },
        {
          "Position": "ADV-06",
          "Element": "1000",

          "Requirement": "C"
        },
        {
          "Position": "ADV-07",
          "Element": "739",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "MTX",
      "Name": "Text",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "MTX-01",
          "Element": "363",

          "Requirement": "OP"
        },
        {
          "Position": "MTX-02",
          "Element": "1551",

          "Requirement": "C"
        },
        {
          "Position": "MTX-03",
          "Element": "1551",

          "Requirement": "OP"
        },
        {
          "Position": "MTX-04",
          "Element": "934",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "PO1",
      "Name": "Baseline Item Data",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PO1-01",
          "Element": "350",

          "Requirement": "OP"
        },
        {
          "Position": "PO1-02",
          "Element": "330",

          "Requirement": "C"
        },
        {
          "Position": "PO1-03",
          "Element": "355",

          "Requirement": "OP"
        },
        {
          "Position": "PO1-04",
          "Element": "212",

          "Requirement": "C"
        },
        {
          "Position": "PO1-05",
          "Element": "639",

          "Requirement": "OP"
        },
        {
          "Position": "PO1-06",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-07",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-08",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-09",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-10",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-11",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-12",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-13",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-14",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-15",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-16",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-17",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-18",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-19",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-20",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-21",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-22",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-23",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "PO1-24",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "PO1-25",
          "Element": "234",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "CN1",
      "Name": "Contract Information",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "CN1-01",
          "Element": "1166",

          "Requirement": "M"
        },
        {
          "Position": "CN1-02",
          "Element": "782",

          "Requirement": "OP"
        },
        {
          "Position": "CN1-03",
          "Element": "332",

          "Requirement": "OP"
        },
        {
          "Position": "CN1-04",
          "Element": "127",

          "Requirement": "OP"
        },
        {
          "Position": "CN1-05",
          "Element": "338",

          "Requirement": "OP"
        },
        {
          "Position": "CN1-06",
          "Element": "799",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "PO3",
      "Name": "Additional Item Detail",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PO3-01",
          "Element": "371",

          "Requirement": "M"
        },
        {
          "Position": "PO3-02",
          "Element": "373",

          "Requirement": "OP"
        },
        {
          "Position": "PO3-03",
          "Element": "236",

          "Requirement": "C"
        },
        {
          "Position": "PO3-04",
          "Element": "212",

          "Requirement": "OP"
        },
        {
          "Position": "PO3-05",
          "Element": "639",

          "Requirement": "C"
        },
        {
          "Position": "PO3-06",
          "Element": "380",

          "Requirement": "M"
        },
        {
          "Position": "PO3-07",
          "Element": "355",

          "Requirement": "M"
        },
        {
          "Position": "PO3-08",
          "Element": "352",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "PO4",
      "Name": "Item Physical Details",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "PO4-01",
          "Element": "356",

          "Requirement": "OP"
        },
        {
          "Position": "PO4-02",
          "Element": "357",

          "Requirement": "C"
        },
        {
          "Position": "PO4-03",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "PO4-04",
          "Element": "103",

          "Requirement": "C"
        },
        {
          "Position": "PO4-05",
          "Element": "187",

          "Requirement": "OP"
        },
        {
          "Position": "PO4-06",
          "Element": "384",

          "Requirement": "C"
        },
        {
          "Position": "PO4-07",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "PO4-08",
          "Element": "385",

          "Requirement": "C"
        },
        {
          "Position": "PO4-09",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "PO4-10",
          "Element": "82",

          "Requirement": "C"
        },
        {
          "Position": "PO4-11",
          "Element": "189",

          "Requirement": "C"
        },
        {
          "Position": "PO4-12",
          "Element": "65",

          "Requirement": "C"
        },
        {
          "Position": "PO4-13",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "PO4-14",
          "Element": "810",

          "Requirement": "OP"
        },
        {
          "Position": "PO4-15",
          "Element": "752",

          "Requirement": "OP"
        },
        {
          "Position": "PO4-16",
          "Element": "350",

          "Requirement": "C"
        },
        {
          "Position": "PO4-17",
          "Element": "350",

          "Requirement": "OP"
        },
        {
          "Position": "PO4-18",
          "Element": "1470",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "IT8",
      "Name": "Conditions of Sale",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "IT8-01",
          "Element": "563",

          "Requirement": "C"
        },
        {
          "Position": "IT8-02",
          "Element": "306",

          "Requirement": "C"
        },
        {
          "Position": "IT8-03",
          "Element": "610",

          "Requirement": "C"
        },
        {
          "Position": "IT8-04",
          "Element": "508",

          "Requirement": "OP"
        },
        {
          "Position": "IT8-05",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "IT8-06",
          "Element": "559",

          "Requirement": "OP"
        },
        {
          "Position": "IT8-07",
          "Element": "566",

          "Requirement": "C"
        },
        {
          "Position": "IT8-08",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-09",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-10",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-11",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-12",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-13",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-14",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-15",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-16",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-17",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-18",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-19",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-20",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-21",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-22",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-23",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-24",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-25",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "IT8-26",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "IT8-27",
          "Element": "234",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "SDQ",
      "Name": "Destination Quantity",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "SDQ-01",
          "Element": "355",

          "Requirement": "M"
        },
        {
          "Position": "SDQ-02",
          "Element": "66",

          "Requirement": "OP"
        },
        {
          "Position": "SDQ-03",
          "Element": "67",

          "Requirement": "M"
        },
        {
          "Position": "SDQ-04",
          "Element": "380",

          "Requirement": "M"
        },
        {
          "Position": "SDQ-05",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-06",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-07",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-08",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-09",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-10",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-11",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-12",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-13",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-14",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-15",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-16",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-17",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-18",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-19",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-20",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-21",
          "Element": "67",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-22",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SDQ-23",
          "Element": "310",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "IT3",
      "Name": "Additional Item Data",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "IT3-01",
          "Element": "382",

          "Requirement": "C"
        },
        {
          "Position": "IT3-02",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "IT3-03",
          "Element": "368",

          "Requirement": "C"
        },
        {
          "Position": "IT3-04",
          "Element": "383",

          "Requirement": "C"
        },
        {
          "Position": "IT3-05",
          "Element": "371",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "QTY",
      "Name": "Quantity",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "QTY-01",
          "Element": "673",

          "Requirement": "M"
        },
        {
          "Position": "QTY-02",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "QTY-03",
          "Element": "C001",

          "Requirement": "OP",
          "Composites": [
            {
              "Position": "01",
              "Element": "355",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "03",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "04",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "05",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "06",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "07",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "08",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "09",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "10",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "11",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "12",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "13",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "14",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "15",
              "Element": "649",

              "Requirement": "OP"
            }
          ]
        },
        {
          "Position": "QTY-04",
          "Element": "61",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "SCH",
      "Name": "Line Item Schedule",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "SCH-01",
          "Element": "380",

          "Requirement": "M"
        },
        {
          "Position": "SCH-02",
          "Element": "355",

          "Requirement": "M"
        },
        {
          "Position": "SCH-03",
          "Element": "98",

          "Requirement": "OP"
        },
        {
          "Position": "SCH-04",
          "Element": "93",

          "Requirement": "C"
        },
        {
          "Position": "SCH-05",
          "Element": "374",

          "Requirement": "M"
        },
        {
          "Position": "SCH-06",
          "Element": "373",

          "Requirement": "M"
        },
        {
          "Position": "SCH-07",
          "Element": "337",

          "Requirement": "OP"
        },
        {
          "Position": "SCH-08",
          "Element": "374",

          "Requirement": "C"
        },
        {
          "Position": "SCH-09",
          "Element": "373",

          "Requirement": "C"
        },
        {
          "Position": "SCH-10",
          "Element": "337",

          "Requirement": "C"
        },
        {
          "Position": "SCH-11",
          "Element": "326",

          "Requirement": "OP"
        },
        {
          "Position": "SCH-12",
          "Element": "350",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "LS",
      "Name": "Loop Header",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "LS-01",
          "Element": "447",

          "Requirement": "M"
        }
      ]
    },
    {
      "Segment": "LE",
      "Name": "Loop Trailer",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "LE-01",
          "Element": "447",

          "Requirement": "M"
        }
      ]
    },
    {
      "Segment": "SLN",
      "Name": "Subline Item Detail",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "SLN-01",
          "Element": "350",

          "Requirement": "M"
        },
        {
          "Position": "SLN-02",
          "Element": "350",

          "Requirement": "OP"
        },
        {
          "Position": "SLN-03",
          "Element": "662",

          "Requirement": "M"
        },
        {
          "Position": "SLN-04",
          "Element": "380",

          "Requirement": "C"
        },
        {
          "Position": "SLN-05",
          "Element": "C001",

          "Requirement": "C",
          "Composites": [
            {
              "Position": "01",
              "Element": "355",

              "Requirement": "M"
            },
            {
              "Position": "02",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "03",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "04",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "05",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "06",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "07",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "08",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "09",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "10",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "11",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "12",
              "Element": "649",

              "Requirement": "OP"
            },
            {
              "Position": "13",
              "Element": "355",

              "Requirement": "OP"
            },
            {
              "Position": "14",
              "Element": "1018",

              "Requirement": "OP"
            },
            {
              "Position": "15",
              "Element": "649",

              "Requirement": "OP"
            }
          ]
        },
        {
          "Position": "SLN-06",
          "Element": "212",

          "Requirement": "C"
        },
        {
          "Position": "SLN-07",
          "Element": "639",

          "Requirement": "OP"
        },
        {
          "Position": "SLN-08",
          "Element": "662",

          "Requirement": "OP"
        },
        {
          "Position": "SLN-09",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-10",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-11",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-12",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-13",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-14",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-15",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-16",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-17",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-18",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-19",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-20",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-21",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-22",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-23",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-24",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-25",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-26",
          "Element": "234",

          "Requirement": "C"
        },
        {
          "Position": "SLN-27",
          "Element": "235",

          "Requirement": "C"
        },
        {
          "Position": "SLN-28",
          "Element": "234",

          "Requirement": "C"
        }
      ]
    },
    {
      "Segment": "CTT",
      "Name": "Transaction Totals",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "CTT-01",
          "Element": "354",

          "Requirement": "M"
        },
        {
          "Position": "CTT-02",
          "Element": "347",

          "Requirement": "OP"
        },
        {
          "Position": "CTT-03",
          "Element": "81",

          "Requirement": "C"
        },
        {
          "Position": "CTT-04",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "CTT-05",
          "Element": "183",

          "Requirement": "C"
        },
        {
          "Position": "CTT-06",
          "Element": "355",

          "Requirement": "C"
        },
        {
          "Position": "CTT-07",
          "Element": "352",

          "Requirement": "OP"
        }
      ]
    },
    {
      "Segment": "SE",
      "Name": "Transaction Set Trailer",
      "Version": "X12 4010",
      "Elements": [
        {
          "Position": "SE-01",
          "Element": "96",

          "Requirement": "M"
        },
        {
          "Position": "SE-02",
          "Element": "329",

          "Requirement": "M"
        }
      ]
    }
  ]
}

newData = {
   "Segments": [
    {
      "Position": { "$numberLong": "1" },
      "Segment": "ST",
      "Requirement": "M",
      "Max": "1",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "2" },
      "Segment": "BIG",
      "Requirement": "M",
      "Max": "1",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "4" },
      "Segment": "CUR",
      "Requirement": "OP",
      "Max": "1",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "5" },
      "Segment": "REF",
      "Requirement": "OP",
      "Max": "12",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "8" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "200",
      "Segments": [
        {
          "Position": 1,
          "Segment": "N1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "N2",
          "Requirement": "M",
          "Max": "2"
        },
        {
          "Position": 3,
          "Segment": "N3",
          "Requirement": "OP",
          "Max": "2"
        },
        {
          "Position": 4,
          "Segment": "N4",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 5,
          "Segment": "REF",
          "Requirement": "OP",
          "Max": "12"
        },
        {
          "Position": 6,
          "Segment": "PER",
          "Requirement": "OP",
          "Max": "3"
        },
        {
          "Position": 7,
          "Segment": "DMG",
          "Requirement": "OP",
          "Max": "1"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "9" },
      "Segment": "ITD",
      "Requirement": "OP",
      "Max": ">1",
      "Elements": []
    },
    
    {
      "Position": { "$numberLong": "24" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "200000",
      "Segments": [
        {
          "Position": 1,
          "Segment": "IT1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 3,
          "Segment": "QTY",
          "Requirement": "OP",
          "Max": "5"
        },
        {
          "Position": 4,
          "Segment": "CUR",
          "Requirement": "M",
          "Max": "1"
        },
        {
          "Position": 5,
          "Segment": "IT3",
          "Requirement": "M",
          "Max": "5"
        },
        {
          "Position": 6,
          "Segment": "TXI",
          "Requirement": "OP",
          "Max": "10"
        },
        {
          "Position": 7,
          "Segment": "CTP",
          "Requirement": "M",
          "Max": "25"
        },
        {
          "Position": 8,
          "Segment": "PAM",
          "Requirement": "OP",
          "Max": "10"
        },
        {
          "Position": 9,
          "Segment": "MEA",
          "Requirement": "OP",
          "Max": "40"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "25" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "1000",
      "Segments": [
        {
          "Position": 1,
          "Segment": "PID",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "MEA",
          "Requirement": "OP",
          "Max": "10"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "29" },
      "Segment": "ITD",
      "Requirement": "OP",
      "Max": "2",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "30" },
      "Segment": "REF",
      "Requirement": "OP",
      "Max": ">1",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "38" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "25",
      "Segments": [
        {
          "Position": 1,
          "Segment": "SAC",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "TXI",
          "Requirement": "OP",
          "Max": "10"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "39" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "1000",
      "Segments": [
        {
          "Position": 1,
          "Segment": "SLN",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "DTM",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 3,
          "Segment": "REF",
          "Requirement": "OP",
          "Max": ">1"
        },
        {
          "Position": 4,
          "Segment": "PID",
          "Requirement": "OP",
          "Max": "1000"
        },
        {
          "Position": 5,
          "Segment": "SAC",
          "Requirement": "OP",
          "Max": "25"
        },
        {
          "Position": 6,
          "Segment": "TC2",
          "Requirement": "OP",
          "Max": "2"
        },
        {
          "Position": 7,
          "Segment": "TXI",
          "Requirement": "M",
          "Max": "10"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "40" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "200",
      "Segments": [
        {
          "Position": 1,
          "Segment": "N1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "N2",
          "Requirement": "OP",
          "Max": "2"
        },
        {
          "Position": 3,
          "Segment": "N3",
          "Requirement": "M",
          "Max": "2"
        },
        {
          "Position": 4,
          "Segment": "N4",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 5,
          "Segment": "REF",
          "Requirement": "OP",
          "Max": "12"
        },
        {
          "Position": 6,
          "Segment": "PER",
          "Requirement": "OP",
          "Max": "3"
        },
        {
          "Position": 7,
          "Segment": "DMG",
          "Requirement": "OP",
          "Max": "1"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "41" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "10",
      "Segments": [
        {
          "Position": 1,
          "Segment": "LM",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "LQ",
          "Requirement": "OP",
          "Max": "100"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "42" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": ">1",
      "Segments": [
        {
          "Position": 3,
          "Segment": "DTM",
          "Requirement": "OP",
          "Max": ">1"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "43" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": ">1",
      "Segments": [
        {
          "Position": 1,
          "Segment": "FA1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "FA2",
          "Requirement": "OP",
          "Max": ">1"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "44" },
      "Segment": "TDS",
      "Requirement": "OP",
      "Max": "1",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "45" },
      "Segment": "TXI",
      "Requirement": "OP",
      "Max": "10",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "48" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": "25",
      "Segments": [
        {
          "Position": 1,
          "Segment": "SAC",
          "Requirement": "M",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "TXI",
          "Requirement": "M",
          "Max": "10"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "49" },
      "Segment": "Loop",
      "Requirement": "OP",
      "Max": ">1",
      "Segments": [
        
        {
          "Position": 2,
          "Segment": "PID",
          "Requirement": "M",
          "Max": "1"
        }
      ],
      "Elements": []
    },
    {
      "Position": { "$numberLong": "50" },
      "Segment": "CTT",
      "Requirement": "OP",
      "Max": "1",
      "Elements": []
    },
    {
      "Position": { "$numberLong": "51" },
      "Segment": "SE",
      "Requirement": "OP",
      "Max": "1",
      "Elements": []
    }
  ]
}

elements = {
   
}


def generatebasedoc(data, segment_names):
    filtered_segments = {"Segments":[]}
    loop_segments = {"Position": "","Segment": "","Requirement": "","Max": ""}

    loop = {"Segments": []}

    for segment in data["Segments"]:


        if segment["Segment"] == "Loop":

            
            loop_segments["Position"] = segment["Position"]
            loop_segments["Segment"] = segment["Segment"]
            loop_segments["Requirement"] = segment["Requirement"]
            loop_segments["Max"] = segment["Max"]

            for segloop in segment["Segments"]:
             
                if segloop["Segment"] in segment_names:
                    loop["Segments"].append(segloop)

            print(len(loop["Segments"]))    
            if len(loop["Segments"]) != 0:
                loop_segments["Segments"] = loop["Segments"]
                toto = loop_segments
                print(loop_segments)
                filtered_segments["Segments"].append(toto)
                print("paso")




        print(segment["Segment"])
        if segment["Segment"] in segment_names:
            
            filtered_segments["Segments"].append(segment)
      
    return filtered_segments



def emptyelementgenerator(data):

  filtered_segments = {}
  index = 0
  for segment in data["Segments"]:
    if segment["Segment"] == "Loop":
        for segloop in segment["Segments"]:
           segloop["Elements"] = []
    else:
       segment["Elements"] = []
    
      
  return filtered_segments

def elementAdder(data, segment_names):

  filtered_segments = {}
  index = 0
  for segment in data["Segments"]:
    if segment["Segment"] == "Loop":
        lflag = False
        for segloop in segment["Segments"]:
           for segList in segment_element["Segments"]:
              if segloop["Segment"] == segList["Segment"]:
                 segloop["Elements"] = segList["Elements"]
                 lflag = True
                 break
           if not lflag: 
            print(segloop["Segment"] + " is missing LOOP")  

    if segment["Segment"] in segment_names:
      sflag = False
      for segLista in segment_element["Segments"]:
              if segment["Segment"] == segLista["Segment"]:
                 segment["Elements"] = segLista["Elements"]
                 sflag = True
                 break
      if not sflag and segment["Segment"] != "Loop":        
        print(segment["Segment"] + " is missing NORMAL" )
      
  return filtered_segments



# Example usage


segment_names = ["ST", "BIG", "CUR", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "ITD", "IT1", "TXI", "CTP", "REF", "TDS", "TXI", "SAC", "TXI", "CTT", "SE", ]  # Your desired segments

pipo = generatebasedoc(newData, segment_names)

#print(pipo)

jaja = emptyelementgenerator(newData)

filtered_data = elementAdder(newData, segment_names)



filtered_segs = [segment for segment in pipo["Segments"]]

json_objects = [json.dumps(segment) for segment in filtered_segs]


def write_string_to_file(output_string, output_file):
  """
  This function writes a string to a text file.

  Args:
      output_string: The string to be written to the file.
      output_file: The path to the output file (including the .txt extension).
  """
  try:
    with open(output_file, 'w') as f:
      f.write(output_string)
  except IOError:
    print(f"Error writing to file: {output_file}")

# Example usage
output_string = "This is the string content to be written to the file.\n"
output_file = "string_output.txt"

write_string_to_file(output_string, output_file)

print(f"Output written to: {output_file}")



#print(json.dumps(filtered_data))

newj = str(json_objects).replace("'","")
#print(newj)

write_string_to_file(newj,"edi.txt")

# Print the filtered data
#print(filtered_data)