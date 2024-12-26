# Task Tracking App Backend

This is the backend API for the Task Tracking App, built using Node.js, Express, and MongoDB.

## Features
- CRUD operations for tasks
- Filtering tasks by status
- Highlighting overdue tasks
- JWT-based authentication (if implemented)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>

2. Navigate to the backend directory:
   cd backend

3. Install dependencies:
   npm install

4. Set up your .env file:
   MONGO_URI=<your-mongodb-connection-string>
   PORT=5000
   JWT_SECRET=<your-secret-key>

5. Start the server:
   npm start

# API Endpoints
# Get All Tasks
  . GET /tasks
# Add a New Task
  . POST /tasks
# Update a Task
  . PATCH /tasks/:id
# Delete a Task
  . DELETE /tasks/:id
