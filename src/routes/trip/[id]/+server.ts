import viajeController from "$lib/viaje-controller";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({params}) => {
    const result = await viajeController.viaje(Number(params.id!))
    if (result === null) {
        error(404, 'Trip not found')
    }
    return json(result);
};