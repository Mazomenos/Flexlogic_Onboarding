import { EDITemplateDocument } from "./interfaces/EDIInterfaces";

export const EDITemplateDocs: EDITemplateDocument[] = [
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
    {
        Doc: 855,
        Version: "X12 4010",
        Segments: [
            {
                Position: 1,
                Segment: "ST",
                Requirement: "M",
                Max: "1",
            },
            {
                Position: 2,
                Segment: "BAK",
                Requirement: "M",
                Max: "1",
            },
            {
                Position: 3,
                Segment: "CUR",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 4,
                Segment: "REF",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 5,
                Segment: "PER",
                Requirement: "OP",
                Max: "3",
            },
            {
                Position: 6,
                Segment: "TAX",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 7,
                Segment: "FOB",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 8,
                Segment: "CTP",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 9,
                Segment: "PAM",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 10,
                Segment: "Loop",
                Requirement: "OP",
                Max: "25",
                Segments: [
                    {
                        Position: 1,
                        Segment: "CSH",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "SAC",
                        Requirement: "OP",
                        Max: "1",
                    },

                ]
            },
            {
                Position: 11,
                Segment: "CUR",
                Requirement: "M",
                Max: "1",
            },
            {
                Position: 12,
                Segment: "ITD",
                Requirement: "OP",
                Max: "5",
            },
            {
                Position: 13,
                Segment: "DIS",
                Requirement: "OP",
                Max: "20",
            },
            {
                Position: 14,
                Segment: "INC",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 15,
                Segment: "DTM",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 16,
                Segment: "LDT",
                Requirement: "OP",
                Max: "12",
            },
            {
                Position: 17,
                Segment: "LIN",
                Requirement: "OP",
                Max: "5",
            },
            {
                Position: 18,
                Segment: "SI",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 19,
                Segment: "PID",
                Requirement: "OP",
                Max: "200",
            },
            {
                Position: 20,
                Segment: "MEA",
                Requirement: "OP",
                Max: "40",
            },
            {
                Position: 21,
                Segment: "PWK",
                Requirement: "OP",
                Max: "25",
            },
            {
                Position: 22,
                Segment: "PKG",
                Requirement: "OP",
                Max: "25",
            },
            {
                Position: 23,
                Segment: "TD1",
                Requirement: "OP",
                Max: "2",
            },
            {
                Position: 24,
                Segment: "TD5",
                Requirement: "OP",
                Max: "12",
            },
            {
                Position: 25,
                Segment: "TD3",
                Requirement: "OP",
                Max: "12",
            },
            {
                Position: 26,
                Segment: "TD4",
                Requirement: "OP",
                Max: "5",
            },
            {
                Position: 27,
                Segment: "MAN",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 28,
                Segment: "TXI",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 29,
                Segment: "CTB",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 30,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N9",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 3,
                        Segment: "MSG",
                        Requirement: "M",
                        Max: "1000",
                    },

                ]
            },
            {
                Position: 31,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "N2",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 3,
                        Segment: "N3",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 4,
                        Segment: "N4",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 5,
                        Segment: "NX2",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 6,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 7,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 8,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 9,
                        Segment: "FOB",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 10,
                        Segment: "TD1",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 11,
                        Segment: "TD5",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 12,
                        Segment: "TD3",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 13,
                        Segment: "TD4",
                        Requirement: "OP",
                        Max: "5",
                    },
                    {
                        Position: 14,
                        Segment: "PKG",
                        Requirement: "OP",
                        Max: "25",
                    },
                    {
                        Position: 15,
                        Segment: "MSG",
                        Requirement: "OP",
                        Max: ">1",
                    },
                ]
            },
            {
                Position: 32,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "ADV",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 3,
                        Segment: "MTX",
                        Requirement: "OP",
                        Max: ">1",
                    },
                ]
            },
            {
                Position: 33,
                Segment: "Loop",
                Requirement: "OP",
                Max: "100000",
                Segments: [
                    {
                        Position: 52,
                        Segment: "PO1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 53,
                        Segment: "LIN",
                        Requirement: "M",
                        Max: ">1",
                    },
                    {
                        Position: 54,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 55,
                        Segment: "CUR",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 56,
                        Segment: "PO3",
                        Requirement: "OP",
                        Max: "25",
                    },
                    {
                        Position: 57,
                        Segment: "CTP",
                        Requirement: "M",
                        Max: ">1",
                    },
                    {
                        Position: 58,
                        Segment: "PAM",
                        Requirement: "OP",
                        Max: "10",
                    },
                    {
                        Position: 59,
                        Segment: "MEA",
                        Requirement: "OP",
                        Max: "40",
                    },
                ],
            },
            {
                Position: 34,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "PID",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "MEA",
                        Requirement: "OP",
                        Max: "10",
                    }
                ]
            },
            {
                Position: 35,
                Segment: "PWK",
                Requirement: "OP",
                Max: "25",
            },
            {
                Position: 36,
                Segment: "PO4",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 37,
                Segment: "REF",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 38,
                Segment: "PER",
                Requirement: "OP",
                Max: "3",
            },
            {
                Position: 39,
                Segment: "Loop",
                Requirement: "OP",
                Max: "25",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SAC",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "CUR",
                        Requirement: "OP",
                        Max: "1",
                    },

                ]
            },
            {
                Position: 40,
                Segment: "IT8",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 41,
                Segment: "CSH",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 42,
                Segment: "ITD",
                Requirement: "OP",
                Max: "2",
            },
            {
                Position: 43,
                Segment: "DIS",
                Requirement: "OP",
                Max: "20",
            },
            {
                Position: 44,
                Segment: "INC",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 45,
                Segment: "TAX",
                Requirement: "M",
                Max: ">1",
            },
            {
                Position: 46,
                Segment: "FOB",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 47,
                Segment: "SDQ",
                Requirement: "OP",
                Max: "500",
            },
            {
                Position: 48,
                Segment: "DTM",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 49,
                Segment: "LDT",
                Requirement: "OP",
                Max: "12",
            },
            {
                Position: 50,
                Segment: "TD1",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 51,
                Segment: "TD5",
                Requirement: "OP",
                Max: "12",
            },
            {
                Position: 52,
                Segment: "TD3",
                Requirement: "OP",
                Max: "12",
            },
            {
                Position: 53,
                Segment: "TD4",
                Requirement: "OP",
                Max: "5",
            },
            {
                Position: 54,
                Segment: "Loop",
                Requirement: "OP",
                Max: "104",
                Segments: [
                    {
                        Position: 1,
                        Segment: "ACK",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "1",
                    }
                ]
            },
            {
                Position: 55,
                Segment: "MAN",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 56,
                Segment: "AMT",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 57,
                Segment: "CTB",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 58,
                Segment: "TXI",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 59,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "QTY",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1",
                    }
                ]
            },
            {
                Position: 60,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "PKG",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "MEA",
                        Requirement: "OP",
                        Max: ">1",
                    }
                ]
            },
            {
                Position: 61,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SCH",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "TD1",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 3,
                        Segment: "TD5",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 4,
                        Segment: "TD3",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 5,
                        Segment: "TD4",
                        Requirement: "OP",
                        Max: "5",
                    },
                    {
                        Position: 6,
                        Segment: "REF",
                        Requirement: "M",
                        Max: ">1",
                    }
                ]
            },
            {
                Position: 62,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N9",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 3,
                        Segment: "MSG",
                        Requirement: "M",
                        Max: "1000",
                    },

                ]
            },
            {
                Position: 63,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "N2",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 3,
                        Segment: "N3",
                        Requirement: "M",
                        Max: "2",
                    },
                    {
                        Position: 4,
                        Segment: "N4",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 5,
                        Segment: "NX2",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 6,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 7,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "3",
                    },
                    {
                        Position: 8,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 9,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 10,
                        Segment: "FOB",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 11,
                        Segment: "SCH",
                        Requirement: "OP",
                        Max: "200",
                    },
                    {
                        Position: 12,
                        Segment: "TD1",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 13,
                        Segment: "TD5",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 14,
                        Segment: "TD3",
                        Requirement: "M",
                        Max: "12",
                    },
                    {
                        Position: 15,
                        Segment: "TD4",
                        Requirement: "OP",
                        Max: "5",
                    },
                    {
                        Position: 16,
                        Segment: "QTY",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 17,
                        Segment: "PKG",
                        Requirement: "OP",
                        Max: "25",
                    },

                ]
            },
            {
                Position: 64,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SLN",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "MSG",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 3,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 4,
                        Segment: "PID",
                        Requirement: "OP",
                        Max: "1000",
                    },
                    {
                        Position: 5,
                        Segment: "PO3",
                        Requirement: "OP",
                        Max: "25",
                    },
                    {
                        Position: 6,
                        Segment: "CTP",
                        Requirement: "OP",
                        Max: "25",
                    },
                    {
                        Position: 7,
                        Segment: "PAM",
                        Requirement: "OP",
                        Max: "10",
                    },
                    {
                        Position: 8,
                        Segment: "ACK",
                        Requirement: "OP",
                        Max: "104",
                    },
                ]
            },
            {
                Position: 65,
                Segment: "Loop",
                Requirement: "OP",
                Max: "10",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SAC",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "CUR",
                        Requirement: "OP",
                        Max: "1",
                    },

                ]
            },
            {
                Position: 66,
                Segment: "DTM",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 67,
                Segment: "PO4",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 68,
                Segment: "TAX",
                Requirement: "OP",
                Max: "3",
            },
            {
                Position: 69,
                Segment: "ADV",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 70,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "QTY",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1",
                    }
                ]
            },
            {
                Position: 71,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N9",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 3,
                        Segment: "MSG",
                        Requirement: "OP",
                        Max: ">1",
                    }

                ]
            },
            {
                Position: 72,
                Segment: "Loop",
                Requirement: "OP",
                Max: "10",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "N2",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 3,
                        Segment: "N3",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 4,
                        Segment: "N4",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 5,
                        Segment: "NX2",
                        Requirement: "M",
                        Max: ">1",
                    },
                    {
                        Position: 6,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 7,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "3",
                    },
                    {
                        Position: 8,
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1",
                    },

                ]
            },
            {
                Position: 73,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "CTT",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "AMT",
                        Requirement: "OP",
                        Max: "1",
                    },
                ]
            },
            {
                Position: 74,
                Segment: "SE",
                Requirement: "OP",
                Max: "1",
            },
        ]
    },
    {
        Doc: 856,
        Version: "X12 4010",
        Segments: [
            {
                Position: 1,
                Segment: "ST",
                Requirement: "M",
                Max: "1",
            },
            {
                Position: 2,
                Segment: "BSN",
                Requirement: "M",
                Max: "1",
            },
            {
                Position: 3,
                Segment: "DTM",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 4,
                Segment: "Loop",
                Requirement: "M",
                Max: "200000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "HL",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "LIN",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 3,
                        Segment: "SN1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 4,
                        Segment: "SLN",
                        Requirement: "OP",
                        Max: "1000",
                    },
                    {
                        Position: 5,
                        Segment: "PRF",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 6,
                        Segment: "PO4",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 7,
                        Segment: "PID",
                        Requirement: "OP",
                        Max: "200",
                    },
                    {
                        Position: 8,
                        Segment: "MEA",
                        Requirement: "OP",
                        Max: "40",
                    },
                    {
                        Position: 9,
                        Segment: "PWK",
                        Requirement: "OP",
                        Max: "25",
                    },
                    {
                        Position: 10,
                        Segment: "PKG",
                        Requirement: "OP",
                        Max: "25",
                    },
                    {
                        Position: 11,
                        Segment: "TD1",
                        Requirement: "OP",
                        Max: "20",
                    },
                    {
                        Position: 12,
                        Segment: "TD5",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 13,
                        Segment: "TD3",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 14,
                        Segment: "TD4",
                        Requirement: "OP",
                        Max: "5",
                    },
                    {
                        Position: 15,
                        Segment: "TSD",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 16,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 17,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "3",
                    }

                ]
            },
            {
                Position: 5,
                Segment: "Loop",
                Requirement: "OP",
                Max: "100",
                Segments: [
                    {
                        Position: 1,
                        Segment: "LH1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "LH2",
                        Requirement: "OP",
                        Max: "4",
                    },
                    {
                        Position: 3,
                        Segment: "LH3",
                        Requirement: "M",
                        Max: "12",
                    },
                    {
                        Position: 4,
                        Segment: "LFH",
                        Requirement: "OP",
                        Max: "20",
                    },
                    {
                        Position: 5,
                        Segment: "LEP",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 6,
                        Segment: "LH4",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 7,
                        Segment: "LHT",
                        Requirement: "OP",
                        Max: "3",
                    },
                    {
                        Position: 8,
                        Segment: "LHR",
                        Requirement: "OP",
                        Max: "10",
                    },
                    {
                        Position: 9,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "5",
                    },
                    {
                        Position: 10,
                        Segment: "LHE",
                        Requirement: "OP",
                        Max: "1",
                    }

                ]
            },
            {
                Position: 6,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "CLD",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "200",
                    },
                    {
                        Position: 3,
                        Segment: "DTP",
                        Requirement: "OP",
                        Max: "1",
                    },

                ]
            },
            {
                Position: 7,
                Segment: "MAN",
                Requirement: "M",
                Max: ">1",
            },
            {
                Position: 8,
                Segment: "DTM",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 9,
                Segment: "FOB",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 10,
                Segment: "PAL",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 11,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "N2",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 3,
                        Segment: "N3",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 4,
                        Segment: "N4",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 5,
                        Segment: "REF",
                        Requirement: "M",
                        Max: "12",
                    },
                    {
                        Position: 6,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "3",
                    },
                    {
                        Position: 7,
                        Segment: "FOB",
                        Requirement: "OP",
                        Max: "1",
                    },

                ]
            },
            {
                Position: 12,
                Segment: "SDQ",
                Requirement: "OP",
                Max: "50",
            },
            {
                Position: 13,
                Segment: "ETD",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 14,
                Segment: "CUR",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 15,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SAC",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "CUR",
                        Requirement: "OP",
                        Max: "1",
                    },

                ]
            },
            {
                Position: 16,
                Segment: "GF",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 17,
                Segment: "YNQ",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 18,
                Segment: "Loop",
                Requirement: "OP",
                Max: "10",
                Segments: [
                    {
                        Position: 1,
                        Segment: "LM",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "LQ",
                        Requirement: "M",
                        Max: "100",
                    },

                ]
            },
            {
                Position: 19,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "V1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "R4",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 3,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1",
                    },
                ]
            },
            {
                Position: 20,
                Segment: "CTT",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 21,
                Segment: "SE",
                Requirement: "M",
                Max: "1",
            },
        ]
    },
    {
        Doc: 810,
        Version: "X12 4010",
        Segments: [
            {
                Position: 1,
                Segment: "ST",
                Requirement: "M",
                Max: "1",
            },
            {
                Position: 2,
                Segment: "BIG",
                Requirement: "M",
                Max: "1",
            },
            {
                Position: 3,
                Segment: "NTE",
                Requirement: "OP",
                Max: "100",
            },
            {
                Position: 4,
                Segment: "CUR",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 5,
                Segment: "REF",
                Requirement: "OP",
                Max: "12",
            },
            {
                Position: 6,
                Segment: "YNQ",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 7,
                Segment: "PER",
                Requirement: "OP",
                Max: "3",
            },
            {
                Position: 8,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "N2",
                        Requirement: "M",
                        Max: "2",
                    },
                    {
                        Position: 3,
                        Segment: "N3",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 4,
                        Segment: "N4",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 5,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 6,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "3",
                    },
                    {
                        Position: 7,
                        Segment: "DMG",
                        Requirement: "OP",
                        Max: "1",
                    },

                    
                ]
            },
            {
                Position: 9,
                Segment: "ITD",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 10,
                Segment: "DTM",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 11,
                Segment: "FOB",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 12,
                Segment: "PID",
                Requirement: "OP",
                Max: "200",
            },
            {
                Position: 13,
                Segment: "MEA",
                Requirement: "OP",
                Max: "40",
            },
            {
                Position: 14,
                Segment: "PWK",
                Requirement: "OP",
                Max: "25",
            },
            {
                Position: 15,
                Segment: "PKG",
                Requirement: "OP",
                Max: "25",
            },
            {
                Position: 16,
                Segment: "L7",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 17,
                Segment: "BAL",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 18,
                Segment: "INC",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 19,
                Segment: "PAM",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 20,
                Segment: "Loop",
                Requirement: "OP",
                Max: "10",
                Segments: [
                    {
                        Position: 1,
                        Segment: "LM",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "LQ",
                        Requirement: "OP",
                        Max: "100",
                    },
                ]
            },
            {
                Position: 21,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N9",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "MSG",
                        Requirement: "M",
                        Max: "10",
                    },
                ]
            },
            {
                Position: 22,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "V1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "R4",
                        Requirement: "M",
                        Max: ">1",
                    },
                    {
                        Position: 3,
                        Segment: "DTM",
                        Requirement: "M",
                        Max: ">1",
                    },
                ]
            },
            {
                Position: 23,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "FA1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "FA2",
                        Requirement: "M",
                        Max: ">1",
                    },
                ]
            },
            {
                Position: 24,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "IT1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "CRC",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 3,
                        Segment: "QTY",
                        Requirement: "OP",
                        Max: "5",
                    },
                    {
                        Position: 4,
                        Segment: "CUR",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 5,
                        Segment: "IT3",
                        Requirement: "M",
                        Max: "5",
                    },
                    {
                        Position: 6,
                        Segment: "TXI",
                        Requirement: "OP",
                        Max: "10",
                    },
                    {
                        Position: 7,
                        Segment: "CTP",
                        Requirement: "M",
                        Max: "25",
                    },
                    {
                        Position: 8,
                        Segment: "PAM",
                        Requirement: "OP",
                        Max: "10",
                    },
                    {
                        Position: 9,
                        Segment: "MEA",
                        Requirement: "OP",
                        Max: "40",
                    },
                ]
            },
            {
                Position: 25,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "PID",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "MEA",
                        Requirement: "OP",
                        Max: "10",
                    },
                ]
            },
            {
                Position: 26,
                Segment: "PWK",
                Requirement: "OP",
                Max: "25",
            },
            {
                Position: 27,
                Segment: "PKG",
                Requirement: "OP",
                Max: "25",
            },
            {
                Position: 28,
                Segment: "PO4",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 29,
                Segment: "ITD",
                Requirement: "OP",
                Max: "2",
            },
            {
                Position: 30,
                Segment: "REF",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 31,
                Segment: "YNQ",
                Requirement: "M",
                Max: "10",
            },
            {
                Position: 32,
                Segment: "PER",
                Requirement: "OP",
                Max: "5",
            },
            {
                Position: 33,
                Segment: "SDQ",
                Requirement: "OP",
                Max: "500",
            },
            {
                Position: 34,
                Segment: "DTM",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 35,
                Segment: "CAD",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 36,
                Segment: "L7",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 37,
                Segment: "SR",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 38,
                Segment: "Loop",
                Requirement: "OP",
                Max: "25",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SAC",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "TXI",
                        Requirement: "OP",
                        Max: "10",
                    },
                    
                ]
            },
            {
                Position: 39,
                Segment: "Loop",
                Requirement: "OP",
                Max: "1000",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SLN",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 3,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    {
                        Position: 4,
                        Segment: "PID",
                        Requirement: "OP",
                        Max: "1000",
                    },
                    {
                        Position: 5,
                        Segment: "SAC",
                        Requirement: "OP",
                        Max: "25",
                    },
                    {
                        Position: 6,
                        Segment: "TC2",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 7,
                        Segment: "TXI",
                        Requirement: "M",
                        Max: "10",
                    },
                ]
            },
            {
                Position: 40,
                Segment: "Loop",
                Requirement: "OP",
                Max: "200",
                Segments: [
                    {
                        Position: 1,
                        Segment: "N1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "N2",
                        Requirement: "OP",
                        Max: "2",
                    },
                    {
                        Position: 3,
                        Segment: "N3",
                        Requirement: "M",
                        Max: "2",
                    },
                    {
                        Position: 4,
                        Segment: "N4",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 5,
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "12",
                    },
                    {
                        Position: 6,
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "3",
                    },
                    {
                        Position: 7,
                        Segment: "DMG",
                        Requirement: "OP",
                        Max: "1",
                    },
                    
                ]
            },
            {
                Position: 41,
                Segment: "Loop",
                Requirement: "OP",
                Max: "10",
                Segments: [
                    {
                        Position: 1,
                        Segment: "LM",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "LQ",
                        Requirement: "OP",
                        Max: "100",
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
                        Segment: "V1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "R4",
                        Requirement: "M",
                        Max: ">1",
                    },
                    {
                        Position: 3,
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    
                ]
            },
            {
                Position: 43,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "FA1",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "FA2",
                        Requirement: "OP",
                        Max: ">1",
                    },
                    
                ]
            },
            {
                Position: 44,
                Segment: "TDS",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 45,
                Segment: "TXI",
                Requirement: "OP",
                Max: "10",
            },
            {
                Position: 46,
                Segment: "CAD",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 47,
                Segment: "AMT",
                Requirement: "OP",
                Max: ">1",
            },
            {
                Position: 48,
                Segment: "Loop",
                Requirement: "OP",
                Max: "25",
                Segments: [
                    {
                        Position: 1,
                        Segment: "SAC",
                        Requirement: "M",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "TXI",
                        Requirement: "M",
                        Max: "10",
                    },
                    
                ]
            },
            {
                Position: 49,
                Segment: "Loop",
                Requirement: "OP",
                Max: ">1",
                Segments: [
                    {
                        Position: 1,
                        Segment: "ISS",
                        Requirement: "OP",
                        Max: "1",
                    },
                    {
                        Position: 2,
                        Segment: "PID",
                        Requirement: "M",
                        Max: "1",
                    },
                    
                ]
            },
            {
                Position: 50,
                Segment: "CTT",
                Requirement: "OP",
                Max: "1",
            },
            {
                Position: 51,
                Segment: "SE",
                Requirement: "OP",
                Max: "1",
            },
        ]
    }
];