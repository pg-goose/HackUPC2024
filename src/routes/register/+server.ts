import { error, type RequestHandler } from '@sveltejs/kit';

import userController from '$lib/user-controller';
import { z } from 'zod';

const RegisterFormSchema = z.object({
    companyKey: z.string(),
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    secondLastName: z.string().nullable(),
    city: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
    isCoquette: z.boolean(),
    selectedHobbies: z.array(z.string()),
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