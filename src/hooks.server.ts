import { SECRET_JWT_KEY } from "$env/static/private";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith("/dashboard")) {
		let token = event.cookies.get("auth-token");

		if (!token) {
			throw redirect(307, "/login");
		}

		try {
			const user = jwt.verify(token, SECRET_JWT_KEY);
			//@ts-ignore
			event.locals.user = user;
		} catch (e) {
			console.log(e);
			throw redirect(307, "/login");
		}
	}

	const response = await resolve(event);
	return response;
};
