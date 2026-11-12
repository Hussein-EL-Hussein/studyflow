import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-slate-100 px-6 py-16">

            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-teal-100 blur-3xl motion-safe:animate-pulse"
            />

            <div
                aria-hidden="true"
                className="absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-sky-100 blur-3xl"
            />

            <div className="relative w-full max-w-lg text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
                    A little study break?
                </p>

                <div className="relative mt-6">
                    <p
                        aria-hidden="true"
                        className="text-9xl font-black tracking-tight text-teal-200"
                    >
                        404
                    </p>

                    <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center text-5xl motion-safe:animate-bounce"
                    >
                        📖
                    </span>
                </div>

                <h1 className="mt-8 text-3xl font-bold text-slate-800">
                    This page skipped class.
                </h1>

                <p className="mx-auto mt-4 max-w-sm leading-relaxed text-slate-600">
                    We couldn’t find the page you’re looking for.
                    Let’s get you back to your study flow.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        to="/"
                        className="rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:bg-teal-800 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                    >
                        Back to Home
                    </Link>

                    <Link
                        to="/planner"
                        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:border-teal-600 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                    >
                        Open My Planner
                    </Link>
                </div>

                <p className="mt-10 text-sm text-slate-500">
                    A wrong turn won’t stop your progress.
                </p>
            </div>
        </main>
    );
};

export default NotFound;