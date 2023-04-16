import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User_Model } from "$lib/db/models";
import { SECRET_JWT_KEY } from "$env/static/private";

export async function login_user(email: string, password: string) {
	if (!email) {
		return { error: "Email is required." };
	}
	if (!password) {
		return { error: "Password is required." };
	}

	const user = await User_Model.findOne({ email });

	if (!user) {
		return { error: "Email could not be found." };
	}

	const password_is_correct = await bcrypt.compare(
		password,
		user.password
	);

	if (!password_is_correct) {
		return { error: "Password is not correct." };
	}

	const id = user._id.toString();

	const token = jwt.sign({ id, email }, SECRET_JWT_KEY);

	return { token };
}
