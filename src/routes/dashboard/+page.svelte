<script>
	export let data;
</script>

<h1>Dashboard</h1>

{#if data.user}
	Welcome! You are logged in via {data.user.email}.
{/if}
