<script lang="ts">
	import type { LayoutData } from "./$types";
	import Nav from "$lib/components/Nav.svelte";
	import "$lib/css/app.css";
	export let data: LayoutData;
</script>

<Nav user={data.user} />

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
