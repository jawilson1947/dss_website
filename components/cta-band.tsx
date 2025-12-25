import Link from "next/link";

export function CTABand() {
  return (
    <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
      <h2 className="text-xl font-semibold tracking-tight">Ready to plan a secure, scalable deployment?</h2>
      <p className="mt-2 max-w-2xl text-slate-700">
        Schedule a consultation to discuss your access control and infrastructure needs.
      </p>
      <div className="mt-5">
        <Link href="/contact" className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
}
