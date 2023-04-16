import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async (event) => {
	event.cookies.delete("auth-token");
	event.locals.user = null;
	throw redirect(301, "/");
};
