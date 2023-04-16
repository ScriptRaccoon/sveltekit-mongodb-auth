declare global {
	type user = {
		id: string;
		email: string;
	};

	namespace App {
		interface Locals {
			user: user | null;
		}
	}
}

export {};
