import Link from "next/link";

export function CTABand() {
  return (
    <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-xl font-semibold tracking-tight text-white">Ready to plan a secure, scalable deployment?</h2>
      <p className="mt-2 max-w-2xl text-slate-300">
        Schedule a consultation to discuss your access control and infrastructure needs.
      </p>
      <div className="mt-5">
        <Link href="/contact" className="inline-flex rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-500">
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
}
