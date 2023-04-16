import { authenticate } from "$lib/db/auth";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = authenticate(event.cookies);

	if (event.url.pathname.startsWith("/dashboard")) {
		if (!event.locals.user) {
			throw redirect(307, "/login");
		}
	}

	const response = await resolve(event);
	return response;
};
