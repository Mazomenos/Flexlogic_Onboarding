"use server"

import { prisma } from "@/libs/prisma";

import { Delimiters_enum, EOL_enum, Partnership, TPDocRequired, TradingPartner, Version_enum } from "@prisma/client";


export async function GetAllTradingPartner() {
    try {
        const tradingPartner = await prisma.tradingPartner.findMany({
            select: {
                id: true,
                Name: true,
                isVisible: true
            }
            
        });
        
        return tradingPartner;
        
    } catch (error) {
        if (error instanceof Error) {
            console.log(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }
    }
}

export async function GetTradingPartner(PartnerId: string) {
    try {
        const tradingPartner = await prisma.tradingPartner.findFirst({
            where: {
                id: PartnerId
            }
        });
        return tradingPartner;
    } catch (error) {
        if (error instanceof Error) {
            console.log(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }
    }
}

export async function GetPartnershipsFromUser(userId: string) {
    try {
        const userPartnerships = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })
        if (!userPartnerships) throw new Error('User not found')

        const idPartners = userPartnerships.Partnerships.map(partnership => partnership.idPartner)
        const partnerships = await prisma.tradingPartner.findMany({
            where: {
                id: {
                    in: idPartners
                }
            }
        })
        return partnerships
    } catch (error) {
        if (error instanceof Error) {
            console.log(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }
    }
}

export async function CreateTradingPartner(data: {
    Name: string,
    Initial850EDI: string | null,
    Delimiters: Delimiters_enum[],
    Version: Version_enum,
    EOL: EOL_enum[],
    isVisible: boolean,
    DocsRequired: any[]
}) {
    try {
        const partner = await prisma.tradingPartner.create({
            data: {
                Name: data.Name,
                Initial850EDI: data.Initial850EDI,
                Delimiters: data.Delimiters,
                Version: data.Version,
                EOL: data.EOL,
                isVisible: data.isVisible,
                DocsRequired: data.DocsRequired
            }
        });

        if (!partner) {
            throw new Error('Trading partner not created');
        }

        console.log(partner);
        return partner;
    } catch (error) {
        if (error instanceof Error) {
            console.error({
                message: error.message,
                stack: error.stack,
            });
        } else {
            console.error('Unexpected error', error);
        }

        throw new Error('Failed to create trading partner');
    }
}

// export async function CreateTradingPartner(data: {
//     Name: string,
//     Initial850EDI: string, 
//     Delimiters: Delimiters_enum[],
//     Version: Version_enum,
//     EOL: EOL_enum[],
//     isVisible: boolean
//     DocsRequired: any[]
// }){
//     try {
//         const partner = await prisma.tradingPartner.create({
            
//             data: data

//         })

//         if (!partner) {
//             throw new Error('Trading partner not created');
//         }
//         console.log(partner)
//         return partner

//     } catch (error) {
//         if (error instanceof Error) {
//             console.log(
//                 {
//                     message: error.message,
//                 },
//                 {
//                     status: 500,
//                 }
//             );
//         }
//     }
// }

// const data = {
//         Name: "Amazon",
//         Initial850EDI: "jejejeje",
//         Delimiters: ['COMMA_SEMICOLON_STAR'],
//         Version: 'X12_4010',
//         EOL: ['TILDE'],
//         isVisible: true,
//         DocsRequired: [
//           {
//             idDoc: "664d783c5d59cf13115aaec8",
//             Doc: 'EDI_850',
//             instructionsPDF: "",
//             isVisible: true,
//             isRequired: true
//           },
//         ]
// }


//Testing pending
export async function UpdateTradingPartner(partnerId: string, data: {
    Name?: string,
    Initial850EDI?: string, 
    Delimiters?: Delimiters_enum[],
    Version?: Version_enum,
    EOL?: EOL_enum[],
    isVisible?: boolean, 
    }){
    try {
        const partnership = await prisma.tradingPartner.update({
            where: {
                id: partnerId
            },
            data: data
        })
        return partnership
    } catch (error) {
        if (error instanceof Error) {
            console.log(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }
    }
}

//Testing pending
export async function DeleteTradingPartner(id: string) {
    try {
        const partnership = await prisma.tradingPartner.delete({
            where: {
                id
            }
        })
        return partnership
    } catch (error) {
        if (error instanceof Error) {
            console.log(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }
    }
}