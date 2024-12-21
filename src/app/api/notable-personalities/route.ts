
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
        data = await prisma.notablePersonality.findUnique({
            where: {
                id: BigInt(id),
            },
        });
    }else{
        try {
            data = await prisma.notablePersonality.findMany();
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
            message: 'List Data NotablePersonalities',
            data: serializedData,
        },
        {
            status: 200,
        }
    );
}

export async function POST(request: NextRequest){
    const prisma = new PrismaClient();
    // Initialize Supabase client
    const supabase = createClient();

    // Parse the form data (not JSON)
    const formData = await request.formData();
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;
    const imageFile = formData.get('image') as Blob; // Ensure that the image is retrieved as a Blob
    const description = JSON.parse(formData.get('description') as string);
    const occupation = JSON.parse(formData.get('occupation') as string);
    const priority = BigInt(formData.get('priority') as string);
    const publish = formData.get('publish') === "true";

    // Upload Image to Supabase
    const uniqueFileName = `${Date.now()}-${lastName}.png`; // Generate a unique filename for the image
    const { data, error } = await supabase.storage
        .from('reghin-image-bucket')
        .upload(`NotablePersonalities/${uniqueFileName}`, imageFile);

    if (error) {
        return NextResponse.json({ success: false, message: "Error on image upload!!", data: error }, { status: 400 });
    }

    // Create JSON object for table row creation
    const rowData: Prisma.NotablePersonalityCreateInput = {
        first_name: firstName,
        last_name: lastName,
        image: process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/reghin-image-bucket/" + data.path + "?t=2024-08-31T16%3A20%3A05.858Z",  // Save the image path from Supabase
        description: description,
        occupation: occupation,
        priority: priority,
        published: publish,
    };
    
    // Create table row
    const response = await prisma.notablePersonality.create({ data: rowData });
    const createdPersonality = SuperJSON.stringify(response);
    //const createdPersonality = null;

    return NextResponse.json({ sucess: "true", message: "Personality created sucessfully!", data: createdPersonality },{ status: 200 });
}

export async function PATCH(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const prisma = new PrismaClient();
    // Initialize Supabase client
    const supabase = createClient();

    // Parse the form data (not JSON)
    const formData = await request.formData();
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;
    const imageFile = formData.get('image') as Blob; // Ensure that the image is retrieved as a Blob
    const description = JSON.parse(formData.get('description') as string);
    const occupation = JSON.parse(formData.get('occupation') as string);
    const priority = BigInt(formData.get('priority') as string);
    const publish = formData.get('publish') === "true";

    console.log(formData.get('description'));

    // Upload Image to Supabase
    let rowData: Prisma.NotablePersonalityUpdateInput;

    if(imageFile !== null){
        const uniqueFileName = `${Date.now()}-${lastName}.png`; // Generate a unique filename for the image
        const { data, error } = await supabase.storage
            .from('reghin-image-bucket')
            .upload(`NotablePersonalities/${uniqueFileName}`, imageFile);

        if (error) {
            return NextResponse.json({ success: false, message: "Error on image upload!!", data: error }, { status: 400 });
        }

        // Create JSON object for table row creation
        rowData = {
            first_name: firstName,
            last_name: lastName,
            image: process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/reghin-image-bucket/" + data.path + "?t=2024-08-31T16%3A20%3A05.858Z",  // Save the image path from Supabase
            description: description,
            occupation: occupation,
            priority: priority,
            published: publish,
        };
    }else{
        // Create JSON object for table row creation
        rowData = {
            first_name: firstName,
            last_name: lastName,
            description: description,
            occupation: occupation,
            priority: priority,
            published: publish,
        };
    }

    // Create table row
    const response = await prisma.notablePersonality.update({ 
        where: {
          id: BigInt(id!!),
        },
        data: rowData
    });
    const updatedPersonality = SuperJSON.stringify(response);

    return NextResponse.json({ sucess: "true", message: "Personality updated successfully!", data: updatedPersonality },{status: 200});
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
}