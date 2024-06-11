"use server"

import { prisma } from "@/libs/prisma"

export async function GetClient(clientId: string) {
    try {
        const client = await prisma.user.findFirst({
            where: {
                id: clientId
            }
        });
        return client;
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



