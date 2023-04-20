<script>
	import { goto } from "$app/navigation";

	async function logout() {
		const response = await fetch("/logout");
		if (response.status == 200) {
			goto("/");
		}
	}
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

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
