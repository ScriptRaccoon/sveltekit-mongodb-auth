import { SECRET_JWT_KEY } from "$env/static/private";
import jwt from "jsonwebtoken";
import type { Cookies } from "@sveltejs/kit";

export function authenticate(cookies: Cookies) {
	let token = cookies.get("auth-token");
	if (!token) return null;
	try {
		const user = jwt.verify(token, SECRET_JWT_KEY) as user;
		return user;
	} catch {
		return null;
	}
}
