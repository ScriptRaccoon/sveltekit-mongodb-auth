import bcrypt from "bcrypt";
import { User_Model } from "$lib/db/models";
import { email_regexp } from "$lib/utils";

export async function register_user(email: string, password: string) {
	const email_error = await verify_email(email);

	if (email_error) {
		return { error: email_error };
	}

	const password_error = verify_password(password);

	if (password_error) {
		return { error: password_error };
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
	} catch (err) {
		console.log(err);
		return { error: "Registration failed." };
	}
}

async function verify_email(email: string): Promise<string> {
	if (!email) {
		return "Email is required.";
	}

	if (!email.match(email_regexp)) {
		return "Please enter a valid email.";
	}

	const previous_user = await User_Model.findOne({ email });

	if (previous_user) {
		return "There is already an account with this email.";
	}

	return "";
}

function verify_password(password: string): string {
	if (!password) {
		return "Password is required.";
	}

	if (password.length < 8) {
		return "Password must be at least 8 characters.";
	}

	return "";
}
