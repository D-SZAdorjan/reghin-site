import { createClient } from "@/lib/supabase/server"

export async function uploadImage(file: File, path: string = ""){
    const supabase = createClient();

    const {data, error} = await supabase.storage.from(process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET as string).upload(path, file);
    if(error){
        throw new Error(error.message, error);
    }else{
        return data.fullPath;
    }
}