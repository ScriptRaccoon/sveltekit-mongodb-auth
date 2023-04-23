# Tutorial Steps

## Setup

1. Take starter code from the branch `starter-code`
2. npm install and npm run dev
3. Showcase all pages and UI elements

## Registration (Part 1)

1. Create form action for /register
2. Read form data
3. Create /server folder
4. Create register.ts file
5. Create register_user function
6. Verify name, email, password (check later if email is taken)
7. Create utils.ts

## MongoDB

1. Create account on https://www.mongodb.com/atlas
2. Create new cluster
3. Create admin user
4. Copy connection string
5. Setup environment variables
6. Install mongoose
7. Create db.ts
8. Create connect_to_db function
9. Create +layout.server.ts
10. Create layout server load function

## Registration (Part 2)

1. Create models.ts
2. Create User_Schema
3. Create User_Model
4. Create user in register_user function
5. Check if email is already taken
6. Complete form action for /register
7. Show error or success on register page
8. Refill form inputs except for password
9. Progressively enhance all forms
10. Install bcrypt and @types/bcrypt (-D)
11. Hash password before saving to database

## Login

1. Create form action for /logout
2. Read form data
3. Create login.ts
4. Create get_user function
5. Find the user via email and return it
6. Create login_user function
7. Install jsonwebtoken and @types/jsonwebtoken (-D)
8. Create JWT secret environment variable
9. Create JWT from user id and return it
10. Complete form action for /logout
11. Set cookies for auth-token, email, name
12. Show error or message on login page

## Protect pages

1. Create authenticate.ts
2. Create authenticate function
3. Create global auth type
4. Create hooks.server.ts
5. Create handle function
6. Create empty server file for /dashboard

## Show only allowed pages

1. Return name and email from layout server load
2. Pass logged_in prop to Nav component in layout
3. Update Nav component

## Logout

1. Create logout folder
2. Create page.server.ts
3. Create form action for logout

## Account page

1. Change actions for change name and email forms
2. Create page.server.ts file for /account
3. Create actions for name and email
4. Create account.ts
5. Create change_name and change_email functions
