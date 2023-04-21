<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<h1>Register</h1>

<form method="POST" autocomplete="off">
	<div>
		<label for="email_input">Email</label>
		<input
			type="email"
			id="email_input"
			name="email"
			value={form?.user?.email ?? ""}
		/>
	</div>
	<div>
		<label for="password_input">Password</label>
		<input type="password" id="password_input" name="password" />
	</div>
	<div>
		<label for="name_input">Name</label>
		<input
			type="text"
			id="name_input"
			name="name"
			value={form?.user?.name ?? ""}
		/>
	</div>
	<button>Register</button>
</form>

{#if form?.message}
	<div class="success">
		{form.message}
	</div>
{/if}

{#if form?.error}
	<div class="error">
		{form.error}
	</div>
{/if}
