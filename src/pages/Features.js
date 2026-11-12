import { Link } from 'react-router-dom';
import features from '../data/features.js';
import FeatureCard from '../components/FeatureCard.js';

const Features = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
      <section className="rounded-3xl border border-teal-100 bg-linear-to-br from-white via-teal-50 to-emerald-100 p-6 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-700">StudyFlow features</p>
        <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">A clearer plan.<br />A simpler study day.</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-slate-600">Four practical tools to help you organize your work and follow through. Everything starts with one task in My Planner.</p>
        <Link to="/planner" className="mt-7 inline-block rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">Try My Planner →</Link>
      </section>

      <section aria-labelledby="features-list-title" className="mt-12">
        <h2 id="features-list-title" className="text-2xl font-bold text-slate-800">What you can do today</h2>
        <p className="mt-3 text-slate-600">Simple actions that keep your study routine moving.</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-teal-900 p-6 text-white sm:p-8">
        <h2 className="text-xl font-bold">Start small. Keep going.</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-teal-100">Open My Planner, add a task with its course and due date, then mark it complete when you finish.</p>
        <Link to="/planner" className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-teal-900 transition hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Add your next task →</Link>
      </section>
      <p className="mt-6 text-sm leading-relaxed text-slate-500">Saved tasks stay on this device and browser profile. They do not sync between devices, and clearing this site's browser data removes them.</p>
    </main>
  );
};

export default Features;
