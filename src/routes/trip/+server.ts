import viajeController from "$lib/viaje-controller";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({params}) => {
    const viajes = await viajeController.viajes()
    if (viajes === null) {
        error(500, 'Something went wrong')
    }
    return json(viajes);
};