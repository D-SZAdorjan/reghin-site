import { PrismaClient } from "@prisma/client";

export async function getAll(local: string) {
    const prisma = new PrismaClient();

    let notable_personalities = null;
    try{
        notable_personalities = await prisma.buildings.findMany();
    }catch(error){
        console.error(error);
    }

    console.log(notable_personalities);
}