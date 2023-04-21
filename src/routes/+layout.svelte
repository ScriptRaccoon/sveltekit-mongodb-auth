<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import "$lib/css/app.css";
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		max-width: 30rem;
		margin-inline: auto;
		padding-inline: 1rem;
	}
</style>
