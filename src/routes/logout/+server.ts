import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (event) => {
	event.cookies.delete("auth-token");
	return new Response("");
};
