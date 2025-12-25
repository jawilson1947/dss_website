import { CTABand } from "@/components/cta-band";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Access Control Solutions</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        We deliver enterprise-grade IP-based access control solutions built on Allegion and ISONAS technologies—designed for scalability, resilience,
        and real-time management across facilities of any size.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">What we deliver</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>System architecture and design</li>
            <li>New construction and retrofit deployments</li>
            <li>Cloud and on-prem access control</li>
            <li>Credential lifecycle management</li>
            <li>Ongoing support and system expansion</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">Outcomes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Reliable door control with clear audit trails</li>
            <li>Scalable growth across doors, buildings, and sites</li>
            <li>Reduced operational risk through documentation and standards</li>
          </ul>
        </div>
      </div>

      <CTABand />
    </>
  );
}
