import type { Viaje } from '@prisma/client';
import prisma from "$lib/client"
import { error, fail } from '@sveltejs/kit';

interface ViajeInput {
    destino: string
    fechaInicio: string
    fechaFin: string
}


class ViajeController {

    async viaje(id: number): Promise<Viaje | null> {
        return prisma.viaje.findUnique({
            where: { id }
        })
    }
    async viajes(): Promise<Viaje[] | null> {
        return prisma.viaje.findMany()
    }
    async createViaje(validatedData: ViajeInput, userId: any): Promise<Viaje | null> {
        try {
            const newViaje = await prisma.viaje.create({ data: {
                destino: validatedData.destino,
                fechaInicio: validatedData.fechaInicio + "T00:00:00Z",
                fechaFin: validatedData.fechaFin + "T00:00:00Z",
                user:{ connect: { id : userId }  } } })
            return newViaje
        } catch(err) {
            console.log(err)
            error(500, "invalid data used for viaje creation")
        }
    }
}

const viajeController = new ViajeController()
export default viajeController