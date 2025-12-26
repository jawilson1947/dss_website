import { ServiceCards } from "@/components/service-cards";
import { CTABand } from "@/components/cta-band";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <Image
              src="/images/dss-logo3.png"
              alt="Digital Support Systems Logo"
              width={225}
              height={155}
              className="mb-8 invert"
            />
            <p className="text-sm font-medium text-amber-500">Digital Support Systems, Inc.</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Secure, Scalable IP-Based Access Control & IT Infrastructure Solutions
            </h1>
            <p className="mt-4 text-slate-300">
              We deliver enterprise-grade Allegion / ISONAS IP-based access control and modern IT infrastructure for new and existing facilities—designed to be reliable, maintainable, and ready for growth.
            </p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl md:aspect-auto md:h-full">
            <Image
              src="/images/landing_glass_building.png"
              alt="Modern corporate headquarters"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <ServiceCards
          items={[
            {
              title: "Access Control (Allegion / ISONAS)",
              body: "Network-native door control, architecture, deployment, and lifecycle support.",
              href: "/services/access-control"
            },
            {
              title: "IT Infrastructure Design",
              body: "Network, cabling, fiber, server/cloud integration—engineered for performance and scale.",
              href: "/services/it-infrastructure"
            },
            {
              title: "Integration & Support",
              body: "Practical integration and ongoing support so systems remain dependable long-term.",
              href: "/contact"
            }
          ]}
        />
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-xl font-semibold tracking-tight text-white">Why clients choose us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>IP-first mindset with real network expertise</li>
            <li>Scalable design across doors, buildings, and sites</li>
            <li>Clear documentation and maintainable deployments</li>
            <li>Single partner from concept through support</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-xl font-semibold tracking-tight text-white">Industries served</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Education & campuses</li>
            <li>Commercial & office facilities</li>
            <li>Churches & non-profits</li>
            <li>Institutional and multi-building sites</li>
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
