import jsonPreferences from './fixtures/preferencesJson.json' with { type: 'json'}
import jsonUsers from './fixtures/usersJson.json' with { type: 'json'}
import jsonEmpresas from './fixtures/empresasJson.json' with { type: 'json'}
import jsonViajes from './fixtures/viajesJson.json' with { type: 'json'}
import prisma from '$lib/client'; // Import the prisma object from the appropriate module
import { User } from '@prisma/client';

export const seed = async () => {
  for (var empresa of jsonEmpresas) {
    const eee = await prisma.empresa.upsert({
      where: { id: empresa.id },
      update: {},
      create: empresa,
    })
    console.log(eee)
  }
  var usersPref:User[] = []
  for (var user of jsonUsers) {
    const eee = await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: user,
    })
    console.log(eee)
    usersPref.push(eee)
  }
  
  for (var preference of jsonPreferences) {
    const eee = await prisma.preferencia.upsert({
      where: { id: preference.id },
      update: {},
      create: preference,
    })
    if (eee.id == 1) {
      continue
    }
    for (var uspr of usersPref) {
      await prisma.user.update({
        where: { id: uspr.id },
        data: {
          preferencias: {
            connect: {
              id: eee.id
            }
          }
        }
      })
    }
    console.log(eee)
  }

  for (var viaje of jsonViajes) {
    const eee = await prisma.viaje.upsert({
      where: { id: viaje.id },
      update: {},
      create: viaje,
    })
  }


}

await seed() 