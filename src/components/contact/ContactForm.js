const ContactForm = ({ name, email, message, setName, setEmail, setMessage, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-800">What is on your mind?</h2>
      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="contact-name" className="mb-2 block font-medium text-slate-700">Your name</label>
          <input id="contact-name" type="text" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} required maxLength={100} placeholder="Your full name" className="w-full rounded-xl border border-slate-300 p-3 focus:outline-2 focus:outline-teal-700" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block font-medium text-slate-700">Email address</label>
          <input id="contact-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required maxLength={254} placeholder="you@example.com" className="w-full rounded-xl border border-slate-300 p-3 focus:outline-2 focus:outline-teal-700" />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block font-medium text-slate-700">Your message</label>
          <textarea id="contact-message" value={message} onChange={(event) => setMessage(event.target.value)} required maxLength={2000} rows={5} placeholder="Share a question or an idea..." className="w-full resize-y rounded-xl border border-slate-300 p-3 focus:outline-2 focus:outline-teal-700" />
        </div>
      </div>
      <button type="submit" className="mt-6 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">Preview message →</button>
    </form>
  );
};

export default ContactForm;
