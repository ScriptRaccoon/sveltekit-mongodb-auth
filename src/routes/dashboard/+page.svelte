<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<p>This is your dashboard, {data.name}.</p>

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
