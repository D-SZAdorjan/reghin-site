
import { createClient } from '@/lib/supabase/server';
import { Prisma, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";
import SuperJSON from 'superjson';

export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');


    const prisma = new PrismaClient();
    let data;

    if(id){
        try {
            data = await prisma.monument.findUnique({
                where: {
                    id: BigInt(id),
                },
            });
        } catch (error) {
            console.error(error);
            //return response JSON
            return NextResponse.json(
                {
                    sucess: false,
                    message: "The data with the given id couldn't be fetched!",
                    data: error,
                },
                {
                    status: 500,
                }
            );
        }
    }else if(category){
        try {
            data = await prisma.monument.findMany({
                where: {
                    category_id: BigInt(category),
                },
                take: limit ? parseInt(limit) : undefined
            });
        } catch (error) {
            console.error(error);
            //return response JSON
            return NextResponse.json(
                {
                    sucess: false,
                    message: "The data with the given category couldn't be fetched!",
                    data: error,
                },
                {
                    status: 500,
                }
            );
        }
    }else{
        try {
            data = await prisma.monument.findMany({
                take: limit ? parseInt(limit) : undefined
            });
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
            message: 'List Data Monuments',
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
    const name = JSON.parse(formData.get('name') as string);
    const imageFile = formData.get('image') as Blob; // Ensure that the image is retrieved as a Blob
    const description = JSON.parse(formData.get('description') as string);
    const openHours = JSON.parse(formData.get('open_hours') as string);
    const address = JSON.parse(formData.get('address') as string);
    const contactInfo = JSON.parse(formData.get('contact_info') as string);
    const mapLink = formData.get('map_link') as string;
    const isVisitable = formData.get('is_visitable') === "true";
    const priority = BigInt(formData.get('priority') as string);
    const publish = formData.get('publish') === "true";
    const category = BigInt(formData.get('category') as string);

    // Upload Image to Supabase
    const uniqueFileName = `${Date.now()}-${Math.floor(Math.random() * 10000)}.png`; // Generate a unique filename for the image
    const { data, error } = await supabase.storage
        .from('reghin-image-bucket')
        .upload(`Monuments/${uniqueFileName}`, imageFile);

    if (error) {
        return NextResponse.json({ success: false, message: "Error on image upload!!", data: error }, { status: 400 });
    }

    // Create JSON object for table row creation
    const rowData: Prisma.MonumentCreateInput = {
        name: name,
        image: process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/reghin-image-bucket/" + data.path + "?t=2024-08-31T16%3A20%3A05.858Z",  // Save the image path from Supabase
        description: description,
        open_hours: openHours,
        address: address,
        contact_info: contactInfo,
        map_link: mapLink,
        is_visitable: isVisitable,
        priority: priority,
        published: publish,
        MonumentCategory: {
            connect: { id: category }, // Use the connect option to link an existing Category
        }
    };
    
    // Create table row
    const response = await prisma.monument.create({ data: rowData });
    const createdMonument = SuperJSON.stringify(response);
    //const createdCategory = null;

    return NextResponse.json({ sucess: "true", message: "Monument created sucessfully!", data: createdMonument },{ status: 200 });
}

export async function PATCH(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const prisma = new PrismaClient();
    // Initialize Supabase client
    const supabase = createClient();

    // Parse the form data (not JSON)
    const formData = await request.formData();
    const name = JSON.parse(formData.get('name') as string);
    const imageFile = formData.get('image') as Blob; // Ensure that the image is retrieved as a Blob
    const description = JSON.parse(formData.get('description') as string);
    const openHours = JSON.parse(formData.get('open_hours') as string);
    const address = JSON.parse(formData.get('address') as string);
    const contactInfo = JSON.parse(formData.get('contact_info') as string);
    const mapLink = formData.get('map_link') as string;
    const isVisitable = formData.get('is_visitable') === "true";
    const priority = BigInt(formData.get('priority') as string);
    const publish = formData.get('publish') === "true";
    const category = BigInt(formData.get('category') as string);

    // Upload Image to Supabase
    let rowData: Prisma.MonumentUpdateInput;

    // Create JSON object for table row creation
    if(imageFile !== null){
        const uniqueFileName = `${Date.now()}-${Math.floor(Math.random() * 10000)}.png`; // Generate a unique filename for the image
        const { data, error } = await supabase.storage
            .from('reghin-image-bucket')
            .upload(`Monuments/${uniqueFileName}`, imageFile);

        if (error) {
            return NextResponse.json({ success: false, message: "Error on image upload!!", data: error }, { status: 400 });
        }

        // Create JSON object for table row creation
        rowData = {
            name: name,
            image: process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/reghin-image-bucket/" + data.path + "?t=2024-08-31T16%3A20%3A05.858Z",  // Save the image path from Supabase
            description: description,
            open_hours: openHours,
            address: address,
            contact_info: contactInfo,
            map_link: mapLink,
            is_visitable: isVisitable,
            priority: priority,
            published: publish,
            MonumentCategory: {
                connect: { id: category }, // Use the connect option to link an existing Category
            }
        };
    }else{
        // Create JSON object for table row creation
        rowData = {
            name: name,
            description: description,
            open_hours: openHours,
            address: address,
            contact_info: contactInfo,
            map_link: mapLink,
            is_visitable: isVisitable,
            priority: priority,
            published: publish,
            MonumentCategory: {
                connect: { id: category }, // Use the connect option to link an existing Category
            }
        };
    }

    // Create table row
    const response = await prisma.monument.update({ 
        where: {
          id: BigInt(id!!),
        },
        data: rowData
    });
    const updatedMonument = SuperJSON.stringify(response);

    return NextResponse.json({ sucess: "true", message: "Monument updated successfully!", data: updatedMonument },{status: 200});
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
}