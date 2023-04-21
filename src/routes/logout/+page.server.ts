import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	default: async (event) => {
		event.cookies.delete("auth-token");
		event.cookies.delete("email");
		event.cookies.delete("name");
		throw redirect(301, "/");
	}
};
