"use server"

// import { prisma } from '@/libs/prisma';
import { GetElement } from './elementControllers'
import { GetSegment } from './segmentControllers'

import { Delimiters_enum, DocType_enum, EOL_enum, PrismaClient } from '@prisma/client';

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
                Delimiters: true,
                EOL: true,
                Segments: true
            }
        });

        if (!TPDoc) {
            throw new Error('Document not found');
        }


        console.log({
            id: TPDocId,
            Delimiters: TPDoc.Delimiters[0],
            EOL: TPDoc.EOL[0],
            Segments: TPDoc.Segments
        })

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

export async function updateConfigTPDoc(TPDocID: string , newDocument: any) {
    try {
        const TPDoc = await prisma.eDITPDocs.update({
            where: {
                id: TPDocID
            },
                data: newDocument
        });

        if (!TPDoc) {
            throw new Error('Trading Partner Document not found');
        }

        console.log(TPDoc)
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



export async function postTPDoc(Name_TP: string, DocType_e: DocType_enum, Delimiter_e: Delimiters_enum, EOL_e: EOL_enum, url:string) {
    try {
        const [tradingPartner, templateDoc] = await Promise.all([
            prisma.tradingPartner.findFirst({ where: { Name: Name_TP } }),
            prisma.eDITemplateDocuments.findFirst({ where: { Doc: DocType_e } }),
        ]);

        if (!tradingPartner) {
            throw new Error('Trading partner not found');
        }

        if (!templateDoc) {
            throw new Error('Template document not found');
        }

        const fetchSegmentData = async (segment: any) => {
            const segmentData = await GetSegment(segment.Segment);
            const elements = await Promise.all((segmentData?.Elements || []).map(async (element: any) => {
                const elementData = await GetElement(element.Element);
                return {
                    Position: element.Position,
                    Element: element.Element,
                    Requirement: element.Requirement,
                    Type: elementData?.Type,
                    Min: elementData?.Min,
                    Max: elementData?.Max,
                    Conditions: [],
                    Composites: []
                };
            }));

            let Segments = []

            if (segment.Segment === "Loop"){
                Segments = segment.Segments

            }

            const result: any = {
                Position: segment.Position,
                Segment: segment.Segment,
                Requirement: segment.Requirement,
                Max: segment.Max,
                Segments: Segments
            };

            if (elements.length > 0) {
                result['Elements'] = elements;
            }

            if (Segments.length > 0) {
                const nestedSegments = await Promise.all(segment.Segments.map(fetchSegmentData));
                if (nestedSegments.length > 0) {
                    result['Segments'] = nestedSegments;
                }
            }

            console.log(result)

            return result;
        };

        const newDataSegments = await Promise.all(templateDoc.Segments.map(fetchSegmentData));

        const createdTPDoc = await prisma.eDITPDocs.create({ data: {Delimiters: [Delimiter_e], EOL: [EOL_e] ,Segments: newDataSegments } });

        const isDelimiterIncluded = tradingPartner.Delimiters.includes(Delimiter_e);
        const isEOLIncluded = tradingPartner.EOL.includes(EOL_e);

        if (!isDelimiterIncluded) {
            tradingPartner.Delimiters.push(Delimiter_e);
        }

        if (!isEOLIncluded) {
            tradingPartner.EOL.push(EOL_e);
        }

        tradingPartner.DocsRequired.push({
            idDoc: createdTPDoc.id,
            Doc: DocType_e,
            isVisible: true,
            isRequired: true,
            instructionsPDF: url
        });

        const updatedDocs = await prisma.tradingPartner.update({
            where: { id: tradingPartner.id },
            data: {
                Delimiters: isDelimiterIncluded ? tradingPartner.Delimiters : { push: [Delimiter_e] },
                EOL: isEOLIncluded ? tradingPartner.EOL : { push: [EOL_e] },
                DocsRequired: tradingPartner.DocsRequired,
            },
        });

        console.log(updatedDocs)

        return updatedDocs;
    } catch (error) {
        return { error: error instanceof Error ? error.message : "An error occurred" };
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
