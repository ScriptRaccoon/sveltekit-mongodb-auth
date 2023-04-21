<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>

<form method="POST" autocomplete="off">
	<div>
		<label for="email_input">Email</label>
		<input
			type="email"
			id="email_input"
			name="email"
			value={form?.email ?? ""}
		/>
	</div>
	<div>
		<label for="password_input">Password</label>
		<input type="password" id="password_input" name="password" />
	</div>
	<button>Login</button>
</form>

{#if form?.user}
	<div class="success">
		Welcome {form.user.name}! You can now open the dashboard.
	</div>
{/if}

{#if form?.error}
	<div class="error">
		{form.error}
	</div>
{/if}
