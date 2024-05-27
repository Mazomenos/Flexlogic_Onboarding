"use server"

import { prisma } from "@/libs/prisma"

export async function GetUser(userId: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        return user;
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


