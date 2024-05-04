import { error } from '@sveltejs/kit';
import type { Action, Actions } from './$types';
import userController from '$lib/user-controller';




const login: Action = async ({request, cookies}) => {
    const data = await request.formData()
    console.log(data)
    
}

export const actions: Actions = { login }
