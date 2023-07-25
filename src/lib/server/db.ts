import { SECRET_MONGODB_URI } from "$env/static/private";
import mongoose from "mongoose";

export async function connect_to_db() {
	try {
		return await mongoose.connect(SECRET_MONGODB_URI);
	} catch (err) {
		console.log(err);
	}
}
