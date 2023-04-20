<script>
	import { user } from "$lib/stores";
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<p>Welcome, {$user?.name}!</p>

<img
	src="https://unsplash.it/700/400"
	alt="random placeholder from unsplash"
/>

<style>
	img {
		display: block;
		max-width: 100%;
		margin-top: 1rem;
	}
</style>
