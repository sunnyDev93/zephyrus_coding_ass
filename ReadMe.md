# Task Management App - React, Node.js, and Real-Time Data Fetching

This repository contains three different tasks that focus on building a task management app using **React.js**, **Node.js**, and **Real-Time Data Fetching** from an external API.

## Table of Contents
- [Task 1: Responsive Webpage Layout](#task-1-responsive-webpage-layout)
- [Task 2: Dynamic Task Management Application](#task-2-dynamic-task-management-application)
- [Task 3: Real-Time Data Fetching and Display](#task-3-real-time-data-fetching-and-display)
- [Libraries and Tools](#libraries-and-tools)
- [Setup and Run](#setup-and-run)

---

## Task 1: Responsive Webpage Layout

### Approach
For this task, we built a responsive, multi-section webpage that includes a header, navigation bar, main content, and a footer. We implemented the following features:
- **Sections**: About, Projects, and Contact sections within the main content.
- **Responsiveness**: The layout was made responsive using **CSS Grid** and **Flexbox** for fluid designs.
- **Color Scheme and Typography**: A modern color scheme was applied with consistent fonts and design styles.
- **Dark Mode Toggle**: Implemented a dark mode toggle using **JavaScript** and **CSS** to switch between light and dark themes for a better user experience.

### Key Features
- Dark/White theme toggle.
- Fully responsive layout for all screen sizes.
- Modern design with hover effects and smooth transitions.

---

## Task 2: Dynamic Task Management Application

### Approach
For Task 2, we developed a dynamic task management system with the following components:
- **Frontend**: 
    - A form that accepts task **title**, **description**, and **due date**.
    - Display tasks in a list format with options to **edit** and **delete** tasks.
    - Implemented **client-side validation** (required fields and valid date format).
- **Backend**: 
    - **Node.js** with **Express** was used to create the backend API for handling CRUD operations for tasks.
    - Endpoints:
        - `GET /tasks`: Retrieve all tasks.
        - `POST /tasks`: Add a new task.
        - `PUT /tasks/:id`: Update an existing task.
        - `DELETE /tasks/:id`: Delete a task.
- **Local Storage**: Used **local storage** to persist task data, so the tasks remain even if the page is refreshed.
  
### Key Features
- Task management (create, read, update, delete).
- Client-side validation for form fields.
- Local storage integration to persist data.

### Libraries and Tools Used:
- **React.js** for the frontend.
- **Node.js** and **Express** for the backend API.
- **LocalStorage** to persist data in the browser.

---

## Task 3: Real-Time Data Fetching and Display

### Approach
For Task 3, we fetched data from an external API (JSONPlaceholder) and displayed it dynamically:
- Used **React** to fetch data from the API and display it in a grid format.
- Data is displayed in structured **cards** with the option to filter using a search bar.
- Implemented error handling to show appropriate messages when the API call fails.
  
### Key Features
- Displayed fetched data in **cards**.
- **Search** functionality to filter data based on the title.
- **Error handling** and loading state for better user experience.

### Libraries and Tools Used:
- **React.js** for the frontend.
- **JSONPlaceholder** as the public API source.
- **CSS** for styling.

---

## Libraries and Tools

### Frontend:
- **React.js**: JavaScript library for building user interfaces.
- **CSS**: Styling for the layout and design.
- **React Hooks**: For managing state and side effects.

### Backend (For Task 2 only):
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **LocalStorage**: To persist data on the frontend.

---

## Setup and Run

### Prerequisites
- **Node.js** and **npm** should be installed on your machine.
- For Task 2 (backend), ensure you have **Node.js** installed, as well as any necessary dependencies.

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
  git https://github.com/sunnyDev93/zephyrus_coding_ass.git
  cd zephyrus_coding_ass
```

### Step 2: Install Dependencies

#### For Task 2 and Task 3 (Frontend):
1. Navigate to the **frontend** directory:
   ```bash
   cd task2(/task3)
   cd frontend   (for task2)
    ```
2. Install the required dependencies:
   ```bash
   npm install
   npm start
   ```