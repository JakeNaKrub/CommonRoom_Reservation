# Common Room Reservation System

## Project Description

This project is a web application for a common room (meeting room) reservation system. It is built with Next.js and utilizes Firebase for backend services and data storage, and Genkit for generative AI features.

## Project Intention

The main goal of this project is to provide students of the ISE department with a simple and efficient way to reserve and manage meeting rooms. By leveraging modern web technologies and the power of generative AI, this project aims to create a streamlined and user-friendly reservation experience.

## How to Run the Project

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:9002](http://localhost:9002).

3.  **Run the Genkit AI Development Server:**
    ```bash
    npm run genkit:dev
    ```

## How to Debug the Project

### Frontend (Next.js)

*   **Browser Developer Tools:** Use the developer tools in your browser (e.g., Chrome DevTools) to inspect the DOM, check for console errors, and debug JavaScript code.
*   **React Developer Tools:** Use the React Developer Tools browser extension to inspect the component hierarchy, props, and state.
*   **`console.log()`:** Add `console.log()` statements in your components to output variable values and trace the execution flow.

### Backend (Genkit/Firebase)

*   **Terminal Logs:** Check the terminal where you are running the `genkit:dev` script for any logs or error messages from the backend.
*   **Firebase Emulator Suite:** For a more robust debugging experience, consider using the [Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite) to run Firebase services locally. This allows you to inspect data in your local Firestore database and see logs from Cloud Functions.
*   **`console.log()`:** You can also use `console.log()` in your Genkit flows and other backend code. The output will appear in the terminal where the development server is running.

### Static Analysis

*   **Linting:** Run `npm run lint` to identify and fix potential issues in your code.
*   **Type Checking:** Run `npm run typecheck` to check for TypeScript errors.
