
import { createClient } from '@/lib/supabase/server';
import { Prisma, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";
import SuperJSON from 'superjson';

export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');

    const prisma = new PrismaClient();
    let data;

    if(id){
        data = await prisma.article.findUnique({
            where: {
                id: BigInt(id),
            },
        });
    }else if(category){
        try {
            data = await prisma.article.findMany({
                where: {
                    category_id: BigInt(category),
                },
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
    }else{
        try {
            data = await prisma.article.findMany();
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
            message: 'List Data Articles',
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
    const title = JSON.parse(formData.get('title') as string);
    const subtitle = JSON.parse(formData.get('subtitle') as string);
    const imageFile = formData.get('image') as Blob; // Ensure that the image is retrieved as a Blob
    const lead = formData.get('lead')?.toString().length! > 0 ? JSON.parse(formData.get('lead') as string) : "{\"de\":\"\",\"en\":\"\",\"fr\":\"\",\"hu\":\"\",\"ro\":\"\"}";
    const content = JSON.parse(formData.get('content') as string);
    const category = BigInt(formData.get('category') as string);
    const publish = formData.get('publish') === "true";

    // Upload Image to Supabase
    const uniqueFileName = `${Date.now()}-${Math.floor(Math.random() * 10000)}.png`; // Generate a unique filename for the image
    const { data, error } = await supabase.storage
        .from('reghin-image-bucket')
        .upload(`Articles/${uniqueFileName}`, imageFile);

    if (error) {
        return NextResponse.json({ success: false, message: "Error on image upload!!", data: error }, { status: 400 });
    }

    // Create JSON object for table row creation
    const rowData: Prisma.ArticleCreateInput = {
        title: title,
        subtitle: subtitle,
        image: process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/reghin-image-bucket/" + data.path + "?t=2024-08-31T16%3A20%3A05.858Z",  // Save the image path from Supabase
        lead: lead,
        content: content,
        published: publish,
        ArticleCategory: {
            connect: { id: category }, // Use the connect option to link an existing Category
        }
    };
    
    // Create table row
    const response = await prisma.article.create({ data: rowData });
    const createdArticle = SuperJSON.stringify(response);

    return NextResponse.json({ sucess: "true", message: "Article created sucessfully!", data: createdArticle },{ status: 200 });
}

export async function PATCH(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const prisma = new PrismaClient();
    // Initialize Supabase client
    const supabase = createClient();

    // Parse the form data (not JSON)
    const formData = await request.formData();
    const title = JSON.parse(formData.get('title') as string);
    const subtitle = JSON.parse(formData.get('subtitle') as string);
    const imageFile = formData.get('image') as Blob; // Ensure that the image is retrieved as a Blob
    const lead = formData.get('lead')?.toString().length! > 0 ? JSON.parse(formData.get('lead') as string) : "{\"de\":\"\",\"en\":\"\",\"fr\":\"\",\"hu\":\"\",\"ro\":\"\"}";
    const content = JSON.parse(formData.get('content') as string);
    const category = BigInt(formData.get('category') as string);
    const publish = formData.get('publish') === "true";

    // Upload Image to Supabase
    let rowData: Prisma.ArticleUpdateInput;

    // Create JSON object for table row creation
    if(imageFile !== null){
        const uniqueFileName = `${Date.now()}-${Math.floor(Math.random() * 10000)}.png`; // Generate a unique filename for the image
        const { data, error } = await supabase.storage
            .from('reghin-image-bucket')
            .upload(`Articles/${uniqueFileName}`, imageFile);

        if (error) {
            return NextResponse.json({ success: false, message: "Error on image upload!!", data: error }, { status: 400 });
        }

        // Create JSON object for table row creation
        rowData = {
            title: title,
            subtitle: subtitle,
            image: process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/reghin-image-bucket/" + data.path + "?t=2024-08-31T16%3A20%3A05.858Z",  // Save the image path from Supabase
            lead: lead,
            content: content,
            published: publish,
            ArticleCategory: {
                connect: { id: category }, // Use the connect option to link an existing Category
            }
        };
    }else{
        // Create JSON object for table row creation
        rowData = {
            title: title,
            subtitle: subtitle,
            lead: lead,
            content: content,
            published: publish,
            ArticleCategory: {
                connect: { id: category }, // Use the connect option to link an existing Category
            }
        };
    }

    // Create table row
    const response = await prisma.article.update({ 
        where: {
          id: BigInt(id!!),
        },
        data: rowData
    });
    const updatedArticle = SuperJSON.stringify(response);

    return NextResponse.json({ sucess: "true", message: "Article updated successfully!", data: updatedArticle },{status: 200});
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
}