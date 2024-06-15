"use server"

import { prisma } from "@/libs/prisma"

import { cookies } from "next/headers";
import { GetUserId } from "@/middleware";

export async function GetClient() {

    const userId = await GetUserId()

    try {
        const client = await prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        return client;
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


