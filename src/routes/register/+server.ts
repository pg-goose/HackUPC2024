import { error, type RequestHandler } from '@sveltejs/kit';

import userController from '$lib/user-controller';
import { z } from 'zod';

const RegisterFormSchema = z.object({
    email: z.string().email(),
    nombre: z.string(),
    apellido: z.string(),
    segundoApellido: z.string().nullable(),
    ciudadResidencia: z.string(),
    codigoEmpresa: z.string(),
    hashPassword: z.string(),
});

export const POST: RequestHandler = async ({request, cookies}) => {
    let validated = RegisterFormSchema.safeParse(await request.json())
    if (!validated.success) {
        error(400, "invalid form data: " + validated.error)
    }
    const token = await userController.register(validated.data)
    if (token === null) {
        error(400, "This user already exists")
    }
    cookies.set(
        "session",
        token,
        { path: '/' }
    )
    return new Response(null, {status: 201});
};