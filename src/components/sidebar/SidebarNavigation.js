import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.js';

const SidebarNavigation = ({ isOpen }) => {
  return (
    <nav
      id="sidebar-navigation"
      aria-label="Main navigation"
      className="flex-1 overflow-y-auto px-3 py-4"
    >
      {isOpen && (
        <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-teal-700">
          Your workspace
        </p>
      )}

      <ul className="space-y-3">
        {navigation.map((page) => (
          <li key={page.id}>
            <Link
              to={page.path}
              title={page.name}
              aria-label={page.name}
              className={
                'group flex min-h-14 items-center rounded-2xl transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ' +
                (isOpen ? 'gap-3 px-3 ' : 'justify-center ') +
                (page.id === 5
                  ? 'bg-teal-700 text-white shadow-md hover:bg-teal-800'
                  : 'text-slate-700 hover:bg-white hover:text-teal-900 hover:shadow-sm')
              }
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-xl motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110"
              >
                {page.icon}
              </span>

              {isOpen && (
                <span className="whitespace-nowrap text-sm font-semibold">
                  {page.name}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
