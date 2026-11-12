const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
        <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="success-title"
            aria-describedby="success-message"
            className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl"
        >
            <div
                aria-hidden="true"
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-3xl font-bold text-teal-700"
            >
                ✓
            </div>

            <h2
                id="success-title"
                className="mt-5 text-2xl font-bold text-slate-800"
            >
                Success!
            </h2>

            <p
                id="success-message"
                className="mt-3 text-slate-600"
            >
                {message}
            </p>

            <button
                type="button"
                autoFocus
                onClick={() => onClose()}
                onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                        onClose();
                    }
                }}
                className="mt-6 w-full rounded-xl bg-teal-700 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-2 focus:outline-offset-4 focus:outline-teal-700"
            >
                OK, got it!
            </button>
        </div>
    </div>
  );
};

export default SuccessModal;
