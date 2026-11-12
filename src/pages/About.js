import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard.js';
import aboutValues from '../data/aboutValues.js';

const About = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
      <section className="rounded-3xl border border-teal-100 bg-linear-to-br from-white to-teal-100 p-6 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-700">About StudyFlow</p>
        <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">More clarity.<br />One task at a time.</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-slate-600">StudyFlow is a personal study planner for students who want a simpler way to organize assignments and follow their progress. It brings everyday study tasks into one calm, easy-to-use space.</p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-bold text-teal-700">The problem</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-800">Too many notes. No clear next step.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">When assignments and deadlines are spread across notebooks, messages, and memory, it can be hard to see what still needs to be done. Planning should help you focus, not become another complicated task.</p>
        </div>
        <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6 sm:p-8">
          <p className="text-sm font-bold text-teal-700">Our approach</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-800">Keep the essentials together.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Add a task with its course and due date, mark it complete when you finish, and remove it when it is no longer needed. StudyFlow is designed for individual students managing their own work.</p>
        </div>
      </section>

      <section aria-labelledby="about-values-title" className="mt-12">
        <h2 id="about-values-title" className="text-2xl font-bold text-slate-800">Built around your daily study routine</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {aboutValues.map((value) => (
            <FeatureCard key={value.id} feature={value} />
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-800">A note about your saved tasks</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Your plan is stored in this browser on this device. It is not synced to an account or another device. Clearing the site's browser data removes the saved tasks, and other people using the same browser profile can access them.</p>
        <Link to="/planner" className="mt-6 inline-block rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">Make your next step clear →</Link>
      </section>
    </main>
  );
};

export default About;
