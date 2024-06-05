import { User } from "./interfaces/EDIInterfaces";

export const Users: User[]  = [
    {
        Partnerships: [
            {
              idPartner: "664d76a8d7412ac29ddf6a1b", // Cambiar por el id del TP
              Name: "Amazon",
              Status: "In Process",
              Docs: [
                {
                    idDoc: "664d783c5d59cf13115aaec8",
                    Doc: "EDI 850 Purchase Order",
                    DocFile: "link",
                    isRequired: true,
                    Status: "Validate",
                    LogErrors: []
                }
              ]
            }
        ]
    }
];