# SvelteKit Authentication with MongoDB

https://sveltekit-auth.netlify.app

This is a template of a SvelteKit project which authenticates users stored in MongoDB.

Users can register, login, open a dashboard (which is just a placeholder here) and an account page. On the account page, name and email can be changed, and logout is possible.

The users are stored in a MongoDB database. The user authentication is implemented with JWT and cookies. After login, the user name and email are stored as cookies as well.

Basic validation is implemented for login and register. This could potentially be improved by using the Zod library for example.

The application works without client-side JavaScript, thanks to SvelteKit's SSR and form actions. (This is also why I didn't use localStorage to save user name and email, which would also be possible, but requires JavaScript on the client. I also tried `event.locals`, but this was a nightmare.)

There are three routes which can be accessed by all users: `/`, `/login` and `/register`. The two routes `/dashboard` and `/account` can only be accessed by users who are logged in (and only they see them in the navigation bar). This is checked in the `hooks.server.ts` file by verifying the JWT stored in the `auth-token` cookie.

When you want to clone this repository, make sure to rename `.env.example` to `.env` and fill in the required environment variables.

This repository will be used for a tutorial. The branch `starter-code` has the starter code with the pure frontend stuff.
