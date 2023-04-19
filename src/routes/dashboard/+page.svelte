<script>
	import { browser } from "$app/environment";
	import { goto, invalidate } from "$app/navigation";

	let name = "";

	if (browser) {
		name = localStorage.getItem("name") ?? "";
	}

	async function logout() {
		const response = await fetch("/logout");
		if (response.status == 200) {
			invalidate("login_status");
			goto("/");
		}
	}
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<h2>Welcome {name}</h2>

More to come ...

<section aria-label="logout">
	<div>
		<button on:click={logout}>Logout</button>
	</div>
</section>

<style>
	section {
		margin-top: 1rem;
	}
</style>
