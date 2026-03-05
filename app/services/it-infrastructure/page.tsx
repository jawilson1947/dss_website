import { CTABand } from "@/components/cta-band";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[420px] w-full overflow-hidden rounded-2xl mb-10">
        <Image
          src="/images/it-infrastructure.png"
          alt="Modern server room with illuminated rack equipment"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white tracking-wide">
              IT Infrastructure
            </h1>
            <p className="mt-4 text-xl font-light text-slate-200 leading-relaxed max-w-xl">
              Design &amp; Development — engineered for reliability, security, and scale.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-4 max-w-3xl text-slate-300">
        We design and implement robust IT infrastructure that serves as the foundation for secure, high-performance operations.
        From network topology and structured cabling to server and cloud integration, our solutions are engineered for reliability and scalability.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 p-6">
          <h2 className="text-lg font-semibold tracking-tight text-white">Services</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Network and fiber design</li>
            <li>Structured cabling systems planning</li>
            <li>Server, virtualization, and cloud integration</li>
            <li>Security-first infrastructure architecture</li>
            <li>Documentation and lifecycle planning</li>
            <li>
              <Link href="/technology-plan" className="text-amber-500 hover:underline">
                New Building Information Technology plan
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-700 p-6">
          <h2 className="text-lg font-semibold tracking-tight text-white">What you get</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
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
