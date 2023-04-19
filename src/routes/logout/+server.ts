import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (event) => {
	event.cookies.delete("auth-token");
	event.locals.user = undefined;
	return new Response("");
};
