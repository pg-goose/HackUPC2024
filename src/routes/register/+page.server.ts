import { error, redirect } from '@sveltejs/kit'
import type { Action, Actions } from './$types'

import { z } from 'zod';
import userController from '$lib/user-controller';

const RegisterFormSchema = z.object({
    email: z.string(),
    nombre: z.string(),
    apellido: z.string(),
    segundoApellido: z.string(),
    ciudadResidencia: z.string(),
    codigoEmpresa: z.string(),
    hashPassword: z.string(),
  });


const register: Action = async ({ request }) => {
    const data = await request.formData()
    let validated = RegisterFormSchema.safeParse(data)
    if (!validated.success) {
        error(400, "invalid form data: " + validated.error)
    }
    const token = await userController.register(validated.data)
    if (token === null) {
        error(400, "This user already exists")
    }
    redirect(303, '/login')
}

export const actions: Actions = { register }