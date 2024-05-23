import { PrismaClient } from '@prisma/client';
import { GetElement } from './elementControllers'
import { GetSegment } from './segmentControllers'

const prisma = new PrismaClient();

export async function getTPDocsFromPartnership(TPId: string) {
    const tradingPartner = await prisma.tradingPartner.findUnique({
        where: {
            id: TPId
        },
        include: {
            DocsRequired: true
        }
    });

    if (!tradingPartner) {
        throw new Error('Trading Partner not found');
    }

    const idDocs = tradingPartner.DocsRequired.map(doc => doc.idDoc);

    const docsFromEDITPDocs = await prisma.eDITPDocs.findMany({
        where: {
            id: {
                in: idDocs
            }
        }
    });

    return docsFromEDITPDocs;
}

export async function postTPDoc(TPId: string, DocTemplateNum: number) {
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
        Version: "X12 4010",
        isVisible: false
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
}

export async function updateTPDoc(TPDocId: string, newData: any) {

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
}

export async function deleteTPDoc(TPDocId: string) {
    const deletedTPDoc = await prisma.eDITPDocs.delete({
        where: {
            id: TPDocId
        }
    });

    if (!deletedTPDoc) {
        throw new Error('Trading partner doc not found');
    }

    return deletedTPDoc;
}