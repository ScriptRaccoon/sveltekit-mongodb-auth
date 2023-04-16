import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async (event) => {
	event.cookies.delete("auth-token");
	//@ts-ignore
	delete event.locals.user;
	throw redirect(300, "/");
};
