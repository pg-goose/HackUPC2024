import tripController from "$lib/viaje-controller";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({params}) => {
    const result = await tripController.trip(Number(params.id!))
    if (result === null) {
        error(404, 'Trip not found')
    }
    return json(result);
};