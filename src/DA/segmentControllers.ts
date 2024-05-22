import { prisma } from "@/libs/prisma";

async function getSegment(segmentName: string) {
    const segment = await prisma.eDISegments.findFirst({
        where: {
            Segment: segmentName
        }
    });
    return segment
}

module.exports = [getSegment]