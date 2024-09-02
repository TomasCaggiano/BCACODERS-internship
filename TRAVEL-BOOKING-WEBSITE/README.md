# Authentication System Project

## Overview

This project is a simple authentication system built using React. It includes both a login and registration form. Users can register with their details and log in using their credentials. This system is ideal for learning purposes and understanding the basic principles of user authentication and form handling in React.

## Features

- **Login Form:** Allows users to log in using their email and password.
- **User Prueba para login:** 
      "username": "john_doe",
      "email": "john.doe@example.com",
      "password": "password123",  
      "fullName": "John Doe",
      "phoneNumber": "123-456-7890",
      "address": "123 Elm Street"
- **Registration Form:** Allows new users to register by providing a username, email, password, full name, phone number, and address.
- **Error Handling:** Displays error messages for invalid login credentials or registration issues.
- **Local Storage:** Uses local storage to simulate a backend by saving user data.

## Project Structure

- `src/`
  - `components/`
    - `Login.js`: Contains the login form and its functionality.
    - `Register.js`: Contains the registration form and its functionality.
  - `App.js`: Main application component that routes between Login and Register pages.
  - `index.js`: Entry point for the React application.
- `public/`
  - `users.json`: Contains example user data for login and registration.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
2. Navigate into the project directory:
    cd your-repo
3. Install the dependencies:
    npm install
4. Start the development server:
    npm run dev
