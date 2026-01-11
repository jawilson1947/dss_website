import { CTABand } from "@/components/cta-band";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">IT Infrastructure Design & Development</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        We design and implement robust IT infrastructure that serves as the foundation for secure, high-performance operations.
        From network topology and structured cabling to server and cloud integration, our solutions are engineered for reliability and scalability.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">Services</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Network and fiber design</li>
            <li>Structured cabling systems planning</li>
            <li>Server, virtualization, and cloud integration</li>
            <li>Security-first infrastructure architecture</li>
            <li>Documentation and lifecycle planning</li>
            <li>
              <Link href="/technology-plan" className="text-amber-600 hover:underline">
                New Building Information Technology plan
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">What you get</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Cleaner operations and fewer surprises</li>
            <li>Infrastructure that supports growth and new applications</li>
            <li>Standards-based deployments that are easy to maintain</li>
          </ul>
        </div>
      </div>

      <CTABand />
    </>
  );
}
