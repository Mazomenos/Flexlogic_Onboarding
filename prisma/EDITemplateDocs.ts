export const EDITemplateDocs = [
    {
        Doc: 850,
        Version: "X12 4010",
        Segments: [
            {
                Position: "H10",
                Segment: "ST",
                Requirement: "M",
                Max: "1"
            },
            {
                Position: "H20",
                Segment: "BEG",
                Requirement: "M",
                Max: "1"
            },
            {
                Position: "H40",
                Segment: "CUR",
                Requirement: "OP",
                Max: "1"
            },
            {
                Position: "H50",
                Segment: "REF",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "H60",
                Segment: "PER",
                Requirement: "OP",
                Max: "3"
            },
            {
                Position: "H70",
                Segment: "TAX",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "H80",
                Segment: "FOB",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "H90",
                Segment: "CTP",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "H95",
                Segment: "PAM",
                Requirement: "OP",
                Max: "10"
            },
            {
                Position: "H110",
                Segment: "CSH",
                Requirement: "OP",
                Max: "5"
            },
            {
                Position: "H115",
                Segment: "TC2",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "OP",
                Max: "Repeat 25",
                Segments: [
                    {
                        Position: "H120",
                        Segment: "SAC",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "H125",
                        Segment: "CUR",
                        Requirement: "OP",
                        Max: "1"
                    },
                ]
            },
            {
                Position: "H130",
                Segment: "ITD",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "H140",
                Segment: "DIS",
                Requirement: "OP",
                Max: "20"
            },
            {
                Position: "H145",
                Segment: "INC",
                Requirement: "OP",
                Max: "1"
            },
            {
                Position: "H150",
                Segment: "DTM",
                Requirement: "OP",
                Max: "10"
            },
            {
                Position: "H160",
                Segment: "LDT",
                Requirement: "M",
                Max: "1"
            },
            {
                Position: "H180",
                Segment: "LIN",
                Requirement: "OP",
                Max: "5"
            },
            {
                Position: "H185",
                Segment: "SI",
                Requirement: "OP",
                Max: "1"
            },
            {
                Position: "H190",
                Segment: "PID",
                Requirement: "OP",
                Max: "200"
            },
            {
                Position: "H200",
                Segment: "MEA",
                Requirement: "OP",
                Max: "40"
            },
            {
                Position: "H210",
                Segment: "PWK",
                Requirement: "OP",
                Max: "25"
            },
            {
                Position: "H220",
                Segment: "PKG",
                Requirement: "OP",
                Max: "200"
            },
            {
                Position: "H230",
                Segment: "TD1",
                Requirement: "OP",
                Max: "2"
            },
            {
                Position: "H240",
                Segment: "TD5",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "H250",
                Segment: "TD3",
                Requirement: "OP",
                Max: "12"
            },
            {
                Position: "H260",
                Segment: "TD4",
                Requirement: "OP",
                Max: "5"
            },
            {
                Position: "H270",
                Segment: "MAN",
                Requirement: "OP",
                Max: "10"
            },
            {
                Position: "H276",
                Segment: "PCT",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "H280",
                Segment: "CTB",
                Requirement: "OP",
                Max: "5"
            },
            {
                Position: "H285",
                Segment: "TXI",
                Requirement: "OP",
                Max: ">1"
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "OP",
                Max: "Repeat >1",
                Segments: [
                    {
                        Position: "H287",
                        Segment: "AMT",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "H289",
                        Segment: "REF",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "H290",
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "H292",
                        Segment: "PCT",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "H293",
                                Segment: "FA1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "H294",
                                Segment: "FA2",
                                Requirement: "M",
                                Max: ">1"
                            },
                        ]
                    },
                ]
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "OP",
                Max: "Repeat 1000",
                Segments: [
                    {
                        Position: "H295",
                        Segment: "N9",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "H297",
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "H300",
                        Segment: "MTX",
                        Requirement: "OP",
                        Max: "1000"
                    },
                ]
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "OP",
                Max: "Repeat 200",
                Segments: [
                    {
                        Position: "H310",
                        Segment: "N1",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "H320",
                        Segment: "N2",
                        Requirement: "OP",
                        Max: "2"
                    },
                    {
                        Position: "H330",
                        Segment: "N3",
                        Requirement: "OP",
                        Max: "2"
                    },
                    {
                        Position: "H340",
                        Segment: "N4",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "H345",
                        Segment: "NX2",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "H350",
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: "H360",
                        Segment: "PER",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "H365",
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "H370",
                        Segment: "FOB",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "H380",
                        Segment: "TD1",
                        Requirement: "OP",
                        Max: "2"
                    },
                    {
                        Position: "H390",
                        Segment: "TD5",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: "H400",
                        Segment: "TD3",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: "H410",
                        Segment: "TD4",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: "H420",
                        Segment: "PKG",
                        Requirement: "OP",
                        Max: "200"
                    },
                ]
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "OP",
                Max: "Repeat >1",
                Segments: [
                    {
                        Position: "H430",
                        Segment: "LM",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "H440",
                        Segment: "LQ",
                        Requirement: "M",
                        Max: ">1"
                    },
                ]
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "OP",
                Max: "Repeat >1",
                Segments: [
                    {
                        Position: "H450",
                        Segment: "SPI",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "H460",
                        Segment: "REF",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: "H470",
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: "H480",
                        Segment: "MSG",
                        Requirement: "OP",
                        Max: "50"
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 20",
                        Segments: [
                            {
                                Position: "H490",
                                Segment: "N1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "H500",
                                Segment: "N2",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: "H510",
                                Segment: "N3",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: "H520",
                                Segment: "N4",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "H530",
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "20"
                            },
                            {
                                Position: "H540",
                                Segment: "G61",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "H550",
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "50"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "H560",
                                Segment: "CB1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "H570",
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "20"
                            },
                            {
                                Position: "H580",
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: "5"
                            },
                            {
                                Position: "H590",
                                Segment: "LDT",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "H600",
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "50"
                            },
                        ]
                    },
                ]
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "OP",
                Max: "Repeat >1",
                Segments: [
                    {
                        Position: "H610",
                        Segment: "ADV",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "H620",
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "H630",
                        Segment: "MTX",
                        Requirement: "OP",
                        Max: ">1"
                    },
                ]
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "M",
                Max: "Repeat 100000",
                Segments: [
                    {
                        Position: "D10",
                        Segment: "PO1",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "D15",
                        Segment: "LIN",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D18",
                        Segment: "SI",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D20",
                        Segment: "CUR",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "D25",
                        Segment: "CN1",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "D30",
                        Segment: "PO3",
                        Requirement: "OP",
                        Max: "25"
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D40",
                                Segment: "CTP",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D43",
                                Segment: "CUR",
                                Requirement: "OP",
                                Max: "1"
                            },
                        ]
                    },
                    {
                        Position: "D45",
                        Segment: "PWK",
                        Requirement: "OP",
                        Max: "10"
                    },
                    {
                        Position: "D49",
                        Segment: "MEA",
                        Requirement: "OP",
                        Max: "40"
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 1000",
                        Segments: [
                            {
                                Position: "D50",
                                Segment: "PID",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D60",
                                Segment: "MEA",
                                Requirement: "OP",
                                Max: "10"
                            },
                        ]
                    },
                    {
                        Position: "D70",
                        Segment: "PWK",
                        Requirement: "OP",
                        Max: "25"
                    },
                    {
                        Position: "D90",
                        Segment: "PO4",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D100",
                        Segment: "REF",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D110",
                        Segment: "PER",
                        Requirement: "OP",
                        Max: "3"
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 25",
                        Segments: [
                            {
                                Position: "D130",
                                Segment: "SAC",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D135",
                                Segment: "CUR",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D137",
                                Segment: "CTP",
                                Requirement: "OP",
                                Max: "1"
                            },
                        ]
                    },
                    {
                        Position: "D140",
                        Segment: "IT8",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "D142",
                        Segment: "CSH",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D150",
                        Segment: "ITD",
                        Requirement: "OP",
                        Max: "2"
                    },
                    {
                        Position: "D160",
                        Segment: "DIS",
                        Requirement: "OP",
                        Max: "20"
                    },
                    {
                        Position: "D165",
                        Segment: "INC",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "D170",
                        Segment: "TAX",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D180",
                        Segment: "FOB",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D190",
                        Segment: "SDQ",
                        Requirement: "OP",
                        Max: "500"
                    },
                    {
                        Position: "D200",
                        Segment: "IT3",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: "D210",
                        Segment: "DTM",
                        Requirement: "OP",
                        Max: "10"
                    },
                    {
                        Position: "D235",
                        Segment: "TC2",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D240",
                        Segment: "TD1",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "D250",
                        Segment: "TD5",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: "D260",
                        Segment: "TD3",
                        Requirement: "OP",
                        Max: "12"
                    },
                    {
                        Position: "D270",
                        Segment: "TD4",
                        Requirement: "OP",
                        Max: "5"
                    },
                    {
                        Position: "D276",
                        Segment: "PCT",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D280",
                        Segment: "MAN",
                        Requirement: "OP",
                        Max: "10"
                    },
                    {
                        Position: "D289",
                        Segment: "MSG",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D290",
                        Segment: "SPI",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D291",
                        Segment: "TXI",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "D292",
                        Segment: "CTB",
                        Requirement: "OP",
                        Max: ">1"
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D293",
                                Segment: "QTY",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D294",
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 200",
                        Segments: [
                            {
                                Position: "D295",
                                Segment: "SCH",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D296",
                                Segment: "TD1",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: "D297",
                                Segment: "TD5",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: "D298",
                                Segment: "TD3",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: "D299",
                                Segment: "TD4",
                                Requirement: "OP",
                                Max: "5"
                            },
                            {
                                Position: "D300",
                                Segment: "REF",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 200",
                        Segments: [
                            {
                                Position: "D305",
                                Segment: "PKG",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D310",
                                Segment: "MEA",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: "D320",
                        Segment: "LS",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D321",
                                Segment: "LDT",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D322",
                                Segment: "QTY",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D323",
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D324",
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "3"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D325",
                                Segment: "LM",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D326",
                                Segment: "LQ",
                                Requirement: "M",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: "D327",
                        Segment: "LE",
                        Requirement: "OP",
                        Max: "1"
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 1000",
                        Segments: [
                            {
                                Position: "D330",
                                Segment: "N9",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D332",
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D335",
                                Segment: "MEA",
                                Requirement: "OP",
                                Max: "40"
                            },
                            {
                                Position: "D340",
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "1000"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 200",
                        Segments: [
                            {
                                Position: "D350",
                                Segment: "N1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D360",
                                Segment: "N2",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: "D370",
                                Segment: "N3",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: "D380",
                                Segment: "N4",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D383",
                                Segment: "QTY",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D385",
                                Segment: "NX2",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D390",
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: "D400",
                                Segment: "PER",
                                Requirement: "OP",
                                Max: "3"
                            },
                            {
                                Position: "D405",
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D406",
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D410",
                                Segment: "FOB",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D415",
                                Segment: "SCH",
                                Requirement: "OP",
                                Max: "200"
                            },
                            {
                                Position: "D420",
                                Segment: "TD1",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: "D430",
                                Segment: "TD5",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: "D440",
                                Segment: "TD3",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: "D450",
                                Segment: "TD4",
                                Requirement: "OP",
                                Max: "5"
                            },
                            {
                                Position: "D460",
                                Segment: "PKG",
                                Requirement: "OP",
                                Max: "200"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D462",
                                Segment: "LDT",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D464",
                                Segment: "MAN",
                                Requirement: "OP",
                                Max: "10"
                            },
                            {
                                Position: "D466",
                                Segment: "QTY",
                                Requirement: "OP",
                                Max: "5"
                            },
                            {
                                Position: "D468",
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D469",
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "3"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 1000",
                        Segments: [
                            {
                                Position: "D470",
                                Segment: "SLN",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D475",
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D480",
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D490",
                                Segment: "PID",
                                Requirement: "OP",
                                Max: "1000"
                            },
                            {
                                Position: "D500",
                                Segment: "PO3",
                                Requirement: "OP",
                                Max: "104"
                            },
                            {
                                Position: "D505",
                                Segment: "TC2",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D513",
                                Segment: "ADV",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D515",
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: "10"
                            },
                            {
                                Position: "D516",
                                Segment: "CTP",
                                Requirement: "OP",
                                Max: "25"
                            },
                            {
                                Position: "D517",
                                Segment: "PAM",
                                Requirement: "OP",
                                Max: "10"
                            },
                            {
                                Position: "D518",
                                Segment: "PO4",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D519",
                                Segment: "TAX",
                                Requirement: "OP",
                                Max: "3"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D523",
                                Segment: "N9",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D524",
                                Segment: "DTM",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D525",
                                Segment: "MSG",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 25",
                        Segments: [
                            {
                                Position: "D526",
                                Segment: "SAC",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D527",
                                Segment: "CUR",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D528",
                                Segment: "CTP",
                                Requirement: "OP",
                                Max: "1"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D529",
                                Segment: "QTY",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D530",
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat 10",
                        Segments: [
                            {
                                Position: "D535",
                                Segment: "N1",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D540",
                                Segment: "N2",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: "D550",
                                Segment: "N3",
                                Requirement: "OP",
                                Max: "2"
                            },
                            {
                                Position: "D560",
                                Segment: "N4",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D570",
                                Segment: "NX2",
                                Requirement: "OP",
                                Max: ">1"
                            },
                            {
                                Position: "D580",
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "12"
                            },
                            {
                                Position: "D590",
                                Segment: "PER",
                                Requirement: "OP",
                                Max: "3"
                            },
                            {
                                Position: "D595",
                                Segment: "SI",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D600",
                                Segment: "AMT",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D610",
                                Segment: "REF",
                                Requirement: "OP",
                                Max: "1"
                            },
                            {
                                Position: "D612",
                                Segment: "PCT",
                                Requirement: "OP",
                                Max: ">1"
                            },
                        ]
                    },
                    {
                        Position: "",
                        Segment: "Loop",
                        Requirement: "OP",
                        Max: "Repeat >1",
                        Segments: [
                            {
                                Position: "D620",
                                Segment: "LM",
                                Requirement: "M",
                                Max: "1"
                            },
                            {
                                Position: "D630",
                                Segment: "LQ",
                                Requirement: "M",
                                Max: ">1"
                            },
                        ]
                    },
                ]
            },
            {
                Position: "",
                Segment: "Loop",
                Requirement: "OP",
                Max: "Repeat 1",
                Segments: [
                    {
                        Position: "S10",
                        Segment: "CTT",
                        Requirement: "M",
                        Max: "1"
                    },
                    {
                        Position: "S20",
                        Segment: "AMT",
                        Requirement: "OP",
                        Max: "1"
                    },
                ]
            },
            {
                Position: "S30",
                Segment: "SE",
                Requirement: "M",
                Max: "1"
            },
        ]
    },
];