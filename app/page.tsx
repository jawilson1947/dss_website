import { ServiceCards } from "@/components/service-cards";
import { CTABand } from "@/components/cta-band";

export default function Page() {
  return (
    <>
      <section className="rounded-2xl border border-slate-200 p-10">
        <p className="text-sm font-medium text-slate-600">Digital Support Systems, Inc.</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Secure, Scalable IP-Based Access Control & IT Infrastructure Solutions
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          We deliver enterprise-grade Allegion / ISONAS IP-based access control and modern IT infrastructure for new and existing facilities—designed to be reliable, maintainable, and ready for growth.
        </p>

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
        <div className="rounded-2xl border border-slate-200 p-8">
          <h2 className="text-xl font-semibold tracking-tight">Why clients choose us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>IP-first mindset with real network expertise</li>
            <li>Scalable design across doors, buildings, and sites</li>
            <li>Clear documentation and maintainable deployments</li>
            <li>Single partner from concept through support</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 p-8">
          <h2 className="text-xl font-semibold tracking-tight">Industries served</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
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
