<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData, PageData } from "./$types";

	export let form: ActionData;
	export let data: PageData;
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<h1>Account</h1>

<form
	action="?/name"
	method="POST"
	autocomplete="off"
	use:enhance
	class="update-form"
>
	<div>
		<label for="name_input">Name</label>
		<input
			type="text"
			id="name_input"
			name="name"
			value={data.name}
		/>
	</div>
	<button aria-label="update name">Update</button>
</form>

<form
	action="?/email"
	method="POST"
	autocomplete="off"
	use:enhance
	class="update-form"
>
	<div>
		<label for="email_input">Email</label>
		<input
			type="email"
			id="email_input"
			name="email"
			value={data.email}
		/>
	</div>
	<button aria-label="update email">Update</button>
</form>

{#if form?.message}
	<p class="success">
		{form.message}
	</p>
{/if}

{#if form?.error}
	<p class="error">
		{form.error}
	</p>
{/if}

<form action="/logout" method="POST" class="logout-form">
	<button>Logout</button>
</form>

<style>
	.update-form {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: end;
		gap: 1rem;
	}
	.logout-form {
		margin-top: 1.5rem;
	}
</style>
