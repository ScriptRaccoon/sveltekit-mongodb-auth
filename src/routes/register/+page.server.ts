import { register_user } from "$lib/server/register";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const email = (data.get("email") as string)
			?.toLowerCase()
			?.trim();
		const password = data.get("password") as string;
		const name = (data.get("name") as string)?.trim();

		const user = { email, name };

		const { error } = await register_user(email, password, name);

		if (error) {
			return fail(400, { user, error });
		} else {
			const message = "Registration successful! You can now login.";
			return { user, message };
		}
	}
};
