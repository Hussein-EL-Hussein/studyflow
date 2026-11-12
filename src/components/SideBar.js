import { useState } from 'react';
import SidebarNavigation from './sidebar/SidebarNavigation.js';
import SidebarEncouragement from './sidebar/SidebarEncouragement.js';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <aside
      className={
        'sticky top-0 flex h-screen shrink-0 flex-col overflow-hidden border-r border-teal-100 bg-linear-to-b from-white via-teal-50 to-emerald-100 shadow-lg motion-safe:transition-all motion-safe:duration-300 ' +
        (isOpen ? 'w-48 sm:w-64' : 'w-20')
      }
    >
      {/* Brand and toggle */}
      <div className="flex h-24 shrink-0 items-center justify-between px-4">
        {isOpen && (
          <div>
            <p className="text-xl font-black tracking-tight text-teal-900">
              StudyFlow<span className="text-amber-500">.</span>
            </p>

            <p className="mt-1 text-xs text-teal-700">
              Your space to grow
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          aria-expanded={isOpen}
          aria-controls="sidebar-navigation"
          title={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-teal-100 bg-white text-xl text-teal-800 shadow-sm transition hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          <span aria-hidden="true">
            {isOpen ? '←' : '☰'}
          </span>
        </button>
      </div>

      {/* Navigation */}
      <SidebarNavigation isOpen={isOpen} />

      {/* Encouragement card */}
      <SidebarEncouragement isOpen={isOpen} />
    </aside>
  );
};

export default SideBar;
