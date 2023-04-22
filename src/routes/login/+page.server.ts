import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { login_user } from "./login";
import { cookie_options } from "$lib/utils";

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const email = (data.get("email") as string).toLowerCase();
		const password = data.get("password") as string;

		const user_data = await login_user(email, password);

		if ("error" in user_data) {
			return fail(500, { email, error: user_data.error });
		} else {
			const { token, user } = user_data;

			cookies.set("auth-token", token, cookie_options);
			cookies.set("email", user.email, cookie_options);
			cookies.set("name", user.name, cookie_options);

			return { email, user };
		}
	}
};
