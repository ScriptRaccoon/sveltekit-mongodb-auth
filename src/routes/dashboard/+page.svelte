<script>
	export let data;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

{#if data.user}
	Welcome! You are logged in via {data.user.email}.
{/if}
