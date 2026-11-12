# StudyFlow

StudyFlow is a simple study planner for students. It helps students keep their tasks, course names, and due dates in one place.

## What we built

- A Home page that introduces the app.
- An About page that explains the idea.
- A Features page that shows what the app can do.
- A Contact page with a form and a message preview.
- A My Planner page for study tasks.
- A Not Found page for unknown links.
- A sidebar that opens and closes. The icons stay visible when it is closed.

## Planner features

Students can:

- Add a task with a name, course, and due date.
- Mark a task as completed or not completed.
- Delete a task after confirming the action.
- See a success message after adding or deleting a task.
- Keep their tasks after refreshing the page.

Tasks are saved in localStorage in the same browser. They do not sync between devices. Clearing the site's browser data removes the saved tasks.

The Contact form shows a preview only. It does not send an email.

## Tools we used

- React for the interface.
- JavaScript for the app logic.
- Tailwind CSS for the design.
- React Router for moving between pages.
- Vite for running and building the project.
- ESLint for checking the code.

We use arrow functions and `.js` files. The Vite configuration allows JSX inside these files.

## How to run the project

Install Node.js and npm first. Open a terminal in the folder that contains `package.json`.

```bash
npm install
npm run dev
```

Open the Local link shown in the terminal.

On Windows PowerShell, you can use `npm.cmd` instead of `npm`.

To check the code and build the project:

```bash
npm run lint
npm run build
```

To view the production build locally:

```bash
npm run preview
```

## How we organized the code

| Folder or file | What it does |
| --- | --- |
| `src/main.js` | Starts React. |
| `src/App.js` | Shows the sidebar and sets the page routes. |
| `src/pages` | Contains the main pages. |
| `src/components` | Contains small parts of the interface. |
| `src/data` | Contains text, links, and lists used by the pages. |
| `src/index.css` | Imports Tailwind CSS. |

## Home page

`src/pages/Home.js` contains the full Home page: the introduction, three feature cards, and links to the Planner. It uses simple JSX in one component. Home does not need a separate hero component or data file.

## Main Planner files

| File | What it does |
| --- | --- |
| `src/pages/Planner.js` | Contains the form, task list, task cards, state, task functions, and browser storage helpers. |
| `src/components/modals/DeleteTaskModal.js` | Asks the student to confirm deletion. |
| `src/components/modals/SuccessModal.js` | Shows a success message. |

The task flow is kept in one page so it is easy to follow. The two popup components receive their messages and callback functions through props.

Read Planner in this order: storage helpers, state, saving effect, add function, complete function, delete function, form, task list, and popups.

## React concepts we practiced

- Components and props.
- useState to store values that can change.
- useEffect to save tasks when they change.
- Forms, onChange, onSubmit, and onClick.
- map to display lists and update a task.
- filter to remove a task.
- Conditional rendering to show messages and dialogs.
- Routing to display different pages.
- JSON and localStorage to save and read tasks.

## Screenshots

Screenshots have not been added yet. Before submission, add screenshots of Home, My Planner, and the mobile layout here.

## Project status

The project currently runs locally. The report, screenshots, GitHub repository link, and live website link still need to be prepared or verified before submission.
