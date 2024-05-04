import type { User } from '@prisma/client';
import { prisma } from "$lib/client"
import { error, fail } from '@sveltejs/kit';


interface UserInput {
    email: string
    nombre: string
    apellido: string
    segundoApellido: string
    ciudadResidencia: string
    codigoEmpresa: string 
    hashPassword: string
}

class UserController {

    async login(email:string, hashPassword: string): Promise<string | null> {
        const user = await prisma.user.findFirst({
            where: { email, hashPassword }
        })
        if (!user) { 
            fail(401, { credentials: true })
        }
        const token = crypto.randomUUID()
        const authenticatedUser = await prisma.user.update({
            where: { email: user?.email },
            data: { tokenSession: token },
        })
        return token
    }

    async register(validatedData: UserInput): Promise<string | null> {
        try {
            const newUser = await prisma.user.create({ data: {...validatedData} })
            newUser.tokenSession = crypto.randomUUID()
            return newUser.tokenSession
        } catch(err) {
            error(500, "invalid data used for user creation")
        }
    }

    async session(session: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                tokenSession: session
            }
        })
        return user
    }
}

const userController = new UserController()
export default userController