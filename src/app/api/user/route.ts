import prisma from "@/lib/prisma";
import * as bcrypt from 'bcrypt';

interface User {
    name: string
    password: string
    email: string
}

export const POST = async (req: Request) => {
    const body: User = await req.json();

    const userAlready = await prisma.user.findFirst({
        where: {
            email: body.email
        }
    })

    if(userAlready) {
        return new Response(JSON.stringify({
            message: "user already exist"
        }))
    }
    
    const user = await prisma.user.create({
        data: {
            name: body?.name,
            email: body?.email,
            password: await bcrypt.hash(body.password, 10)
        }
    })

    const { password, ...result } = user;

    return new Response(JSON.stringify(result))

};