"use server"

import { prisma } from "@/libs/prisma";

export async function GetElement(elementName: string) {
    const element = await prisma.eDIElement.findFirst({
        where: {
            Element: elementName
        }
    });
    return element
}