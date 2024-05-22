import { prisma } from "@/libs/prisma";

async function getElement(elementName: string) {
    const element = await prisma.eDIElement.findFirst({
        where: {
            Element: elementName
        }
    });
    return element
}

module.exports = [getElement]