<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>

<form method="POST" autocomplete="off" use:enhance>
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
	<p class="success">
		Welcome {form.user.name}! You can now open the dashboard.
	</p>
{/if}

{#if form?.error}
	<p class="error">
		{form.error}
	</p>
{/if}
