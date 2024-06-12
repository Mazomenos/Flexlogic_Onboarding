"use server"

// import { prisma } from '@/libs/prisma';
import { GetElement } from './elementControllers'
import { GetSegment } from './segmentControllers'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GetTPDocsFromPartnership(TPId: string) {
    try {
        const tradingPartner = await prisma.tradingPartner.findUnique({
            where: {
                id: TPId
            },
            select: {
                DocsRequired: {
                    select: {
                        idDoc: true,
                        Doc: true,
                    }
                }
            }
        });

        if (!tradingPartner) {
            throw new Error('Trading Partner not found');
        }

        let newData: any[] = []
        for (let i = 0; i < tradingPartner.DocsRequired.length; i++) {
            let docData = tradingPartner.DocsRequired[i]
            const docsFromEDITPDocs = await prisma.eDITPDocs.findFirst({
                where: {
                    id: docData.idDoc
                }
            })
            newData.push({
                idDoc: docData.idDoc,
                Doc: docData.Doc,
                Segments: docsFromEDITPDocs?.Segments
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

export async function GetTPDocById(TPDocId: string) {
    try {

        const TPDoc = await prisma.eDITPDocs.findUnique({
            where: {
                id: TPDocId
            },
            select: {
                Segments: true
            }
        });

        if (!TPDoc) {
            throw new Error('Document not found');
        }

        return TPDoc;

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

export async function postTPDoc(TPId: string, DocTemplateNum: number, pdfURL: string) {
    try {
        const tradingPartner = await prisma.tradingPartner.findFirst({
            where: {
                id: TPId
            }
        });

        if (!tradingPartner) {
            throw new Error('Trading partner not found');
        }

        const templateDoc = await prisma.eDITemplateDocuments.findFirst({
            where: {
                Doc: DocTemplateNum,
            },
        });

        if (!templateDoc) {
            throw new Error('Template document not found');
        }

        let newDataSegments: any[] = []
        for (let j = 0; j < templateDoc.Segments.length; j++) {
            let segment = templateDoc.Segments[j]
            let segmentData = await GetSegment(segment.Segment)
            let elements: any[] = []
            if (segmentData && segmentData.Elements) {
                for (let i = 0; i < segmentData.Elements.length; i++) {
                    let element = segmentData.Elements[i]
                    if (element) {
                        let elementData = await GetElement(element.Element)
                        elements.push({
                            Position: element.Position,
                            Element: element.Element,
                            Requirement: element.Requirement,
                            Type: elementData?.Type,
                            Min: elementData?.Min,
                            Max: elementData?.Max,
                            Conditions: []
                        })
                    }
                }
            }

            newDataSegments.push({
                Position: segment.Position,
                Segment: segment.Segment,
                Requirement: segment.Requirement,
                Max: segment.Max,
                ...(segment.Segments !== null && segment.Segments !== undefined && segment.Segments.length > 0 && { Segments: segment.Segments }),
                Elements: elements
            })
        }


        const createdTPDoc = await prisma.eDITPDocs.create({
            data: {
                Segments: newDataSegments

            }
        });

        tradingPartner.DocsRequired.push({
            idDoc: createdTPDoc.id,
            Doc: DocTemplateNum.toString(),
            isVisible: true,
            isRequired: true,
            instructionsPDF: pdfURL
        })

        const updatedDocs = await prisma.tradingPartner.update({
            where: {
                id: TPId
            },
            data: {
                DocsRequired: tradingPartner.DocsRequired
            }
        });

        return updatedDocs;
    } catch (error) {
        if (error instanceof Error) {
            return Error
        }
    }
}

export async function updateTPDoc(PartnerName: string, TPDocId: string, newDocument: any) {
    try {
        // Find the trading partner
        const partner = await prisma.tradingPartner.findFirst({
            where: {
                Name: PartnerName
            },
            include: {
                DocsRequired: true
            }
        });

        // Throw error if trading partner not found
        if (!partner) {
            throw new Error('Trading partner not found');
        }

        // Filters DocsRequired data
        const newData = partner.DocsRequired.filter(docs => docs.idDoc !== TPDocId)
            .map(docs => ({
                idDoc: docs.idDoc,
                Doc: docs.Doc,
                isRequired: docs.isRequired,
                isVisible: docs.isVisible,
                instructionsPDF: docs.instructionsPDF
            }));

        // Add the new document to newData
        newData.push({
            idDoc: newDocument.idDoc, 
            Doc: newDocument.Doc,
            isRequired: newDocument.isRequired,
            isVisible: newDocument.isVisible,
            instructionsPDF: newDocument.instructionsPDF
        });

        // Update the trading partner with the filtered DocsRequired
        const updatedPartner = await prisma.tradingPartner.update({
            where: {
                id: partner.id
            },
            data: {
                DocsRequired: {
                    set: newData
                }
            },
            include: {
                DocsRequired: true
            }
        });

        return updatedPartner;
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

export async function deleteTPDoc(partnerName: string, TPDocId: string) {
    try {
        // Find the trading partner
        const partner = await prisma.tradingPartner.findFirst({
            where: {
                Name: partnerName
            },
            include: {
                DocsRequired: true
            }
        });

        // Throw error if trading partner not found
        if (!partner) {
            throw new Error('Trading partner not found');
        }


        // Filters DocsRequired data
        const newData = partner.DocsRequired.filter(docs => docs.idDoc !== TPDocId)
            .map(docs => ({
                idDoc: docs.idDoc,
                Doc: docs.Doc,
                isRequired: docs.isRequired,
                isVisible: docs.isVisible,
                instructionsPDF: docs.instructionsPDF
            }));



        // Deletes entries with the given TPDocId
        const deletedoc = await prisma.eDITPDocs.delete({
            where: {
                id: TPDocId
            }
        });


        // Update the trading partner with the filtered DocsRequired
        const updatedPartner = await prisma.tradingPartner.update({
            where: {
                id: partner.id
            },
            data: {
                DocsRequired: {
                    set: newData
                }
            },
            include: {
                DocsRequired: true
            }
        });

        return updatedPartner;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete Trading Partner document');
    }
}
