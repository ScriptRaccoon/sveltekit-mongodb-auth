import { invalidate } from "$app/navigation";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	event.cookies.delete("auth-token");
	event.locals.user = null;
};
