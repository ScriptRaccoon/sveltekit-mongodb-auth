import { browser } from "$app/environment";
import { writable } from "svelte/store";

let saved_user = null;

if (browser && localStorage.getItem("user")) {
	saved_user = JSON.parse(localStorage.getItem("user")!);
}

export const user = writable<user | null>(saved_user);

if (browser)
	user.subscribe(($user) => {
		localStorage.setItem("user", JSON.stringify($user));
	});
