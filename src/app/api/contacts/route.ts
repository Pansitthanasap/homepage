import prisma from "@/lib/prisma";

export async function GET() {
    const contacts =
        (await prisma.contactMessage.findMany()).map((item) => ({
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            phone: item.phone,
            title: item.topic,
            description: item.description,
        }))
        ;
    return Response.json(contacts);
}