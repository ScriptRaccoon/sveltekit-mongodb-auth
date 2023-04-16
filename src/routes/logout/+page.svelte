<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

	onMount(() => {
		invalidate("login_status");
	});
</script>

<h1>Logout successful</h1>

Bye!
