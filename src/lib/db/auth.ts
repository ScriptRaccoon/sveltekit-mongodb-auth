import { SECRET_JWT_KEY } from "$env/static/private";
import jwt from "jsonwebtoken";
import type { Cookies } from "@sveltejs/kit";

export function authenticate(cookies: Cookies) {
	let token = cookies.get("auth-token");
	if (!token) return undefined;
	try {
		const user = jwt.verify(token, SECRET_JWT_KEY);
		if (!user) throw "";
		return user as user;
	} catch {
		return undefined;
	}
}
