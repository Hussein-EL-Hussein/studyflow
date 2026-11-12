const MessagePreview = ({ draft, onClose }) => {
  return (
    <section className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8" aria-labelledby="preview-title">
      <h2 id="preview-title" className="text-xl font-bold text-teal-900">Your message preview</h2>
      <dl className="mt-5 space-y-4 text-slate-700">
        <div><dt className="text-sm font-bold text-teal-800">Name</dt><dd className="mt-1 break-words">{draft.name}</dd></div>
        <div><dt className="text-sm font-bold text-teal-800">Email</dt><dd className="mt-1 break-words">{draft.email}</dd></div>
        <div><dt className="text-sm font-bold text-teal-800">Message</dt><dd className="mt-1 whitespace-pre-wrap break-words leading-relaxed">{draft.message}</dd></div>
      </dl>
      <button type="button" onClick={onClose} className="mt-6 rounded-lg border border-teal-300 bg-white px-4 py-2 font-semibold text-teal-800 hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">Close preview</button>
    </section>
  );
};

export default MessagePreview;
