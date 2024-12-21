
import { createClient } from '@/lib/supabase/server';
import { Prisma, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";
import SuperJSON from 'superjson';

export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const prisma = new PrismaClient();
    let data;

    if(id){
        data = await prisma.monumentCategory.findUnique({
            where: {
                id: BigInt(id),
            },
        });
    }else{
        try {
            data = await prisma.monumentCategory.findMany();
        } catch (error) {
            console.error(error);
            //return response JSON
            return NextResponse.json(
                {
                    sucess: false,
                    message: "The data couldn't be fetched!",
                    data: error,
                },
                {
                    status: 500,
                }
            );
        }
    }

    const serializedData = SuperJSON.serialize(data);

    //return response JSON
    return NextResponse.json(
        {
            sucess: true,
            message: 'List Data MonumentCategories',
            data: serializedData,
        },
        {
            status: 200,
        }
    );
}

export async function POST(request: NextRequest){
    const prisma = new PrismaClient();

    // Parse the form data (not JSON)
    const formData = await request.formData();
    const name = JSON.parse(formData.get('name') as string);
    const priority = BigInt(formData.get('priority') as string);

    // Create JSON object for table row creation
    const rowData: Prisma.MonumentCategoryCreateInput = {
        name: name,
        priority: priority
    };
    
    // Create table row
    const response = await prisma.monumentCategory.create({ data: rowData });
    const createdCategory = SuperJSON.stringify(response);
    //const createdCategory = null;

    return NextResponse.json({ sucess: "true", message: "Category created sucessfully!", data: createdCategory },{ status: 200 });
}

export async function PATCH(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const prisma = new PrismaClient();

    // Parse the form data (not JSON)
    const formData = await request.formData();
    const name = JSON.parse(formData.get('name') as string);
    const priority = BigInt(formData.get('priority') as string);

    console.log(formData.get('description'));

    // Upload Image to Supabase
    let rowData: Prisma.MonumentCategoryUpdateInput;

    // Create JSON object for table row creation
    rowData = {
        name: name,
        priority: priority
    };

    // Create table row
    const response = await prisma.monumentCategory.update({ 
        where: {
          id: BigInt(id!!),
        },
        data: rowData
    });
    const updatedCategory = SuperJSON.stringify(response);

    return NextResponse.json({ sucess: "true", message: "Category updated successfully!", data: updatedCategory },{status: 200});
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
}