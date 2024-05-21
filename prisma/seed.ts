import { EDIElements } from "./EDIElements"
import { EDISegments } from "./EDISegments"
import {EDITPDocs} from "./EDITPDocs"
import { EDITemplateDocs } from "./EDITemplateDocs"
import { Users } from "./Users"
import { TradingPartners } from "./TradingPartners"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


async function EDIElements_seed() {
    for (let EDIElement of EDIElements) {
       await prisma.eDIElement.create({
            data: EDIElement
       })
    }
}

// async function EDISegments_seed() {
//     for (let EDISegment of EDISegments) {
//         await prisma.eDISegments.create({
//             data: EDISegment
//         })
//     }
// }

async function Users_seed() {
    for (let User of Users) {
        await prisma.user.create({
            data: User
        })
    }
}

async function TradingPartners_seed() {
    for (let TradingPartner of TradingPartners) {
        await prisma.tradingPartner.create({
            data: TradingPartner
        })
    }
}

async function EDITemplateDocs_seed() {
    for (let EDITemplateDoc of EDITemplateDocs) {
        await prisma.eDIdocuments.create({
            data: EDITemplateDoc
        })
    }
}

async function EDITPDocs_seed() {
    for (let EDITPDoc of EDITPDocs) {
        await prisma.eDITPDocs.create({
            data: EDITPDoc
        })
    }
}

async function main () {
    await EDIElements_seed();  
    await Users_seed();   
    await TradingPartners_seed();   
    await EDITPDocs_seed();   
    await EDITemplateDocs_seed();     
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect
})