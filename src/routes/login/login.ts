import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { email_regexp } from "$lib/utils";
import { User_Model } from "$lib/db/models";
import { SECRET_JWT_KEY } from "$env/static/private";

export async function login_user(email: string, password: string) {
	const user = await get_user(email, password);

	if (user.error) {
		return { error: user.error };
	}

	const id = user.id;

	const token = jwt.sign({ id, email }, SECRET_JWT_KEY);

	return { token };
}

async function get_user(email: string, password: string) {
	if (!email) {
		return { error: "Email is required." };
	}

	if (!email.match(email_regexp)) {
		return { error: "Please enter a valid email." };
	}

	const user = await User_Model.findOne({ email });

	if (!user) {
		return { error: "Email could not be found." };
	}

	if (!password) {
		return { error: "Password is required." };
	}

	const password_is_correct = await bcrypt.compare(
		password,
		user.password
	);

	if (!password_is_correct) {
		return { error: "Password is not correct." };
	}

	return { id: user._id.toString() };
}
