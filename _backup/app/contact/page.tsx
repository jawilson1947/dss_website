export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Tell us a little about your project and we’ll follow up to schedule a consultation.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <form className="rounded-2xl border border-slate-200 p-6">
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Your name" />

          <label className="mt-4 block text-sm font-medium">Email</label>
          <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="you@company.com" />

          <label className="mt-4 block text-sm font-medium">Project details</label>
          <textarea className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" rows={6} placeholder="What are you trying to accomplish?" />

          <button
            type="button"
            className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Submit
          </button>

          <p className="mt-3 text-xs text-slate-500">
            Starter template form (no backend wired yet). We’ll connect this to email in the next step.
          </p>
        </form>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">Direct contact</h2>
          <p className="mt-3 text-slate-700">Phone: ____________________________</p>
          <p className="mt-2 text-slate-700">Email: ____________________________</p>
          <p className="mt-2 text-slate-700">Location: ____________________________</p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-medium text-slate-900">Tip</p>
            <p className="mt-1">Add a short “What to expect” note: response time, consultation format, and what info helps you estimate.</p>
          </div>
        </div>
      </div>
    </>
  );
}
