import type { User } from '@prisma/client';
import { prisma } from "$lib/client"

class UserController {
    async findBySession(session: string): Promise<User | null> {
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