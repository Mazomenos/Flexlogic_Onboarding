"use server"

import { prisma } from "@/libs/prisma";

import { Partnership, TPDocRequired, TradingPartner } from "@prisma/client";




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


export async function CreatePartner(data: TradingPartner){
    try {
        const partner = await prisma.tradingPartner.create({
            
            data: data

        })

        if (!partner) {
            throw new Error('Trading partner not created');
        }
        console.log(partner)
        return partner

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
export async function UpdatePartnership(id: string, Name: string, Initial850EDI: string, Delimiters: string[], EDIVersion: string, EOL: string, DocsRequired: TPDocRequired[]) {
    try {
        const partnership = await prisma.tradingPartner.update({
            where: {
                id
            },
            data: {
                Name,
                Initial850EDI,
                Delimiters,
                EOL,
                DocsRequired
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

//Testing pending
export async function DeletePartnership(id: string) {
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