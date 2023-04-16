import { login_user } from "./login";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get("email") as string;
		const password = data.get("password") as string;

		const user = await login_user(email, password);
		if ("error" in user) {
			return fail(500, { email, error: user.error });
		} else {
			const message = "Login successful!";
			return { email, message };
		}
	}
};
