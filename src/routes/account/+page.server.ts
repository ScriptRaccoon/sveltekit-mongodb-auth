import { authenticate } from "$lib/auth";
import { change_name } from "$lib/db/name";
import { cookie_options } from "$lib/utils";
import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	name: async (event) => {
		const form_data = await event.request.formData();
		const name = form_data.get("name") as string;

		const update = await change_name(event.cookies, name);

		if ("error" in update) {
			return fail(400, { error: update.error });
		}

		event.cookies.set("name", name, cookie_options);

		const message = `Your new name is ${name}.`;

		return { name, message };
	}
};
