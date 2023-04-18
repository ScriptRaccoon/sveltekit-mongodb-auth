<script lang="ts">
	import { onMount } from "svelte";
	import type { ActionData } from "./$types";
	import { invalidate } from "$app/navigation";
	import { browser } from "$app/environment";

	export let form: ActionData;

	onMount(() => {
		invalidate("login_status");
	});

	$: if (form?.user && browser) {
		localStorage.setItem("name", form.user.name);
	}
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
	<div class="bold success">
		Welcome {form.user.name}! You can now open the dashboard.
	</div>
{/if}

{#if form?.error}
	<div class="bold error">
		{form.error}
	</div>
{/if}
