import { Link } from 'react-router-dom';

const SidebarEncouragement = ({ isOpen }) => {
  return (
    <div className="shrink-0 p-3">
      {isOpen ? (
        <div className="rounded-2xl border border-white bg-white/70 p-4 shadow-sm">
          <span aria-hidden="true" className="text-3xl">
            🌱
          </span>

          <p className="mt-3 text-sm font-bold text-teal-900">
            Small steps. Big growth.
          </p>

          <p className="mt-2 text-xs leading-relaxed text-teal-800">
            One task at a time. You’re making progress.
          </p>

          <Link
            to="/planner"
            className="mt-4 inline-block rounded-lg text-sm font-bold text-teal-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Let’s focus →
          </Link>
        </div>
      ) : (
        <div
          title="Small steps. Big growth."
          className="flex h-14 items-center justify-center rounded-2xl bg-white/70"
        >
          <span aria-hidden="true" className="text-2xl">
            🌱
          </span>
          <span className="sr-only">Small steps. Big growth.</span>
        </div>
      )}
    </div>
  );
};

export default SidebarEncouragement;
