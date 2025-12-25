export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Digital Support Systems, Inc. All rights reserved.</p>
          <p className="text-slate-500">Access Control • IT Infrastructure • Systems Integration</p>
        </div>
      </div>
    </footer>
  );
}
