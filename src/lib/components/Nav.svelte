<script lang="ts">
	export let auth: { id: string } | undefined;
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>

		{#if auth}
			<li>
				<a href="/dashboard">Dashboard</a>
			</li>
		{:else}
			<li>
				<a href="/register">Register</a>
			</li>
			<li>
				<a href="/login">Login</a>
			</li>
		{/if}
	</ul>
</nav>

<style>
	nav {
		padding: 1rem;
		background-color: var(--primary-color);
		color: white;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
</style>
