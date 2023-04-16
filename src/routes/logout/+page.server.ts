import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	event.cookies.delete("auth-token");
	event.locals.user = null;
	throw redirect(301, "/");
};