import { TradingPartner } from "./interfaces/EDIInterfaces";
export const TradingPartners: TradingPartner[] = [
  {
    id: "664d76a8d7412ac29ddf6a1b",
    Name: "Amazon",
    Initial850EDI: "jejejeje",
    Delimiters: ["*", ">", "~"],
    Version: "X12 4010",
    EOL: "CR",
    isVisible: true,
    DocsRequired: [
      {
        idDoc: "664d783c5d59cf13115aaec8",
        Doc: "850",
        isVisible: false,
        isRequired: true
      },
    ],
  },
]
