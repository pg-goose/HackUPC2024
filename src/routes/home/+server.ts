import { error, redirect } from '@sveltejs/kit'
import viajeController from '$lib/viaje-controller'
import { z } from 'zod';
import type { RequestHandler } from './$types';

const ViajeSchema = z.object({
    destino: z.string(),
    fechaInicio: z.string(),
    fechaFin: z.string()
  });

export const POST: RequestHandler = async ({request, locals}) => {
    let validated = ViajeSchema.safeParse(request.json())
    if (!validated.success) {
        error(400, "invalid form data: " + validated.error)
    }
    const newViaje = await viajeController.createViaje(validated.data, locals.user.id)
    return new Response();
};