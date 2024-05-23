import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUser(userId: string) {
    const user = await prisma.user.findFirst({
        where: {
            id : userId
        }
    });
    return user;
}


