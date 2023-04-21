<script>
	import { user } from "$lib/stores";
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<p>Welcome, {$user?.name}!</p>

<img
	src="https://picsum.photos/id/177/800/600"
	alt="hiker wearing a backpack looking over mountains in the morning"
/>

<style>
	img {
		display: block;
		max-width: 100%;
		margin-top: 1rem;
	}
</style>
