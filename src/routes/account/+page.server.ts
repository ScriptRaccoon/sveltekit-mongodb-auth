import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { cookie_options } from "$lib/server/utils";
import { change_email, change_name } from "$lib/server/account";

export const actions: Actions = {
	name: async (event) => {
		const data = await event.request.formData();
		const name = (data.get("name") as string)?.trim();

		const update = await change_name(event.cookies, name);

		if ("error" in update) {
			return fail(400, { error: update.error });
		}

		event.cookies.set("name", name, cookie_options);

		const message = `Your new name is ${name}.`;

		return { name, message };
	},

	email: async (event) => {
		const data = await event.request.formData();
		const email = (data.get("email") as string)
			?.toLowerCase()
			?.trim();

		const update = await change_email(event.cookies, email);

		if ("error" in update) {
			return fail(400, { error: update.error });
		}

		event.cookies.set("email", email, cookie_options);

		const message = `Your new email is ${email}.`;

		return { email, message };
	}
};
