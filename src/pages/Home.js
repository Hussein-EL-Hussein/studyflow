import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
      {/* Introduction */}
      <section className="rounded-3xl border border-teal-100 bg-linear-to-br from-white via-teal-50 to-emerald-100 p-6 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Your space to grow</p>
        <span aria-hidden="true" className="mt-6 block text-5xl">🌱</span>
        <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl"
        >Less scattered.<br />More focused.</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-slate-600"
        >Meet StudyFlow, your personal study planner. Keep assignments, course names, and due dates together, then take it one task at a time.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/planner" className="rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >Start planning →</Link>
          <Link to="/features" className="rounded-xl border border-teal-200 bg-white px-6 py-3 font-semibold text-teal-800 transition hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >Explore features</Link>
        </div>
        <p className="mt-5 text-sm text-teal-800">No account needed. Your tasks stay in this browser.</p>
      </section>

      {/* Three feature cards */}
      <section aria-labelledby="home-features-title" className="mt-12">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Simple by design</p>
        <h2 id="home-features-title" className="mt-3 text-2xl font-bold text-slate-800">A little structure goes a long way.</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-teal-700">
              Plan your next step
            </h2>
            <p className="mt-2 text-slate-600">
              Add a task, its course name, and a due date so you know what needs your attention.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-teal-700">
              See what you have finished
            </h2>
            <p className="mt-2 text-slate-600">
              Mark tasks as completed, undo a check, and remove tasks you no longer need.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-teal-700">
              Pick up where you left off
            </h2>
            <p className="mt-2 text-slate-600">
              Your tasks are saved in this browser, so refreshing the page keeps your plan in place.
            </p>
          </div>
        </div>
      </section>

      {/* Link to the planner */}
      <section className="mt-10 flex flex-col gap-5 rounded-2xl bg-teal-900 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-xl font-bold">Your next step can be a small one.</h2>
          <p className="mt-2 text-sm leading-relaxed text-teal-100">Add one task today and give yourself a clearer place to start.</p>
        </div>
        <Link to="/planner" className="shrink-0 rounded-xl bg-white px-5 py-3 text-center font-semibold text-teal-900 transition hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Open My Planner →</Link>
      </section>
    </main>
  );
};

export default Home;
