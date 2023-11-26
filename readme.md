# Task Management App

## Description
This Node.js application is a simple Task Management System that allows users to perform CRUD operations on tasks, including creating, retrieving, updating, and deleting tasks. It utilizes Express.js for handling HTTP requests, MongoDB for the database, JWT for user authentication, and implements basic error handling and testing.

## Prerequisites
- Node.js installed
- MongoDB installed and running locally

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/codingXpert/Kodagu-Now-Assingment
   cd task-management-app

## Install dependencies:
```bash
npm install
```

## Start Command
```bash
npm start
```

## Testing
To run tests using Mocha/Chai:

```bash
npm test
```

### API Endpoints

#### Create a new task

- **Endpoint:** `POST /tasks`
- **Input Parameters:**
  - `title` (string): Title of the task
  - `description` (string): Description of the task
  - `assignedUser` (string): Assigned user for the task
  - `dueDate` (date): Due date for the task
  - `completionStatus` (string): Completion for the task
- **Expected Response:** Returns the created task object

#### Retrieve all tasks with pagination

- **Endpoint:** `GET /tasks`
- **Query Parameters:**
  - `page` (number, optional): Page number for pagination
  - `limit` (number, optional): Number of tasks per page
- **Expected Response:** Returns an array of tasks based on pagination metadata

#### Retrieve a single task by ID

- **Endpoint:** `GET /tasks/:id`
- **Input Parameters:**
  - `id` (string): ID of the task to retrieve
- **Expected Response:** Returns the task object if found, otherwise returns a 'Task not found' message

#### Update an existing task

- **Endpoint:** `PUT /tasks/:id`
- **Input Parameters:**
  - `id` (string): ID of the task to update
  - `title` (string): Updated title of the task
  - `description` (string): Updated description of the task
  - `assignedUser` (string): Updated assigned user for the task
  - `dueDate` (date): Updated due date for the task
  - `completionStatus` (boolean): Updated completion status of the task
- **Expected Response:** Returns the updated task object if found, otherwise returns a 'Task not found' message

#### Delete a task by ID

- **Endpoint:** `DELETE /tasks/:id`
- **Input Parameters:**
  - `id` (string): ID of the task to delete
- **Expected Response:** Returns a 'Task deleted' message if the task was successfully deleted, otherwise returns a 'Task not found' message
