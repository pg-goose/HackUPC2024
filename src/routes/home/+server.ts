import tripController from "$lib/viaje-controller";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import { z } from "zod";

const TripSchema = z.object({
    destination: z.string(),
    startDate: z.string(),
    endDate: z.string()
  });

export const POST: RequestHandler = async ({request, locals}) => {
    const validated = TripSchema.safeParse(await request.json())
    if (!validated.success) {
        console.log(validated.error)
        error(400, "invalid form data: " + validated.error)
    }
    const newViaje = await tripController.createTrip(validated.data, locals.user.id)
    if (newViaje === null) {
        error(500, "Error creating viaje")
    }
    return json(newViaje); // Update the return statement to return a JSON response
};