"use server"

import { prisma } from "@/libs/prisma";
import { Partnership, TPDocRequired, TradingPartner } from "@prisma/client";

export async function GetPartnershipsFromUser(userId: string) {
    try {
        const userPartnerships = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })
        let partnerships = []
        if (!userPartnerships) throw new Error('User not found')
        const userPartnershipTypeList = userPartnerships.Partnerships
        for (let i = 0; i < userPartnershipTypeList.length; i++) {
            const partner = await prisma.tradingPartner.findFirst({
                where: {
                    id: userPartnershipTypeList[i].idPartner
                }
            })
            partnerships.push(partner)
        }
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

//WARNING DOESNT WORK!!!!!!!!!
export async function PostPartnership(Name: string, Delimiters: string[], EDIVersion: string, EOL: string) {
    try {
        //Creates new blank 850 document to link to this new partnership
        const eightfiftyTemplate = await prisma.eDITemplateDocuments.findFirst({
            where: {
                Doc: 850
            }
        })
        if (eightfiftyTemplate === null) return null
        let segmentArray = []
        for (let i = 0; i < eightfiftyTemplate.Segments.length; i++) {
            segmentArray.push(eightfiftyTemplate.Segments[i])
        }
        console.log(segmentArray)
        const newTPDocument = await prisma.eDITPDocs.create({
            data: {
                Segments: []
            }
        })
        const partnership = await prisma.tradingPartner.create({
            data: {
                Name,
                //Initial850EDI: newTPDocument.id,
                Delimiters,
                EDIVersion,
                EOL
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
                EDIVersion,
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