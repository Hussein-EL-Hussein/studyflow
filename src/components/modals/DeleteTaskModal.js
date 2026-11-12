const DeleteTaskModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
        <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-title"
            aria-describedby="delete-description"
            onKeyDown={(event) => {
                if (event.key === 'Escape') {
                    onCancel();
                }

                if (event.key === 'Tab') {
                    const buttons = event.currentTarget.querySelectorAll('button');
                    const firstButton = buttons[0];
                    const lastButton = buttons[buttons.length - 1];

                    if (event.shiftKey && document.activeElement === firstButton) {
                        event.preventDefault();
                        lastButton.focus();
                    } else if (!event.shiftKey && document.activeElement === lastButton) {
                        event.preventDefault();
                        firstButton.focus();
                    }
                }
            }}
            className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl"
        >
            <div
                aria-hidden="true"
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600"
            >
                !
            </div>

            <h2
                id="delete-title"
                className="mt-5 text-2xl font-bold text-slate-800"
            >
                Delete this task?
            </h2>

            <p
                id="delete-description"
                className="mt-3 text-slate-600"
            >
                This task will be permanently removed. This action cannot be undone.
            </p>

            <div className="mt-6 flex gap-3">
                <button
                    type="button"
                    autoFocus
                    onClick={() => onCancel()}
                    className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                    Cancel
                </button>

                <button
                    type="button"
                    onClick={() => onConfirm()}
                    className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                    Delete task
                </button>
            </div>
        </div>
    </div>
  );
};

export default DeleteTaskModal;
