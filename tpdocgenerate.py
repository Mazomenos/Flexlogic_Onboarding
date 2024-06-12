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
          "Position": 1,
          "Segment": "V1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "R4",
          "Requirement": "M",
          "Max": ">1"
        },
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
          "Position": 2,
          "Segment": "CRC",
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
          "Position": 1,
          "Segment": "V1",
          "Requirement": "OP",
          "Max": "1"
        },
        {
          "Position": 2,
          "Segment": "R4",
          "Requirement": "M",
          "Max": ">1"
        },
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
          "Position": 1,
          "Segment": "ISS",
          "Requirement": "OP",
          "Max": "1"
        },
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




def get_segments_by_name(data, segment_names):

  filtered_segments = {}
  for segment in data["Segments"]:
    if segment["Segment"] == "Loop":
        segment["Elements"] = []
        filtered_segments[segment["Segment"]] = segment
    if segment["Segment"] in segment_names:
      segment["Elements"] = []
      filtered_segments[segment["Segment"]] = segment
  return filtered_segments

# Example usage


segment_names = ["ST", "BIG", "CUR", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "ITD", "IT1", "TXI", "CTP", "REF", "TDS", "TXI", "SAC", "TXI", "CTT", "SE", ]  # Your desired segments

filtered_data = get_segments_by_name(data, segment_names)





# Print the filtered data
print(filtered_data)