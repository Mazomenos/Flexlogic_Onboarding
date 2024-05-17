export const EDIElements = [
    {
        Element : '143',
        NameElement : 'Transaction Set Identifier Code',
        Type : 'Identifier (ID)',
        Min : 3,
        Max : 3,
        Version : '4010'

    },
    {
        Element : '329',
        NameElement : 'Transaction Set Control Number',
        Type : 'String (AN)',
        Min : 4,
        Max : 9,
        Version : '4010'

    },
    {
        Element : '1705',
        NameElement : 'Implementation Convention Reference',
        Type : 'String (AN)',
        Min : 1,
        Max : 35,
        Version : '4010'
    }
];
