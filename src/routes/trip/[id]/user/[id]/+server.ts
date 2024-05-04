import userController from "$lib/user-controller";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({url}) => {
    const city = url.searchParams.get('city')
    if (city === null) {
        return json({});
    }
    userController.userByCity(city)
    return new Response();
};