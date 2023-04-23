<script lang="ts">
	//
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<h1>Register</h1>

<form method="POST" autocomplete="off">
	<div>
		<label for="email_input">Email</label>
		<input type="email" id="email_input" name="email" />
	</div>
	<div>
		<label for="password_input">Password</label>
		<input type="password" id="password_input" name="password" />
	</div>
	<div>
		<label for="name_input">Name</label>
		<input type="text" id="name_input" name="name" />
	</div>
	<button>Register</button>
</form>
