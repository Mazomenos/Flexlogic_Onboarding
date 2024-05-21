export const EDIElements = [
    {
        Element: "3",
        Name: "Free-form Message",
        Type: "String(AN)",
        Min: 1,
        Max: 60,
        Version: "4010"
    },
    {
        Element: "19",
        Name: "City Name",
        Type: "String(AN)",
        Min: 2,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "22",
        Name: "Commodity Code",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "23",
        Name: "Commodity Code Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "24",
        Name: "Equipment Type",
        Type: "Identifier(ID)",
        Min: 4,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "26",
        Name: "Country Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "40",
        Name: "Equipment Description Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "46",
        Name: "Ex Parte",
        Type: "String(AN)",
        Min: 4,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "54",
        Name: "Risk of Loss Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "55",
        Name: "Flight / Voyage Number",
        Type: "String(AN)",
        Min: 2,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "59",
        Name: "Freight Class Code",
        Type: "String(AN)",
        Min: 2,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "61",
        Name: "Free-form Message",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "65",
        Name: "Height",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "66",
        Name: "Identification Code Identifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "66",
        Name: "Identification Code Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "67",
        Name: "Identification Code",
        Type: "String(AN)",
        Min: 2,
        Max: 80,
        Version: "4010"
    },
    {
        Element: "76",
        Name: "Invoice Number",
        Type: "String(AN)",
        Min: 1,
        Max: 22,
        Version: "4010"
    },
    {
        Element: "79",
        Name: "Lading Description",
        Type: "String(AN)",
        Min: 1,
        Max: 50,
        Version: "4010"
    },
    {
        Element: "80",
        Name: "Lading Quantity",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 7,
        Version: "4010"
    },
    {
        Element: "81",
        Name: "Weight",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "82",
        Name: "Length",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "87",
        Name: "Marks and Numbers",
        Type: "String(AN)",
        Min: 1,
        Max: 48,
        Version: "4010"
    },
    {
        Element: "88",
        Name: "Marks and Numbers Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "91",
        Name: "Transportation Method / Type Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "92",
        Name: "Purchase Order Type Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "93",
        Name: "Name",
        Type: "String(AN)",
        Min: 1,
        Max: 60,
        Version: "4010"
    },
    {
        Element: "96",
        Name: "Number of Included Segments",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "98",
        Name: "Entity Identifier Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "100",
        Name: "Currency Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "102",
        Name: "Ownership Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "103",
        Name: "Packaging Code",
        Type: "String(AN)",
        Min: 3,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "107",
        Name: "Payment Method Type Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "113",
        Name: "Pier Number",
        Type: "String(AN)",
        Min: 1,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "114",
        Name: "Port Name",
        Type: "String(AN)",
        Min: 2,
        Max: 24,
        Version: "4010"
    },
    {
        Element: "115",
        Name: "Port or Terminal Function Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "116",
        Name: "Postal Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "118",
        Name: "Rate",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 9,
        Version: "4010"
    },
    {
        Element: "119",
        Name: "Rate Basis Number",
        Type: "String(AN)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "127",
        Name: "Reference Identification",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "128",
        Name: "Reference Identification Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "133",
        Name: "Routing Sequence Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "140",
        Name: "Standard Carrier Alpha Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "143",
        Name: "Transaction Set Identifier Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "146",
        Name: "Shipment Method of Payment",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "152",
        Name: "Special Handling Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "156",
        Name: "State or Province Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "166",
        Name: "Address Information",
        Type: "String(AN)",
        Min: 1,
        Max: 55,
        Version: "4010"
    },
    {
        Element: "168",
        Name: "Tariff Agency Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "169",
        Name: "Tariff Item Number",
        Type: "String(AN)",
        Min: 1,
        Max: 16,
        Version: "4010"
    },
    {
        Element: "170",
        Name: "Tariff Item Part",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "171",
        Name: "Tariff Number",
        Type: "String(AN)",
        Min: 1,
        Max: 7,
        Version: "4010"
    },
    {
        Element: "172",
        Name: "Tariff Section",
        Type: "String(AN)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "173",
        Name: "Tariff Supplement Identifier",
        Type: "String(AN)",
        Min: 1,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "174",
        Name: "Terminal Name",
        Type: "String(AN)",
        Min: 2,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "182",
        Name: "Vessel Name",
        Type: "String(AN)",
        Min: 2,
        Max: 28,
        Version: "4010"
    },
    {
        Element: "183",
        Name: "Volume",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "184",
        Name: "Volume Unit Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "187",
        Name: "Weight Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "188",
        Name: "Weight Unit Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "189",
        Name: "Width",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "200",
        Name: "Hazardous Materials Page",
        Type: "String(AN)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "206",
        Name: "Equipment Initial",
        Type: "String(AN)",
        Min: 1,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "207",
        Name: "Equipment Number",
        Type: "String(AN)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "208",
        Name: "Hazardous Material Code Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "209",
        Name: "Hazardous Material Class Code",
        Type: "String(AN)",
        Min: 1,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "212",
        Name: "Unit Price",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 17,
        Version: "4010"
    },
    {
        Element: "213",
        Name: "Lading Line Item Number",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "215",
        Name: "Hazardous Classification",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "218",
        Name: "Hazardous Placard Notation",
        Type: "Identifier(ID)",
        Min: 14,
        Max: 40,
        Version: "4010"
    },
    {
        Element: "219",
        Name: "Position",
        Type: "String(AN)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "222",
        Name: "Hazardous Endorsement",
        Type: "Identifier(ID)",
        Min: 4,
        Max: 25,
        Version: "4010"
    },
    {
        Element: "224",
        Name: "Hazardous Material Shipping Name",
        Type: "String(AN)",
        Min: 1,
        Max: 25,
        Version: "4010"
    },
    {
        Element: "225",
        Name: "Seal Number",
        Type: "String(AN)",
        Min: 2,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "227",
        Name: "Tariff Column",
        Type: "String(AN)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "234",
        Name: "Product / Service ID",
        Type: "String(AN)",
        Min: 1,
        Max: 48,
        Version: "4010"
    },
    {
        Element: "235",
        Name: "Product / Service ID Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "236",
        Name: "Price Identifier Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "248",
        Name: "Allowance or Charge Indicator",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "249",
        Name: "Vessel Requirement Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "254",
        Name: "Packing Group Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "277",
        Name: "UN / NA Identification Code",
        Type: "Identifier(ID)",
        Min: 6,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "280",
        Name: "Exchange Rate",
        Type: "Decimal number(R)",
        Min: 4,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "284",
        Name: "Service Level Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "289",
        Name: "Multiple Price Quantity",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "294",
        Name: "Tariff Distance",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "295",
        Name: "Distance Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "306",
        Name: "Action Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "309",
        Name: "Location Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "310",
        Name: "Location Identifier",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "324",
        Name: "Purchase Order Number",
        Type: "String(AN)",
        Min: 1,
        Max: 22,
        Version: "4010"
    },
    {
        Element: "325",
        Name: "Tax Identification Number",
        Type: "String(AN)",
        Min: 1,
        Max: 20,
        Version: "4010"
    },
    {
        Element: "326",
        Name: "Request Reference Number",
        Type: "String(AN)",
        Min: 1,
        Max: 45,
        Version: "4010"
    },
    {
        Element: "327",
        Name: "Change Order Sequence Number",
        Type: "String(AN)",
        Min: 1,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "328",
        Name: "Release Number",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "329",
        Name: "Transaction Set Control Number",
        Type: "String(AN)",
        Min: 4,
        Max: 9,
        Version: "4010"
    },
    {
        Element: "330",
        Name: "Quantity Ordered",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "331",
        Name: "Allowance or Charge Method of Handling Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "332",
        Name: "Percent, Decimal Format",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "332",
        Name: "Percent",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "333",
        Name: "Terms Basis Date Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "334",
        Name: "Transportation Terms Qualifier Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "335",
        Name: "Transportation Terms Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "336",
        Name: "Terms Type Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "337",
        Name: "Time",
        Type: "Time(TM)",
        Min: 4,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "338",
        Name: "Terms Discount Percent",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "342",
        Name: "Percent of Invoice Payable",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "344",
        Name: "Unit of Time Period or Interval",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "345",
        Name: "Lead Time Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "347",
        Name: "Hash Total",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "349",
        Name: "Item Description Type",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "350",
        Name: "Assigned Identification",
        Type: "String(AN)",
        Min: 1,
        Max: 20,
        Version: "4010"
    },
    {
        Element: "351",
        Name: "Terms Discount Days Due",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "352",
        Name: "Description",
        Type: "String(AN)",
        Min: 1,
        Max: 80,
        Version: "4010"
    },
    {
        Element: "353",
        Name: "Transaction Set Purpose Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "354",
        Name: "Number of Line Items",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "355",
        Name: "Unit or Basis for Measurement Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "356",
        Name: "Pack",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "357",
        Name: "Size",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "358",
        Name: "Quantity Invoiced",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "362",
        Name: "Terms Discount Amount",
        Type: "N2",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "363",
        Name: "Note Reference Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "364",
        Name: "Communication Number",
        Type: "String(AN)",
        Min: 1,
        Max: 80,
        Version: "4010"
    },
    {
        Element: "365",
        Name: "Communication Number Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "366",
        Name: "Contact Function Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "367",
        Name: "Contact Number",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "368",
        Name: "Shipment / Order Status Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "369",
        Name: "Free-form Description",
        Type: "String(AN)",
        Min: 1,
        Max: 45,
        Version: "4010"
    },
    {
        Element: "370",
        Name: "Terms Discount Due Date",
        Type: "Date(DT)",
        Min: 8,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "371",
        Name: "Change Reason Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "373",
        Name: "Date",
        Type: "Date(DT)",
        Min: 8,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "374",
        Name: "Date/Time Qualifier",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "378",
        Name: "Allowance / Charge Percent Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "380",
        Name: "Quantity",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "382",
        Name: "Number of Units Shipped",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "383",
        Name: "Quantity Difference",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 9,
        Version: "4010"
    },
    {
        Element: "384",
        Name: "Gross Weight per Pack",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 9,
        Version: "4010"
    },
    {
        Element: "385",
        Name: "Gross Volume per Pack",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 9,
        Version: "4010"
    },
    {
        Element: "386",
        Name: "Terms Net Days",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "387",
        Name: "Routing",
        Type: "String(AN)",
        Min: 1,
        Max: 35,
        Version: "4010"
    },
    {
        Element: "388",
        Name: "Terms Deferred Due Date",
        Type: "Date(DT)",
        Min: 8,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "389",
        Name: "Deferred Amount Due",
        Type: "N2",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "395",
        Name: "Unit Weight",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "396",
        Name: "Shipment Identification",
        Type: "String(AN)",
        Min: 2,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "399",
        Name: "Pallet Exchange Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "400",
        Name: "Unit Load Option Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "407",
        Name: "Seal Status Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "408",
        Name: "Temperature",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "441",
        Name: "Tax Exempt Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "443",
        Name: "Contact Inquiry Reference",
        Type: "String(AN)",
        Min: 1,
        Max: 20,
        Version: "4010"
    },
    {
        Element: "446",
        Name: "Terms Net Due Date",
        Type: "Date(DT)",
        Min: 8,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "447",
        Name: "Loop Identifier Code",
        Type: "String(AN)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "478",
        Name: "Credit / Debit Flag Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "499",
        Name: "Condition Value",
        Type: "String(AN)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "508",
        Name: "Account Number",
        Type: "String(AN)",
        Min: 1,
        Max: 35,
        Version: "4010"
    },
    {
        Element: "522",
        Name: "Amount Qualifier Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "554",
        Name: "Assigned Number",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "559",
        Name: "Agency Qualifier Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "560",
        Name: "Special Services Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "563",
        Name: "Sales Requirement Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "566",
        Name: "Product / Service Substitution Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "567",
        Name: "Equipment Length",
        Type: "Numeric(N0)",
        Min: 4,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "587",
        Name: "Acknowledgemnet Type",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "595",
        Name: "Compartment ID Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "597",
        Name: "Vessel Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 8,
        Version: "4010"
    },
    {
        Element: "610",
        Name: "Amount",
        Type: "N2",
        Min: 1,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "623",
        Name: "Time Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "628",
        Name: "Hierarchical ID Number",
        Type: "String(AN)",
        Min: 1,
        Max: 12,
        Version: "4010"
    },
    {
        Element: "639",
        Name: "Basis of Unit Price Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "640",
        Name: "Transaction Type Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "641",
        Name: "Status Reason Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "646",
        Name: "Quantity Shipped to Date",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "648",
        Name: "Price Multiplier Qualifier",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "649",
        Name: "Multiplier",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "653",
        Name: "Discount Terms Type Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "654",
        Name: "Discount Base Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "655",
        Name: "Discount Base Value",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "656",
        Name: "Discount Control Limit Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "657",
        Name: "Discount Control Limit",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "659",
        Name: "Basis of Verification Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "662",
        Name: "Relantionship Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "665",
        Name: "Residue Indicator Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "668",
        Name: "Line Item Status Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "669",
        Name: "Currency Market / Exchange Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "673",
        Name: "Quantity Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "687",
        Name: "Class of Trade Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "688",
        Name: "Restrictions / Conditions Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "706",
        Name: "Entity Relationship Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "728",
        Name: "Returnable Container Load Make-Up Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "729",
        Name: "Category",
        Type: "String(AN)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "731",
        Name: "Transit Direction Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "732",
        Name: "Transit Time Direction Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "733",
        Name: "Transit Time",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "734",
        Name: "Hierarchical Parent ID Number",
        Type: "String(AN)",
        Min: 1,
        Max: 12,
        Version: "4010"
    },
    {
        Element: "735",
        Name: "Hierarchical Level Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "736",
        Name: "Hierarchical Child Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "737",
        Name: "Measurement Reference ID Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "738",
        Name: "Measurement Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "739",
        Name: "Measurement Value",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 20,
        Version: "4010"
    },
    {
        Element: "740",
        Name: "Range Minimum",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 20,
        Version: "4010"
    },
    {
        Element: "741",
        Name: "Range Maximum",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 20,
        Version: "4010"
    },
    {
        Element: "750",
        Name: "Product / Process Characteristic Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "751",
        Name: "Product Description Code",
        Type: "String(AN)",
        Min: 1,
        Max: 12,
        Version: "4010"
    },
    {
        Element: "752",
        Name: "Surface / Layer / Position Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "753",
        Name: "Packaging Characteristic Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "754",
        Name: "Packaging Description Code",
        Type: "String(AN)",
        Min: 1,
        Max: 7,
        Version: "4010"
    },
    {
        Element: "755",
        Name: "Report Type Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "756",
        Name: "Report Transmission Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "757",
        Name: "Report Copies Needed",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "759",
        Name: "Reportable Quantity Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "765",
        Name: "Day of Month",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "770",
        Name: "Option Number",
        Type: "String(AN)",
        Min: 1,
        Max: 20,
        Version: "4010"
    },
    {
        Element: "782",
        Name: "Monetary Amount",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 18,
        Version: "4010"
    },
    {
        Element: "786",
        Name: "Security Level Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "787",
        Name: "Record Length",
        Type: "Numeric(N)",
        Min: 1,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "788",
        Name: "Block Length",
        Type: "Numeric(N)",
        Min: 1,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "789",
        Name: "Drawing Sheet Size Code",
        Type: "String(AN)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "790",
        Name: "Entity Title",
        Type: "String(AN)",
        Min: 1,
        Max: 132,
        Version: "4010"
    },
    {
        Element: "791",
        Name: "Entity Purpose",
        Type: "String(AN)",
        Min: 1,
        Max: 80,
        Version: "4010"
    },
    {
        Element: "792",
        Name: "Entity Status Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "797",
        Name: "Security Technique Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "799",
        Name: "Version Identifier",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "800",
        Name: "Compression Technique",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "801",
        Name: "Interchange Format",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "802",
        Name: "Program Identifier",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "803",
        Name: "File Name",
        Type: "String(AN)",
        Min: 1,
        Max: 64,
        Version: "4010"
    },
    {
        Element: "804",
        Name: "Block Type",
        Type: "String(AN)",
        Min: 1,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "810",
        Name: "Inner Pack",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 6,
        Version: "4010"
    },
    {
        Element: "819",
        Name: "Language Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "822",
        Name: "Source Subqualifier",
        Type: "String(AN)",
        Min: 1,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "828",
        Name: "Dollar Basis For Percent",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 9,
        Version: "4010"
    },
    {
        Element: "854",
        Name: "Vessel Type Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "883",
        Name: "Pallet Type Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "884",
        Name: "Pallet Tiers",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "885",
        Name: "Pallet Blocks",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "897",
        Name: "Vessel Code Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "933",
        Name: "Free-form Message Text",
        Type: "String(AN)",
        Min: 1,
        Max: 264,
        Version: "4010"
    },
    {
        Element: "934",
        Name: "Printer Carriage Control Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "935",
        Name: "Measurement Significance Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "936",
        Name: "Measurement Attribute Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "951",
        Name: "Balance Type Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "954",
        Name: "Percent",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "955",
        Name: "Tax Jurisdiction Code Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "956",
        Name: "Tax Jurisdiction Code",
        Type: "String(AN)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "963",
        Name: "Tax Type Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "984",
        Name: "Hazardous Material Shipping Name Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "985",
        Name: "N.O.S. Indicator Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "1000",
        Name: "Service Characteristics Qualifier",
        Type: "String(AN)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1004",
        Name: "Percent Qualifier",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1005",
        Name: "Hierarchical Structure Code",
        Type: "Identifier(ID)",
        Min: 4,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "1018",
        Name: "Exponent",
        Type: "Decimal number(R)",
        Min: 1,
        Max: 15,
        Version: "4010"
    },
    {
        Element: "1019",
        Name: "Invoice Type Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "1066",
        Name: "Citizenship Status Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1067",
        Name: "Marital Status Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "1068",
        Name: "Gender Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "1073",
        Name: "Yes/No Condition or Response Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "1096",
        Name: "County Designator",
        Type: "Identifier(ID)",
        Min: 5,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "1104",
        Name: "Name Component Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1106",
        Name: "Address Component Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1109",
        Name: "Race or Ethnicity Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "1136",
        Name: "Code Category",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1166",
        Name: "Contract Type Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1179",
        Name: "Customs Entry Type Group Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "1195",
        Name: "Financial Information Code",
        Type: "String(AN)",
        Min: 1,
        Max: 80,
        Version: "4010"
    },
    {
        Element: "1196",
        Name: "Breakdown Structure Detail Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1232",
        Name: "Purchase Category",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1250",
        Name: "Date Time Period Format Qualifier",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "1251",
        Name: "Date Time Period",
        Type: "String(AN)",
        Min: 1,
        Max: 35,
        Version: "4010"
    },
    {
        Element: "1270",
        Name: "Code List Qualifier Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "1271",
        Name: "Industry Code",
        Type: "String(AN)",
        Min: 1,
        Max: 30,
        Version: "4010"
    },
    {
        Element: "1300",
        Name: "Service, Promotion, Allowance, or Charge Code",
        Type: "Identifier(ID)",
        Min: 4,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "1301",
        Name: "Agency Service, Promotion, Allowance or Charge Code",
        Type: "String(AN)",
        Min: 1,
        Max: 10,
        Version: "4010"
    },
    {
        Element: "1309",
        Name: "Acquisition Data Code",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1310",
        Name: "Financing Type Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "1321",
        Name: "Condition Indicator",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1322",
        Name: "Certification Type Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 1,
        Version: "4010"
    },
    {
        Element: "1373",
        Name: "Measurements Method or Device",
        Type: "Identifier(ID)",
        Min: 2,
        Max: 4,
        Version: "4010"
    },
    {
        Element: "1375",
        Name: "Interim Hazardous Material Regulatory Number",
        Type: "String(AN)",
        Min: 1,
        Max: 5,
        Version: "4010"
    },
    {
        Element: "1401",
        Name: "Proposal Data Detail Identifier Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 3,
        Version: "4010"
    },
    {
        Element: "1430",
        Name: "Day Rotation",
        Type: "String(AN)",
        Min: 1,
        Max: 7,
        Version: "4010"
    },
    {
        Element: "1470",
        Name: "Number",
        Type: "Numeric(N0)",
        Min: 1,
        Max: 9,
        Version: "4010"
    },
    {
        Element: "1525",
        Name: "Request Category Code",
        Type: "Identifier(ID)",
        Min: 1,
        Max: 2,
        Version: "4010"
    },
    {
        Element: "1551",
        Name: "Message Text",
        Type: "String(AN)",
        Min: 1,
        Max: 4096,
        Version: "4010"
    },
    {
        Element: "1570",
        Name: "Filter ID Code",
        Type: "Identifier(ID)",
        Min: 3,
        Max: 3,
        Version: "4010"
    },
];
