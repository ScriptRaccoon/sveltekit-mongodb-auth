import type { Cookies } from "@sveltejs/kit";
import { User_Model } from "./models";
import { authenticate } from "./authenticate";
import { verify_name, verify_email } from "./register";

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

	if (user.name === name) {
		return { error: "You already have this name." };
	}

	user.name = name;

	try {
		await user.save();
		return { name };
	} catch (err) {
		return { error: err?.toString() as string };
	}
}

export async function change_email(
	cookies: Cookies,
	email: string
): Promise<{ error: string } | { email: string }> {
	const auth = authenticate(cookies);

	if (!auth) {
		return { error: "You are not authorized." };
	}

	const { id } = auth;

	const email_error = await verify_email(email);

	if (email_error) {
		return { error: email_error };
	}

	const user = await User_Model.findOne({ _id: id });

	if (!user) {
		return { error: "User could not find found." };
	}

	user.email = email;

	try {
		await user.save();
		return { email };
	} catch (err) {
		return { error: err?.toString() as string };
	}
}
