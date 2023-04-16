import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	//@ts-ignore
	const user = event.locals.user;
	if (user) {
		return { user };
	}
};
