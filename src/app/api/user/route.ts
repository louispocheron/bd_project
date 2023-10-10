import prisma from "@/lib/prisma";
import * as bcrypt from 'bcrypt';

interface User {
    name: string
    password: string
    email: string
}

// CREATE NEW USER
export const POST = async (req: Request) => {
    const data = await req.json();
    const body: User = data.data;
    console.log(body)
    const userAlready = await prisma.user.findFirst({
        where: {
            email: body?.email
        }
    })

    if (userAlready) {
        return new Response(JSON.stringify({
            error: "L'addresse email est deja utilisé"
        }), { status: 403 })
    }

    if(!body.password){
        return new Response(JSON.stringify({
            error: "pas de mdp"
        }), { status: 403 })
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