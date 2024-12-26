# Task Tracking App Frontend
   This is the frontend application for the Task Tracking App, built with React. The app allows users to manage tasks by adding, editing, filtering, and deleting tasks. It communicates with the backend via an API.

# Features
 . Task Listing: View a list of tasks with details such as name, description, due date, status, and priority.
 . Add Task: Use a modal form to add new tasks.
 . Edit Task: Modify existing tasks through the same form.
 . Delete Task: Delete tasks with a confirmation dialog.
 . Filter Tasks: Filter tasks based on their status (e.g., Pending, In Progress, Completed).
 . Responsive Design: Works seamlessly on desktop and mobile devices.

# Setup Instructions
Prerequisites
Ensure you have the following installed on your system:
 . Node.js (v14 or later)
 . npm (Node Package Manager)
# Steps to Run Locally
 1. Clone the repository:
    git clone <your-repo-url>
    cd TaskTrackingApp/frontend

 2. Install dependencies:
    npm install
 
 3. Set up environment variables: Create a .env file in the root of the frontend directory:
    REACT_APP_API_URL=http://localhost:5000
    Replace http://localhost:5000 with the URL where your backend is hosted.

 4. Start the development server:
    npm start
 
 5. Open the app in your browser at http://localhost:3000.

# Folder Structure

frontend/
├── public/                 # Public files served directly
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # App manifest file
│   └── robots.txt          # Robots exclusion file
├── src/                    # Source code
│   ├── api/
│   │   └── api.js          # API calls
│   ├── components/         # Reusable React components
│   │   ├── TaskForm.js
│   │   ├── TaskList.js
│   │   ├── TaskFilter.js
│   │   └── TaskDeleteDialog.js
│   ├── App.css             # Global styles
│   ├── App.js              # Main app component
│   ├── index.css           # Additional global styles
│   ├── index.js            # Entry point
│   └── README.md           # Component-specific documentation
├── .env                    # Environment variables
├── .gitignore              # Ignored files for Git
├── package.json            # Dependency management
└── README.md               # Project documentation

# Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

npm run build
Builds the app for production to the build/ folder.

# Dependencies
  The following dependencies are used in this project:
  . React: Frontend framework
  . Axios: For making HTTP requests
  . @mui/material (Optional): For UI components
  . React Icons (Optional): For icons

# Install them using:
  npm install axios @mui/material @emotion/react @emotion/styled react-icons

# API Endpoints
  The app communicates with the backend using these endpoints:
  . GET /tasks: Fetch all tasks
  . POST /tasks: Add a new task
  . PATCH /tasks/:id: Update a task
  . DELETE /tasks/:id: Delete a task

# Contributing
  1. Fork the repository.
  2. Create a new branch:
     git checkout -b feature/YourFeature
  3. Commit your changes:
     git commit -m "Add your message here"
  4. Push the branch:
     git push origin feature/YourFeature
  5. Open a Pull Request.

# License
  This project is open-source and available under the MIT License.
