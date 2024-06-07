import { EDITemplateDocument } from "./interfaces/EDIInterfaces";

export const EDITemplateDocs: EDITemplateDocument[]  = [
    {
        Doc: 850,
        Version: "X12 4010",
        Segments: [
            {
                Position: 1,
                Segment: "ST",
                Requirement: "M",
                Max: "1"
            },
            {
                Position: 2,
                Segment: "BEG",
                Requirement: "M",
                Max: "1"
            },
            {
                Position: 3,
                Segment: "CUR",
                Requirement: "OP",
                Max: "1"
            },
            {
                Position: 4,
                Segment: "REF",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 5,
                Segment: "PER",
                Requirement: "OP",
                Max: "3"
            },
            {
                Position: 6,
                Segment: "TAX",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 7,
                Segment: "FOB",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 8,
                Segment: "CTP",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 9,
                Segment: "PAM",
                Requirement: "OP",
                Max: "10"
            },
            {
                Position: 10,
                Segment: "CSH",
                Requirement: "OP",
                Max: "5"
            },
            {
                Position: 11,
                Segment: "TC2",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 12,
                Segment: "Loop",
                Requirement: "OP",
                Max: "25",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SAC",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "CUR",
                        Requirement: "OP",
                        Max: "1"
                    },
                ]
            },
            {
                Position: 13,
                Segment: "ITD",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 14,
                Segment: "DIS",
                Requirement: "OP",
                Max: "20"
            },
            {
                Position: 15,
                Segment: "INC",
                Requirement: "OP",
                Max: "1"
            },
            {
                Position: 16,
                Segment: "DTM",
                Requirement: "OP",
                Max: "10"
            },
            {
                Position: 17,
                Segment: "LDT",
                Requirement: "M",
                Max: "1"
            },
            {
                Position: 18,
                Segment: "LIN",
                Requirement: "OP",
                Max: "5"
            },
            {
                Position: 19,
                Segment: "SI",
                Requirement: "OP",
                Max: "1"
            },
            {
                Position: 20,
                Segment: "PID",
                Requirement: "OP",
                Max: "200"
            },
            {
                Position: 21,
                Segment: "MEA",
                Requirement: "OP",
                Max: "40"
            },
            {
                Position: 22,
                Segment: "PWK",
                Requirement: "OP",
                Max: "25"
            },
            {
                Position: 23,
                Segment: "PKG",
                Requirement: "OP",
                Max: "200"
            },
            {
                Position: 24,
                Segment: "TD1",
                Requirement: "OP",
                Max: "2"
            },
            {
                Position: 25,
                Segment: "TD5",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 26,
                Segment: "TD3",
                Requirement: "OP",
                Max: "12"
            },
            {
                Position: 27,
                Segment: "TD4",
                Requirement: "OP",
                Max: "5"
            },
            {
                Position: 28,
                Segment: "MAN",
                Requirement: "OP",
                Max: "10"
            },
            {
                Position: 29,
                Segment: "PCT",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 30,
                Segment: "CTB",
                Requirement: "OP",
                Max: "5"
            },
            {
                Position: 31,
                Segment: "TXI",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: 32,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "AMT",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 3,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 4,
                        Segment: "PCT",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 5,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "FA1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "FA2",
                                Requirement: "M",
                                Max: ">1"
                            },
                        ]
                    },
                ]
            },
            {
                Position: 33,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N9",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 3,
                        Segment: "MTX",
                        Requirement: "OP",
                        Max: "1000"
                    },
                ]
            },
            {
                Position: 34,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N1",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "N2",
                        Requirement: "OP",
                        Max: "2"
                    },
                    {
                        Position: 3,
                        Segment: "N3",
                        Requirement: "OP",
                        Max: "2"
                    },
                    {
                        Position: 4,
                        Segment: "N4",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 5,
                        Segment: "NX2",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 6,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: 7,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 8,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 9,
                        Segment: "FOB",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 10,
                        Segment: "TD1",
                        Requirement: "OP",
                        Max: "2"
                    },
                    {
                        Position: 11,
                        Segment: "TD5",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: 12,
                        Segment: "TD3",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: 13,
                        Segment: "TD4",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: 14,
                        Segment: "PKG",
                        Requirement: "OP",
                        Max: "200"
                    },
                ]
            },
            {
                Position: 35,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "LM",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "LQ",
                        Requirement: "M",
                        Max: ">1"
                    },
                ]
            },
            {
                Position: 36,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SPI",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: 3,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: 4,
                        Segment: "MSG",
                        Requirement: "OP",
                        Max: "50"
                    },
                    {
                        Position: 5,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "20",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "N1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "N2",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: 3,
                                Segment: "N3",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: 4,
                                Segment: "N4",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 5,
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "20"
                            },
                            {
                                Position: 6,
                                Segment: "G61",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 7,
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "50"
                            },
                        ]
                    },
                    {
                        Position: 6,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "CB1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "20"
                            },
                            {
                                Position: 3,
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: "5"
                            },
                            {
                                Position: 4,
                                Segment: "LDT",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 5,
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "50"
                            },
                        ]
                    },
                ]
            },
            {
                Position: 37,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "ADV",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 3,
                        Segment: "MTX",
                        Requirement: "OP",
                        Max: ">1"
                    },
                ]
            },
            {
                Position: 38,
                Segment: "Loop",
                Requirement: "M",
                Max: "10000000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "PO1",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "LIN",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 3,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 4,
                        Segment: "CUR",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 5,
                        Segment: "CN1",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 6,
                        Segment: "PO3",
                        Requirement: "OP",
                        Max: "25"
                    },
                    {
                        Position: 7,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "CTP",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "CUR",
                                Requirement: "OP",
                                Max: "1"
                            },
                        ]
                    },
                    {
                        Position: 8,
                        Segment: "PWK",
                        Requirement: "OP",
                        Max: "10"
                    },
                    {
                        Position: 9,
                        Segment: "MEA",
                        Requirement: "OP",
                        Max: "40"
                    },
                    {
                        Position: 10,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "1000",
                        Segments: [
                            {
                                Position: 11,
                                Segment: "PID",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 12,
                                Segment: "MEA",
                                Requirement: "OP",
                                Max: "10"
                            },
                        ]
                    },
                    {
                        Position: 11,
                        Segment: "PWK",
                        Requirement: "OP",
                        Max: "25"
                    },
                    {
                        Position: 12,
                        Segment: "PO4",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 13,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 14,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "3"
                    },
                    {
                        Position: 15,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "25",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "SAC",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "CUR",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 3,
                                Segment: "CTP",
                                Requirement: "OP",
                                Max: "1"
                            },
                        ]
                    },
                    {
                        Position: 16,
                        Segment: "IT8",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 17,
                        Segment: "CSH",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 18,
                        Segment: "ITD",
                        Requirement: "OP",
                        Max: "2"
                    },
                    {
                        Position: 19,
                        Segment: "DIS",
                        Requirement: "OP",
                        Max: "20"
                    },
                    {
                        Position: 20,
                        Segment: "INC",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 21,
                        Segment: "TAX",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 22,
                        Segment: "FOB",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 23,
                        Segment: "SDQ",
                        Requirement: "OP",
                        Max: "500"
                    },
                    {
                        Position: 24,
                        Segment: "IT3",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: 25,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "10"
                    },
                    {
                        Position: 26,
                        Segment: "TC2",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 27,
                        Segment: "TD1",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 28,
                        Segment: "TD5",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: 29,
                        Segment: "TD3",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: 30,
                        Segment: "TD4",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: 31,
                        Segment: "PCT",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 32,
                        Segment: "MAN",
                        Requirement: "OP",
                        Max: "10"
                    },
                    {
                        Position: 33,
                        Segment: "MSG",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 34,
                        Segment: "SPI",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 35,
                        Segment: "TXI",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 36,
                        Segment: "CTB",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: 37,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "QTY",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: 38,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "200",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "SCH",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "TD1",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: 3,
                                Segment: "TD5",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: 4,
                                Segment: "TD3",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: 5,
                                Segment: "TD4",
                                Requirement: "OP",
                                Max: "5"
                            },
                            {
                                Position: 6,
                                Segment: "REF",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: 39,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "200",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "PKG",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "MEA",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: 40,
                        Segment: "LS",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 41,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "LDT",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "QTY",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 3,
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 4,
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "3"
                            },
                        ]
                    },
                    {
                        Position: 42,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "LM",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "LQ",
                                Requirement: "M",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: 43,
                        Segment: "LE",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: 44,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "1000",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "N9",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 3,
                                Segment: "MEA",
                                Requirement: "OP",
                                Max: "40"
                            },
                            {
                                Position: 4,
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "1000"
                            },
                        ]
                    },
                    {
                        Position: 45,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "200",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "N1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "N2",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: 3,
                                Segment: "N3",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: 4,
                                Segment: "N4",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 5,
                                Segment: "QTY",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 6,
                                Segment: "NX2",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 7,
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: 8,
                                Segment: "PER",
                                Requirement: "OP",
                                Max: "3"
                            },
                            {
                                Position: 9,
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 10,
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 11,
                                Segment: "FOB",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 12,
                                Segment: "SCH",
                                Requirement: "OP",
                                Max: "200"
                            },
                            {
                                Position: 13,
                                Segment: "TD1",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: 14,
                                Segment: "TD5",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: 15,
                                Segment: "TD3",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: 16,
                                Segment: "TD4",
                                Requirement: "OP",
                                Max: "5"
                            },
                            {
                                Position: 17,
                                Segment: "PKG",
                                Requirement: "OP",
                                Max: "200"
                            },
                        ]
                    },
                    {
                        Position: 46,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "LDT",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "MAN",
                                Requirement: "OP",
                                Max: "10"
                            },
                            {
                                Position: 3,
                                Segment: "QTY",
                                Requirement: "OP",
                                Max: "5"
                            },
                            {
                                Position: 4,
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 5,
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "3"
                            },
                        ]
                    },
                    {
                        Position: 47,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "1000",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "SLN",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 3,
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 4,
                                Segment: "PID",
                                Requirement: "OP",
                                Max: "1000"
                            },
                            {
                                Position: 5,
                                Segment: "PO3",
                                Requirement: "OP",
                                Max: "104"
                            },
                            {
                                Position: 6,
                                Segment: "TC2",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 7,
                                Segment: "ADV",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 8,
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: "10"
                            },
                            {
                                Position: 9,
                                Segment: "CTP",
                                Requirement: "OP",
                                Max: "25"
                            },
                            {
                                Position: 10,
                                Segment: "PAM",
                                Requirement: "OP",
                                Max: "10"
                            },
                            {
                                Position: 11,
                                Segment: "PO4",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 12,
                                Segment: "TAX",
                                Requirement: "OP",
                                Max: "3"
                            },
                        ]
                    },
                    {
                        Position: 48,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "N9",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 3,
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: 49,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "25",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "SAC",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "CUR",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 3,
                                Segment: "CTP",
                                Requirement: "OP",
                                Max: "1"
                            },
                        ]
                    },
                    {
                        Position: 50,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "QTY",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: 51,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "10",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "N1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "N2",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: 3,
                                Segment: "N3",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: 4,
                                Segment: "N4",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 5,
                                Segment: "NX2",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: 6,
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: 7,
                                Segment: "PER",
                                Requirement: "OP",
                                Max: "3"
                            },
                            {
                                Position: 8,
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: 52,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "AMT",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: 3,
                                Segment: "PCT",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: 53,
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: ">1",
                        Segments: [
                            {
                                Position: 1,
                                Segment: "LM",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: 2,
                                Segment: "LQ",
                                Requirement: "M",
                                Max: ">1"
                            },
                        ]
                    },
                ]
            },
            {
                Position: 39,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "CTT",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: 2,
                        Segment: "AMT",
                        Requirement: "OP",
                        Max: "1"
                    },
                ]
            },
            {
                Position: 40,
                Segment: "SE",
                Requirement: "M",
                Max: "1"
            },
        ]
    },
];