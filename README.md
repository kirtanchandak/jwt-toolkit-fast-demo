# jwt-toolkit-fast demonstration
This is a demo application for demonstration for the library `jwt-toolkit-fast` which is type-safe library to encode, decode and validate JWTs at ease in both browser and node environments. 

# Demo Overview
- Home page: `/`
- Login page: `/login`
- Profile page: `/profile` (Protected page that requires JWT authentication and provides information about the logged-in user)

# Authentication
- The user registers on the login page with the username and gets back a JWT.
- Then the user is automatically navigated to `/profile` where the logged-in user can see their details.
## Installation

Install my-project with npm

```bash
  git clone https://github.com/kirtanchandak/jwt-toolkit-fast-demo
  cd jwt-toolkit-fast
```
Install dependencies
```bash
  npm install
```
Start the project
```bash
  npm run dev
```
