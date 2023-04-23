<script lang="ts">
	//
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<h1>Account</h1>

<form method="POST" autocomplete="off" class="update-form">
	<div>
		<label for="name_input">Name</label>
		<input type="text" id="name_input" name="name" />
	</div>
	<button aria-label="update name">Update</button>
</form>

<form method="POST" autocomplete="off" class="update-form">
	<div>
		<label for="email_input">Email</label>
		<input type="email" id="email_input" name="email" />
	</div>
	<button aria-label="update email">Update</button>
</form>

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
