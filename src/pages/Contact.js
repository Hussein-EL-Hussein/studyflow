import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/contact/ContactForm.js';
import MessagePreview from '../components/contact/MessagePreview.js';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [draft, setDraft] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setError('Please fill in your name, email, and message.');
      setDraft(null);
      return;
    }
    setError('');
    setDraft({ name: name.trim(), email: email.trim(), message: message.trim() });
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
      <section className="rounded-3xl border border-teal-100 bg-linear-to-br from-white to-teal-100 p-6 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Contact StudyFlow</p>
        <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">Every good idea<br />starts a conversation.</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-slate-600">A question, a suggestion, or a small idea to make studying simpler? Start with a message.</p>
      </section>
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
        <aside className="rounded-2xl bg-teal-900 p-6 text-white sm:p-8">
          <span aria-hidden="true" className="text-3xl">💬</span>
          <h2 className="mt-4 text-xl font-bold">Make room for better ideas.</h2>
          <p className="mt-4 text-sm leading-relaxed text-teal-100">Think about what would make your daily study routine easier. A clear example is a great place to start.</p>
          <Link to="/features" className="mt-6 inline-block rounded-lg font-semibold text-white underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore current features →</Link>
        </aside>
        <div className="min-w-0 lg:col-span-2">
          <ContactForm name={name} email={email} message={message} setName={setName} setEmail={setEmail} setMessage={setMessage} onSubmit={handleSubmit} />
          {error !== '' && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-4 text-red-700">{error}</p>}
          <div role="status" className="sr-only">{draft !== null ? 'Your message preview is ready below the form.' : ''}</div>
          {draft !== null && <MessagePreview draft={draft} onClose={() => setDraft(null)} />}
        </div>
      </div>
    </main>
  );
};

export default Contact;
