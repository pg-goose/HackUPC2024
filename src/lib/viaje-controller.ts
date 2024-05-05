import type { Viaje } from '@prisma/client';
import prisma from "$lib/client"
import { error } from '@sveltejs/kit';

interface TripInput {
    destination: string
    startDate: string
    endDate: string
}


class TripController {

    async trip(id: number): Promise<Viaje | null> {
        return prisma.viaje.findUnique({
            where: { id }
        })
    }
    async trips(): Promise<Viaje[] | null> {
        return prisma.viaje.findMany()
    }
    async createTrip(validatedData: TripInput, userId: any): Promise<Viaje | null> {
        try {
            const newViaje = await prisma.viaje.create({ data: {
                destino: validatedData.destination,
                fechaInicio: validatedData.startDate + "T00:00:00Z",
                fechaFin: validatedData.endDate + "T00:00:00Z",
                user:{ connect: { id : userId }  } } })
            return newViaje
        } catch(err) {
            console.log(err)
            error(500, "invalid data used for viaje creation")
        }
    }
}

const tripController = new TripController()
export default tripController