import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async (event) => {
		event.cookies.delete("auth-token");
		event.cookies.delete("email");
		event.cookies.delete("name");
		throw redirect(301, "/");
	}
};
