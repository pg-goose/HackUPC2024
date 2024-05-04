import { error } from '@sveltejs/kit';
import type { Action, Actions } from './$types';
import { z } from "zod";
import userController from '$lib/user-controller';


const LoginFormSchema = z.object({
    email: z.string(),
    hashPassword: z.string()
});

const login: Action = async ({request, cookies}) => {
    const data = await request.formData()
    let validated = LoginFormSchema.safeParse(data);
    if (!validated.success) {
        error(400, "Invalid form data")
    }
    const token = await userController.login(validated.data)
    if (token === null) {
        error(401, "Wrong user credentials")
    }
    cookies.set(
        "session",
        token,
        { path: '/' }
    )
}
