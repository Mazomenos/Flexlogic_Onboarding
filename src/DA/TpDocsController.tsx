"use server"

import { prisma } from '@/libs/prisma';
import { GetElement } from './elementControllers'
import { GetSegment } from './segmentControllers'

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

export async function GetTPDocById(TPDocId: string){
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

export async function postTPDoc(TPId: string, DocTemplateNum: number) {
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
                            Max: elementData?.Max
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
            isRequired : true
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

export async function updateTPDoc(TPDocId: string, newData: any) {
    try {
        const updatedTPDoc = await prisma.eDITPDocs.update({
            where: {
                id: TPDocId

            },
            data: newData
        });

        if (!updatedTPDoc) {
            throw new Error('Trading partner doc not found');
        }

        return updatedTPDoc;
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

export async function deleteTPDoc(TPDocId: string) {
    try {
        const deletedTPDoc = await prisma.eDITPDocs.delete({
            where: {
                id: TPDocId
            }
        });

        if (!deletedTPDoc) {
            throw new Error('Trading partner doc not found');
        }

        return deletedTPDoc;
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