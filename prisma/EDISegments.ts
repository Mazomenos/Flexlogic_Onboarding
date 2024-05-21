export const EDISegments = [
    {
        Segment: "ST",
        Name: "Transaction Set Header",
        Version: "4010",
        Elements: [
            {
                Position: "ST-01",
                Element: "143",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 3,
                Max: 3
            },
            {
                Position: "ST-02",
                Element: "329",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 4,
                Max: 9
            },
        ]
    },
    {
        Segment: "BEG",
        Name: "Beginning Segment for Purchase Order",
        Version: "4010",
        Elements: [
            {
                Position: "BEG-01",
                Element: "353",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "BEG-02",
                Element: "92",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "BEG-03",
                Element: "324",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 22
            },
            {
                Position: "BEG-04",
                Element: "328",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 30
            },
            {
                Position: "BEG-05",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Mandatory",
                Min: 8,
                Max: 8
            },
            {
                Position: "BEG-06",
                Element: "367",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 30
            },
            {
                Position: "BEG-07",
                Element: "587",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "BEG-08",
                Element: "1019",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 3,
                Max: 3
            },
            {
                Position: "BEG-09",
                Element: "1166",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "BEG-10",
                Element: "1232",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "BEG-11",
                Element: "786",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "BEG-12",
                Element: "640",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
        ]
    },
    {
        Segment: "CUR",
        Name: "Currency",
        Version: "4010",
        Elements: [
            {
                Position: "CUR-01",
                Element: "98",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 3
            },
            {
                Position: "CUR-02",
                Element: "100",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 3,
                Max: 3
            },
            {
                Position: "CUR-03",
                Element: "280",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 4,
                Max: 10
            },
            {
                Position: "CUR-04",
                Element: "98",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
            {
                Position: "CUR-05",
                Element: "100",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CUR-06",
                Element: "669",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CUR-07",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CUR-08",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Optional",
                Min: 8,
                Max: 8
            },
            {
                Position: "CUR-09",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Optional",
                Min: 4,
                Max: 8
            },
            {
                Position: "CUR-10",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CUR-11",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "CUR-12",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
            {
                Position: "CUR-13",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CUR-14",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "CUR-15",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
            {
                Position: "CUR-16",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CUR-17",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "CUR-18",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
            {
                Position: "CUR-19",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CUR-20",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "CUR-21",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
        ]
    },
    {
        Segment: "REF",
        Name: "Reference Identification",
        Version: "4010",
        Elements: [
            {
                Position: "REF-01",
                Element: "128",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 3
            },
            {
                Position: "REF-02",
                Element: "127",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "REF-03",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "REF-04",
                Element: "C040",
                Type: "Composite (composite)",
                Requirement: "Optional",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "128",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 2,
                            Max: 3
                        },
                        {
                            Position: "02",
                            Element: "127",
                            Type: "String (AN)",
                            Requirement: "Mandatory",
                            Min: 1,
                            Max: 30
                        },
                        {
                            Position: "03",
                            Element: "128",
                            Type: "Identifier (ID)",
                            Requirement: "Conditional",
                            Min: 2,
                            Max: 3
                        },
                        {
                            Position: "04",
                            Element: "127",
                            Type: "String (AN)",
                            Requirement: "Conditional",
                            Min: 1,
                            Max: 30
                        },
                        {
                            Position: "05",
                            Element: "128",
                            Type: "Identifier (ID)",
                            Requirement: "Conditional",
                            Min: 2,
                            Max: 3
                        },
                        {
                            Position: "06",
                            Element: "127",
                            Type: "String (AN)",
                            Requirement: "Conditional",
                            Min: 1,
                            Max: 30
                        },
                    ]
            }
        ]
    },
    {
        Segment: "PER",
        Name: "Administrative Communications Contact",
        Version: "4010",
        Elements: [
            {
                Position: "PER-01",
                Element: "366",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "PER-02",
                Element: "93",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 60
            },
            {
                Position: "PER-03",
                Element: "365",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PER-04",
                Element: "364",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "PER-05",
                Element: "365",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PER-06",
                Element: "364",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "PER-07",
                Element: "365",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PER-08",
                Element: "364",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "PER-09",
                Element: "443",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
        ]
    },
    {
        Segment: "TAX",
        Name: "Tax Reference",
        Version: "4010",
        Elements: [
            {
                Position: "TAX-01",
                Element: "325",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 20
            },
            {
                Position: "TAX-02",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TAX-03",
                Element: "310",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "TAX-04",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TAX-05",
                Element: "310",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "TAX-06",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TAX-07",
                Element: "310",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "TAX-08",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TAX-09",
                Element: "310",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "TAX-10",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TAX-11",
                Element: "310",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "TAX-12",
                Element: "441",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
            {
                Position: "TAX-13",
                Element: "1179",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
        ]
    },
    {
        Segment: "FOB",
        Name: "F.O.B. Related Instructions",
        Version: "4010",
        Elements: [
            {
                Position: "FOB-01",
                Element: "146",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "FOB-02",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "FOB-03",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 80
            },
            {
                Position: "FOB-04",
                Element: "334",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "FOB-05",
                Element: "335",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "FOB-06",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "FOB-07",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 80
            },
            {
                Position: "FOB-08",
                Element: "54",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "FOB-09",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
        ]
    },
    {
        Segment: "CTP",
        Name: "Pricing Information",
        Version: "4010",
        Elements: [
            {
                Position: "CTP-01",
                Element: "687",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "CTP-02",
                Element: "236",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CTP-03",
                Element: "212",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 17
            },
            {
                Position: "CTP-04",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "CTP-05",
                Element: "C001",
                Type: "Composite (composite)",
                Requirement: "Conditional",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "02",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "03",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "04",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "05",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "06",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "07",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "08",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "09",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "10",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "11",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "12",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "13",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "14",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "15",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                    ]
            },
            {
                Position: "CTP-06",
                Element: "648",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 3,
                Max: 3
            },
            {
                Position: "CTP-07",
                Element: "649",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "CTP-08",
                Element: "782",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 18
            },
            {
                Position: "CTP-09",
                Element: "639",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "CTP-10",
                Element: "499",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 10
            },
            {
                Position: "CTP-11",
                Element: "289",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
        ]
    },
    {
        Segment: "PAM",
        Name: "Period Amount",
        Version: "4010",
        Elements: [
            {
                Position: "PAM-01",
                Element: "673",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PAM-02",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "PAM-03",
                Element: "C001",
                Type: "Composite (composite)",
                Requirement: "Conditional",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "02",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "03",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "04",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "05",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "06",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "07",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "08",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "09",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "10",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "11",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "12",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "13",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "14",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "15",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                    ]
            },
            {
                Position: "PAM-04",
                Element: "522",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 3
            },
            {
                Position: "PAM-05",
                Element: "782",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 18
            },
            {
                Position: "PAM-06",
                Element: "344",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PAM-07",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "PAM-08",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "PAM-09",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
            {
                Position: "PAM-10",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "PAM-11",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "PAM-12",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
            {
                Position: "PAM-13",
                Element: "1004",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "PAM-14",
                Element: "954",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "PAM-15",
                Element: "1073",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
        ]
    },
    {
        Segment: "CSH",
        Name: "Sales Requirements",
        Version: "4010",
        Elements: [
            {
                Position: "CSH-01",
                Element: "563",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "CSH-02",
                Element: "306",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "CSH-03",
                Element: "610",
                Type: "N2",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "CSH-04",
                Element: "508",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 35
            },
            {
                Position: "CSH-05",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Optional",
                Min: 8,
                Max: 8
            },
            {
                Position: "CSH-06",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "CSH-07",
                Element: "560",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 10
            },
            {
                Position: "CSH-08",
                Element: "566",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "CSH-09",
                Element: "954",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "CSH-10",
                Element: "1004",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
        ]
    },
    {
        Segment: "TC2",
        Name: "Commodity",
        Version: "4010",
        Elements: [
            {
                Position: "TC2-01",
                Element: "23",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 1
            },
            {
                Position: "TC2-02",
                Element: "22",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 30
            },
        ]
    },
    {
        Segment: "SAC",
        Name: "Service, Promotion, Allowance, or Charge Information",
        Version: "4010",
        Elements: [
            {
                Position: "SAC-01",
                Element: "248",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 1
            },
            {
                Position: "SAC-02",
                Element: "1300",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 4,
                Max: 4
            },
            {
                Position: "SAC-03",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SAC-04",
                Element: "1301",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "SAC-05",
                Element: "610",
                Type: "N2",
                Requirement: "Optional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SAC-06",
                Element: "378",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 1
            },
            {
                Position: "SAC-07",
                Element: "332",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 6
            },
            {
                Position: "SAC-08",
                Element: "118",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 9
            },
            {
                Position: "SAC-09",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SAC-10",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SAC-11",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SAC-12",
                Element: "331",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SAC-13",
                Element: "127",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "SAC-14",
                Element: "770",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
            {
                Position: "SAC-15",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "SAC-16",
                Element: "819",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
        ]
    },
    {
        Segment: "ITD",
        Name: "Terms of Sale/Deferred Terms of Sale",
        Version: "4010",
        Elements: [
            {
                Position: "ITD-01",
                Element: "336",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "ITD-02",
                Element: "333",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "ITD-03",
                Element: "338",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 6
            },
            {
                Position: "ITD-04",
                Element: "370",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "ITD-05",
                Element: "351",
                Type: "Numeric (N0)",
                Requirement: "Conditional",
                Min: 1,
                Max: 3
            },
            {
                Position: "ITD-06",
                Element: "446",
                Type: "Date (DT)",
                Requirement: "Optional",
                Min: 8,
                Max: 8
            },
            {
                Position: "ITD-07",
                Element: "386",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 3
            },
            {
                Position: "ITD-08",
                Element: "362",
                Type: "N2",
                Requirement: "Optional",
                Min: 1,
                Max: 10
            },
            {
                Position: "ITD-09",
                Element: "388",
                Type: "Date (DT)",
                Requirement: "Optional",
                Min: 8,
                Max: 8
            },
            {
                Position: "ITD-10",
                Element: "389",
                Type: "N2",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "ITD-11",
                Element: "342",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 5
            },
            {
                Position: "ITD-12",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 80
            },
            {
                Position: "ITD-13",
                Element: "765",
                Type: "Numeric (N0)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "ITD-14",
                Element: "107",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "ITD-15",
                Element: "954",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 10
            },
        ]
    },
    {
        Segment: "DIS",
        Name: "Discount Detail",
        Version: "4010",
        Elements: [
            {
                Position: "DIS-01",
                Element: "653",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 3,
                Max: 3
            },
            {
                Position: "DIS-02",
                Element: "654",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "DIS-03",
                Element: "655",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 10
            },
            {
                Position: "DIS-04",
                Element: "656",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 3
            },
            {
                Position: "DIS-05",
                Element: "657",
                Type: "Numeric (N0)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 10
            },
            {
                Position: "DIS-06",
                Element: "657",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 10
            },
        ]
    },
    {
        Segment: "INC",
        Name: "Installment Information",
        Version: "4010",
        Elements: [
            {
                Position: "INC-01",
                Element: "336",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "INC-02",
                Element: "C001",
                Type: "Composite (composite)",
                Requirement: "Mandatory",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "02",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "03",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "04",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "05",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "06",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "07",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "08",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "09",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "10",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "11",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "12",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "13",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "14",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "15",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                    ]
            },
            {
                Position: "INC-03",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 15
            },
            {
                Position: "INC-04",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 15
            },
            {
                Position: "INC-05",
                Element: "782",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 18
            },
        ]
    },
    {
        Segment: "DTM",
        Name: "Date/Time Reference",
        Version: "4010",
        Elements: [
            {
                Position: "DTM-01",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 3,
                Max: 3
            },
            {
                Position: "DTM-02",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "DTM-03",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
            {
                Position: "DTM-04",
                Element: "623",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "DTM-05",
                Element: "1250",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 3
            },
            {
                Position: "DTM-06",
                Element: "1251",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 35
            },
        ]
    },
    {
        Segment: "LDT",
        Name: "Lead Time",
        Version: "4010",
        Elements: [
            {
                Position: "LDT-01",
                Element: "345",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "LDT-02",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 15
            },
            {
                Position: "LDT-03",
                Element: "344",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "LDT-04",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Optional",
                Min: 8,
                Max: 8
            },
        ]
    },
    {
        Segment: "LIN",
        Name: "Item Identification",
        Version: "4010",
        Elements: [
            {
                Position: "LIN-01",
                Element: "350",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
            {
                Position: "LIN-02",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-03",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-04",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-05",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-06",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-07",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-08",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-09",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-10",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-11",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-12",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-13",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-14",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-15",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-16",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-17",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-18",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-19",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-20",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-21",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-22",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-23",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-24",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-25",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-26",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-27",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-28",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-29",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "LIN-30",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "LIN-31",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
        ]
    },
    {
        Segment: "SI",
        Name: "Service Characteristic Identification",
        Version: "4010",
        Elements: [
            {
                Position: "SI-01",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-02",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-03",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-04",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-05",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-06",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-07",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-08",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-09",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-10",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-11",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-12",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-13",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-14",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-15",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-16",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-17",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-18",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-19",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SI-20",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SI-21",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
        ]
    },
    {
        Segment: "PID",
        Name: "Product/Item Description",
        Version: "4010",
        Elements: [
            {
                Position: "PID-01",
                Element: "349",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 1
            },
            {
                Position: "PID-02",
                Element: "750",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
            {
                Position: "PID-03",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PID-04",
                Element: "751",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 12
            },
            {
                Position: "PID-05",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "PID-06",
                Element: "752",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PID-07",
                Element: "822",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 15
            },
            {
                Position: "PID-08",
                Element: "1073",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
            {
                Position: "PID-09",
                Element: "819",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
        ]
    },
    {
        Segment: "MEA",
        Name: "Measurements",
        Version: "4010",
        Elements: [
            {
                Position: "MEA-01",
                Element: "737",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "MEA-02",
                Element: "738",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 3
            },
            {
                Position: "MEA-03",
                Element: "739",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 20
            },
            {
                Position: "MEA-04",
                Element: "C001",
                Type: "Composite (composite)",
                Requirement: "Conditional",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "02",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "03",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "04",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "05",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "06",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "07",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "08",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "09",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "10",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "11",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "12",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "13",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "14",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "15",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                    ]
            },
            {
                Position: "MEA-05",
                Element: "740",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 20
            },
            {
                Position: "MEA-06",
                Element: "741",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 20
            },
            {
                Position: "MEA-07",
                Element: "935",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "MEA-08",
                Element: "936",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "MEA-09",
                Element: "752",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "MEA-10",
                Element: "1373",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 4
            },
        ]
    },
    {
        Segment: "PWK",
        Name: "Paperwork",
        Version: "4010",
        Elements: [
            {
                Position: "PWK-01",
                Element: "755",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "PWK-02",
                Element: "756",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "PWK-03",
                Element: "757",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "PWK-04",
                Element: "98",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
            {
                Position: "PWK-05",
                Element: "66",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "PWK-06",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "PWK-07",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 80
            },
            {
                Position: "PWK-08",
                Element: "C002",
                Type: "Composite (composite)",
                Requirement: "Optional",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "704",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 1,
                            Max: 2
                        },
                        {
                            Position: "02",
                            Element: "704",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 2
                        },
                        {
                            Position: "03",
                            Element: "704",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 2
                        },
                        {
                            Position: "04",
                            Element: "704",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 2
                        },
                        {
                            Position: "05",
                            Element: "704",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 2
                        },
                    ]
            },
            {
                Position: "PWK-09",
                Element: "1525",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
        ]
    },
    {
        Segment: "PKG",
        Name: "Marking, Packaging, Loading",
        Version: "4010",
        Elements: [
            {
                Position: "PKG-01",
                Element: "349",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 1
            },
            {
                Position: "PKG-02",
                Element: "753",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 5
            },
            {
                Position: "PKG-03",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PKG-04",
                Element: "754",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 7
            },
            {
                Position: "PKG-05",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "PKG-06",
                Element: "400",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
        ]
    },
    {
        Segment: "TD1",
        Name: "Carrier Details (Quantity and Weight)",
        Version: "4010",
        Elements: [
            {
                Position: "TD1-01",
                Element: "103",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 3,
                Max: 5
            },
            {
                Position: "TD1-02",
                Element: "80",
                Type: "Numeric (N0)",
                Requirement: "Conditional",
                Min: 1,
                Max: 7
            },
            {
                Position: "TD1-03",
                Element: "23",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
            {
                Position: "TD1-04",
                Element: "22",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "TD1-05",
                Element: "79",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 50
            },
            {
                Position: "TD1-06",
                Element: "187",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TD1-07",
                Element: "81",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "TD1-08",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD1-09",
                Element: "183",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 8
            },
            {
                Position: "TD1-10",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
        ]
    },
    {
        Segment: "TD5",
        Name: "Carrier Details (Routing Sequence/Transit Time)",
        Version: "4010",
        Elements: [
            {
                Position: "TD5-01",
                Element: "133",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TD5-02",
                Element: "66",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TD5-03",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "TD5-04",
                Element: "91",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TD5-05",
                Element: "387",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 35
            },
            {
                Position: "TD5-06",
                Element: "368",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD5-07",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TD5-08",
                Element: "310",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "TD5-09",
                Element: "731",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD5-10",
                Element: "732",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD5-11",
                Element: "733",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 4
            },
            {
                Position: "TD5-12",
                Element: "284",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD5-13",
                Element: "284",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD5-14",
                Element: "284",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD5-15",
                Element: "26",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
        ]
    },
    {
        Segment: "TD3",
        Name: "Carrier Details (Equipment)",
        Version: "4010",
        Elements: [
            {
                Position: "TD3-01",
                Element: "40",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD3-02",
                Element: "206",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 4
            },
            {
                Position: "TD3-03",
                Element: "207",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "TD3-04",
                Element: "187",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "TD3-05",
                Element: "81",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "TD3-06",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD3-07",
                Element: "102",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
            {
                Position: "TD3-08",
                Element: "407",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TD3-09",
                Element: "225",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 2,
                Max: 15
            },
            {
                Position: "TD3-10",
                Element: "24",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 4,
                Max: 4
            },
        ]
    },
    {
        Segment: "TD4",
        Name: "Carrier Details (Special Handling, or Hazardous Materials, or Both)",
        Version: "4010",
        Elements: [
            {
                Position: "TD4-01",
                Element: "152",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 3
            },
            {
                Position: "TD4-02",
                Element: "208",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 1
            },
            {
                Position: "TD4-03",
                Element: "209",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 4
            },
            {
                Position: "TD4-04",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "TD4-05",
                Element: "1073",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
        ]
    },
    {
        Segment: "MAN",
        Name: "Marks and Numbers",
        Version: "4010",
        Elements: [
            {
                Position: "MAN-01",
                Element: "88",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 2
            },
            {
                Position: "MAN-02",
                Element: "87",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 48
            },
            {
                Position: "MAN-03",
                Element: "87",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 48
            },
            {
                Position: "MAN-04",
                Element: "88",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "MAN-05",
                Element: "87",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "MAN-06",
                Element: "87",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 48
            },
        ]
    },
    {
        Segment: "PCT",
        Name: "Percent Amounts",
        Version: "4010",
        Elements: [
            {
                Position: "PCT-01",
                Element: "1004",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 2
            },
            {
                Position: "PCT-02",
                Element: "954",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 10
            },
        ]
    },
    {
        Segment: "CTB",
        Name: "Restrictions/Conditions",
        Version: "4010",
        Elements: [
            {
                Position: "CTB-01",
                Element: "688",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "CTB-02",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "CTB-03",
                Element: "673",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "CTB-04",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "CTB-05",
                Element: "522",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 3
            },
            {
                Position: "CTB-06",
                Element: "610",
                Type: "N2",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            }
        ]
    },
    {
        Segment: "TXI",
        Name: "Tax Information",
        Version: "4010",
        Elements: [
            {
                Position: "TXI-01",
                Element: "963",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "TXI-02",
                Element: "782",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 18
            },
            {
                Position: "TXI-03",
                Element: "954",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "TXI-04",
                Element: "955",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "TXI-05",
                Element: "956",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "TXI-06",
                Element: "441",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 1
            },
            {
                Position: "TXI-07",
                Element: "662",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
            {
                Position: "TXI-08",
                Element: "828",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 9
            },
            {
                Position: "TXI-09",
                Element: "325",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
            {
                Position: "TXI-10",
                Element: "350",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
        ]
    },
    {
        Segment: "AMT",
        Name: "Monetary Amount",
        Version: "4010",
        Elements: [
            {
                Position: "AMT-01",
                Element: "522",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 3
            },
            {
                Position: "AMT-02",
                Element: "782",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 18
            },
            {
                Position: "AMT-03",
                Element: "478",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
        ]
    },
    {
        Segment: "FA1",
        Name: "Type of Financial Accounting Data",
        Version: "4010",
        Elements: [
            {
                Position: "FA1-01",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "FA1-02",
                Element: "1300",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 4,
                Max: 4
            },
            {
                Position: "FA1-03",
                Element: "248",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
        ]
    },
    {
        Segment: "FA2",
        Name: "Accounting Data",
        Version: "4010",
        Elements: [
            {
                Position: "FA2-01",
                Element: "1196",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "FA2-02",
                Element: "1195",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 80
            },
        ]
    },
    {
        Segment: "N9",
        Name: "Reference Identification",
        Version: "4010",
        Elements: [
            {
                Position: "N9-01",
                Element: "128",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 3
            },
            {
                Position: "N9-02",
                Element: "127",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "N9-03",
                Element: "369",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 45
            },
            {
                Position: "N9-04",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Optional",
                Min: 8,
                Max: 8
            },
            {
                Position: "N9-05",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
            {
                Position: "N9-06",
                Element: "623",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "N9-07",
                Element: "C040",
                Type: "Composite (composite)",
                Requirement: "Optional",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "128",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 2,
                            Max: 3
                        },
                        {
                            Position: "02",
                            Element: "127",
                            Type: "String (AN)",
                            Requirement: "Mandatory",
                            Min: 1,
                            Max: 30
                        },
                        {
                            Position: "03",
                            Element: "128",
                            Type: "Identifier (ID)",
                            Requirement: "Conditional",
                            Min: 2,
                            Max: 3
                        },
                        {
                            Position: "04",
                            Element: "127",
                            Type: "String (AN)",
                            Requirement: "Conditional",
                            Min: 1,
                            Max: 30
                        },
                        {
                            Position: "05",
                            Element: "128",
                            Type: "Identifier (ID)",
                            Requirement: "Conditional",
                            Min: 2,
                            Max: 3
                        },
                        {
                            Position: "06",
                            Element: "127",
                            Type: "String (AN)",
                            Requirement: "Conditional",
                            Min: 1,
                            Max: 30
                        },
                    ]
            },
        ]
    },
    {
        Segment: "MSG",
        Name: "Message Text",
        Version: "4010",
        Elements: [
            {
                Position: "MSG-01",
                Element: "933",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 264
            },
            {
                Position: "MSG-02",
                Element: "934",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "MSG-03",
                Element: "1470",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 9
            },
        ]
    },
    {
        Segment: "N1",
        Name: "Name",
        Version: "4010",
        Elements: [
            {
                Position: "N1-01",
                Element: "98",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 3
            },
            {
                Position: "N1-02",
                Element: "93",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 60
            },
            {
                Position: "N1-03",
                Element: "66",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "N1-04",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "N1-05",
                Element: "706",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "N1-06",
                Element: "98",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
        ]
    },
    {
        Segment: "N2",
        Name: "Additional Name Information",
        Version: "4010",
        Elements: [
            {
                Position: "N2-01",
                Element: "93",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 60
            },
            {
                Position: "N2-02",
                Element: "93",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 60
            },
        ]
    },
    {
        Segment: "N3",
        Name: "Address Information",
        Version: "4010",
        Elements: [
            {
                Position: "N3-01",
                Element: "166",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 55
            },
            {
                Position: "N3-02",
                Element: "166",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 55
            },
        ]
    },
    {
        Segment: "N4",
        Name: "Geographic Location",
        Version: "4010",
        Elements: [
            {
                Position: "N4-01",
                Element: "19",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 2,
                Max: 30
            },
            {
                Position: "N4-02",
                Element: "156",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "N4-03",
                Element: "116",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 3,
                Max: 15
            },
            {
                Position: "N4-04",
                Element: "26",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
            {
                Position: "N4-05",
                Element: "309",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "N4-06",
                Element: "310",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 30
            },
        ]
    },
    {
        Segment: "NX2",
        Name: "Location ID Component",
        Version: "4010",
        Elements: [
            {
                Position: "NX2-01",
                Element: "1106",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "NX2-02",
                Element: "166",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 55
            },
            {
                Position: "NX2-03",
                Element: "1096",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 5,
                Max: 5
            },
        ]
    },
    {
        Segment: "LM",
        Name: "Code Source Information",
        Version: "4010",
        Elements: [
            {
                Position: "LM-01",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "LM-02",
                Element: "822",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 15
            },
        ]
    },
    {
        Segment: "LQ",
        Name: "Industry Code",
        Version: "4010",
        Elements: [
            {
                Position: "LQ-01",
                Element: "1270",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 3
            },
            {
                Position: "LQ-02",
                Element: "1271",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
        ]
    },
    {
        Segment: "SPI",
        Name: "Specification Identifier",
        Version: "4010",
        Elements: [
            {
                Position: "SPI-01",
                Element: "786",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "SPI-02",
                Element: "128",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 3
            },
            {
                Position: "SPI-03",
                Element: "127",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
            {
                Position: "SPI-04",
                Element: "790",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 132
            },
            {
                Position: "SPI-05",
                Element: "791",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 80
            },
            {
                Position: "SPI-06",
                Element: "792",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
            {
                Position: "SPI-07",
                Element: "353",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SPI-08",
                Element: "755",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SPI-09",
                Element: "786",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SPI-10",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SPI-11",
                Element: "822",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SPI-12",
                Element: "554",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 6
            },
            {
                Position: "SPI-13",
                Element: "1322",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
            {
                Position: "SPI-14",
                Element: "1401",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 3
            },
            {
                Position: "SPI-15",
                Element: "1005",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 4,
                Max: 4
            },
        ]
    },
    {
        Segment: "G61",
        Name: "Contact",
        Version: "4010",
        Elements: [
            {
                Position: "G61-01",
                Element: "366",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "G61-02",
                Element: "93",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 60
            },
            {
                Position: "G61-03",
                Element: "365",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "G61-04",
                Element: "364",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 80
            },
            {
                Position: "G61-05",
                Element: "443",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
        ]
    },
    {
        Segment: "CB1",
        Name: "Contract and Cost Accounting Standards Data",
        Version: "4010",
        Elements: [
            {
                Position: "CB1-01",
                Element: "1309",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "CB1-02",
                Element: "1310",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
        ]
    },
    {
        Segment: "ADV",
        Name: "Advertising Demographic Information",
        Version: "4010",
        Elements: [
            {
                Position: "ADV-01",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "ADV-02",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "ADV-03",
                Element: "740",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
            {
                Position: "ADV-04",
                Element: "741",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
            {
                Position: "ADV-05",
                Element: "729",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 6
            },
            {
                Position: "ADV-06",
                Element: "1000",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "ADV-07",
                Element: "739",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 20
            },
        ]
    },
    {
        Segment: "MTX",
        Name: "Text",
        Version: "4010",
        Elements: [
            {
                Position: "MTX-01",
                Element: "363",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 3,
                Max: 3
            },
            {
                Position: "MTX-02",
                Element: "1551",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 4096
            },
            {
                Position: "MTX-03",
                Element: "1551",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 4096
            },
            {
                Position: "MTX-04",
                Element: "934",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
        ]
    },
    {
        Segment: "PO1",
        Name: "Baseline Item Data",
        Version: "4010",
        Elements: [
            {
                Position: "PO1-01",
                Element: "350",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
            {
                Position: "PO1-02",
                Element: "330",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "PO1-03",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-04",
                Element: "212",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 17
            },
            {
                Position: "PO1-05",
                Element: "639",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-06",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-07",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-08",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-09",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-10",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-11",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-12",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-13",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-14",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-15",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-16",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-17",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-18",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-19",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-20",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-21",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-22",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-23",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "PO1-24",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO1-25",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
        ]
    },
    {
        Segment: "CN1",
        Name: "Contract Information",
        Version: "4010",
        Elements: [
            {
                Position: "CN1-01",
                Element: "1166",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "CN1-02",
                Element: "782",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 18
            },
            {
                Position: "CN1-03",
                Element: "332",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 6
            },
            {
                Position: "CN1-04",
                Element: "127",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 30
            },
            {
                Position: "CN1-05",
                Element: "338",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 6
            },
            {
                Position: "CN1-06",
                Element: "799",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 30
            },
        ]
    },
    {
        Segment: "PO3",
        Name: "Additional Item Detail",
        Version: "4010",
        Elements: [
            {
                Position: "PO3-01",
                Element: "371",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO3-02",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Optional",
                Min: 8,
                Max: 8
            },
            {
                Position: "PO3-03",
                Element: "236",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "PO3-04",
                Element: "212",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 17
            },
            {
                Position: "PO3-05",
                Element: "639",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO3-06",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 15
            },
            {
                Position: "PO3-07",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO3-08",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 80
            },
        ]
    },
    {
        Segment: "PO4",
        Name: "Item Physical Details",
        Version: "4010",
        Elements: [
            {
                Position: "PO4-01",
                Element: "356",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 6
            },
            {
                Position: "PO4-02",
                Element: "357",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 8
            },
            {
                Position: "PO4-03",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO4-04",
                Element: "103",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 3,
                Max: 5
            },
            {
                Position: "PO4-05",
                Element: "187",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "PO4-06",
                Element: "384",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 9
            },
            {
                Position: "PO4-07",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO4-08",
                Element: "385",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 9
            },
            {
                Position: "PO4-09",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO4-10",
                Element: "82",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 8
            },
            {
                Position: "PO4-11",
                Element: "189",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 8
            },
            {
                Position: "PO4-12",
                Element: "65",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 8
            },
            {
                Position: "PO4-13",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO4-14",
                Element: "810",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 6
            },
            {
                Position: "PO4-15",
                Element: "752",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "PO4-16",
                Element: "350",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 20
            },
            {
                Position: "PO4-17",
                Element: "350",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
            {
                Position: "PO4-18",
                Element: "1470",
                Type: "Numeric (N0)",
                Requirement: "Optional",
                Min: 1,
                Max: 9
            },
        ]
    },
    {
        Segment: "IT8",
        Name: "Conditions of Sale",
        Version: "4010",
        Elements: [
            {
                Position: "IT8-01",
                Element: "563",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "IT8-02",
                Element: "306",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "IT8-03",
                Element: "610",
                Type: "N2",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "IT8-04",
                Element: "508",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 35
            },
            {
                Position: "IT8-05",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "IT8-06",
                Element: "559",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-07",
                Element: "566",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 1,
                Max: 2
            },
            {
                Position: "IT8-08",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-09",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-10",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-11",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-12",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-13",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-14",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-15",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-16",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-17",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-18",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-19",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-20",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-21",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-22",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-23",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-24",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-25",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "IT8-26",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT8-27",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
        ]
    },
    {
        Segment: "SDQ",
        Name: "Destination Quantity",
        Version: "4010",
        Elements: [
            {
                Position: "SDQ-01",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "SDQ-02",
                Element: "66",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 2
            },
            {
                Position: "SDQ-03",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-04",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-05",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-06",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-07",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-08",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-09",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-10",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-11",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-12",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-13",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-14",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-15",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-16",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-17",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-18",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-19",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-20",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-21",
                Element: "67",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 2,
                Max: 80
            },
            {
                Position: "SDQ-22",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SDQ-23",
                Element: "310",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 30
            },
        ]
    },
    {
        Segment: "IT3",
        Name: "Additional Item Data",
        Version: "4010",
        Elements: [
            {
                Position: "IT3-01",
                Element: "382",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "IT3-02",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT3-03",
                Element: "368",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "IT3-04",
                Element: "383",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 9
            },
            {
                Position: "IT3-05",
                Element: "371",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
        ]
    },
    {
        Segment: "QTY",
        Name: "Quantity",
        Version: "4010",
        Elements: [
            {
                Position: "QTY-01",
                Element: "673",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "QTY-02",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "QTY-03",
                Element: "C001",
                Type: "Composite (composite)",
                Requirement: "Optional",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "02",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "03",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "04",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "05",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "06",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "07",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "08",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "09",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "10",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "11",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "12",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "13",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "14",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "15",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                    ]
            },
            {
                Position: "QTY-04",
                Element: "61",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 30
            },
        ]
    },
    {
        Segment: "SCH",
        Name: "Line Item Schedule",
        Version: "4010",
        Elements: [
            {
                Position: "SCH-01",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 15
            },
            {
                Position: "SCH-02",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 2,
                Max: 2
            },
            {
                Position: "SCH-03",
                Element: "98",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 3
            },
            {
                Position: "SCH-04",
                Element: "93",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 60
            },
            {
                Position: "SCH-05",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 3,
                Max: 3
            },
            {
                Position: "SCH-06",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Mandatory",
                Min: 8,
                Max: 8
            },
            {
                Position: "SCH-07",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Optional",
                Min: 4,
                Max: 8
            },
            {
                Position: "SCH-08",
                Element: "374",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 3,
                Max: 3
            },
            {
                Position: "SCH-09",
                Element: "373",
                Type: "Date (DT)",
                Requirement: "Conditional",
                Min: 8,
                Max: 8
            },
            {
                Position: "SCH-10",
                Element: "337",
                Type: "Time (TM)",
                Requirement: "Conditional",
                Min: 4,
                Max: 8
            },
            {
                Position: "SCH-11",
                Element: "326",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 45
            },
            {
                Position: "SCH-12",
                Element: "350",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
        ]
    },
    {
        Segment: "LS",
        Name: "Loop Header",
        Version: "4010",
        Elements: [
            {
                Position: "LS-01",
                Element: "447",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 6
            },
        ]
    },
    {
        Segment: "LE",
        Name: "Loop Trailer",
        Version: "4010",
        Elements: [
            {
                Position: "LE-01",
                Element: "447",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 6
            },
        ]
    },
    {
        Segment: "SLN",
        Name: "Subline Item Detail",
        Version: "4010",
        Elements: [
            {
                Position: "SLN-01",
                Element: "350",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 20
            },
            {
                Position: "SLN-02",
                Element: "350",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 20
            },
            {
                Position: "SLN-03",
                Element: "662",
                Type: "Identifier (ID)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 1
            },
            {
                Position: "SLN-04",
                Element: "380",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 15
            },
            {
                Position: "SLN-05",
                Element: "C001",
                Type: "Composite (composite)",
                Requirement: "Conditional",
                Composites:
                    [
                        {
                            Position: "01",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Mandatory",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "02",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "03",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "04",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "05",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "06",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "07",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "08",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "09",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "10",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "11",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "12",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                        {
                            Position: "13",
                            Element: "355",
                            Type: "Identifier (ID)",
                            Requirement: "Optional",
                            Min: 2,
                            Max: 2
                        },
                        {
                            Position: "14",
                            Element: "1018",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 15
                        },
                        {
                            Position: "15",
                            Element: "649",
                            Type: "Decimal number (R)",
                            Requirement: "Optional",
                            Min: 1,
                            Max: 10
                        },
                    ]
            },
            {
                Position: "SLN-06",
                Element: "212",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 17
            },
            {
                Position: "SLN-07",
                Element: "639",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-08",
                Element: "662",
                Type: "Identifier (ID)",
                Requirement: "Optional",
                Min: 1,
                Max: 1
            },
            {
                Position: "SLN-09",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-10",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-11",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-12",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-13",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-14",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-15",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-16",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-17",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-18",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-19",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-20",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-21",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-22",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-23",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-24",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-25",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-26",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
            {
                Position: "SLN-27",
                Element: "235",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "SLN-28",
                Element: "234",
                Type: "String (AN)",
                Requirement: "Conditional",
                Min: 1,
                Max: 48
            },
        ]
    },
    {
        Segment: "CTT",
        Name: "Transaction Totals",
        Version: "4010",
        Elements: [
            {
                Position: "CTT-01",
                Element: "354",
                Type: "Numeric (N0)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 6
            },
            {
                Position: "CTT-02",
                Element: "347",
                Type: "Decimal number (R)",
                Requirement: "Optional",
                Min: 1,
                Max: 10
            },
            {
                Position: "CTT-03",
                Element: "81",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 10
            },
            {
                Position: "CTT-04",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "CTT-05",
                Element: "183",
                Type: "Decimal number (R)",
                Requirement: "Conditional",
                Min: 1,
                Max: 8
            },
            {
                Position: "CTT-06",
                Element: "355",
                Type: "Identifier (ID)",
                Requirement: "Conditional",
                Min: 2,
                Max: 2
            },
            {
                Position: "CTT-07",
                Element: "352",
                Type: "String (AN)",
                Requirement: "Optional",
                Min: 1,
                Max: 80
            },
        ]
    },
    {
        Segment: "SE",
        Name: "Transaction Set Trailer",
        Version: "4010",
        Elements: [
            {
                Position: "SE-01",
                Element: "96",
                Type: "Numeric (N0)",
                Requirement: "Mandatory",
                Min: 1,
                Max: 10
            },
            {
                Position: "SE-02",
                Element: "329",
                Type: "String (AN)",
                Requirement: "Mandatory",
                Min: 4,
                Max: 9
            },
        ]
    },
]
