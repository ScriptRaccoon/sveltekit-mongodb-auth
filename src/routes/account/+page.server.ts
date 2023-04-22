import { change_email } from "$lib/server/change_email";
import { change_name } from "$lib/server/change_name";
import { cookie_options } from "$lib/utils";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	name: async (event) => {
		const form_data = await event.request.formData();
		const name = (form_data.get("name") as string).trim();

		const update = await change_name(event.cookies, name);

		if ("error" in update) {
			return fail(400, { error: update.error });
		}

		event.cookies.set("name", name, cookie_options);

		const message = `Your new name is ${name}.`;

		return { name, message };
	},

	email: async (event) => {
		const form_data = await event.request.formData();
		const email = (form_data.get("email") as string)
			.toLowerCase()
			.trim();

		const update = await change_email(event.cookies, email);

		if ("error" in update) {
			return fail(400, { error: update.error });
		}

		event.cookies.set("email", email, cookie_options);

		const message = `Your new email is ${email}.`;

		return { email, message };
	}
};
