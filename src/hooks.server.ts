import { authenticate } from "$lib/db/auth";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = authenticate(event.cookies);

	const is_protected = event.url.pathname.startsWith("/dashboard");
	const logged_out = !event.locals.user;

	if (is_protected && logged_out) throw redirect(307, "/login");

	const response = await resolve(event);
	return response;
};
