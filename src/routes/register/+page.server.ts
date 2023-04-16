import { register_user } from "./register";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = (data.get("email") as string).toLowerCase();
		const password = data.get("password") as string;

		const user = await register_user(email, password);
		if ("error_list" in user) {
			return fail(500, { email, errors: user.error_list });
		} else {
			const message = "Registration successful! You can now login.";
			return { email, message };
		}
	}
};
