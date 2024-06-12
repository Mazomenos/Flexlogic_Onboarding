import { TradingPartner } from "./interfaces/EDIInterfaces";
export const TradingPartners: TradingPartner[] = [
  {
    id: "664d76a8d7412ac29ddf6a1b",
    Name: "Amazon",
    Initial850EDI: "jejejeje",
    Delimiters: ['COMMA_SEMICOLON_STAR'],
    Version: 'X12_4010',
    EOL: ['TILDE'],
    isVisible: true,
    DocsRequired: [
      {
        idDoc: "664d783c5d59cf13115aaec8",
        Doc: 'EDI_850',
        instructionsPDF: "",
        isVisible: true,
        isRequired: true
      },
    ],
  },
]
