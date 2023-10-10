import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";


export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const accessToken = req.headers.get("authorization");
    if (!accessToken || !verifyJwt(accessToken)) {
        return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 })
    }
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
