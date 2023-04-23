<script lang="ts">
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
			<li>
				<a href={link.path}>
					{link.text}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding-block: 1.25rem;
		background-color: var(--nav-color);
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.25rem;
	}
</style>
