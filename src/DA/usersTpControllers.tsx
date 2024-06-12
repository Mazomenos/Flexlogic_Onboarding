"use server"

// import { prisma } from "@/libs/prisma";

import { PrismaClient } from '@prisma/client';

import { GetUserId } from '@/middleware';

const prisma = new PrismaClient();

import { LogErrors } from '../../prisma/interfaces/EDIInterfaces';

export async function GetUsersPartnerInfo() {

    const userId = await GetUserId()

    try {
        const userPartnerships = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                Partnerships: true
            }
        })
        if (!userPartnerships) throw new Error('User not found')
        const partnerships = userPartnerships.Partnerships;

        const data = partnerships.map(partnership => ({
            idPartner: partnership.idPartner,
            Name: partnership.Name,
            Status: partnership.Status
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

export async function DeleteUserPartnership(PartnerName: string) {

    const userId = await GetUserId()

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
                id: userId,
            },
            include: {
                Partnerships: true
            }
        });

        if (!user) throw new Error('User not found')

        for (let i = 0; i < user.Partnerships.length; i++) {
            let partnership = user.Partnerships[i]
            if (partnership.idPartner === partner.id) {
                user.Partnerships.splice(i, 1)
                const updatedUser = await prisma.user.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        Partnerships: user.Partnerships
                    }
                })
                return updatedUser
            }
        }

        return "No partner named " + PartnerName + " found for the current user"


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

export async function GetUsersDocs(PartnerName: string) {

    const userId = await GetUserId()

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
                id: userId,
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

export async function GetUsersLogErrors(PartnerId: string) {

    const userId = await GetUserId()

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
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
export async function GetPartnershipDocLogError(PartnerName: string, DocId: string) {

    const userId = await GetUserId()

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
                id: userId,
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

export async function UpdateUserLogErrors(DocId: string, PartnerName: string, newLogError: LogErrors[]) {

    const userId = await GetUserId()

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new Error('User not found');
        }

        const updatedPartnerships = user.Partnerships.map(partnership => {
            if (partnership.Name === PartnerName) {
                return {
                    ...partnership,
                    Docs: partnership.Docs.map(doc => {
                        if (doc.idDoc === DocId) {
                            return {
                                ...doc,
                                LogErrors: newLogError,
                            };
                        }
                        return doc;
                    }),
                };
            }
            return partnership;
        });


        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                Partnerships: updatedPartnerships,
            },
        });

        return updatedUser;
    } catch(error) {
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

export async function PostNewPartnership(PartnerId: string) {

    const userId = await GetUserId()
    try {

        const users = await prisma.user.findUnique({
            where: {
                id: userId,
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
                Status: "Pending",
                isRequired: doc.isRequired,
                LogErrors: []
            }))
        };

        const updatedUser = await prisma.user.update({
            where: { id: userId },
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

        console.log(tradingPartners)
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

export async function GetTPDocsRequired(partnerId: string) {
    console.log(partnerId)
    try {
        const tradingPartner = await prisma.tradingPartner.findFirst({
            where: {
                id: partnerId
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
                isRequired: docData.isRequired,
                instructionsPDF: docData.instructionsPDF
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

export async function GetTPDocs(partnerName: string) {
    console.log(partnerName)
    try {
        const tradingPartner = await prisma.tradingPartner.findFirst({
            where: {
                Name: partnerName
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
                isRequired: docData.isRequired,
                instructionsPDF: docData.instructionsPDF
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

export async function UpdateDocumentStatus(PartnerName:string, TPDocID: string, status: string) {
    const userId = await GetUserId()

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { Partnerships: true }
        });

        if (!user) {
            throw new Error('User not found');
        }

        const partnershipIndex = user.Partnerships.findIndex(partner => partner.Name === PartnerName);

        if (partnershipIndex === -1) {
            throw new Error('Partnership not found');
        }
        
        const documentIndex = user.Partnerships[partnershipIndex].Docs.findIndex(doc => doc.idDoc === TPDocID);

        if (documentIndex === -1) {
            throw new Error('Document not found');
        }

        user.Partnerships[partnershipIndex].Docs[documentIndex].Status = status;

        await prisma.user.update({
            where: { id: userId },
            data: {
                Partnerships: user.Partnerships
            }
        });

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

export async function CheckPartnershipStatus(PartnerName: string, TPDocID: string) {
    const userId = await GetUserId()

    try {
        
        const userPartnershipDocs = await prisma.user.findFirst({
            where: { id: userId },
            include: {
                Partnerships: {
                    include: { Docs: true }
                }
            }
        });

        if (!userPartnershipDocs || !userPartnershipDocs.Partnerships.length) {
            console.log(`No partnership found for user: ${userId}`);
            return; 
        }

        const partnership = userPartnershipDocs.Partnerships.find(p => p.Name === PartnerName);

        if (!partnership) {
            console.log(`No partnership found with name: ${PartnerName}`);
            return; 
        }

        const allDocsComplete = partnership.Docs.every(doc => doc.Status === 'COMPLETE');

        if (allDocsComplete) {
            await prisma.user.update({
                where: { id: userId },
                data: {
                    Partnerships: {
                        updateMany: {
                            where: { Name: PartnerName },
                            data: { Status: 'COMPLETE' }
                        }
                    }
                }
            });
        } 

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