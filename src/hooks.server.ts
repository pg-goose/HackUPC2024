import userController from '$lib/user-controller'
import { redirect } from '@sveltejs/kit';

const unProtectedRoutes = ['/login', '/register'];

export async function handle({ event, resolve }) {
    if (!unProtectedRoutes.includes(event.url.pathname)) {
        // redirect to /login
        redirect(302, '/login')
    }
    const session = event.cookies.get("session")
    if (session === undefined) {
        return resolve(event)
    }
    const user = await userController.session(session)
    if (user !== null) {
        event.locals.user = user
        event.cookies.set("session", user.tokenSession!, {
            sameSite: true,
            maxAge: 9999,
            path: '/'
        })
    }
	return resolve(event);
};
