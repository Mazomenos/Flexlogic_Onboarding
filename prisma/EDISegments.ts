import { EDISegment } from "./interfaces/EDIInterfaces";
export const EDISegments: EDISegment[] = [
  {
    Segment: "ST",
    Name: "Transaction Set Header",
    Version: "X12 4010",
    Elements: [
      {
        Position: "ST-01",
        Element: "143",

        Requirement: "M",
      },
      {
        Position: "ST-02",
        Element: "329",

        Requirement: "M",
      },
    ],
  },
  {
    Segment: "BEG",
    Name: "Beginning Segment for Purchase Order",
    Version: "X12 4010",
    Elements: [
      {
        Position: "BEG-01",
        Element: "353",

        Requirement: "M",
      },
      {
        Position: "BEG-02",
        Element: "92",

        Requirement: "M",
      },
      {
        Position: "BEG-03",
        Element: "324",

        Requirement: "M",
      },
      {
        Position: "BEG-04",
        Element: "328",

        Requirement: "OP",
      },
      {
        Position: "BEG-05",
        Element: "373",

        Requirement: "M",
      },
      {
        Position: "BEG-06",
        Element: "367",

        Requirement: "OP",
      },
      {
        Position: "BEG-07",
        Element: "587",

        Requirement: "OP",
      },
      {
        Position: "BEG-08",
        Element: "1019",

        Requirement: "OP",
      },
      {
        Position: "BEG-09",
        Element: "1166",

        Requirement: "OP",
      },
      {
        Position: "BEG-10",
        Element: "1232",

        Requirement: "OP",
      },
      {
        Position: "BEG-11",
        Element: "786",

        Requirement: "OP",
      },
      {
        Position: "BEG-12",
        Element: "640",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "CUR",
    Name: "Currency",
    Version: "X12 4010",
    Elements: [
      {
        Position: "CUR-01",
        Element: "98",

        Requirement: "M",
      },
      {
        Position: "CUR-02",
        Element: "100",

        Requirement: "M",
      },
      {
        Position: "CUR-03",
        Element: "280",

        Requirement: "OP",
      },
      {
        Position: "CUR-04",
        Element: "98",

        Requirement: "OP",
      },
      {
        Position: "CUR-05",
        Element: "100",

        Requirement: "OP",
      },
      {
        Position: "CUR-06",
        Element: "669",

        Requirement: "OP",
      },
      {
        Position: "CUR-07",
        Element: "374",

        Requirement: "C",
      },
      {
        Position: "CUR-08",
        Element: "373",

        Requirement: "OP",
      },
      {
        Position: "CUR-09",
        Element: "337",

        Requirement: "OP",
      },
      {
        Position: "CUR-10",
        Element: "374",

        Requirement: "C",
      },
      {
        Position: "CUR-11",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "CUR-12",
        Element: "337",

        Requirement: "C",
      },
      {
        Position: "CUR-13",
        Element: "374",

        Requirement: "C",
      },
      {
        Position: "CUR-14",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "CUR-15",
        Element: "337",

        Requirement: "C",
      },
      {
        Position: "CUR-16",
        Element: "374",

        Requirement: "C",
      },
      {
        Position: "CUR-17",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "CUR-18",
        Element: "337",

        Requirement: "C",
      },
      {
        Position: "CUR-19",
        Element: "374",

        Requirement: "C",
      },
      {
        Position: "CUR-20",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "CUR-21",
        Element: "337",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "REF",
    Name: "Reference Identification",
    Version: "X12 4010",
    Elements: [
      {
        Position: "REF-01",
        Element: "128",

        Requirement: "M",
      },
      {
        Position: "REF-02",
        Element: "127",

        Requirement: "C",
      },
      {
        Position: "REF-03",
        Element: "352",

        Requirement: "C",
      },
      {
        Position: "REF-04",
        Element: "C040",

        Requirement: "OP",
        Composites: [
          {
            Position: "01",
            Element: "128",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "127",

            Requirement: "M",
          },
          {
            Position: "03",
            Element: "128",

            Requirement: "C",
          },
          {
            Position: "04",
            Element: "127",

            Requirement: "C",
          },
          {
            Position: "05",
            Element: "128",

            Requirement: "C",
          },
          {
            Position: "06",
            Element: "127",

            Requirement: "C",
          },
        ],
      },
    ],
  },
  {
    Segment: "PER",
    Name: "Administrative Communications Contact",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PER-01",
        Element: "366",

        Requirement: "M",
      },
      {
        Position: "PER-02",
        Element: "93",

        Requirement: "OP",
      },
      {
        Position: "PER-03",
        Element: "365",

        Requirement: "C",
      },
      {
        Position: "PER-04",
        Element: "364",

        Requirement: "C",
      },
      {
        Position: "PER-05",
        Element: "365",

        Requirement: "C",
      },
      {
        Position: "PER-06",
        Element: "364",

        Requirement: "C",
      },
      {
        Position: "PER-07",
        Element: "365",

        Requirement: "C",
      },
      {
        Position: "PER-08",
        Element: "364",

        Requirement: "C",
      },
      {
        Position: "PER-09",
        Element: "443",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "TAX",
    Name: "Tax Reference",
    Version: "X12 4010",
    Elements: [
      {
        Position: "TAX-01",
        Element: "325",

        Requirement: "C",
      },
      {
        Position: "TAX-02",
        Element: "309",

        Requirement: "C",
      },
      {
        Position: "TAX-03",
        Element: "310",

        Requirement: "C",
      },
      {
        Position: "TAX-04",
        Element: "309",

        Requirement: "C",
      },
      {
        Position: "TAX-05",
        Element: "310",

        Requirement: "C",
      },
      {
        Position: "TAX-06",
        Element: "309",

        Requirement: "C",
      },
      {
        Position: "TAX-07",
        Element: "310",

        Requirement: "C",
      },
      {
        Position: "TAX-08",
        Element: "309",

        Requirement: "C",
      },
      {
        Position: "TAX-09",
        Element: "310",

        Requirement: "C",
      },
      {
        Position: "TAX-10",
        Element: "309",

        Requirement: "C",
      },
      {
        Position: "TAX-11",
        Element: "310",

        Requirement: "C",
      },
      {
        Position: "TAX-12",
        Element: "441",

        Requirement: "OP",
      },
      {
        Position: "TAX-13",
        Element: "1179",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "FOB",
    Name: "F.O.B. Related Instructions",
    Version: "X12 4010",
    Elements: [
      {
        Position: "FOB-01",
        Element: "146",

        Requirement: "M",
      },
      {
        Position: "FOB-02",
        Element: "309",

        Requirement: "C",
      },
      {
        Position: "FOB-03",
        Element: "352",

        Requirement: "OP",
      },
      {
        Position: "FOB-04",
        Element: "334",

        Requirement: "OP",
      },
      {
        Position: "FOB-05",
        Element: "335",

        Requirement: "C",
      },
      {
        Position: "FOB-06",
        Element: "309",

        Requirement: "C",
      },
      {
        Position: "FOB-07",
        Element: "352",

        Requirement: "OP",
      },
      {
        Position: "FOB-08",
        Element: "54",

        Requirement: "OP",
      },
      {
        Position: "FOB-09",
        Element: "352",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "CTP",
    Name: "Pricing Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "CTP-01",
        Element: "687",

        Requirement: "OP",
      },
      {
        Position: "CTP-02",
        Element: "236",

        Requirement: "C",
      },
      {
        Position: "CTP-03",
        Element: "212",

        Requirement: "C",
      },
      {
        Position: "CTP-04",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "CTP-05",
        Element: "C001",

        Requirement: "C",
        Composites: [
          {
            Position: "01",
            Element: "355",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "03",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "04",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "05",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "06",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "07",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "08",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "09",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "10",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "11",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "12",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "13",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "14",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "15",
            Element: "649",

            Requirement: "OP",
          },
        ],
      },
      {
        Position: "CTP-06",
        Element: "648",

        Requirement: "OP",
      },
      {
        Position: "CTP-07",
        Element: "649",

        Requirement: "C",
      },
      {
        Position: "CTP-08",
        Element: "782",

        Requirement: "OP",
      },
      {
        Position: "CTP-09",
        Element: "639",

        Requirement: "OP",
      },
      {
        Position: "CTP-10",
        Element: "499",

        Requirement: "OP",
      },
      {
        Position: "CTP-11",
        Element: "289",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "PAM",
    Name: "Period Amount",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PAM-01",
        Element: "673",

        Requirement: "C",
      },
      {
        Position: "PAM-02",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "PAM-03",
        Element: "C001",

        Requirement: "C",
        Composites: [
          {
            Position: "01",
            Element: "355",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "03",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "04",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "05",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "06",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "07",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "08",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "09",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "10",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "11",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "12",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "13",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "14",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "15",
            Element: "649",

            Requirement: "OP",
          },
        ],
      },
      {
        Position: "PAM-04",
        Element: "522",

        Requirement: "C",
      },
      {
        Position: "PAM-05",
        Element: "782",

        Requirement: "C",
      },
      {
        Position: "PAM-06",
        Element: "344",

        Requirement: "C",
      },
      {
        Position: "PAM-07",
        Element: "374",

        Requirement: "C",
      },
      {
        Position: "PAM-08",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "PAM-09",
        Element: "337",

        Requirement: "C",
      },
      {
        Position: "PAM-10",
        Element: "374",

        Requirement: "C",
      },
      {
        Position: "PAM-11",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "PAM-12",
        Element: "337",

        Requirement: "C",
      },
      {
        Position: "PAM-13",
        Element: "1004",

        Requirement: "C",
      },
      {
        Position: "PAM-14",
        Element: "954",

        Requirement: "C",
      },
      {
        Position: "PAM-15",
        Element: "1073",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "CSH",
    Name: "Sales Requirements",
    Version: "X12 4010",
    Elements: [
      {
        Position: "CSH-01",
        Element: "563",

        Requirement: "OP",
      },
      {
        Position: "CSH-02",
        Element: "306",

        Requirement: "OP",
      },
      {
        Position: "CSH-03",
        Element: "610",

        Requirement: "C",
      },
      {
        Position: "CSH-04",
        Element: "508",

        Requirement: "OP",
      },
      {
        Position: "CSH-05",
        Element: "373",

        Requirement: "OP",
      },
      {
        Position: "CSH-06",
        Element: "559",

        Requirement: "C",
      },
      {
        Position: "CSH-07",
        Element: "560",

        Requirement: "C",
      },
      {
        Position: "CSH-08",
        Element: "566",

        Requirement: "OP",
      },
      {
        Position: "CSH-09",
        Element: "954",

        Requirement: "C",
      },
      {
        Position: "CSH-10",
        Element: "1004",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "TC2",
    Name: "Commodity",
    Version: "X12 4010",
    Elements: [
      {
        Position: "TC2-01",
        Element: "23",

        Requirement: "M",
      },
      {
        Position: "TC2-02",
        Element: "22",

        Requirement: "M",
      },
    ],
  },
  {
    Segment: "SAC",
    Name: "Service, Promotion, Allowance, or Charge Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "SAC-01",
        Element: "248",

        Requirement: "M",
      },
      {
        Position: "SAC-02",
        Element: "1300",

        Requirement: "C",
      },
      {
        Position: "SAC-03",
        Element: "559",

        Requirement: "C",
      },
      {
        Position: "SAC-04",
        Element: "1301",

        Requirement: "C",
      },
      {
        Position: "SAC-05",
        Element: "610",

        Requirement: "OP",
      },
      {
        Position: "SAC-06",
        Element: "378",

        Requirement: "C",
      },
      {
        Position: "SAC-07",
        Element: "332",

        Requirement: "C",
      },
      {
        Position: "SAC-08",
        Element: "118",

        Requirement: "OP",
      },
      {
        Position: "SAC-09",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "SAC-10",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SAC-11",
        Element: "380",

        Requirement: "OP",
      },
      {
        Position: "SAC-12",
        Element: "331",

        Requirement: "OP",
      },
      {
        Position: "SAC-13",
        Element: "127",

        Requirement: "C",
      },
      {
        Position: "SAC-14",
        Element: "770",

        Requirement: "OP",
      },
      {
        Position: "SAC-15",
        Element: "352",

        Requirement: "C",
      },
      {
        Position: "SAC-16",
        Element: "819",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "ITD",
    Name: "Terms of Sale/Deferred Terms of Sale",
    Version: "X12 4010",
    Elements: [
      {
        Position: "ITD-01",
        Element: "336",

        Requirement: "OP",
      },
      {
        Position: "ITD-02",
        Element: "333",

        Requirement: "OP",
      },
      {
        Position: "ITD-03",
        Element: "338",

        Requirement: "OP",
      },
      {
        Position: "ITD-04",
        Element: "370",

        Requirement: "C",
      },
      {
        Position: "ITD-05",
        Element: "351",

        Requirement: "C",
      },
      {
        Position: "ITD-06",
        Element: "446",

        Requirement: "OP",
      },
      {
        Position: "ITD-07",
        Element: "386",

        Requirement: "OP",
      },
      {
        Position: "ITD-08",
        Element: "362",

        Requirement: "OP",
      },
      {
        Position: "ITD-09",
        Element: "388",

        Requirement: "OP",
      },
      {
        Position: "ITD-10",
        Element: "389",

        Requirement: "C",
      },
      {
        Position: "ITD-11",
        Element: "342",

        Requirement: "C",
      },
      {
        Position: "ITD-12",
        Element: "352",

        Requirement: "OP",
      },
      {
        Position: "ITD-13",
        Element: "765",

        Requirement: "C",
      },
      {
        Position: "ITD-14",
        Element: "107",

        Requirement: "OP",
      },
      {
        Position: "ITD-15",
        Element: "954",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "DIS",
    Name: "Discount Detail",
    Version: "X12 4010",
    Elements: [
      {
        Position: "DIS-01",
        Element: "653",

        Requirement: "M",
      },
      {
        Position: "DIS-02",
        Element: "654",

        Requirement: "M",
      },
      {
        Position: "DIS-03",
        Element: "655",

        Requirement: "M",
      },
      {
        Position: "DIS-04",
        Element: "656",

        Requirement: "M",
      },
      {
        Position: "DIS-05",
        Element: "657",

        Requirement: "M",
      },
      {
        Position: "DIS-06",
        Element: "657",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "INC",
    Name: "Installment Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "INC-01",
        Element: "336",

        Requirement: "M",
      },
      {
        Position: "INC-02",
        Element: "C001",

        Requirement: "M",
        Composites: [
          {
            Position: "01",
            Element: "355",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "03",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "04",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "05",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "06",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "07",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "08",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "09",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "10",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "11",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "12",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "13",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "14",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "15",
            Element: "649",

            Requirement: "OP",
          },
        ],
      },
      {
        Position: "INC-03",
        Element: "380",

        Requirement: "M",
      },
      {
        Position: "INC-04",
        Element: "380",

        Requirement: "M",
      },
      {
        Position: "INC-05",
        Element: "782",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "DTM",
    Name: "Date/Time Reference",
    Version: "X12 4010",
    Elements: [
      {
        Position: "DTM-01",
        Element: "374",

        Requirement: "M",
      },
      {
        Position: "DTM-02",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "DTM-03",
        Element: "337",

        Requirement: "C",
      },
      {
        Position: "DTM-04",
        Element: "623",

        Requirement: "OP",
      },
      {
        Position: "DTM-05",
        Element: "1250",

        Requirement: "C",
      },
      {
        Position: "DTM-06",
        Element: "1251",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "LDT",
    Name: "Lead Time",
    Version: "X12 4010",
    Elements: [
      {
        Position: "LDT-01",
        Element: "345",

        Requirement: "M",
      },
      {
        Position: "LDT-02",
        Element: "380",

        Requirement: "M",
      },
      {
        Position: "LDT-03",
        Element: "344",

        Requirement: "M",
      },
      {
        Position: "LDT-04",
        Element: "373",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "LIN",
    Name: "Item Identification",
    Version: "X12 4010",
    Elements: [
      {
        Position: "LIN-01",
        Element: "350",

        Requirement: "OP",
      },
      {
        Position: "LIN-02",
        Element: "235",

        Requirement: "M",
      },
      {
        Position: "LIN-03",
        Element: "234",

        Requirement: "M",
      },
      {
        Position: "LIN-04",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-05",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-06",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-07",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-08",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-09",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-10",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-11",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-12",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-13",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-14",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-15",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-16",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-17",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-18",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-19",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-20",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-21",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-22",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-23",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-24",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-25",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-26",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-27",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-28",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-29",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "LIN-30",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "LIN-31",
        Element: "234",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "SI",
    Name: "Service Characteristic Identification",
    Version: "X12 4010",
    Elements: [
      {
        Position: "SI-01",
        Element: "559",

        Requirement: "M",
      },
      {
        Position: "SI-02",
        Element: "1000",

        Requirement: "M",
      },
      {
        Position: "SI-03",
        Element: "234",

        Requirement: "M",
      },
      {
        Position: "SI-04",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-05",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SI-06",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-07",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SI-08",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-09",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SI-10",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-11",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SI-12",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-13",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SI-14",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-15",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SI-16",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-17",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SI-18",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-19",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SI-20",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "SI-21",
        Element: "234",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "PID",
    Name: "Product/Item Description",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PID-01",
        Element: "349",

        Requirement: "M",
      },
      {
        Position: "PID-02",
        Element: "750",

        Requirement: "OP",
      },
      {
        Position: "PID-03",
        Element: "559",

        Requirement: "C",
      },
      {
        Position: "PID-04",
        Element: "751",

        Requirement: "C",
      },
      {
        Position: "PID-05",
        Element: "352",

        Requirement: "C",
      },
      {
        Position: "PID-06",
        Element: "752",

        Requirement: "OP",
      },
      {
        Position: "PID-07",
        Element: "822",

        Requirement: "OP",
      },
      {
        Position: "PID-08",
        Element: "1073",

        Requirement: "OP",
      },
      {
        Position: "PID-09",
        Element: "819",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "MEA",
    Name: "Measurements",
    Version: "X12 4010",
    Elements: [
      {
        Position: "MEA-01",
        Element: "737",

        Requirement: "OP",
      },
      {
        Position: "MEA-02",
        Element: "738",

        Requirement: "OP",
      },
      {
        Position: "MEA-03",
        Element: "739",

        Requirement: "C",
      },
      {
        Position: "MEA-04",
        Element: "C001",

        Requirement: "C",
        Composites: [
          {
            Position: "01",
            Element: "355",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "03",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "04",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "05",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "06",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "07",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "08",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "09",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "10",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "11",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "12",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "13",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "14",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "15",
            Element: "649",

            Requirement: "OP",
          },
        ],
      },
      {
        Position: "MEA-05",
        Element: "740",

        Requirement: "C",
      },
      {
        Position: "MEA-06",
        Element: "741",

        Requirement: "C",
      },
      {
        Position: "MEA-07",
        Element: "935",

        Requirement: "OP",
      },
      {
        Position: "MEA-08",
        Element: "936",

        Requirement: "C",
      },
      {
        Position: "MEA-09",
        Element: "752",

        Requirement: "OP",
      },
      {
        Position: "MEA-10",
        Element: "1373",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "PWK",
    Name: "Paperwork",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PWK-01",
        Element: "755",

        Requirement: "M",
      },
      {
        Position: "PWK-02",
        Element: "756",

        Requirement: "OP",
      },
      {
        Position: "PWK-03",
        Element: "757",

        Requirement: "OP",
      },
      {
        Position: "PWK-04",
        Element: "98",

        Requirement: "OP",
      },
      {
        Position: "PWK-05",
        Element: "66",

        Requirement: "C",
      },
      {
        Position: "PWK-06",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "PWK-07",
        Element: "352",

        Requirement: "OP",
      },
      {
        Position: "PWK-08",
        Element: "C002",

        Requirement: "OP",
        Composites: [
          {
            Position: "01",
            Element: "704",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "704",

            Requirement: "OP",
          },
          {
            Position: "03",
            Element: "704",

            Requirement: "OP",
          },
          {
            Position: "04",
            Element: "704",

            Requirement: "OP",
          },
          {
            Position: "05",
            Element: "704",

            Requirement: "OP",
          },
        ],
      },
      {
        Position: "PWK-09",
        Element: "1525",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "PKG",
    Name: "Marking, Packaging, Loading",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PKG-01",
        Element: "349",

        Requirement: "C",
      },
      {
        Position: "PKG-02",
        Element: "753",

        Requirement: "OP",
      },
      {
        Position: "PKG-03",
        Element: "559",

        Requirement: "C",
      },
      {
        Position: "PKG-04",
        Element: "754",

        Requirement: "C",
      },
      {
        Position: "PKG-05",
        Element: "352",

        Requirement: "C",
      },
      {
        Position: "PKG-06",
        Element: "400",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "TD1",
    Name: "Carrier Details (Quantity and Weight)",
    Version: "X12 4010",
    Elements: [
      {
        Position: "TD1-01",
        Element: "103",

        Requirement: "OP",
      },
      {
        Position: "TD1-02",
        Element: "80",

        Requirement: "C",
      },
      {
        Position: "TD1-03",
        Element: "23",

        Requirement: "OP",
      },
      {
        Position: "TD1-04",
        Element: "22",

        Requirement: "C",
      },
      {
        Position: "TD1-05",
        Element: "79",

        Requirement: "OP",
      },
      {
        Position: "TD1-06",
        Element: "187",

        Requirement: "OP",
      },
      {
        Position: "TD1-07",
        Element: "81",

        Requirement: "C",
      },
      {
        Position: "TD1-08",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "TD1-09",
        Element: "183",

        Requirement: "C",
      },
      {
        Position: "TD1-10",
        Element: "355",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "TD5",
    Name: "Carrier Details (Routing Sequence/Transit Time)",
    Version: "X12 4010",
    Elements: [
      {
        Position: "TD5-01",
        Element: "133",

        Requirement: "OP",
      },
      {
        Position: "TD5-02",
        Element: "66",

        Requirement: "C",
      },
      {
        Position: "TD5-03",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "TD5-04",
        Element: "91",

        Requirement: "C",
      },
      {
        Position: "TD5-05",
        Element: "387",

        Requirement: "C",
      },
      {
        Position: "TD5-06",
        Element: "368",

        Requirement: "C",
      },
      {
        Position: "TD5-07",
        Element: "309",

        Requirement: "OP",
      },
      {
        Position: "TD5-08",
        Element: "310",

        Requirement: "C",
      },
      {
        Position: "TD5-09",
        Element: "731",

        Requirement: "OP",
      },
      {
        Position: "TD5-10",
        Element: "732",

        Requirement: "OP",
      },
      {
        Position: "TD5-11",
        Element: "733",

        Requirement: "C",
      },
      {
        Position: "TD5-12",
        Element: "284",

        Requirement: "C",
      },
      {
        Position: "TD5-13",
        Element: "284",

        Requirement: "C",
      },
      {
        Position: "TD5-14",
        Element: "284",

        Requirement: "OP",
      },
      {
        Position: "TD5-15",
        Element: "26",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "TD3",
    Name: "Carrier Details (Equipment)",
    Version: "X12 4010",
    Elements: [
      {
        Position: "TD3-01",
        Element: "40",

        Requirement: "C",
      },
      {
        Position: "TD3-02",
        Element: "206",

        Requirement: "OP",
      },
      {
        Position: "TD3-03",
        Element: "207",

        Requirement: "C",
      },
      {
        Position: "TD3-04",
        Element: "187",

        Requirement: "OP",
      },
      {
        Position: "TD3-05",
        Element: "81",

        Requirement: "C",
      },
      {
        Position: "TD3-06",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "TD3-07",
        Element: "102",

        Requirement: "OP",
      },
      {
        Position: "TD3-08",
        Element: "407",

        Requirement: "OP",
      },
      {
        Position: "TD3-09",
        Element: "225",

        Requirement: "OP",
      },
      {
        Position: "TD3-10",
        Element: "24",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "TD4",
    Name: "Carrier Details (Special Handling, or Hazardous Materials, or Both)",
    Version: "X12 4010",
    Elements: [
      {
        Position: "TD4-01",
        Element: "152",

        Requirement: "C",
      },
      {
        Position: "TD4-02",
        Element: "208",

        Requirement: "C",
      },
      {
        Position: "TD4-03",
        Element: "209",

        Requirement: "C",
      },
      {
        Position: "TD4-04",
        Element: "352",

        Requirement: "C",
      },
      {
        Position: "TD4-05",
        Element: "1073",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "MAN",
    Name: "Marks and Numbers",
    Version: "X12 4010",
    Elements: [
      {
        Position: "MAN-01",
        Element: "88",

        Requirement: "M",
      },
      {
        Position: "MAN-02",
        Element: "87",

        Requirement: "M",
      },
      {
        Position: "MAN-03",
        Element: "87",

        Requirement: "OP",
      },
      {
        Position: "MAN-04",
        Element: "88",

        Requirement: "C",
      },
      {
        Position: "MAN-05",
        Element: "87",

        Requirement: "C",
      },
      {
        Position: "MAN-06",
        Element: "87",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "PCT",
    Name: "Percent Amounts",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PCT-01",
        Element: "1004",

        Requirement: "M",
      },
      {
        Position: "PCT-02",
        Element: "954",

        Requirement: "M",
      },
    ],
  },
  {
    Segment: "CTB",
    Name: "Restrictions/Conditions",
    Version: "X12 4010",
    Elements: [
      {
        Position: "CTB-01",
        Element: "688",

        Requirement: "M",
      },
      {
        Position: "CTB-02",
        Element: "352",

        Requirement: "C",
      },
      {
        Position: "CTB-03",
        Element: "673",

        Requirement: "C",
      },
      {
        Position: "CTB-04",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "CTB-05",
        Element: "522",

        Requirement: "C",
      },
      {
        Position: "CTB-06",
        Element: "610",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "TXI",
    Name: "Tax Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "TXI-01",
        Element: "963",

        Requirement: "M",
      },
      {
        Position: "TXI-02",
        Element: "782",

        Requirement: "C",
      },
      {
        Position: "TXI-03",
        Element: "954",

        Requirement: "C",
      },
      {
        Position: "TXI-04",
        Element: "955",

        Requirement: "C",
      },
      {
        Position: "TXI-05",
        Element: "956",

        Requirement: "C",
      },
      {
        Position: "TXI-06",
        Element: "441",

        Requirement: "C",
      },
      {
        Position: "TXI-07",
        Element: "662",

        Requirement: "OP",
      },
      {
        Position: "TXI-08",
        Element: "828",

        Requirement: "OP",
      },
      {
        Position: "TXI-09",
        Element: "325",

        Requirement: "OP",
      },
      {
        Position: "TXI-10",
        Element: "350",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "AMT",
    Name: "Monetary Amount",
    Version: "X12 4010",
    Elements: [
      {
        Position: "AMT-01",
        Element: "522",

        Requirement: "M",
      },
      {
        Position: "AMT-02",
        Element: "782",

        Requirement: "M",
      },
      {
        Position: "AMT-03",
        Element: "478",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "FA1",
    Name: "Type of Financial Accounting Data",
    Version: "X12 4010",
    Elements: [
      {
        Position: "FA1-01",
        Element: "559",

        Requirement: "M",
      },
      {
        Position: "FA1-02",
        Element: "1300",

        Requirement: "OP",
      },
      {
        Position: "FA1-03",
        Element: "248",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "FA2",
    Name: "Accounting Data",
    Version: "X12 4010",
    Elements: [
      {
        Position: "FA2-01",
        Element: "1196",

        Requirement: "M",
      },
      {
        Position: "FA2-02",
        Element: "1195",

        Requirement: "M",
      },
    ],
  },
  {
    Segment: "N9",
    Name: "Reference Identification",
    Version: "X12 4010",
    Elements: [
      {
        Position: "N9-01",
        Element: "128",

        Requirement: "M",
      },
      {
        Position: "N9-02",
        Element: "127",

        Requirement: "C",
      },
      {
        Position: "N9-03",
        Element: "369",

        Requirement: "C",
      },
      {
        Position: "N9-04",
        Element: "373",

        Requirement: "OP",
      },
      {
        Position: "N9-05",
        Element: "337",

        Requirement: "C",
      },
      {
        Position: "N9-06",
        Element: "623",

        Requirement: "OP",
      },
      {
        Position: "N9-07",
        Element: "C040",

        Requirement: "OP",
        Composites: [
          {
            Position: "01",
            Element: "128",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "127",

            Requirement: "M",
          },
          {
            Position: "03",
            Element: "128",

            Requirement: "C",
          },
          {
            Position: "04",
            Element: "127",

            Requirement: "C",
          },
          {
            Position: "05",
            Element: "128",

            Requirement: "C",
          },
          {
            Position: "06",
            Element: "127",

            Requirement: "C",
          },
        ],
      },
    ],
  },
  {
    Segment: "MSG",
    Name: "Message Text",
    Version: "X12 4010",
    Elements: [
      {
        Position: "MSG-01",
        Element: "933",

        Requirement: "M",
      },
      {
        Position: "MSG-02",
        Element: "934",

        Requirement: "C",
      },
      {
        Position: "MSG-03",
        Element: "1470",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "N1",
    Name: "Name",
    Version: "X12 4010",
    Elements: [
      {
        Position: "N1-01",
        Element: "98",

        Requirement: "M",
      },
      {
        Position: "N1-02",
        Element: "93",

        Requirement: "C",
      },
      {
        Position: "N1-03",
        Element: "66",

        Requirement: "C",
      },
      {
        Position: "N1-04",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "N1-05",
        Element: "706",

        Requirement: "OP",
      },
      {
        Position: "N1-06",
        Element: "98",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "N2",
    Name: "Additional Name Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "N2-01",
        Element: "93",

        Requirement: "M",
      },
      {
        Position: "N2-02",
        Element: "93",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "N3",
    Name: "Address Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "N3-01",
        Element: "166",

        Requirement: "M",
      },
      {
        Position: "N3-02",
        Element: "166",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "N4",
    Name: "Geographic Location",
    Version: "X12 4010",
    Elements: [
      {
        Position: "N4-01",
        Element: "19",

        Requirement: "OP",
      },
      {
        Position: "N4-02",
        Element: "156",

        Requirement: "OP",
      },
      {
        Position: "N4-03",
        Element: "116",

        Requirement: "OP",
      },
      {
        Position: "N4-04",
        Element: "26",

        Requirement: "OP",
      },
      {
        Position: "N4-05",
        Element: "309",

        Requirement: "C",
      },
      {
        Position: "N4-06",
        Element: "310",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "NX2",
    Name: "Location ID Component",
    Version: "X12 4010",
    Elements: [
      {
        Position: "NX2-01",
        Element: "1106",

        Requirement: "M",
      },
      {
        Position: "NX2-02",
        Element: "166",

        Requirement: "M",
      },
      {
        Position: "NX2-03",
        Element: "1096",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "LM",
    Name: "Code Source Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "LM-01",
        Element: "559",

        Requirement: "M",
      },
      {
        Position: "LM-02",
        Element: "822",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "LQ",
    Name: "Industry Code",
    Version: "X12 4010",
    Elements: [
      {
        Position: "LQ-01",
        Element: "1270",

        Requirement: "OP",
      },
      {
        Position: "LQ-02",
        Element: "1271",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "SPI",
    Name: "Specification Identifier",
    Version: "X12 4010",
    Elements: [
      {
        Position: "SPI-01",
        Element: "786",

        Requirement: "M",
      },
      {
        Position: "SPI-02",
        Element: "128",

        Requirement: "C",
      },
      {
        Position: "SPI-03",
        Element: "127",

        Requirement: "C",
      },
      {
        Position: "SPI-04",
        Element: "790",

        Requirement: "OP",
      },
      {
        Position: "SPI-05",
        Element: "791",

        Requirement: "OP",
      },
      {
        Position: "SPI-06",
        Element: "792",

        Requirement: "OP",
      },
      {
        Position: "SPI-07",
        Element: "353",

        Requirement: "OP",
      },
      {
        Position: "SPI-08",
        Element: "755",

        Requirement: "OP",
      },
      {
        Position: "SPI-09",
        Element: "786",

        Requirement: "OP",
      },
      {
        Position: "SPI-10",
        Element: "559",

        Requirement: "OP",
      },
      {
        Position: "SPI-11",
        Element: "822",

        Requirement: "OP",
      },
      {
        Position: "SPI-12",
        Element: "554",

        Requirement: "OP",
      },
      {
        Position: "SPI-13",
        Element: "1322",

        Requirement: "OP",
      },
      {
        Position: "SPI-14",
        Element: "1401",

        Requirement: "OP",
      },
      {
        Position: "SPI-15",
        Element: "1005",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "G61",
    Name: "Contact",
    Version: "X12 4010",
    Elements: [
      {
        Position: "G61-01",
        Element: "366",

        Requirement: "M",
      },
      {
        Position: "G61-02",
        Element: "93",

        Requirement: "M",
      },
      {
        Position: "G61-03",
        Element: "365",

        Requirement: "C",
      },
      {
        Position: "G61-04",
        Element: "364",

        Requirement: "C",
      },
      {
        Position: "G61-05",
        Element: "443",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "CB1",
    Name: "Contract and Cost Accounting Standards Data",
    Version: "X12 4010",
    Elements: [
      {
        Position: "CB1-01",
        Element: "1309",

        Requirement: "M",
      },
      {
        Position: "CB1-02",
        Element: "1310",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "ADV",
    Name: "Advertising Demographic Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "ADV-01",
        Element: "559",

        Requirement: "M",
      },
      {
        Position: "ADV-02",
        Element: "1000",

        Requirement: "M",
      },
      {
        Position: "ADV-03",
        Element: "740",

        Requirement: "OP",
      },
      {
        Position: "ADV-04",
        Element: "741",

        Requirement: "OP",
      },
      {
        Position: "ADV-05",
        Element: "729",

        Requirement: "OP",
      },
      {
        Position: "ADV-06",
        Element: "1000",

        Requirement: "C",
      },
      {
        Position: "ADV-07",
        Element: "739",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "MTX",
    Name: "Text",
    Version: "X12 4010",
    Elements: [
      {
        Position: "MTX-01",
        Element: "363",

        Requirement: "OP",
      },
      {
        Position: "MTX-02",
        Element: "1551",

        Requirement: "C",
      },
      {
        Position: "MTX-03",
        Element: "1551",

        Requirement: "OP",
      },
      {
        Position: "MTX-04",
        Element: "934",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "PO1",
    Name: "Baseline Item Data",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PO1-01",
        Element: "350",

        Requirement: "OP",
      },
      {
        Position: "PO1-02",
        Element: "330",

        Requirement: "C",
      },
      {
        Position: "PO1-03",
        Element: "355",

        Requirement: "OP",
      },
      {
        Position: "PO1-04",
        Element: "212",

        Requirement: "C",
      },
      {
        Position: "PO1-05",
        Element: "639",

        Requirement: "OP",
      },
      {
        Position: "PO1-06",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-07",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-08",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-09",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-10",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-11",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-12",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-13",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-14",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-15",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-16",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-17",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-18",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-19",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-20",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-21",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-22",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-23",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "PO1-24",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "PO1-25",
        Element: "234",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "CN1",
    Name: "Contract Information",
    Version: "X12 4010",
    Elements: [
      {
        Position: "CN1-01",
        Element: "1166",

        Requirement: "M",
      },
      {
        Position: "CN1-02",
        Element: "782",

        Requirement: "OP",
      },
      {
        Position: "CN1-03",
        Element: "332",

        Requirement: "OP",
      },
      {
        Position: "CN1-04",
        Element: "127",

        Requirement: "OP",
      },
      {
        Position: "CN1-05",
        Element: "338",

        Requirement: "OP",
      },
      {
        Position: "CN1-06",
        Element: "799",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "PO3",
    Name: "Additional Item Detail",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PO3-01",
        Element: "371",

        Requirement: "M",
      },
      {
        Position: "PO3-02",
        Element: "373",

        Requirement: "OP",
      },
      {
        Position: "PO3-03",
        Element: "236",

        Requirement: "C",
      },
      {
        Position: "PO3-04",
        Element: "212",

        Requirement: "OP",
      },
      {
        Position: "PO3-05",
        Element: "639",

        Requirement: "C",
      },
      {
        Position: "PO3-06",
        Element: "380",

        Requirement: "M",
      },
      {
        Position: "PO3-07",
        Element: "355",

        Requirement: "M",
      },
      {
        Position: "PO3-08",
        Element: "352",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "PO4",
    Name: "Item Physical Details",
    Version: "X12 4010",
    Elements: [
      {
        Position: "PO4-01",
        Element: "356",

        Requirement: "OP",
      },
      {
        Position: "PO4-02",
        Element: "357",

        Requirement: "C",
      },
      {
        Position: "PO4-03",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "PO4-04",
        Element: "103",

        Requirement: "C",
      },
      {
        Position: "PO4-05",
        Element: "187",

        Requirement: "OP",
      },
      {
        Position: "PO4-06",
        Element: "384",

        Requirement: "C",
      },
      {
        Position: "PO4-07",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "PO4-08",
        Element: "385",

        Requirement: "C",
      },
      {
        Position: "PO4-09",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "PO4-10",
        Element: "82",

        Requirement: "C",
      },
      {
        Position: "PO4-11",
        Element: "189",

        Requirement: "C",
      },
      {
        Position: "PO4-12",
        Element: "65",

        Requirement: "C",
      },
      {
        Position: "PO4-13",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "PO4-14",
        Element: "810",

        Requirement: "OP",
      },
      {
        Position: "PO4-15",
        Element: "752",

        Requirement: "OP",
      },
      {
        Position: "PO4-16",
        Element: "350",

        Requirement: "C",
      },
      {
        Position: "PO4-17",
        Element: "350",

        Requirement: "OP",
      },
      {
        Position: "PO4-18",
        Element: "1470",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "IT8",
    Name: "Conditions of Sale",
    Version: "X12 4010",
    Elements: [
      {
        Position: "IT8-01",
        Element: "563",

        Requirement: "C",
      },
      {
        Position: "IT8-02",
        Element: "306",

        Requirement: "C",
      },
      {
        Position: "IT8-03",
        Element: "610",

        Requirement: "C",
      },
      {
        Position: "IT8-04",
        Element: "508",

        Requirement: "OP",
      },
      {
        Position: "IT8-05",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "IT8-06",
        Element: "559",

        Requirement: "OP",
      },
      {
        Position: "IT8-07",
        Element: "566",

        Requirement: "C",
      },
      {
        Position: "IT8-08",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-09",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-10",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-11",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-12",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-13",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-14",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-15",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-16",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-17",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-18",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-19",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-20",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-21",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-22",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-23",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-24",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-25",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "IT8-26",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "IT8-27",
        Element: "234",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "SDQ",
    Name: "Destination Quantity",
    Version: "X12 4010",
    Elements: [
      {
        Position: "SDQ-01",
        Element: "355",

        Requirement: "M",
      },
      {
        Position: "SDQ-02",
        Element: "66",

        Requirement: "OP",
      },
      {
        Position: "SDQ-03",
        Element: "67",

        Requirement: "M",
      },
      {
        Position: "SDQ-04",
        Element: "380",

        Requirement: "M",
      },
      {
        Position: "SDQ-05",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-06",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-07",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-08",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-09",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-10",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-11",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-12",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-13",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-14",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-15",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-16",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-17",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-18",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-19",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-20",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-21",
        Element: "67",

        Requirement: "C",
      },
      {
        Position: "SDQ-22",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SDQ-23",
        Element: "310",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "IT3",
    Name: "Additional Item Data",
    Version: "X12 4010",
    Elements: [
      {
        Position: "IT3-01",
        Element: "382",

        Requirement: "C",
      },
      {
        Position: "IT3-02",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "IT3-03",
        Element: "368",

        Requirement: "C",
      },
      {
        Position: "IT3-04",
        Element: "383",

        Requirement: "C",
      },
      {
        Position: "IT3-05",
        Element: "371",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "QTY",
    Name: "Quantity",
    Version: "X12 4010",
    Elements: [
      {
        Position: "QTY-01",
        Element: "673",

        Requirement: "M",
      },
      {
        Position: "QTY-02",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "QTY-03",
        Element: "C001",

        Requirement: "OP",
        Composites: [
          {
            Position: "01",
            Element: "355",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "03",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "04",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "05",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "06",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "07",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "08",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "09",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "10",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "11",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "12",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "13",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "14",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "15",
            Element: "649",

            Requirement: "OP",
          },
        ],
      },
      {
        Position: "QTY-04",
        Element: "61",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "SCH",
    Name: "Line Item Schedule",
    Version: "X12 4010",
    Elements: [
      {
        Position: "SCH-01",
        Element: "380",

        Requirement: "M",
      },
      {
        Position: "SCH-02",
        Element: "355",

        Requirement: "M",
      },
      {
        Position: "SCH-03",
        Element: "98",

        Requirement: "OP",
      },
      {
        Position: "SCH-04",
        Element: "93",

        Requirement: "C",
      },
      {
        Position: "SCH-05",
        Element: "374",

        Requirement: "M",
      },
      {
        Position: "SCH-06",
        Element: "373",

        Requirement: "M",
      },
      {
        Position: "SCH-07",
        Element: "337",

        Requirement: "OP",
      },
      {
        Position: "SCH-08",
        Element: "374",

        Requirement: "C",
      },
      {
        Position: "SCH-09",
        Element: "373",

        Requirement: "C",
      },
      {
        Position: "SCH-10",
        Element: "337",

        Requirement: "C",
      },
      {
        Position: "SCH-11",
        Element: "326",

        Requirement: "OP",
      },
      {
        Position: "SCH-12",
        Element: "350",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "LS",
    Name: "Loop Header",
    Version: "X12 4010",
    Elements: [
      {
        Position: "LS-01",
        Element: "447",

        Requirement: "M",
      },
    ],
  },
  {
    Segment: "LE",
    Name: "Loop Trailer",
    Version: "X12 4010",
    Elements: [
      {
        Position: "LE-01",
        Element: "447",

        Requirement: "M",
      },
    ],
  },
  {
    Segment: "SLN",
    Name: "Subline Item Detail",
    Version: "X12 4010",
    Elements: [
      {
        Position: "SLN-01",
        Element: "350",

        Requirement: "M",
      },
      {
        Position: "SLN-02",
        Element: "350",

        Requirement: "OP",
      },
      {
        Position: "SLN-03",
        Element: "662",

        Requirement: "M",
      },
      {
        Position: "SLN-04",
        Element: "380",

        Requirement: "C",
      },
      {
        Position: "SLN-05",
        Element: "C001",

        Requirement: "C",
        Composites: [
          {
            Position: "01",
            Element: "355",

            Requirement: "M",
          },
          {
            Position: "02",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "03",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "04",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "05",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "06",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "07",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "08",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "09",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "10",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "11",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "12",
            Element: "649",

            Requirement: "OP",
          },
          {
            Position: "13",
            Element: "355",

            Requirement: "OP",
          },
          {
            Position: "14",
            Element: "1018",

            Requirement: "OP",
          },
          {
            Position: "15",
            Element: "649",

            Requirement: "OP",
          },
        ],
      },
      {
        Position: "SLN-06",
        Element: "212",

        Requirement: "C",
      },
      {
        Position: "SLN-07",
        Element: "639",

        Requirement: "OP",
      },
      {
        Position: "SLN-08",
        Element: "662",

        Requirement: "OP",
      },
      {
        Position: "SLN-09",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-10",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-11",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-12",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-13",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-14",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-15",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-16",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-17",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-18",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-19",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-20",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-21",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-22",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-23",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-24",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-25",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-26",
        Element: "234",

        Requirement: "C",
      },
      {
        Position: "SLN-27",
        Element: "235",

        Requirement: "C",
      },
      {
        Position: "SLN-28",
        Element: "234",

        Requirement: "C",
      },
    ],
  },
  {
    Segment: "CTT",
    Name: "Transaction Totals",
    Version: "X12 4010",
    Elements: [
      {
        Position: "CTT-01",
        Element: "354",

        Requirement: "M",
      },
      {
        Position: "CTT-02",
        Element: "347",

        Requirement: "OP",
      },
      {
        Position: "CTT-03",
        Element: "81",

        Requirement: "C",
      },
      {
        Position: "CTT-04",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "CTT-05",
        Element: "183",

        Requirement: "C",
      },
      {
        Position: "CTT-06",
        Element: "355",

        Requirement: "C",
      },
      {
        Position: "CTT-07",
        Element: "352",

        Requirement: "OP",
      },
    ],
  },
  {
    Segment: "SE",
    Name: "Transaction Set Trailer",
    Version: "X12 4010",
    Elements: [
      {
        Position: "SE-01",
        Element: "96",

        Requirement: "M",
      },
      {
        Position: "SE-02",
        Element: "329",

        Requirement: "M",
      },
    ],
  },
  {
    Segment: "BAK",
    Name: "Beginning Segment for Purchase Order Acknowledgment",
    Version: "4010",
    Elements: [
      {
        Position: "BAK-01",
        Element: "353",
        Requirement: "M",
      },
      {
        Position: "BAK-02",
        Element: "587",
        Requirement: "M",
      },
      {
        Position: "BAK-03",
        Element: "324",
        Requirement: "M",
      },
      {
        Position: "BAK-04",
        Element: "373",
        Requirement: "M",
      },
      {
        Position: "BAK-05",
        Element: "328",
        Requirement: "OP",
      },
      {
        Position: "BAK-06",
        Element: "326",
        Requirement: "OP",
      },
      {
        Position: "BAK-07",
        Element: "367",
        Requirement: "OP",
      },
      {
        Position: "BAK-08",
        Element: "127",
        Requirement: "OP",
      },
      {
        Position: "BAK-09",
        Element: "373",
        Requirement: "OP",
      },
      {
        Position: "BAK-10",
        Element: "640",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "ACK",
    Name: "Line Item Acknowledgment",
    Version: "4010",
    Elements: [
      {
        Position: "ACK-01",
        Element: "668",
        Requirement: "M",
      },
      {
        Position: "ACK-02",
        Element: "380",
        Requirement: "C",
      },
      {
        Position: "ACK-03",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "ACK-04",
        Element: "374",
        Requirement: "OP",
      },
      {
        Position: "ACK-05",
        Element: "373",
        Requirement: "C",
      },
      {
        Position: "ACK-06",
        Element: "326",
        Requirement: "OP",
      },
      {
        Position: "ACK-07",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-08",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-09",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-10",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-11",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-12",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-13",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-14",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-15",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-16",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-17",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-18",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-19",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-20",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-21",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-22",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-23",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-24",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-25",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "ACK-26",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "ACK-27",
        Element: "559",
        Requirement: "C",
      },
      {
        Position: "ACK-28",
        Element: "822",
        Requirement: "C",
      },
      {
        Position: "ACK-29",
        Element: "1271",
        Requirement: "C",
      },
    ]
  },
  {
    Segment: "BSN",
    Name: "Beginning Segment for Ship Notice",
    Version: "4010",
    Elements: [
      {
        Position: "BSN-01",
        Element: "353",
        Requirement: "M",
      },
      {
        Position: "BSN-02",
        Element: "396",
        Requirement: "M",
      },
      {
        Position: "BSN-03",
        Element: "373",
        Requirement: "M",
      },
      {
        Position: "BSN-04",
        Element: "337",
        Requirement: "M",
      },
      {
        Position: "BSN-05",
        Element: "1005",
        Requirement: "OP",
      },
      {
        Position: "BSN-06",
        Element: "640",
        Requirement: "C",
      },
      {
        Position: "BSN-07",
        Element: "641",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "HL",
    Name: "Hierarchical Level",
    Version: "4010",
    Elements: [
      {
        Position: "HL-01",
        Element: "628",
        Requirement: "M",
      },
      {
        Position: "HL-02",
        Element: "734",
        Requirement: "OP",
      },
      {
        Position: "HL-03",
        Element: "735",
        Requirement: "M",
      },
      {
        Position: "HL-04",
        Element: "736",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "SN1",
    Name: "Item Detail (Shipment)",
    Version: "4010",
    Elements: [
      {
        Position: "SN1-01",
        Element: "350",
        Requirement: "OP",
      },
      {
        Position: "SN1-02",
        Element: "382",
        Requirement: "M",
      },
      {
        Position: "SN1-03",
        Element: "355",
        Requirement: "M",
      },
      {
        Position: "SN1-04",
        Element: "646",
        Requirement: "OP",
      },
      {
        Position: "SN1-05",
        Element: "330",
        Requirement: "C",
      },
      {
        Position: "SN1-06",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "SN1-07",
        Element: "728",
        Requirement: "OP",
      },
      {
        Position: "SN1-08",
        Element: "668",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "PRF",
    Name: "Purchase Order Reference",
    Version: "4010",
    Elements: [
      {
        Position: "PRF-01",
        Element: "324",
        Requirement: "M",
      },
      {
        Position: "PRF-02",
        Element: "328",
        Requirement: "OP",
      },
      {
        Position: "PRF-03",
        Element: "327",
        Requirement: "OP",
      },
      {
        Position: "PRF-04",
        Element: "373",
        Requirement: "OP",
      },
      {
        Position: "PRF-05",
        Element: "350",
        Requirement: "OP",
      },
      {
        Position: "PRF-06",
        Element: "367",
        Requirement: "OP",
      },
      {
        Position: "PRF-07",
        Element: "92",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "TSD",
    Name: "Trailer Shipment Details",
    Version: "4010",
    Elements: [
      {
        Position: "TSD-01",
        Element: "350",
        Requirement: "OP",
      },
      {
        Position: "TSD-02",
        Element: "219",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "LH1",
    Name: "Hazardous Identification Information",
    Version: "4010",
    Elements: [
      {
        Position: "LH1-01",
        Element: "355",
        Requirement: "M",
      },
      {
        Position: "LH1-02",
        Element: "80",
        Requirement: "M",
      },
      {
        Position: "LH1-03",
        Element: "277",
        Requirement: "OP",
      },
      {
        Position: "LH1-04",
        Element: "200",
        Requirement: "OP",
      },
      {
        Position: "LH1-05",
        Element: "22",
        Requirement: "OP",
      },
      {
        Position: "LH1-06",
        Element: "355",
        Requirement: "OP",
      },
      {
        Position: "LH1-07",
        Element: "380",
        Requirement: "OP",
      },
      {
        Position: "LH1-08",
        Element: "595",
        Requirement: "OP",
      },
      {
        Position: "LH1-09",
        Element: "665",
        Requirement: "OP",
      },
      {
        Position: "LH1-10",
        Element: "254",
        Requirement: "OP",
      },
      {
        Position: "LH1-11",
        Element: "1375",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "LH2",
    Name: "Hazardous Classification Information",
    Version: "4010",
    Elements: [
      {
        Position: "LH2-01",
        Element: "215",
        Requirement: "OP",
      },
      {
        Position: "LH2-02",
        Element: "983",
        Requirement: "OP",
      },
      {
        Position: "LH2-03",
        Element: "218",
        Requirement: "OP",
      },
      {
        Position: "LH2-04",
        Element: "222",
        Requirement: "OP",
      },
      {
        Position: "LH2-05",
        Element: "759",
        Requirement: "OP",
      },
      {
        Position: "LH2-06",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "LH2-07",
        Element: "408",
        Requirement: "C",
      },
      {
        Position: "LH2-08",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "LH2-09",
        Element: "408",
        Requirement: "C",
      },
      {
        Position: "LH2-10",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "LH2-11",
        Element: "408",
        Requirement: "C",
      },
    ]
  },
  {
    Segment: "LH3",
    Name: "Hazardous Material Shipping Name",
    Version: "4010",
    Elements: [
      {
        Position: "LH3-01",
        Element: "224",
        Requirement: "C",
      },
      {
        Position: "LH3-02",
        Element: "984",
        Requirement: "C",
      },
      {
        Position: "LH3-03",
        Element: "985",
        Requirement: "OP",
      },
      {
        Position: "LH3-04",
        Element: "1073",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "LFH",
    Name: "Freeform Hazardous Material Information",
    Version: "4010",
    Elements: [
      {
        Position: "LFH-01",
        Element: "808",
        Requirement: "M",
      },
      {
        Position: "LFH-02",
        Element: "809",
        Requirement: "M",
      },
      {
        Position: "LFH-03",
        Element: "809",
        Requirement: "OP",
      },
      {
        Position: "LFH-04",
        Element: "1023",
        Requirement: "OP",
      },
      {
        Position: "LFH-05",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "LFH-06",
        Element: "380",
        Requirement: "C",
      },
      {
        Position: "LFH-07",
        Element: "380",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "LEP",
    Name: "EPA Required Data",
    Version: "4010",
    Elements: [
      {
        Position: "LEP-01",
        Element: "806",
        Requirement: "OP",
      },
      {
        Position: "LEP-02",
        Element: "807",
        Requirement: "OP",
      },
      {
        Position: "LEP-03",
        Element: "156",
        Requirement: "C",
      },
      {
        Position: "LEP-04",
        Element: "127",
        Requirement: "C",
      },
    ]
  },
  {
    Segment: "LH4",
    Name: "Canadian Dangerous Requirements",
    Version: "4010",
    Elements: [
      {
        Position: "LH4-01",
        Element: "238",
        Requirement: "OP",
      },
      {
        Position: "LH4-02",
        Element: "364",
        Requirement: "OP",
      },
      {
        Position: "LH4-03",
        Element: "254",
        Requirement: "OP",
      },
      {
        Position: "LH4-04",
        Element: "230",
        Requirement: "OP",
      },
      {
        Position: "LH4-05",
        Element: "230",
        Requirement: "OP",
      },
      {
        Position: "LH4-06",
        Element: "230",
        Requirement: "OP",
      },
      {
        Position: "LH4-07",
        Element: "271",
        Requirement: "OP",
      },
      {
        Position: "LH4-08",
        Element: "267",
        Requirement: "C",
      },
      {
        Position: "LH4-09",
        Element: "805",
        Requirement: "OP",
      },
      {
        Position: "LH4-10",
        Element: "986",
        Requirement: "OP",
      },
      {
        Position: "LH4-11",
        Element: "364",
        Requirement: "OP",
      },
      {
        Position: "LH4-12",
        Element: "355",
        Requirement: "C",
      },
    ]
  },
  {
    Segment: "LHT",
    Name: "Transborder Hazardous Requirements",
    Version: "4010",
    Elements: [
      {
        Position: "LHT-01",
        Element: "215",
        Requirement: "OP",
      },
      {
        Position: "LHT-02",
        Element: "218",
        Requirement: "OP",
      },
      {
        Position: "LHT-03",
        Element: "222",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "LHR",
    Name: "Hazardous Material Identifying Reference Numbers",
    Version: "4010",
    Elements: [
      {
        Position: "LHR-01",
        Element: "128",
        Requirement: "M",
      },
      {
        Position: "LHR-02",
        Element: "127",
        Requirement: "M",
      },
      {
        Position: "LHR-03",
        Element: "373",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "LHE",
    Name: "Empty Equipment Hazardous Material Information",
    Version: "4010",
    Elements: [
      {
        Position: "LHE-01",
        Element: "224",
        Requirement: "M",
      },
      {
        Position: "LHE-02",
        Element: "218",
        Requirement: "M",
      },
      {
        Position: "LHE-03",
        Element: "128",
        Requirement: "M",
      },
      {
        Position: "LHE-04",
        Element: "127",
        Requirement: "M",
      },
      {
        Position: "LHE-05",
        Element: "759",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "CLD",
    Name: "Load Detail",
    Version: "4010",
    Elements: [
      {
        Position: "CLD-01",
        Element: "622",
        Requirement: "M",
      },
      {
        Position: "CLD-02",
        Element: "382",
        Requirement: "M",
      },
      {
        Position: "CLD-03",
        Element: "103",
        Requirement: "OP",
      },
      {
        Position: "CLD-04",
        Element: "357",
        Requirement: "C",
      },
      {
        Position: "CLD-05",
        Element: "355",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "DTP",
    Name: "Date or Time or Period",
    Version: "4010",
    Elements: [
      {
        Position: "DTP-01",
        Element: "374",
        Requirement: "M",
      },
      {
        Position: "DTP-02",
        Element: "1250",
        Requirement: "M",
      },
      {
        Position: "DTP-03",
        Element: "1251",
        Requirement: "M",
      },
    ]
  },
  {
    Segment: "PAL",
    Name: "Pallet Information",
    Version: "4010",
    Elements: [
      {
        Position: "PAL-01",
        Element: "883",
        Requirement: "OP",
      },
      {
        Position: "PAL-02",
        Element: "884",
        Requirement: "OP",
      },
      {
        Position: "PAL-03",
        Element: "885",
        Requirement: "OP",
      },
      {
        Position: "PAL-04",
        Element: "356",
        Requirement: "OP",
      },
      {
        Position: "PAL-05",
        Element: "395",
        Requirement: "C",
      },
      {
        Position: "PAL-06",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "PAL-07",
        Element: "82",
        Requirement: "C",
      },
      {
        Position: "PAL-08",
        Element: "189",
        Requirement: "C",
      },
      {
        Position: "PAL-09",
        Element: "65",
        Requirement: "C",
      },
      {
        Position: "PAL-10",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "PAL-11",
        Element: "384",
        Requirement: "C",
      },
      {
        Position: "PAL-12",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "PAL-13",
        Element: "385",
        Requirement: "C",
      },
      {
        Position: "PAL-14",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "PAL-15",
        Element: "399",
        Requirement: "OP",
      },
      {
        Position: "PAL-16",
        Element: "810",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "ETD",
    Name: "Excess Transportation Detail",
    Version: "4010",
    Elements: [
      {
        Position: "ETD-01",
        Element: "626",
        Requirement: "M",
      },
      {
        Position: "ETD-02",
        Element: "627",
        Requirement: "M",
      },
      {
        Position: "ETD-03",
        Element: "128",
        Requirement: "C",
      },
      {
        Position: "ETD-04",
        Element: "127",
        Requirement: "C",
      },
      {
        Position: "ETD-05",
        Element: "743",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "GF",
    Name: "Furnished Goods and Services",
    Version: "4010",
    Elements: [
      {
        Position: "GF-01",
        Element: "128",
        Requirement: "C",
      },
      {
        Position: "GF-02",
        Element: "127",
        Requirement: "C",
      },
      {
        Position: "GF-03",
        Element: "367",
        Requirement: "OP",
      },
      {
        Position: "GF-04",
        Element: "782",
        Requirement: "OP",
      },
      {
        Position: "GF-05",
        Element: "128",
        Requirement: "C",
      },
      {
        Position: "GF-06",
        Element: "127",
        Requirement: "C",
      },
      {
        Position: "GF-07",
        Element: "328",
        Requirement: "OP",
      },
      {
        Position: "GF-08",
        Element: "128",
        Requirement: "C",
      },
      {
        Position: "GF-09",
        Element: "127",
        Requirement: "C",
      },
    ]
  },
  {
    Segment: "YNQ",
    Name: "Yes/No Question",
    Version: "4010",
    Elements: [
      {
        Position: "YNQ-01",
        Element: "1321",
        Requirement: "C",
      },
      {
        Position: "YNQ-02",
        Element: "1073",
        Requirement: "M",
      },
      {
        Position: "YNQ-03",
        Element: "1250",
        Requirement: "C",
      },
      {
        Position: "YNQ-04",
        Element: "1251",
        Requirement: "C",
      },
      {
        Position: "YNQ-05",
        Element: "933",
        Requirement: "OP",
      },
      {
        Position: "YNQ-06",
        Element: "933",
        Requirement: "OP",
      },
      {
        Position: "YNQ-07",
        Element: "933",
        Requirement: "OP",
      },
      {
        Position: "YNQ-08",
        Element: "1270",
        Requirement: "C",
      },
      {
        Position: "YNQ-09",
        Element: "1271",
        Requirement: "C",
      },
      {
        Position: "YNQ-10",
        Element: "933",
        Requirement: "C",
      },
    ]
  },
  {
    Segment: "V1",
    Name: "Vessel Identification",
    Version: "4010",
    Elements: [
      {
        Position: "V1-01",
        Element: "597",
        Requirement: "C",
      },
      {
        Position: "V1-02",
        Element: "182",
        Requirement: "C",
      },
      {
        Position: "V1-03",
        Element: "26",
        Requirement: "OP",
      },
      {
        Position: "V1-04",
        Element: "55",
        Requirement: "OP",
      },
      {
        Position: "V1-05",
        Element: "140",
        Requirement: "OP",
      },
      {
        Position: "V1-06",
        Element: "249",
        Requirement: "OP",
      },
      {
        Position: "V1-07",
        Element: "854",
        Requirement: "OP",
      },
      {
        Position: "V1-08",
        Element: "897",
        Requirement: "OP",
      },
      {
        Position: "V1-09",
        Element: "91",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "R4",
    Name: "Port or Terminal",
    Version: "4010",
    Elements: [
      {
        Position: "R4-01",
        Element: "115",
        Requirement: "M",
      },
      {
        Position: "R4-02",
        Element: "309",
        Requirement: "C",
      },
      {
        Position: "R4-03",
        Element: "310",
        Requirement: "C",
      },
      {
        Position: "R4-04",
        Element: "114",
        Requirement: "OP",
      },
      {
        Position: "R4-05",
        Element: "26",
        Requirement: "OP",
      },
      {
        Position: "R4-06",
        Element: "174",
        Requirement: "OP",
      },
      {
        Position: "R4-07",
        Element: "113",
        Requirement: "OP",
      },
      {
        Position: "R4-08",
        Element: "156",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "BIG",
    Name: "Beginning Segment for Invoice",
    Version: "4010",
    Elements: [
      {
        Position: "BIG-01",
        Element: "373",
        Requirement: "M",
      },
      {
        Position: "BIG-02",
        Element: "76",
        Requirement: "M",
      },
      {
        Position: "BIG-03",
        Element: "373",
        Requirement: "OP",
      },
      {
        Position: "BIG-04",
        Element: "324",
        Requirement: "OP",
      },
      {
        Position: "BIG-05",
        Element: "328",
        Requirement: "OP",
      },
      {
        Position: "BIG-06",
        Element: "327",
        Requirement: "OP",
      },
      {
        Position: "BIG-07",
        Element: "640",
        Requirement: "OP",
      },
      {
        Position: "BIG-08",
        Element: "353",
        Requirement: "OP",
      },
      {
        Position: "BIG-09",
        Element: "306",
        Requirement: "OP",
      },
      {
        Position: "BIG-10",
        Element: "76",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "NTE",
    Name: "Note/Special Instruction",
    Version: "4010",
    Elements: [
      {
        Position: "NTE-01",
        Element: "363",
        Requirement: "OP",
      },
      {
        Position: "NTE-02",
        Element: "352",
        Requirement: "M",
      },
    ]
  },
  {
    Segment: "DMG",
    Name: "Demographic Information",
    Version: "4010",
    Elements: [
      {
        Position: "DMG-01",
        Element: "1250",
        Requirement: "C",
      },
      {
        Position: "DMG-02",
        Element: "1251",
        Requirement: "C",
      },
      {
        Position: "DMG-03",
        Element: "1068",
        Requirement: "OP",
      },
      {
        Position: "DMG-04",
        Element: "1067",
        Requirement: "OP",
      },
      {
        Position: "DMG-05",
        Element: "1109",
        Requirement: "OP",
      },
      {
        Position: "DMG-06",
        Element: "1066",
        Requirement: "OP",
      },
      {
        Position: "DMG-07",
        Element: "26",
        Requirement: "OP",
      },
      {
        Position: "DMG-08",
        Element: "659",
        Requirement: "OP",
      },
      {
        Position: "DMG-09",
        Element: "380",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "L7",
    Name: "Tariff Reference",
    Version: "4010",
    Elements: [
      {
        Position: "L7-01",
        Element: "213",
        Requirement: "OP",
      },
      {
        Position: "L7-02",
        Element: "168",
        Requirement: "OP",
      },
      {
        Position: "L7-03",
        Element: "171",
        Requirement: "OP",
      },
      {
        Position: "L7-04",
        Element: "172",
        Requirement: "OP",
      },
      {
        Position: "L7-05",
        Element: "169",
        Requirement: "OP",
      },
      {
        Position: "L7-06",
        Element: "170",
        Requirement: "OP",
      },
      {
        Position: "L7-07",
        Element: "59",
        Requirement: "OP",
      },
      {
        Position: "L7-08",
        Element: "173",
        Requirement: "OP",
      },
      {
        Position: "L7-09",
        Element: "46",
        Requirement: "OP",
      },
      {
        Position: "L7-10",
        Element: "373",
        Requirement: "OP",
      },
      {
        Position: "L7-11",
        Element: "119",
        Requirement: "OP",
      },
      {
        Position: "L7-12",
        Element: "227",
        Requirement: "OP",
      },
      {
        Position: "L7-13",
        Element: "294",
        Requirement: "OP",
      },
      {
        Position: "L7-14",
        Element: "295",
        Requirement: "OP",
      },
      {
        Position: "L7-15",
        Element: "19",
        Requirement: "OP",
      },
      {
        Position: "L7-16",
        Element: "156",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "BAL",
    Name: "Balance Detail",
    Version: "4010",
    Elements: [
      {
        Position: "BAL-01",
        Element: "951",
        Requirement: "M",
      },
      {
        Position: "BAL-02",
        Element: "522",
        Requirement: "M",
      },
      {
        Position: "BAL-03",
        Element: "782",
        Requirement: "M",
      },
    ]
  },
  {
    Segment: "IT1",
    Name: "Baseline Item Data (Invoice)",
    Version: "4010",
    Elements: [
      {
        Position: "IT1-01",
        Element: "350",
        Requirement: "OP",
      },
      {
        Position: "IT1-02",
        Element: "358",
        Requirement: "C",
      },
      {
        Position: "IT1-03",
        Element: "355",
        Requirement: "C",
      },
      {
        Position: "IT1-04",
        Element: "212",
        Requirement: "C",
      },
      {
        Position: "IT1-05",
        Element: "639",
        Requirement: "OP",
      },
      {
        Position: "IT1-06",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-07",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-08",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-09",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-10",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-11",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-12",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-13",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-14",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-15",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-16",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-17",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-18",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-19",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-20",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-21",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-22",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-23",
        Element: "234",
        Requirement: "C",
      },
      {
        Position: "IT1-24",
        Element: "235",
        Requirement: "C",
      },
      {
        Position: "IT1-25",
        Element: "234",
        Requirement: "C",
      },
    ]
  },
  {
    Segment: "CRC",
    Name: "Conditions Indicator",
    Version: "4010",
    Elements: [
      {
        Position: "CRC-01",
        Element: "1136",
        Requirement: "M",
      },
      {
        Position: "CRC-02",
        Element: "1073",
        Requirement: "M",
      },
      {
        Position: "CRC-03",
        Element: "1321",
        Requirement: "M",
      },
      {
        Position: "CRC-04",
        Element: "1321",
        Requirement: "OP",
      },
      {
        Position: "CRC-05",
        Element: "1321",
        Requirement: "OP",
      },
      {
        Position: "CRC-06",
        Element: "1321",
        Requirement: "OP",
      },
      {
        Position: "CRC-07",
        Element: "1321",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "CAD",
    Name: "Carrier Detail",
    Version: "4010",
    Elements: [
      {
        Position: "CAD-01",
        Element: "91",
        Requirement: "OP",
      },
      {
        Position: "CAD-02",
        Element: "206",
        Requirement: "OP",
      },
      {
        Position: "CAD-03",
        Element: "207",
        Requirement: "OP",
      },
      {
        Position: "CAD-04",
        Element: "140",
        Requirement: "C",
      },
      {
        Position: "CAD-05",
        Element: "387",
        Requirement: "C",
      },
      {
        Position: "CAD-06",
        Element: "368",
        Requirement: "OP",
      },
      {
        Position: "CAD-07",
        Element: "128",
        Requirement: "OP",
      },
      {
        Position: "CAD-08",
        Element: "127",
        Requirement: "C",
      },
      {
        Position: "CAD-09",
        Element: "284",
        Requirement: "OP",
      },
    ]
  },
  {
    Segment: "SR",
    Name: "Requested Service Schedule",
    Version: "4010",
    Elements: [
      {
        Position: "SR-01",
        Element: "350",
        Requirement: "OP",
      },
      {
        Position: "SR-02",
        Element: "1430",
        Requirement: "OP",
      },
      {
        Position: "SR-03",
        Element: "337",
        Requirement: "C",
      },
      {
        Position: "SR-04",
        Element: "337",
        Requirement: "OP",
      },
      {
        Position: "SR-05",
        Element: "3",
        Requirement: "OP",
      },
      {
        Position: "SR-06",
        Element: "212",
        Requirement: "OP",
      },
      {
        Position: "SR-07",
        Element: "380",
        Requirement: "OP",
      },
      {
        Position: "SR-08",
        Element: "373",
        Requirement: "C",
      },
      {
        Position: "SR-09",
        Element: "373",
        Requirement: "OP",
      },
      {
        Position: "SR-10",
        Element: "234",
        Requirement: "OP",
      },
      {
        Position: "SR-11",
        Element: "234",
        Requirement: "OP",
      },
    ]
  }
];
