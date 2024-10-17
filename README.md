# To-Do Dashboard App

## Overview

The **To-Do Dashboard App** is a simple task management application built using the **MERN** stack (MongoDB, Express, React, and Node.js). It allows users to create, view, and manage tasks, marking them as completed when finished.

This project showcases my skills in full-stack development, including building RESTful APIs, front-end components, and handling database interactions.

## Features

- **Add new tasks** to the list.
- **View all tasks** dynamically.
- **Mark tasks as completed** or delete tasks from the list.
- **Real-time updates** when new tasks are added without refreshing the page.

## Technologies Used

- **Frontend**: React (Hooks, Axios)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios for handling requests
- **CSS Framework**: Bootstrap for styling

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/nmonroe-dev/react--practice.git
   ```

2. Navigate into the project directory:

3. Install dependencies for both the server and the client:

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

   - For the frontend:
     ```bash
     cd ../client
     npm install
     ```

4. Create a `.env` file in the backend directory and add your MongoDB URI:

   ```makefile
   MONGO_URI=your_mongodb_connection_string
   ```

5. Start the backend server:

   ```bash
   cd backend
   npm run start
   ```

6. Start the frontend React app:

   ```bash
   cd ../client
   npm run start
   ```

## API Endpoints

- `GET /api/todos`: Fetch all tasks.
- `POST /api/todos`: Add a new task.
- `PATCH /api/todos/:id`: Mark a task as completed.
- `DELETE /api/todos/:id`: Delete a task.

## Future Enhancements

- Add user authentication (login, register).
- Improve the user interface with more interactive elements.
- Add due dates and task prioritization.

## License

This project is open-source and available under the MIT License.
