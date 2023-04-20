import { authenticate } from "$lib/db/auth";
import { change_name } from "$lib/db/name";
import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	name: async (event) => {
		const form_data = await event.request.formData();
		const name = form_data.get("name") as string;

		if (!name || name.length <= 1) {
			return fail(400, {
				error: "Name has to be at least 2 characters."
			});
		}

		const auth = authenticate(event.cookies);

		if (!auth) {
			return fail(401, { error: "You are not authorized." });
		}

		const { id } = auth;
		const update = await change_name(id, name);

		if ("error" in update) {
			return fail(500, { error: update.error });
		}

		return { name: name, message: `Your new name is ${name}.` };
	}
};
