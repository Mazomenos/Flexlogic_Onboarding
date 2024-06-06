"use server"

import { prisma } from "@/libs/prisma";

import { cookies } from "next/headers";

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

//FUNCION PARA OBTENER userID de Cookie
export async function GetUserId() {
    try {
        
        const cookieId = cookies().get('userID')

        if (!cookieId) throw new Error('User not found')

        return cookieId.value

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

//PRUEBA DE ACCEDER A COOKIE DIRECTO EN CONTROLADOR
export async function GetUsersPartnerInfo(userId: string) {
    try {

        const cookie = await GetUserId()

        console.log(cookie)

        const userPartnerships = await prisma.user.findUnique({
            where: {
                id: cookie
            },
            include: {
                Partnerships: true
            }
        })
        if (!userPartnerships) throw new Error('User not found')

        const partnerships = userPartnerships.Partnerships;
            
        const data = partnerships.map(partnership => ({
            idPartner : partnership.idPartner,
            Name : partnership.Name,
            Status : partnership.Status
        }))

        return data;
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

export async function GetUsersDocs(UserId: string, PartnerName: string) {
    try {

        const partner = await prisma.tradingPartner.findFirst({
            where: {
                Name: PartnerName,
                
            }, 
            select: {
                id: true,
                
            }
        })

        if (!partner) throw new Error('User not found')

        const user = await prisma.user.findFirst({
            where: {
                id: UserId,
            },
            include: {
                Partnerships: true
            }
        });

        if (!user) throw new Error('User not found')

        let newData: any[] = []
        for (let i = 0; i < user.Partnerships.length; i++) {
            let partnership = user.Partnerships[i]
            if (partnership.idPartner === partner.id) {
                for (let j = 0; j < partnership.Docs.length; j++) {
                    let docData = partnership.Docs[j]
                    newData.push({
                        idDoc: docData.idDoc,
                        Doc: docData.Doc,
                        Status: docData.Status,
                        DocFile: docData.DocFile,
                        isRequired: docData.isRequired
                    })
                }
            }
        }

        return newData


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

export async function GetUsersLogErrors(PartnerId: string, UserId: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: UserId,
            },
            include: {
                Partnerships: true
            }
        });


        if (!user) throw new Error('User not found')

        let newData: any[] = []
        for (let i = 0; i < user.Partnerships.length; i++) {
            let partnership = user.Partnerships[i]
            if (partnership.idPartner === PartnerId) {
                for (let j = 0; j < partnership.Docs.length; j++) {
                    let docData = partnership.Docs[j];
                    // checks if it exist and it is not null
                    if (docData.LogErrors && docData.LogErrors.length > 0) {
                        for (let k = 0; k < docData.LogErrors.length; k++) {
                            let logError = docData.LogErrors[k];
                            newData.push({
                                LogErrors: [logError.Title, logError.Description, logError.Position, logError.Type]
                            });
                        }
                    }

                }

            }
        }

        return newData

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



//this controller is used to get the log of Errors of a single partnership file
export async function GetPartnershipDocLogError(PartnerName: string, UserId: string, DocId: string) {
    try {

        const partner = await prisma.tradingPartner.findFirst({
            where: {
                Name: PartnerName,
                
            }, 
            select: {
                id: true,
                
            }
        })

        if (!partner) throw new Error('User not found')


        const user = await prisma.user.findUnique({
            where: {
                id: UserId,
            },
            include: {
                Partnerships: true
            }
        });


        if (!user) throw new Error('User not found')


        let newData: any[] = []
        for (let i = 0; i < user.Partnerships.length; i++) {
            let partnership = user.Partnerships[i]
            if (partnership.idPartner === partner.id) {
                for (let j = 0; j < partnership.Docs.length; j++) {
                    let docData = partnership.Docs[j];
                    // checks if it exist and it is not null

                    if (docData.idDoc === DocId && docData.LogErrors && docData.LogErrors.length > 0) {
                        let logError = docData.LogErrors;
                        return logError
                    }

                }

            }
        }

        return newData

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

export async function PostNewPartnership(UserId: string, PartnerId: string) {
    try {

        const users = await prisma.user.findUnique({
            where: {
                id: UserId,
            },
            include: {
                Partnerships: true
            }
        });

        const tradingPartners = await prisma.tradingPartner.findUnique({
            where: {
                id: PartnerId
            }
        })

        if (!users) {
            throw new Error("User not found")
        }

        const existingPartnership = users.Partnerships.find(partnership => partnership.idPartner == PartnerId);
        if (existingPartnership) {
            throw new Error("Partnership already exists")
        }


        const newPartnership = {
            idPartner: PartnerId,
            Name: tradingPartners?.Name || "Unknown",
            Status: "In Process",
            Docs: tradingPartners?.DocsRequired.map(doc => ({
                idDoc: doc.idDoc,
                Doc: doc.Doc,
                DocFile: null,
                Status: "Validate",
                isRequired: doc.isRequired,
                LogErrors: []
            }))
        };

        const updatedUser = await prisma.user.update({
            where: { id: UserId },
            data: {
                Partnerships: {
                    push: newPartnership
                }
            },
            include: {
                Partnerships: true
            }
        });

        return updatedUser

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

// partners visibles 
export async function GetTPVisible() {
    try {
        const tradingPartners = await prisma.tradingPartner.findMany({
            where: {
                isVisible: true
            }
        });

        if (tradingPartners.length === 0) throw new Error('No trading partners found');

        return tradingPartners.map(partner => ({
            id: partner.id,
            Name: partner.Name,
        }));

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

export async function GetTPDocsRequired(PartnerId: string) {
    try {
        const tradingPartner = await prisma.tradingPartner.findFirst({
            where: {
                id: PartnerId
            },
            include: {
                DocsRequired: true
            }
        });

        if (!tradingPartner) throw new Error('User not found')

        let newData: any[] = []
        for (let i = 0; i < tradingPartner.DocsRequired.length; i++) {
            let docData = tradingPartner.DocsRequired[i]
            newData.push({
                idDoc: docData.idDoc,
                Doc: docData.Doc,
                isVisible: docData.isVisible,
                isRequired: docData.isRequired
            })
        }
        return newData;

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

