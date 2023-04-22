import type { Cookies } from "@sveltejs/kit";
import { User_Model } from "./models";
import { authenticate } from "$lib/auth";

export async function change_name(
	cookies: Cookies,
	name: string
): Promise<{ error: string } | { name: string }> {
	const auth = authenticate(cookies);

	if (!auth) {
		return { error: "You are not authorized." };
	}

	const { id } = auth;

	if (!name || name.length <= 1) {
		return {
			error: "Name has to be at least 2 characters."
		};
	}

	const user = await User_Model.findOne({ _id: id });

	if (!user) {
		return { error: "User could not be found" };
	}

	user.name = name;

	try {
		await user.save();
		return { name };
	} catch (err) {
		return { error: err as string };
	}
}
