<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import "$lib/css/app.css";
	import type { LayoutData } from "./$types";
	export let data: LayoutData;
</script>

<Nav logged_in={!!data.name.length && !!data.email} />

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
