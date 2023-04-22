import type { Cookies } from "@sveltejs/kit";
import { User_Model } from "./models";
import { authenticate } from "$lib/server/authenticate";
import { verify_name } from "./register";

export async function change_name(
	cookies: Cookies,
	name: string
): Promise<{ error: string } | { name: string }> {
	const auth = authenticate(cookies);

	if (!auth) {
		return { error: "You are not authorized." };
	}

	const { id } = auth;

	const name_error = verify_name(name);

	if (name_error) {
		return { error: name_error };
	}

	const user = await User_Model.findOne({ _id: id });

	if (!user) {
		return { error: "User could not be found" };
	}

	if (user.name == name) {
		return { error: "You already have this name." };
	}

	user.name = name;

	try {
		await user.save();
		return { name };
	} catch (err) {
		return { error: err as string };
	}
}
