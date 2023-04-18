<script>
	import { browser } from "$app/environment";

	let name = "";

	if (browser) {
		name = localStorage.getItem("name") ?? "";
	}
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<h2>Welcome {name}</h2>

More to come ...
