import userController from "$lib/user-controller";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import { z } from "zod";

const LoginFormSchema = z.object({
    email: z.string().email('Invalid email address'),
    hashPassword: z.string()
});

export const POST: RequestHandler = async ({request, cookies}) => {
    const validated = LoginFormSchema.safeParse(await request.json())
    if (!validated.success) {
        error(400, "Invalid login data: " + validated.error)
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
    return json({"session":token});
};