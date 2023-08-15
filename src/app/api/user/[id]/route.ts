import prisma from "@/lib/prisma";


export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const user = await prisma.user.findFirst({
        where: {
            id: params.id
        }
    })

    if (user) {
        return new Response(JSON.stringify(user))
    } else {
        return new Response(JSON.stringify(null))
    }
};
