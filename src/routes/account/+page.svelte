<script lang="ts">
	import { user } from "$lib/stores";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: if (form?.name && $user) {
		$user.name = form?.name;
	}
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<h1>Account</h1>

<p>
	You are logged in with the email <strong>{$user?.email}</strong>.
</p>

<form action="?/name" method="POST" autocomplete="off">
	<div>
		<label for="name_input">Name</label>
		<input
			type="text"
			id="name_input"
			name="name"
			value={$user?.name}
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
