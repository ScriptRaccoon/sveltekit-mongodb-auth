import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	default: async (event) => {
		console.log("logout action is running");
		event.cookies.delete("auth-token");
		throw redirect(301, "/");
	}
};
