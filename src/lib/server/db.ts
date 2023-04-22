import mongoose from "mongoose";

import {
	SECRET_USER_PASSWORD,
	SECRET_USER_NAME
} from "$env/static/private";

const database_uri = `mongodb+srv://${SECRET_USER_NAME}:${SECRET_USER_PASSWORD}@sveltekit-cluster.zqvqepe.mongodb.net/?retryWrites=true&w=majority`;

export async function connect_to_db() {
	try {
		return await mongoose.connect(database_uri);
	} catch (e) {
		console.log(e);
	}
}
