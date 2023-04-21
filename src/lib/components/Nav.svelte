<script lang="ts">
	import { page } from "$app/stores";

	export let logged_in = false;

	$: path = $page.url.pathname;

	type link = {
		path: string;
		text: string;
		protected: boolean;
	};

	const links: link[] = [
		{
			path: "/",
			text: "Home",
			protected: false
		},
		{
			path: "/dashboard",
			text: "Dashboard",
			protected: true
		},
		{
			path: "/account",
			text: "Account",
			protected: true
		},
		{
			path: "/register",
			text: "Register",
			protected: false
		},
		{
			path: "/login",
			text: "Login",
			protected: false
		}
	];
</script>

<nav>
	<ul>
		{#each links as link}
			{#if link.path === "/" || logged_in == link.protected}
				<a
					href={link.path}
					aria-current={path == link.path ? "page" : "false"}
					>{link.text}</a
				>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding-block: 1.5rem;
		background-color: #222227;
		color: white;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}
</style>
