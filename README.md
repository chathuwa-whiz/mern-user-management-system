# User Management System

## Overview

This User Management System is built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows administrators to manage user information effectively, including creating, reading, updating, and deleting user records.

## Features

- **User Authentication:** Secure user login and registration.
- **CRUD Operations:** Create, Read, Update, and Delete user profiles.
- **Responsive Design:** Accessible on both desktop and mobile devices.
- **Role-Based Access Control:** Different permissions for administrators and regular users.

## Technologies Used

- **MongoDB:** A NoSQL database to store user data.
- **Express.js:** A web application framework for Node.js.
- **React:** A JavaScript library for building user interfaces.
- **Node.js:** A JavaScript runtime built on Chrome's V8 engine.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chathuwa-whiz/mern-user-management-system.git
   cd user-management-system
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables: (optional)**
   Create a `.env` file in the `server` directory with the following variables:
   ```plaintext
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the development server:**
   - In the `server` directory:
     ```bash
     npm start
     ```
   - In the `client` directory:
     ```bash
     npm start
     ```

## Usage

- **Register:** Create a new account.
- **Login:** Access your account using email and password.
- **Dashboard:** View and manage user profiles.
- **Admin Panel:** Perform CRUD operations on user data.

## API Endpoints

- **/api/auth/register:** Register a new user.
- **/api/auth/login:** Authenticate a user and return a token.
- **/api/users:** Get all users (admin only).
- **/api/users/:id:** Get, update, or delete a specific user (admin only).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

## License

 Free to use for everyone 😊