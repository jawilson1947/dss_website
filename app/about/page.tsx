import { CTABand } from "@/components/cta-band";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">About Digital Support Systems, Inc.</h1>
          <p className="mt-4 text-slate-300">
            Digital Support Systems, Inc. is a solutions-focused technology partner specializing in IP-based access control and modern IT infrastructure.
            We help organizations design, deploy, and support systems that are secure, scalable, and built to perform in real-world environments.
          </p>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl md:aspect-square lg:aspect-video">
          <Image
            src="/images/modern_glass_building.png"
            alt="Modern corporate office building"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold tracking-tight text-white">What we do best</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Allegion / ISONAS IP-based access control: architecture, deployment, and lifecycle support</li>
            <li>IT infrastructure design: networks, structured cabling planning, fiber design, and secure connectivity</li>
            <li>Systems integration: aligning physical security and IT layers into one dependable platform</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold tracking-tight text-white">How we work</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Discovery and requirements definition</li>
            <li>Clean architecture and documentation</li>
            <li>Implementation, testing, and handoff</li>
            <li>Support, expansion planning, and continuous improvement</li>
          </ul>
        </div>
      </div>

      <CTABand />

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-lg font-semibold tracking-tight text-white">Contact Information</h2>
        <address className="mt-3 not-italic text-slate-300">
          <p className="font-medium text-white">Digital Support Systems, Inc.</p>
          <p>6275 University Drive, NW</p>
          <p>Huntsville, Alabama 35806</p>
          <div className="mt-4 space-y-1">
            <p>Tel: (256) 617-7295</p>
            <p>Fax: (866) 573-7557</p>
          </div>
        </address>
      </div>
    </>
  );
}
