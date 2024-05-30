"use server"

import { prisma } from "@/libs/prisma";

export async function GetUsersPartnerInfo(userId: string) {
    try {
        const userPartnerships = await prisma.user.findFirst({
            where: {
                id: userId
            },
            include: {
                Partnerships: true
            }
        })
        if (!userPartnerships) throw new Error('User not found')

        const partnerships = userPartnerships.Partnerships;
        const data = partnerships.map((partnership) => ({
            idPartner: partnership.idPartner,
            Name: partnership.Name,
            Status: partnership.Status
        }));

        return data

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

export async function GetUsersDocs(PartnerId: string, UserId: string) {
    try {
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
            if (partnership.idPartner === PartnerId) {
                for (let j = 0; j < partnership.Docs.length; j++) {
                    let docData = partnership.Docs[j]
                    newData.push({
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
                                LogErrors: [logError.IdError, logError.Type, logError.Description]
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
            Name: tradingPartners?.Name,
            Status: "In process",
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

export async function GetTPVisible(PartnerId: string) {
    try {
        const tradingPartner = await prisma.tradingPartner.findFirst({
            where: {
                id: PartnerId
            }
        });

        if (!tradingPartner) throw new Error('User not found')
        
        let newData: any[] = []
        newData.push(tradingPartner.Name)
        newData.push(tradingPartner.isVisible)
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
                isRequired : docData.isRequired
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
