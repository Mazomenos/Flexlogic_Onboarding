import { EDIElement } from "./interfaces/EDIInterfaces";

export const EDIElements: EDIElement[] = [
    {
        Element: "I01",
        Name: "Authorization Information Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "I02",
        Name: "Authorization Information",
        Type: "AN",
        Min: 10,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "I03",
        Name: "Security Information Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "I04",
        Name: "Security Information",
        Type: "AN",
        Min: 10,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "I05",
        Name: "Interchange ID Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "I06",
        Name: "Interchange Sender ID",
        Type: "AN",
        Min: 15,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "I07",
        Name: "Interchange Receiver ID",
        Type: "AN",
        Min: 15,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "I08",
        Name: "Interchange Date",
        Type: "DT",
        Min: 6,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "I09",
        Name: "Interchange Time",
        Type: "TM",
        Min: 4,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "I10",
        Name: "Interchange Control Standards Identifier",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "I11",
        Name: "Interchange Control Version Number",
        Type: "ID",
        Min: 5,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "I12",
        Name: "Interchange Control Number",
        Type: "N0",
        Min: 9,
        Max: 9,
        Version: "X12 4010"
    },
    {
        Element: "I13",
        Name: "Acknowledge Requested",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "I14",
        Name: "Usage Indicator",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "I15",
        Name: "Component Element Separator",
        Type: "", // Separador
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "3",
        Name: "Free-form Message",
        Type: "AN",
        Min: 1,
        Max: 60,
        Version: "X12 4010"
    },
    {
        Element: "19",
        Name: "City Name",
        Type: "AN",
        Min: 2,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "22",
        Name: "Commodity Code",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "23",
        Name: "Commodity Code Qualifier",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "24",
        Name: "Equipment Type",
        Type: "ID",
        Min: 4,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "26",
        Name: "Country Code",
        Type: "ID",
        Min: 2,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "40",
        Name: "Equipment Description Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "46",
        Name: "Ex Parte",
        Type: "AN",
        Min: 4,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "54",
        Name: "Risk of Loss Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "55",
        Name: "Flight / Voyage Number",
        Type: "AN",
        Min: 2,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "59",
        Name: "Freight Class Code",
        Type: "AN",
        Min: 2,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "61",
        Name: "Free-form Message",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "65",
        Name: "Height",
        Type: "R",
        Min: 1,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "66",
        Name: "Identification Code Identifier",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "67",
        Name: "Identification Code",
        Type: "AN",
        Min: 2,
        Max: 80,
        Version: "X12 4010"
    },
    {
        Element: "76",
        Name: "Invoice Number",
        Type: "AN",
        Min: 1,
        Max: 22,
        Version: "X12 4010"
    },
    {
        Element: "79",
        Name: "Lading Description",
        Type: "AN",
        Min: 1,
        Max: 50,
        Version: "X12 4010"
    },
    {
        Element: "80",
        Name: "Lading Quantity",
        Type: "N0",
        Min: 1,
        Max: 7,
        Version: "X12 4010"
    },
    {
        Element: "81",
        Name: "Weight",
        Type: "R",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "82",
        Name: "Length",
        Type: "R",
        Min: 1,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "87",
        Name: "Marks and Numbers",
        Type: "AN",
        Min: 1,
        Max: 48,
        Version: "X12 4010"
    },
    {
        Element: "88",
        Name: "Marks and Numbers Qualifier",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "91",
        Name: "Transportation Method / Type Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "92",
        Name: "Purchase Order Type Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "93",
        Name: "Name",
        Type: "AN",
        Min: 1,
        Max: 60,
        Version: "X12 4010"
    },
    {
        Element: "96",
        Name: "Number of Included Segments",
        Type: "N0",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "98",
        Name: "Entity Identifier Code",
        Type: "ID",
        Min: 2,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "100",
        Name: "Currency Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "102",
        Name: "Ownership Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "103",
        Name: "Packaging Code",
        Type: "AN",
        Min: 3,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "107",
        Name: "Payment Method Type Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "113",
        Name: "Pier Number",
        Type: "AN",
        Min: 1,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "114",
        Name: "Port Name",
        Type: "AN",
        Min: 2,
        Max: 24,
        Version: "X12 4010"
    },
    {
        Element: "115",
        Name: "Port or Terminal Function Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "116",
        Name: "Postal Code",
        Type: "ID",
        Min: 3,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "118",
        Name: "Rate",
        Type: "R",
        Min: 1,
        Max: 9,
        Version: "X12 4010"
    },
    {
        Element: "119",
        Name: "Rate Basis Number",
        Type: "AN",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "127",
        Name: "Reference Identification",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "128",
        Name: "Reference Identification Qualifier",
        Type: "ID",
        Min: 2,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "133",
        Name: "Routing Sequence Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "140",
        Name: "Standard Carrier Alpha Code",
        Type: "ID",
        Min: 2,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "143",
        Name: "Transaction Set Identifier Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "146",
        Name: "Shipment Method of Payment",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "152",
        Name: "Special Handling Code",
        Type: "ID",
        Min: 2,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "156",
        Name: "State or Province Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "166",
        Name: "Address Information",
        Type: "AN",
        Min: 1,
        Max: 55,
        Version: "X12 4010"
    },
    {
        Element: "168",
        Name: "Tariff Agency Code",
        Type: "ID",
        Min: 1,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "169",
        Name: "Tariff Item Number",
        Type: "AN",
        Min: 1,
        Max: 16,
        Version: "X12 4010"
    },
    {
        Element: "170",
        Name: "Tariff Item Part",
        Type: "N0",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "171",
        Name: "Tariff Number",
        Type: "AN",
        Min: 1,
        Max: 7,
        Version: "X12 4010"
    },
    {
        Element: "172",
        Name: "Tariff Section",
        Type: "AN",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "173",
        Name: "Tariff Supplement Identifier",
        Type: "AN",
        Min: 1,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "174",
        Name: "Terminal Name",
        Type: "AN",
        Min: 2,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "182",
        Name: "Vessel Name",
        Type: "AN",
        Min: 2,
        Max: 28,
        Version: "X12 4010"
    },
    {
        Element: "183",
        Name: "Volume",
        Type: "R",
        Min: 1,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "184",
        Name: "Volume Unit Qualifier",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "187",
        Name: "Weight Qualifier",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "188",
        Name: "Weight Unit Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "189",
        Name: "Width",
        Type: "R",
        Min: 1,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "200",
        Name: "Hazardous Materials Page",
        Type: "AN",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "206",
        Name: "Equipment Initial",
        Type: "AN",
        Min: 1,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "207",
        Name: "Equipment Number",
        Type: "AN",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "208",
        Name: "Hazardous Material Code Qualifier",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "209",
        Name: "Hazardous Material Class Code",
        Type: "AN",
        Min: 1,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "212",
        Name: "Unit Price",
        Type: "R",
        Min: 1,
        Max: 17,
        Version: "X12 4010"
    },
    {
        Element: "213",
        Name: "Lading Line Item Number",
        Type: "N0",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "215",
        Name: "Hazardous Classification",
        Type: "ID",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "218",
        Name: "Hazardous Placard Notation",
        Type: "ID",
        Min: 14,
        Max: 40,
        Version: "X12 4010"
    },
    {
        Element: "219",
        Name: "Position",
        Type: "AN",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "222",
        Name: "Hazardous Endorsement",
        Type: "ID",
        Min: 4,
        Max: 25,
        Version: "X12 4010"
    },
    {
        Element: "224",
        Name: "Hazardous Material Shipping Name",
        Type: "AN",
        Min: 1,
        Max: 25,
        Version: "X12 4010"
    },
    {
        Element: "225",
        Name: "Seal Number",
        Type: "AN",
        Min: 2,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "227",
        Name: "Tariff Column",
        Type: "AN",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "234",
        Name: "Product / Service ID",
        Type: "AN",
        Min: 1,
        Max: 48,
        Version: "X12 4010"
    },
    {
        Element: "235",
        Name: "Product / Service ID Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "236",
        Name: "Price Identifier Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "248",
        Name: "Allowance or Charge Indicator",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "249",
        Name: "Vessel Requirement Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "254",
        Name: "Packing Group Code",
        Type: "ID",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "277",
        Name: "UN / NA Identification Code",
        Type: "ID",
        Min: 6,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "280",
        Name: "Exchange Rate",
        Type: "R",
        Min: 4,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "284",
        Name: "Service Level Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "289",
        Name: "Multiple Price Quantity",
        Type: "N0",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "294",
        Name: "Tariff Distance",
        Type: "N0",
        Min: 1,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "295",
        Name: "Distance Qualifier",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "306",
        Name: "Action Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "309",
        Name: "Location Qualifier",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "310",
        Name: "Location Identifier",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "324",
        Name: "Purchase Order Number",
        Type: "AN",
        Min: 1,
        Max: 22,
        Version: "X12 4010"
    },
    {
        Element: "325",
        Name: "Tax Identification Number",
        Type: "AN",
        Min: 1,
        Max: 20,
        Version: "X12 4010"
    },
    {
        Element: "326",
        Name: "Request Reference Number",
        Type: "AN",
        Min: 1,
        Max: 45,
        Version: "X12 4010"
    },
    {
        Element: "327",
        Name: "Change Order Sequence Number",
        Type: "AN",
        Min: 1,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "328",
        Name: "Release Number",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "329",
        Name: "Transaction Set Control Number",
        Type: "AN",
        Min: 4,
        Max: 9,
        Version: "X12 4010"
    },
    {
        Element: "330",
        Name: "Quantity Ordered",
        Type: "R",
        Min: 1,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "331",
        Name: "Allowance or Charge Method of Handling Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "332",
        Name: "Percent, Decimal Format",
        Type: "R",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "332",
        Name: "Percent",
        Type: "R",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "333",
        Name: "Terms Basis Date Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "334",
        Name: "Transportation Terms Qualifier Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "335",
        Name: "Transportation Terms Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "336",
        Name: "Terms Type Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "337",
        Name: "Time",
        Type: "TM",
        Min: 4,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "338",
        Name: "Terms Discount Percent",
        Type: "R",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "342",
        Name: "Percent of Invoice Payable",
        Type: "R",
        Min: 1,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "344",
        Name: "Unit of Time Period or Interval",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "345",
        Name: "Lead Time Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "347",
        Name: "Hash Total",
        Type: "R",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "349",
        Name: "Item Description Type",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "350",
        Name: "Assigned Identification",
        Type: "AN",
        Min: 1,
        Max: 20,
        Version: "X12 4010"
    },
    {
        Element: "351",
        Name: "Terms Discount Days Due",
        Type: "N0",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "352",
        Name: "Description",
        Type: "AN",
        Min: 1,
        Max: 80,
        Version: "X12 4010"
    },
    {
        Element: "353",
        Name: "Transaction Set Purpose Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "354",
        Name: "Number of Line Items",
        Type: "N0",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "355",
        Name: "Unit or Basis for Measurement Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "356",
        Name: "Pack",
        Type: "N0",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "357",
        Name: "Size",
        Type: "R",
        Min: 1,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "358",
        Name: "Quantity Invoiced",
        Type: "R",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "362",
        Name: "Terms Discount Amount",
        Type: "N2",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "363",
        Name: "Note Reference Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "364",
        Name: "Communication Number",
        Type: "AN",
        Min: 1,
        Max: 80,
        Version: "X12 4010"
    },
    {
        Element: "365",
        Name: "Communication Number Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "366",
        Name: "Contact Function Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "367",
        Name: "Contact Number",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "368",
        Name: "Shipment / Order Status Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "369",
        Name: "Free-form Description",
        Type: "AN",
        Min: 1,
        Max: 45,
        Version: "X12 4010"
    },
    {
        Element: "370",
        Name: "Terms Discount Due Date",
        Type: "DT",
        Min: 8,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "371",
        Name: "Change Reason Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "373",
        Name: "Date",
        Type: "DT",
        Min: 8,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "374",
        Name: "Date/Time Qualifier",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "378",
        Name: "Allowance / Charge Percent Qualifier",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "380",
        Name: "Quantity",
        Type: "R",
        Min: 1,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "382",
        Name: "Number of Units Shipped",
        Type: "R",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "383",
        Name: "Quantity Difference",
        Type: "R",
        Min: 1,
        Max: 9,
        Version: "X12 4010"
    },
    {
        Element: "384",
        Name: "Gross Weight per Pack",
        Type: "R",
        Min: 1,
        Max: 9,
        Version: "X12 4010"
    },
    {
        Element: "385",
        Name: "Gross Volume per Pack",
        Type: "R",
        Min: 1,
        Max: 9,
        Version: "X12 4010"
    },
    {
        Element: "386",
        Name: "Terms Net Days",
        Type: "N0",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "387",
        Name: "Routing",
        Type: "AN",
        Min: 1,
        Max: 35,
        Version: "X12 4010"
    },
    {
        Element: "388",
        Name: "Terms Deferred Due Date",
        Type: "DT",
        Min: 8,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "389",
        Name: "Deferred Amount Due",
        Type: "N2",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "395",
        Name: "Unit Weight",
        Type: "R",
        Min: 1,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "396",
        Name: "Shipment Identification",
        Type: "AN",
        Min: 2,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "399",
        Name: "Pallet Exchange Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "400",
        Name: "Unit Load Option Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "407",
        Name: "Seal Status Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "408",
        Name: "Temperature",
        Type: "R",
        Min: 1,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "441",
        Name: "Tax Exempt Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "443",
        Name: "Contact Inquiry Reference",
        Type: "AN",
        Min: 1,
        Max: 20,
        Version: "X12 4010"
    },
    {
        Element: "446",
        Name: "Terms Net Due Date",
        Type: "DT",
        Min: 8,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "447",
        Name: "Loop Identifier Code",
        Type: "AN",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "478",
        Name: "Credit / Debit Flag Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "499",
        Name: "Condition Value",
        Type: "AN",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "508",
        Name: "Account Number",
        Type: "AN",
        Min: 1,
        Max: 35,
        Version: "X12 4010"
    },
    {
        Element: "522",
        Name: "Amount Qualifier Code",
        Type: "ID",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "554",
        Name: "Assigned Number",
        Type: "N0",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "559",
        Name: "Agency Qualifier Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "560",
        Name: "Special Services Code",
        Type: "ID",
        Min: 2,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "563",
        Name: "Sales Requirement Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "566",
        Name: "Product / Service Substitution Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "567",
        Name: "Equipment Length",
        Type: "N0",
        Min: 4,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "587",
        Name: "Acknowledgemnet Type",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "595",
        Name: "Compartment ID Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "597",
        Name: "Vessel Code",
        Type: "ID",
        Min: 1,
        Max: 8,
        Version: "X12 4010"
    },
    {
        Element: "610",
        Name: "Amount",
        Type: "N2",
        Min: 1,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "623",
        Name: "Time Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "628",
        Name: "Hierarchical ID Number",
        Type: "AN",
        Min: 1,
        Max: 12,
        Version: "X12 4010"
    },
    {
        Element: "639",
        Name: "Basis of Unit Price Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "640",
        Name: "Transaction Type Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "641",
        Name: "Status Reason Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "646",
        Name: "Quantity Shipped to Date",
        Type: "R",
        Min: 1,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "648",
        Name: "Price Multiplier Qualifier",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "649",
        Name: "Multiplier",
        Type: "R",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "653",
        Name: "Discount Terms Type Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "654",
        Name: "Discount Base Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "655",
        Name: "Discount Base Value",
        Type: "R",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "656",
        Name: "Discount Control Limit Qualifier",
        Type: "ID",
        Min: 2,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "657",
        Name: "Discount Control Limit",
        Type: "N0",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "659",
        Name: "Basis of Verification Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "662",
        Name: "Relantionship Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "665",
        Name: "Residue Indicator Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "668",
        Name: "Line Item Status Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "669",
        Name: "Currency Market / Exchange Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "673",
        Name: "Quantity Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "687",
        Name: "Class of Trade Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "688",
        Name: "Restrictions / Conditions Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "706",
        Name: "Entity Relationship Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "728",
        Name: "Returnable Container Load Make-Up Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "729",
        Name: "Category",
        Type: "AN",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "731",
        Name: "Transit Direction Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "732",
        Name: "Transit Time Direction Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "733",
        Name: "Transit Time",
        Type: "R",
        Min: 1,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "734",
        Name: "Hierarchical Parent ID Number",
        Type: "AN",
        Min: 1,
        Max: 12,
        Version: "X12 4010"
    },
    {
        Element: "735",
        Name: "Hierarchical Level Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "736",
        Name: "Hierarchical Child Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "737",
        Name: "Measurement Reference ID Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "738",
        Name: "Measurement Qualifier",
        Type: "ID",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "739",
        Name: "Measurement Value",
        Type: "R",
        Min: 1,
        Max: 20,
        Version: "X12 4010"
    },
    {
        Element: "740",
        Name: "Range Minimum",
        Type: "R",
        Min: 1,
        Max: 20,
        Version: "X12 4010"
    },
    {
        Element: "741",
        Name: "Range Maximum",
        Type: "R",
        Min: 1,
        Max: 20,
        Version: "X12 4010"
    },
    {
        Element: "750",
        Name: "Product / Process Characteristic Code",
        Type: "ID",
        Min: 2,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "751",
        Name: "Product Description Code",
        Type: "AN",
        Min: 1,
        Max: 12,
        Version: "X12 4010"
    },
    {
        Element: "752",
        Name: "Surface / Layer / Position Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "753",
        Name: "Packaging Characteristic Code",
        Type: "ID",
        Min: 1,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "754",
        Name: "Packaging Description Code",
        Type: "AN",
        Min: 1,
        Max: 7,
        Version: "X12 4010"
    },
    {
        Element: "755",
        Name: "Report Type Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "756",
        Name: "Report Transmission Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "757",
        Name: "Report Copies Needed",
        Type: "N0",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "759",
        Name: "Reportable Quantity Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "765",
        Name: "Day of Month",
        Type: "N0",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "770",
        Name: "Option Number",
        Type: "AN",
        Min: 1,
        Max: 20,
        Version: "X12 4010"
    },
    {
        Element: "782",
        Name: "Monetary Amount",
        Type: "R",
        Min: 1,
        Max: 18,
        Version: "X12 4010"
    },
    {
        Element: "786",
        Name: "Security Level Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "787",
        Name: "Record Length",
        Type: "N",
        Min: 1,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "788",
        Name: "Block Length",
        Type: "N",
        Min: 1,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "789",
        Name: "Drawing Sheet Size Code",
        Type: "AN",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "790",
        Name: "Entity Title",
        Type: "AN",
        Min: 1,
        Max: 132,
        Version: "X12 4010"
    },
    {
        Element: "791",
        Name: "Entity Purpose",
        Type: "AN",
        Min: 1,
        Max: 80,
        Version: "X12 4010"
    },
    {
        Element: "792",
        Name: "Entity Status Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "797",
        Name: "Security Technique Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "799",
        Name: "Version Identifier",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "800",
        Name: "Compression Technique",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "801",
        Name: "Interchange Format",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "802",
        Name: "Program Identifier",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "803",
        Name: "File Name",
        Type: "AN",
        Min: 1,
        Max: 64,
        Version: "X12 4010"
    },
    {
        Element: "804",
        Name: "Block Type",
        Type: "AN",
        Min: 1,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "810",
        Name: "Inner Pack",
        Type: "N0",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "819",
        Name: "Language Code",
        Type: "ID",
        Min: 2,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "822",
        Name: "Source Subqualifier",
        Type: "AN",
        Min: 1,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "828",
        Name: "Dollar Basis For Percent",
        Type: "R",
        Min: 1,
        Max: 9,
        Version: "X12 4010"
    },
    {
        Element: "854",
        Name: "Vessel Type Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "883",
        Name: "Pallet Type Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "884",
        Name: "Pallet Tiers",
        Type: "N0",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "885",
        Name: "Pallet Blocks",
        Type: "N0",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "897",
        Name: "Vessel Code Qualifier",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "933",
        Name: "Free-form Message Text",
        Type: "AN",
        Min: 1,
        Max: 264,
        Version: "X12 4010"
    },
    {
        Element: "934",
        Name: "Printer Carriage Control Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "935",
        Name: "Measurement Significance Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "936",
        Name: "Measurement Attribute Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "951",
        Name: "Balance Type Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "954",
        Name: "Percent",
        Type: "R",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "955",
        Name: "Tax Jurisdiction Code Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "956",
        Name: "Tax Jurisdiction Code",
        Type: "AN",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "963",
        Name: "Tax Type Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "984",
        Name: "Hazardous Material Shipping Name Qualifier",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "985",
        Name: "N.O.S. Indicator Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "1000",
        Name: "Service Characteristics Qualifier",
        Type: "AN",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1004",
        Name: "Percent Qualifier",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1005",
        Name: "Hierarchical Structure Code",
        Type: "ID",
        Min: 4,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "1018",
        Name: "Exponent",
        Type: "R",
        Min: 1,
        Max: 15,
        Version: "X12 4010"
    },
    {
        Element: "1019",
        Name: "Invoice Type Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "1066",
        Name: "Citizenship Status Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1067",
        Name: "Marital Status Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "1068",
        Name: "Gender Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "1073",
        Name: "Yes/No Condition or Response Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "1096",
        Name: "County Designator",
        Type: "ID",
        Min: 5,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "1104",
        Name: "Name Component Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1106",
        Name: "Address Component Qualifier",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1109",
        Name: "Race or Ethnicity Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "1136",
        Name: "Code Category",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1166",
        Name: "Contract Type Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1179",
        Name: "Customs Entry Type Group Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "1195",
        Name: "Financial Information Code",
        Type: "AN",
        Min: 1,
        Max: 80,
        Version: "X12 4010"
    },
    {
        Element: "1196",
        Name: "Breakdown Structure Detail Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1232",
        Name: "Purchase Category",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1250",
        Name: "Date Time Period Format Qualifier",
        Type: "ID",
        Min: 2,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "1251",
        Name: "Date Time Period",
        Type: "AN",
        Min: 1,
        Max: 35,
        Version: "X12 4010"
    },
    {
        Element: "1270",
        Name: "Code List Qualifier Code",
        Type: "ID",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "1271",
        Name: "Industry Code",
        Type: "AN",
        Min: 1,
        Max: 30,
        Version: "X12 4010"
    },
    {
        Element: "1300",
        Name: "Service, Promotion, Allowance, or Charge Code",
        Type: "ID",
        Min: 4,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "1301",
        Name: "Agency Service, Promotion, Allowance or Charge Code",
        Type: "AN",
        Min: 1,
        Max: 10,
        Version: "X12 4010"
    },
    {
        Element: "1309",
        Name: "Acquisition Data Code",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1310",
        Name: "Financing Type Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "1321",
        Name: "Condition Indicator",
        Type: "ID",
        Min: 2,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1322",
        Name: "Certification Type Code",
        Type: "ID",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "1373",
        Name: "Measurements Method or Device",
        Type: "ID",
        Min: 2,
        Max: 4,
        Version: "X12 4010"
    },
    {
        Element: "1375",
        Name: "Interim Hazardous Material Regulatory Number",
        Type: "AN",
        Min: 1,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "1401",
        Name: "Proposal Data Detail Identifier Code",
        Type: "ID",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "1430",
        Name: "Day Rotation",
        Type: "AN",
        Min: 1,
        Max: 7,
        Version: "X12 4010"
    },
    {
        Element: "1470",
        Name: "Number",
        Type: "N0",
        Min: 1,
        Max: 9,
        Version: "X12 4010"
    },
    {
        Element: "1525",
        Name: "Request Category Code",
        Type: "ID",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "1551",
        Name: "Message Text",
        Type: "AN",
        Min: 1,
        Max: 4096,
        Version: "X12 4010"
    },
    {
        Element: "1570",
        Name: "Filter ID Code",
        Type: "ID",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "704",
        Name: "Paperwork/Report Action Code",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "983",
        Name: "Hazardous Class Qualifier",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "808",
        Name: "Hazardous Material Shipment Information Qualifier",
        Type: "Identifier (ID)",
        Min: 3,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "809",
        Name: "Hazardous Material Shipment Information",
        Type: "String (AN)",
        Min: 1,
        Max: 25,
        Version: "X12 4010"
    },
    {
        Element: "1023",
        Name: "Hazard Zone Code",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "806",
        Name: "EPA Waste Stream Number Code",
        Type: "Identifier (ID)",
        Min: 4,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "807",
        Name: "Waste Characteristics Code",
        Type: "Identifier (ID)",
        Min: 12,
        Max: 16,
        Version: "X12 4010"
    },
    {
        Element: "238",
        Name: "Emergency Response Plan Number",
        Type: "String (AN)",
        Min: 1,
        Max: 12,
        Version: "X12 4010"
    },
    {
        Element: "230",
        Name: "Subsidiary Classification",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 3,
        Version: "X12 4010"
    },
    {
        Element: "271",
        Name: "Subsidiary Risk Indicator",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },
    {
        Element: "267",
        Name: "Net Explosive Quantity",
        Type: "Numeric (N0)",
        Min: 1,
        Max: 6,
        Version: "X12 4010"
    },
    {
        Element: "805",
        Name: "Canadian Hazardous Notation",
        Type: "String (AN)",
        Min: 1,
        Max: 25,
        Version: "X12 4010"
    },
    {
        Element: "986",
        Name: "Special Commodity Indicator Code",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "622",
        Name: "Number of Loads",
        Type: "Numeric (N0)",
        Min: 1,
        Max: 5,
        Version: "X12 4010"
    },
    {
        Element: "626",
        Name: "Excess Transportation Reason Code",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    },

    {
        Element: "627",
        Name: "Excess Transportation Responsibility Code",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 1,
        Version: "X12 4010"
    },
    {
        Element: "743",
        Name: "Returnable Container Freight Payment Responsibility Code",
        Type: "Identifier (ID)",
        Min: 1,
        Max: 2,
        Version: "X12 4010"
    }
]
