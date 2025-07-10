# Simple Login and Registration System

A beginner-friendly login and registration system using HTML, CSS, and JavaScript.

## Features

- Login with email and password
- Registration for new users
- Simple form validation
- Success and error messages
- Redirection to homepage after login
- Session-based authentication using sessionStorage

## Files

- `index.html`: Login and registration form
- `homepage.html`: Simple welcome page after login
- `styles.css`: Styling for the forms and pages
- `script-new.js`: JavaScript for login/register functionality

## How It Works

1. **Login**

   - Enter an email and password
   - If they match a user in the system, you'll be logged in
   - Credentials are stored in memory (no backend needed)

2. **Registration**

   - Enter your name, email, and password
   - New users are added to the system
   - After registration, you can log in with your new account

3. **Authentication**
   - User info is stored in sessionStorage after login
   - The homepage checks if you're logged in
   - If not logged in, you're redirected back to login

## Demo Accounts

- Email: user@example.com / Password: pass123
- Email: admin@example.com / Password: admin123

## For Beginners

This project is designed to be simple and educational. It demonstrates basic concepts of:

- Form handling with JavaScript
- Simple validation
- User authentication
- Page navigation
- DOM manipulation

## Note

This is a frontend-only demo. In a real application, authentication would be handled by a secure backend server.
