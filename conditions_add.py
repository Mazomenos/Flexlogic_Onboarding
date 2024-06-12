import json

data = {
  "_id": {
    "$oid": "665a3613d4d3f329570821ec"
  },
  "Segments": [
    {
      "Position": 1,
      "Segment": "ISA",
      "Requirement": "M",
      "Max": "1",
      "Elements": [
        {
          "Position": "ISA01",
          "Element": "I01",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "ISA02",
          "Element": "I02",
          "Requirement": "M",
          "Type": "AN",
          "Min": 10,
          "Max": 10
        },
        {
          "Position": "ISA03",
          "Element": "I03",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "ISA04",
          "Element": "I04",
          "Requirement": "M",
          "Type": "AN",
          "Min": 10,
          "Max": 10
        },
        {
          "Position": "ISA05",
          "Element": "I05",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "ISA06",
          "Element": "I06",
          "Requirement": "M",
          "Type": "AN",
          "Min": 9,
          "Max": 10
        },
        {
          "Position": "ISA07",
          "Element": "I05",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "ISA08",
          "Element": "I07",
          "Requirement": "M",
          "Type": "AN",
          "Min": 15,
          "Max": 15
        },
        {
          "Position": "ISA09",
          "Element": "I08",
          "Requirement": "M",
          "Type": "DT",
          "Min": 6,
          "Max": 6
        },
        {
          "Position": "ISA10",
          "Element": "I09",
          "Requirement": "M",
          "Type": "TM",
          "Min": 4,
          "Max": 4
        },
        {
          "Position": "ISA12",
          "Element": "I11",
          "Requirement": "M",
          "Type": "ID",
          "Min": 5,
          "Max": 5
        },
        {
          "Position": "ISA13",
          "Element": "I12",
          "Requirement": "M",
          "Type": "N0",
          "Min": 9,
          "Max": 9
        },
        {
          "Position": "ISA14",
          "Element": "I13",
          "Requirement": "M",
          "Type": "ID",
          "Min": 1,
          "Max": 1
        },
        {
          "Position": "ISA15",
          "Element": "I14",
          "Requirement": "M",
          "Type": "ID",
          "Min": 1,
          "Max": 1
        },
        {
          "Position": "ISA16",
          "Element": "I15",
          "Requirement": "M",
          "Type": "",
          "Min": 1,
          "Max": 1
        }
      ]
    },
    {
      "Position": 2,
      "Segment": "GS",
      "Requirement": "M",
      "Max": "1",
      "Elements": [
        {
          "Position": "GS01",
          "Element": "479",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "GS02",
          "Element": "142",
          "Requirement": "M",
          "Type": "AN",
          "Min": 2,
          "Max": 15
        },
        {
          "Position": "GS03",
          "Element": "124",
          "Requirement": "M",
          "Type": "AN",
          "Min": 2,
          "Max": 15
        },
        {
          "Position": "GS04",
          "Element": "373",
          "Requirement": "M",
          "Type": "DT",
          "Min": 8,
          "Max": 8
        },
        {
          "Position": "GS05",
          "Element": "337",
          "Requirement": "M",
          "Type": "TM",
          "Min": 4,
          "Max": 8
        },
        {
          "Position": "GS06",
          "Element": "28",
          "Requirement": "M",
          "Type": "N0",
          "Min": 1,
          "Max": 9
        },
        {
          "Position": "GS07",
          "Element": "455",
          "Requirement": "M",
          "Type": "ID",
          "Min": 1,
          "Max": 2
        },
        {
          "Position": "GS08",
          "Element": "480",
          "Requirement": "M",
          "Type": "AN",
          "Min": 1,
          "Max": 12
        }
      ]
    },
    {
      "Position": 3,
      "Segment": "ST",
      "Requirement": "M",
      "Max": "1",
      "Elements": [
        {
          "Position": "ST01",
          "Element": "143",
          "Requirement": "M",
          "Type": "ID",
          "Min": 3,
          "Max": 3
        },
        {
          "Position": "ST02",
          "Element": "329",
          "Requirement": "M",
          "Type": "AN",
          "Min": 4,
          "Max": 9
        }
      ]
    },
    {
      "Position": 4,
      "Segment": "BEG",
      "Requirement": "M",
      "Max": "1",
      "Elements": [
        {
          "Position": "BEG01",
          "Element": "353",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "BEG02",
          "Element": "92",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "BEG03",
          "Element": "324",
          "Requirement": "M",
          "Type": "AN",
          "Min": 1,
          "Max": 22
        },
        {
          "Position": "BEG05",
          "Element": "373",
          "Requirement": "M",
          "Type": "DT",
          "Min": 8,
          "Max": 8
        }
      ]
    },
    {
      "Position": 5,
      "Segment": "REF",
      "Requirement": "M",
      "Max": ">1",
      "Elements": [
        {
          "Position": "REF01",
          "Element": "128",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 3
        },
        {
          "Position": "REF02",
          "Element": "127",
          "Requirement": "C",
          "Type": "AN",
          "Min": 1,
          "Max": 30
        }
      ]
    },
    {
      "Position": 6,
      "Segment": "REF",
      "Requirement": "OP",
      "Max": ">1",
      "Elements": [
        {
          "Position": "REF01",
          "Element": "128",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 3
        },
        {
          "Position": "REF02",
          "Element": "127",
          "Requirement": "C",
          "Type": "AN",
          "Min": 1,
          "Max": 30
        }
      ]
    },
    {
      "Position": 7,
      "Segment": "FOB",
      "Requirement": "OP",
      "Max": ">1",
      "Elements": [
        {
          "Position": "FOB01",
          "Element": "146",
          "Requirement": "M",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "FOB04",
          "Element": "334",
          "Requirement": "O",
          "Type": "ID",
          "Min": 2,
          "Max": 2
        },
        {
          "Position": "FOB05",
          "Element": "335",
          "Requirement": "C",
          "Type": "ID",
          "Min": 3,
          "Max": 3
        },
        {
          "Position": "FOB06",
          "Element": "309",
          "Requirement": "C",
          "Type": "ID",
          "Min": 1,
          "Max": 2
        },
        {
          "Position": "FOB07",
          "Element": "352",
          "Requirement": "O",
          "Type": "AN",
          "Min": 1,
          "Max": 80
        }
      ]
    },
    {
      "Position": 8,
      "Segment": "CSH",
      "Requirement": "M",
      "Max": "5",
      "Elements": [
        {
          "Position": "CSH01",
          "Element": "563",
          "Requirement": "O",
          "Type": "ID",
          "Min": 1,
          "Max": 2
        }
      ]
    },
    {
      "Position": 9,
      "Segment": "DTM",
      "Requirement": "OP",
      "Max": "10",
      "Elements": [
        {
          "Position": "DTM01",
          "Element": "374",
          "Requirement": "M",
          "Type": "ID",
          "Min": 3,
          "Max": 3
        },
        {
          "Position": "DTM02",
          "Element": "373",
          "Requirement": "C",
          "Type": "DT",
          "Min": 8,
          "Max": 8
        }
      ]
    },
    {
      "Position": 10,
      "Segment": "DTM",
      "Requirement": "OP",
      "Max": "10",
      "Elements": [
        {
          "Position": "DTM01",
          "Element": "374",
          "Requirement": "M",
          "Type": "ID",
          "Min": 3,
          "Max": 3
        },
        {
          "Position": "DTM02",
          "Element": "373",
          "Requirement": "C",
          "Type": "DT",
          "Min": 8,
          "Max": 8
        }
      ]
    },
    {
      "Position": 11,
      "Segment": "PKG",
      "Requirement": "OP",
      "Max": "200",
      "Elements": [
        {
          "Position": "PKG01",
          "Element": "349",
          "Requirement": "C",
          "Type": "ID",
          "Min": 1,
          "Max": 1
        },
        {
          "Position": "PKG02",
          "Element": "753",
          "Requirement": "O",
          "Type": "ID",
          "Min": 1,
          "Max": 5
        },
        {
          "Position": "PKG05",
          "Element": "352",
          "Requirement": "C",
          "Type": "AN",
          "Min": 1,
          "Max": 80
        }
      ]
    },
    {
      "Position": 12,
      "Segment": "LOOP",
      "Requirement": "",
      "Max": "1000",
      "Segments": [
        {
          "Position": 1,
          "Segment": "N9",
          "Requirement": "M",
          "Max": "1",
          "Elements": [
            {
              "Position": "N901",
              "Element": "128",
              "Requirement": "M",
              "Type": "ID",
              "Min": 2,
              "Max": 3
            },
            {
              "Position": "N902",
              "Element": "127",
              "Requirement": "C",
              "Type": "AN",
              "Min": 1,
              "Max": 30
            }
          ]
        },
        {
          "Position": 2,
          "Segment": "MSG",
          "Requirement": "M",
          "Max": "1000",
          "Elements": [
            {
              "Position": "MSG01",
              "Element": "933",
              "Requirement": "M",
              "Type": "AN",
              "Min": 1,
              "Max": 264
            }
          ]
        }
      ]
    },
    {
      "Position": 13,
      "Segment": "LOOP",
      "Requirement": "",
      "Max": "200",
      "Segments": [
        {
          "Position": 1,
          "Segment": "N1",
          "Requirement": "M",
          "Max": "1",
          "Elements": [
            {
              "Position": "N101",
              "Element": "98",
              "Requirement": "M",
              "Type": "ID",
              "Min": 2,
              "Max": 3
            },
            {
              "Position": "N103",
              "Element": "66",
              "Requirement": "M",
              "Type": "ID",
              "Min": 1,
              "Max": 2
            },
            {
              "Position": "N104",
              "Element": "67",
              "Requirement": "M",
              "Type": "AN",
              "Min": 2,
              "Max": 80
            }
          ]
        }
      ]
    },
    {
      "Position": 14,
      "Segment": "LOOP",
      "Requirement": "",
      "Max": "100000",
      "Segments": [
        {
          "Position": 1,
          "Segment": "PO1",
          "Requirement": "M",
          "Max": "1",
          "Elements": [
            {
              "Position": "PO101",
              "Element": "350",
              "Requirement": "M",
              "Type": "AN",
              "Min": 1,
              "Max": 20
            },
            {
              "Position": "PO102",
              "Element": "330",
              "Requirement": "M",
              "Type": "R",
              "Min": 1,
              "Max": 15
            },
            {
              "Position": "PO103",
              "Element": "355",
              "Requirement": "M",
              "Type": "ID",
              "Min": 2,
              "Max": 2
            },
            {
              "Position": "PO104",
              "Element": "212",
              "Requirement": "M",
              "Type": "R",
              "Min": 1,
              "Max": 17
            },
            {
              "Position": "PO105",
              "Element": "639",
              "Requirement": "M",
              "Type": "ID",
              "Min": 2,
              "Max": 2
            },
            {
              "Position": "PO106",
              "Element": "235",
              "Requirement": "M",
              "Type": "ID",
              "Min": 2,
              "Max": 2
            },
            {
              "Position": "PO107",
              "Element": "234",
              "Requirement": "M",
              "Type": "AN",
              "Min": 1,
              "Max": 48
            }
          ]
        }
      ]
    },
    {
      "Position": 15,
      "Segment": "LOOP",
      "Requirement": "",
      "Max": "1",
      "Segments": [
        {
          "Position": 1,
          "Segment": "CTT",
          "Requirement": "M",
          "Max": "1",
          "Elements": [
            {
              "Position": "CTT01",
              "Element": "354",
              "Requirement": "M",
              "Type": "N0",
              "Min": 1,
              "Max": 6
            },
            {
              "Position": "CTT02",
              "Element": "347",
              "Requirement": "M",
              "Type": "R",
              "Min": 1,
              "Max": 10
            }
          ]
        }
      ]
    },
    {
      "Position": 16,
      "Segment": "SE",
      "Requirement": "M",
      "Max": "1",
      "Elements": [
        {
          "Position": "SE01",
          "Element": "96",
          "Requirement": "M",
          "Type": "N0",
          "Min": 1,
          "Max": 10
        },
        {
          "Position": "SE02",
          "Element": "329",
          "Requirement": "M",
          "Type": "AN",
          "Min": 4,
          "Max": 9
        }
      ]
    },
    {
      "Position": 17,
      "Segment": "GE",
      "Requirement": "M",
      "Max": "1",
      "Elements": [
        {
          "Position": "GE01",
          "Element": "97",
          "Requirement": "M",
          "Type": "N0",
          "Min": 1,
          "Max": 6
        },
        {
          "Position": "GE02",
          "Element": "28",
          "Requirement": "M",
          "Type": "N0",
          "Min": 1,
          "Max": 9
        }
      ]
    },
    {
      "Position": 18,
      "Segment": "IEA",
      "Requirement": "M",
      "Max": "1",
      "Elements": [
        {
          "Position": "IEA01",
          "Element": "I16",
          "Requirement": "M",
          "Type": "N0",
          "Min": 1,
          "Max": 5
        },
        {
          "Position": "IEA02",
          "Element": "I12",
          "Requirement": "M",
          "Type": "N0",
          "Min": 9,
          "Max": 9
        }
      ]
    }
  ]
}

def add_conditions(data):
  segments = data["Segments"]
  for segment in segments:
    elements = segment.get("Elements", [])  # Use get() with default []
    for element in elements:
      element["Conditions"] = []
  return data

data_with_conditions = add_conditions(data)
print(json.dumps(data_with_conditions))