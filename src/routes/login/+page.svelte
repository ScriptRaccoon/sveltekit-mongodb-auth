<script lang="ts">
	//
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>

<form method="POST" autocomplete="off">
	<div>
		<label for="email_input">Email</label>
		<input type="email" id="email_input" name="email" />
	</div>
	<div>
		<label for="password_input">Password</label>
		<input type="password" id="password_input" name="password" />
	</div>
	<button>Login</button>
</form>
