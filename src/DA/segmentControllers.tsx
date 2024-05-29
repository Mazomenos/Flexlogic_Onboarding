"use server"

import { prisma } from "@/libs/prisma";

export async function GetSegment(segmentName: string) {
    const segment = await prisma.eDISegments.findFirst({
        where: {
            Segment: segmentName
        }
    });
    return segment
}