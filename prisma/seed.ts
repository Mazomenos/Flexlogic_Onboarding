
import { EDIElements } from "./EDIElements"
import { EDISegments } from "./EDISegments"
import {EDITPDocs} from "./EDITPDocs"
import { EDITemplateDocs } from "./EDITemplateDocs"
import { Users } from "./Users"
import { TradingPartners } from "./TradingPartners"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function clearDatabase() {
    console.log('Clearing existing data...');

    // Define deletion queries for each model (replace with your actual model names)
    const deletionQueries = [
        prisma.eDIElement.deleteMany(),
        prisma.eDISegments.deleteMany(),
        prisma.user.deleteMany(),
        prisma.tradingPartner.deleteMany(),
        prisma.eDITemplateDocuments.deleteMany(),
        prisma.eDITPDocs.deleteMany(),
    ];

    await Promise.all(deletionQueries);

    console.log('Database cleared successfully.');
}

async function seedAll() {
    console.log('Seeding data...');
    async function EDIElements_seed() {
        for (let EDIElement of EDIElements) {
           await prisma.eDIElement.create({
                data: EDIElement
           })
        }
    }
    
    async function EDISegments_seed() {
        for (let EDISegment of EDISegments) {
            await prisma.eDISegments.create({
                data: EDISegment
            })
        }
    }
    
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
            await prisma.eDITemplateDocuments.create({
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

    await EDIElements_seed();  
    await Users_seed();   
    await TradingPartners_seed();   
    await EDITPDocs_seed();   
    await EDITemplateDocs_seed();
    await EDISegments_seed(); 

    console.log('Seeding completed.')
}

async function main() {
    try {
      await clearDatabase();
      await seedAll();
    } catch (error) {
      console.error('Error during seeding:', error);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
}

main();