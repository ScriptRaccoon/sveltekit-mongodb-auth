import type { Cookies } from "@sveltejs/kit";
import { User_Model } from "./models";
import { authenticate } from "$lib/auth";
import { verify_email } from "../../routes/register/register";

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
		return { error: err as string };
	}
}
