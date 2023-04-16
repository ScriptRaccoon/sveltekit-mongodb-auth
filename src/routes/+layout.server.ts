import type { LayoutServerLoad } from "./$types";
import { connect_to_db } from "$lib/db/connect";
import { error } from "@sveltejs/kit";

export const load: LayoutServerLoad = async () => {
	const connection = await connect_to_db();
	if (!connection) {
		throw error(500, "Database connection failed");
	}
};
