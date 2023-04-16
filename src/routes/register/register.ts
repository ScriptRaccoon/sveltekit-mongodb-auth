import bcrypt from "bcrypt";
import { User_Model } from "$lib/db/models";

export async function register_user(email: string, password: string) {
	if (!email) {
		return { error: "Email is required." };
	}
	if (!password) {
		return { error: "Password is required." };
	}

	const salt_rounds = 10;
	const hashed_password = await bcrypt.hash(password, salt_rounds);

	const user = new User_Model({
		email,
		password: hashed_password
	});
	try {
		const saved_user = await user.save();
		return saved_user;
	} catch (error) {
		return { error: (error as Error).message };
	}
}
