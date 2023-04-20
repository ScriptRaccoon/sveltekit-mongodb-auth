import { authenticate } from "$lib/auth";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const is_protected =
		event.url.pathname.startsWith("/dashboard") ||
		event.url.pathname.startsWith("/account");
	const logged_out = !authenticate(event.cookies);

	if (is_protected && logged_out) throw redirect(307, "/login");

	const response = await resolve(event);
	return response;
};
