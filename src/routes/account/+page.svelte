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

<p>You are logged in with the email {data.email}.</p>

<form action="?/name" method="POST" autocomplete="off" use:enhance>
	<div>
		<label for="name_input">Name</label>
		<input
			type="text"
			id="name_input"
			name="name"
			value={data.name}
		/>
	</div>
	<button>Change name</button>
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

<form action="/logout" method="POST">
	<button>Logout</button>
</form>

<style>
	form {
		margin-top: 1rem;
	}
</style>
