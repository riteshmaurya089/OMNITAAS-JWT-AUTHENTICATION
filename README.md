# OMNITAAS-JWT-AUTHENTICATION
JWT Authentication System (MERN Stack)

Project Overview

This project is a JWT-based Authentication System built using Node.js, Express, and React.
It demonstrates secure authentication, protected routes, and token management without using a database.

The application allows users to:

- Login using valid credentials
- Receive a JWT token
- Access protected user profile data
- Logout and invalidate the token

---

Tech Stack

Backend

- Node.js
- Express.js
- JSON Web Token (JWT)
- CORS Middleware

Frontend

- React (Functional Components)
- React Router v6
- Axios
- CSS

---

Features

Authentication

- JWT-based authentication
- Token expiration set to 1 hour

Protected Routes

- "/api/profile" is protected using JWT middleware
- Requires "Authorization: Bearer <token>"

Logout Security

- Tokens are stored in an in-memory blacklist
- Logged-out tokens cannot be reused

Frontend Functionality

- Login page with validation
- Dashboard with user profile
- Logout functionality
- Route protection
- API error handling
- Loading states

---

Valid Login Credentials

Username: admin
Password: admin123

---

Backend API Endpoints

Method| Endpoint| Description
POST| /api/login| Authenticate user and return JWT
GET| /api/profile| Get logged-in user info (Protected)
POST| /api/logout| Logout and blacklist token

---

Project Structure

Backend

backend
│
├── server.js
├── blacklist.js
├── middleware
│   └── authMiddleware.js
└── routes
    └── authRoutes.js

Frontend

frontend/src

├── pages
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── components
│   └── ProtectedRoute.jsx
│
├── services
│   └── api.js
│
├── App.jsx
└── main.jsx

---

Installation & Setup

1 Clone Repository

git clone https://github.com/riteshmaurya089/OMNITAAS-JWT-AUTHENTICATION

---

Backend Setup

Navigate to backend folder

cd backend

Install dependencies

npm install

Start server

npx nodemon server.js

Backend will run on:

http://localhost:5000

---

Frontend Setup

Navigate to frontend folder

cd frontend

Install dependencies

npm install

Start React app

npm run dev

Frontend will run on:

http://localhost:5173

---

Application Flow

1. User logs in using credentials
2. Backend verifies credentials
3. JWT token is generated
4. Token is stored in localStorage
5. User accesses protected dashboard
6. Logout invalidates the token

---

Security Implementation

- JWT authentication
- Token expiration
- Authorization header validation
- Token blacklist after logout
- Protected routes in both frontend and backend

---

Author

Ritesh Maurya

Full Stack Web Developer
Specialized in MERN Stack Development
