import { EDITPDocument } from "./interfaces/EDIInterfaces";

export const EDITPDocs: EDITPDocument[] = [
    {
        "id": "666986518ccd42f7c223ad82",
        "Delimiters": ["*",">"],
        "EOL": ["~"],
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
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "ISA02",
                "Element": "I02",
                "Requirement": "M",
                "Type": "AN",
                "Min": 10,
                "Max": 10,
                "Conditions": []
              },
              {
                "Position": "ISA03",
                "Element": "I03",
                "Requirement": "M",
                "Type": "ID",
                "Min": 2,
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "ISA04",
                "Element": "I04",
                "Requirement": "M",
                "Type": "AN",
                "Min": 10,
                "Max": 10,
                "Conditions": []
              },
              {
                "Position": "ISA05",
                "Element": "I05",
                "Requirement": "M",
                "Type": "ID",
                "Min": 2,
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "ISA06",
                "Element": "I06",
                "Requirement": "M",
                "Type": "AN",
                "Min": 15,
                "Max": 15,
                "Conditions": []
              },
              {
                "Position": "ISA07",
                "Element": "I05",
                "Requirement": "M",
                "Type": "ID",
                "Min": 2,
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "ISA08",
                "Element": "I07",
                "Requirement": "M",
                "Type": "AN",
                "Min": 15,
                "Max": 15,
                "Conditions": []
              },
              {
                "Position": "ISA09",
                "Element": "I08",
                "Requirement": "M",
                "Type": "DT",
                "Min": 6,
                "Max": 6,
                "Conditions": []
              },
              {
                "Position": "ISA10",
                "Element": "I09",
                "Requirement": "M",
                "Type": "TM",
                "Min": 4,
                "Max": 4,
                "Conditions": []
              },
              {
                "Position": "ISA12",
                "Element": "I11",
                "Requirement": "M",
                "Type": "ID",
                "Min": 5,
                "Max": 5,
                "Conditions": []
              },
              {
                "Position": "ISA13",
                "Element": "I12",
                "Requirement": "M",
                "Type": "N0",
                "Min": 9,
                "Max": 9,
                "Conditions": []
              },
              {
                "Position": "ISA14",
                "Element": "I13",
                "Requirement": "M",
                "Type": "ID",
                "Min": 1,
                "Max": 1,
                "Conditions": []
              },
              {
                "Position": "ISA15",
                "Element": "I14",
                "Requirement": "M",
                "Type": "ID",
                "Min": 1,
                "Max": 1,
                "Conditions": []
              },
              {
                "Position": "ISA16",
                "Element": "I15",
                "Requirement": "M",
                "Type": "",
                "Min": 1,
                "Max": 1,
                "Conditions": []
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
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "GS02",
                "Element": "142",
                "Requirement": "M",
                "Type": "AN",
                "Min": 2,
                "Max": 15,
                "Conditions": []
              },
              {
                "Position": "GS03",
                "Element": "124",
                "Requirement": "M",
                "Type": "AN",
                "Min": 2,
                "Max": 15,
                "Conditions": []
              },
              {
                "Position": "GS04",
                "Element": "373",
                "Requirement": "M",
                "Type": "DT",
                "Min": 8,
                "Max": 8,
                "Conditions": []
              },
              {
                "Position": "GS05",
                "Element": "337",
                "Requirement": "M",
                "Type": "TM",
                "Min": 4,
                "Max": 8,
                "Conditions": []
              },
              {
                "Position": "GS06",
                "Element": "28",
                "Requirement": "M",
                "Type": "N0",
                "Min": 1,
                "Max": 9,
                "Conditions": []
              },
              {
                "Position": "GS07",
                "Element": "455",
                "Requirement": "M",
                "Type": "ID",
                "Min": 1,
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "GS08",
                "Element": "480",
                "Requirement": "M",
                "Type": "AN",
                "Min": 1,
                "Max": 12,
                "Conditions": []
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
                "Max": 3,
                "Conditions": []
              },
              {
                "Position": "ST02",
                "Element": "329",
                "Requirement": "M",
                "Type": "AN",
                "Min": 4,
                "Max": 9,
                "Conditions": []
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
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "BEG02",
                "Element": "92",
                "Requirement": "M",
                "Type": "ID",
                "Min": 2,
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "BEG03",
                "Element": "324",
                "Requirement": "M",
                "Type": "AN",
                "Min": 1,
                "Max": 22,
                "Conditions": []
              },
              {
                "Position": "BEG05",
                "Element": "373",
                "Requirement": "M",
                "Type": "DT",
                "Min": 8,
                "Max": 8,
                "Conditions": []
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
                "Max": 3,
                "Conditions": []
              },
              {
                "Position": "REF02",
                "Element": "127",
                "Requirement": "C",
                "Type": "AN",
                "Min": 1,
                "Max": 30,
                "Conditions": []
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
                "Max": 3,
                "Conditions": []
              },
              {
                "Position": "REF02",
                "Element": "127",
                "Requirement": "C",
                "Type": "AN",
                "Min": 1,
                "Max": 30,
                "Conditions": []
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
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "FOB04",
                "Element": "334",
                "Requirement": "O",
                "Type": "ID",
                "Min": 2,
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "FOB05",
                "Element": "335",
                "Requirement": "C",
                "Type": "ID",
                "Min": 3,
                "Max": 3,
                "Conditions": []
              },
              {
                "Position": "FOB06",
                "Element": "309",
                "Requirement": "C",
                "Type": "ID",
                "Min": 1,
                "Max": 2,
                "Conditions": []
              },
              {
                "Position": "FOB07",
                "Element": "352",
                "Requirement": "O",
                "Type": "AN",
                "Min": 1,
                "Max": 80,
                "Conditions": []
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
                "Max": 2,
                "Conditions": []
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
                "Max": 3,
                "Conditions": []
              },
              {
                "Position": "DTM02",
                "Element": "373",
                "Requirement": "C",
                "Type": "DT",
                "Min": 8,
                "Max": 8,
                "Conditions": []
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
                "Max": 3,
                "Conditions": []
              },
              {
                "Position": "DTM02",
                "Element": "373",
                "Requirement": "C",
                "Type": "DT",
                "Min": 8,
                "Max": 8,
                "Conditions": []
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
                "Max": 1,
                "Conditions": []
              },
              {
                "Position": "PKG02",
                "Element": "753",
                "Requirement": "O",
                "Type": "ID",
                "Min": 1,
                "Max": 5,
                "Conditions": []
              },
              {
                "Position": "PKG05",
                "Element": "352",
                "Requirement": "C",
                "Type": "AN",
                "Min": 1,
                "Max": 80,
                "Conditions": []
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
                "Max": 10,
                "Conditions": []
              },
              {
                "Position": "SE02",
                "Element": "329",
                "Requirement": "M",
                "Type": "AN",
                "Min": 4,
                "Max": 9,
                "Conditions": []
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
                "Max": 6,
                "Conditions": []
              },
              {
                "Position": "GE02",
                "Element": "28",
                "Requirement": "M",
                "Type": "N0",
                "Min": 1,
                "Max": 9,
                "Conditions": []
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
                "Max": 5,
                "Conditions": []
              },
              {
                "Position": "IEA02",
                "Element": "I12",
                "Requirement": "M",
                "Type": "N0",
                "Min": 9,
                "Max": 9,
                "Conditions": []
              }
            ]
          }
        ]
      }
];