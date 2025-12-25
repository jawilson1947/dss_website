import { CTABand } from "@/components/cta-band";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">About Digital Support Systems, Inc.</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Digital Support Systems, Inc. is a solutions-focused technology partner specializing in IP-based access control and modern IT infrastructure.
        We help organizations design, deploy, and support systems that are secure, scalable, and built to perform in real-world environments.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">What we do best</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Allegion / ISONAS IP-based access control: architecture, deployment, and lifecycle support</li>
            <li>IT infrastructure design: networks, structured cabling planning, fiber design, and secure connectivity</li>
            <li>Systems integration: aligning physical security and IT layers into one dependable platform</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">How we work</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Discovery and requirements definition</li>
            <li>Clean architecture and documentation</li>
            <li>Implementation, testing, and handoff</li>
            <li>Support, expansion planning, and continuous improvement</li>
          </ul>
        </div>
      </div>

      <CTABand />
    </>
  );
}
