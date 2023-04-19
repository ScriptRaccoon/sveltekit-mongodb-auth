declare global {
	type user = {
		id: string;
		email: string;
		name: string;
	};

	namespace App {
		interface Locals {
			auth?: { id: string };
		}
	}
}

export {};
