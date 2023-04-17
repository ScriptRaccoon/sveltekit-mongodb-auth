<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

	onMount(() => {
		invalidate("login_status");
	});
</script>

<svelte:head>
	<title>Logout</title>
</svelte:head>

<h1>Logout</h1>

You have logged out successfully. See you around!
