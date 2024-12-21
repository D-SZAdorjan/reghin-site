"use server"

export interface formDataType {
    first_name: string,
    last_name: string,
    lead: string,
    image: File | null,
    description: string,
    priority: number,
    publish: boolean
}

export async function addNotablePersonAction(first_name: string, last_name: string, lead: string, description: string, priority: number, publish: boolean) {
    // Further processing (e.g., saving to a database, etc.)
    console.log("Server-side data:", {first_name, last_name, description, priority, publish});

    return {
        success: true,
        message: "Form submitted successfully!",
    };
}