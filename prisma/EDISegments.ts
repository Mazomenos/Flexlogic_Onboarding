export const EDISegments = [
    {
        Segment : "ST",
        Name : "Transaction Set Header",
        Version : "4010",
        Elements : [
            {
                Position : "ST-01",
                Element : "143",
                Requirement : "Mandatory",
                Repeat : '1'
            },
            {
                Position : "ST-02",
                Element : "329",
                Requirement : "Mandatory",
                Repeat : '1'
            }

        ]

    },
];
