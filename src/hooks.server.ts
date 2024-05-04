import userController from '$lib/user-controller'

const unProtectedRoutes = ['/', '/login', '/register'];

export async function handle({ event, resolve }) {
    if (!unProtectedRoutes.includes(event.url.pathname)) {
        return resolve(event)
    }
    const session = event.cookies.get("session")
    if (session === undefined) {
        return resolve(event)
    }
    const user = await userController.findBySession(session)
    if (user !== null) {
        event.locals.user = user;
    }
	return resolve(event);
};
