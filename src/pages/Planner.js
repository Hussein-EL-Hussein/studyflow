import { useState, useEffect } from 'react';
import SuccessModal from '../components/modals/SuccessModal.js';
import DeleteTaskModal from '../components/modals/DeleteTaskModal.js';

// Browser storage helpers
const loadTasks = () => {
  const savedTasks = localStorage.getItem('studyflowTasks');

  if (savedTasks !== null) {
    return JSON.parse(savedTasks);
  }

  return [];
};

const saveTasks = (tasks) => {
  localStorage.setItem('studyflowTasks', JSON.stringify(tasks));
};

const getNextTaskId = (tasks) => {
  let largestId = 0;

  for (const task of tasks) {
    if (task.id > largestId) {
      largestId = task.id;
    }
  }

  return largestId + 1;
};

const Planner = () => {
    // 1. Form values, tasks, and popup state
    const [title, setTitle] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [tasks, setTasks] = useState(loadTasks);
    const [nextId, setNextId] = useState(() => getNextTaskId(tasks));

    // 2. Save when tasks change
    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    // 3. Add a task
    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() === '' || course.trim() === '' || date === '') {
            return;
        }

        const newTask = {
            id: nextId,
            title: title.trim(),
            course: course.trim(),
            date: date,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setMessage('Task added successfully!');
        setNextId(nextId + 1);

        setTitle('');
        setCourse('');
        setDate('');
    };

    // 4. Change completion status
    const toggleTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }

            return task;
        });

        setTasks(updatedTasks);
    };
    // 5. Delete after confirmation
    const deleteTask = (id) => {
        const remainingTasks = tasks.filter((task) => task.id !== id);

        setTasks(remainingTasks);
        setTaskToDelete(null);
        setMessage('Task deleted successfully!');
    };

    return (
        <main className="mx-auto max-w-5xl px-6 py-10">
            <h1 className="text-3xl font-bold text-slate-800">My Planner</h1>
            <p className="mt-2 text-slate-600">
                Small steps today. Better results tomorrow.
            </p>

            {/* Add task form */}
            <form
                onSubmit={handleSubmit}
                className="mt-8 rounded-xl bg-white p-6 shadow-sm"
            >
                <h2 className="text-xl font-bold text-teal-700">
                    Add a task
                </h2>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div>
                        <label
                            htmlFor="task-title"
                            className="mb-2 block font-medium text-slate-700"
                        >
                            Task name
                        </label>

                        <input
                            id="task-title"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Review React props"
                            required
                            className="w-full rounded-lg border border-slate-300 p-3"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="task-course"
                            className="mb-2 block font-medium text-slate-700"
                        >
                            Course
                        </label>

                        <input
                            id="task-course"
                            type="text"
                            value={course}
                            onChange={(event) => setCourse(event.target.value)}
                            placeholder="CSCI426"
                            required
                            className="w-full rounded-lg border border-slate-300 p-3"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="task-date"
                            className="mb-2 block font-medium text-slate-700"
                        >
                            Due date
                        </label>

                        <input
                            id="task-date"
                            type="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                            required
                            className="w-full rounded-lg border border-slate-300 p-3"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-5 rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
                >
                    Add task
                </button>
            </form>

            {/* Task list and cards */}
            <section className="mt-10">
                <h2 className="text-xl font-bold text-slate-800">
                    Your tasks ({tasks.length})
                </h2>

                {tasks.length === 0 ? (
                    <p className="mt-4 rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
                        No tasks yet. Add your first task above!
                    </p>
                ) : (
                    <ul className="mt-4 grid gap-4 md:grid-cols-2">
                        {tasks.map((task) => (
                            <li key={task.id}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
                <p className="text-sm font-semibold text-teal-700">
                    {task.course}
                </p>

                <h3
                    className={
                        task.completed
                            ? 'mt-2 text-lg font-bold text-slate-400 line-through'
                            : 'mt-2 text-lg font-bold text-slate-800'
                    }
                >
                    {task.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                    Due: {task.date}
                </p>

                <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="h-4 w-4 accent-teal-700"
                    />

                    {task.completed ? 'Completed' : 'Mark as completed'}
                </label>
                <button
                    type="button"
                    onClick={() => setTaskToDelete(task.id)}
                    className="mt-4 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                >
                    Delete task
                </button>
            </li>
                        ))}
                    </ul>
                )}
            </section>

            {taskToDelete !== null && (
                <DeleteTaskModal
                    onCancel={() => setTaskToDelete(null)}
                    onConfirm={() => deleteTask(taskToDelete)}
                />
            )}

            {message !== '' && (
                <SuccessModal message={message} onClose={() => setMessage('')} />
            )}
        </main>
    );
};

export default Planner;
