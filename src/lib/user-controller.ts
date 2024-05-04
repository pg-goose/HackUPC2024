import type { User } from '@prisma/client';
import prisma from "$lib/client"
import { error, fail } from '@sveltejs/kit';


interface UserInput {
    email: string
    nombre: string
    apellido: string
    segundoApellido: string | null
    ciudadResidencia: string
    codigoEmpresa: string 
    hashPassword: string
}

interface LoginInput {
    email: string
    hashPassword: string
}

class UserController {

    async login(input: LoginInput): Promise<string | null> {
        const user = await prisma.user.findFirst({
            where: { ...input }
        })
        if (!user) { 
            fail(401, { credentials: true })
        }
        const token = crypto.randomUUID()
        const authenticatedUser = await prisma.user.update({
            where: { email: input.email },
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
                tokenSession: session,
            }
        })
        return user
    }

    async userByCity(value: string): Promise<User[]|null> {
        const users = prisma.user.findMany({
            where: {
                ciudadResidencia: value
            },
            orderBy: { // ordenamos por NUMERO de preferencias
                preferencias: {
                    _count: 'desc'
                }
            }
        })
        return users
    }
}

const userController = new UserController()
export default userController