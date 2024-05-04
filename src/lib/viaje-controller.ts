import type { Viaje } from '@prisma/client';
import prisma from "$lib/client"
import { error, fail } from '@sveltejs/kit';

interface ViajeInput {
    destino: string
    fechaInicio: string
    fechaFin: string
}

class ViajeController {
    async createViaje(validatedData: ViajeInput, userId: any): Promise<Viaje | null> {
        try {
            const newViaje = await prisma.viaje.create({ data: {
                destino: validatedData.destino,
                fechaInicio: validatedData.fechaInicio + " 00:00:00",
                fechaFin: validatedData.fechaFin + " 00:00:00",
                user:userId
            }})
            return newViaje
        } catch(err) {
            error(500, "invalid data used for viaje creation")
        }
    }
}

const viajeController = new ViajeController()
export default viajeController