import viajeController from "$lib/viaje-controller";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import { z } from "zod";

const ViajeSchema = z.object({
    destino: z.string(),
    fechaInicio: z.string(),
    fechaFin: z.string()
  });

export const POST: RequestHandler = async ({request, locals}) => {
    const validated = ViajeSchema.safeParse(await request.json())
    console.log(locals.user.id)
    if (!validated.success) {
        console.log(validated.error)
        error(400, "invalid form data: " + validated.error)
    }

    const newViaje = await viajeController.createViaje(validated.data, locals.user.id)
    if (newViaje === null) {
        error(500, "Error creating viaje")
    }
    return json(newViaje); // Update the return statement to return a JSON response
};