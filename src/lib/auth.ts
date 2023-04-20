import { SECRET_JWT_KEY } from "$env/static/private";
import jwt from "jsonwebtoken";
import type { Cookies } from "@sveltejs/kit";

export function authenticate(cookies: Cookies) {
	let token = cookies.get("auth-token");
	if (!token) return undefined;
	try {
		const user_data = jwt.verify(token, SECRET_JWT_KEY);
		if (!user_data) throw "";
		return user_data as { id: string };
	} catch {
		return undefined;
	}
}
