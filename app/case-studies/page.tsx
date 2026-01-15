import { CTABand } from "@/components/cta-band";
import Link from "next/link";

const cases = [
  {
    title: "Oakwood Adventist Academy",
    summary: "State-of-the-art High School Building designed for full automation, distance learning, and internodal fiber.",
    href: "/case-studies/oakwood-adventist-academy",
    details: [
      "Challenge: Creating a fully automated, future-proof educational facility.",
      "Solution: Integrated building management, AV for distance learning, and fiber backbone.",
      "Technology: Building Automation, Fiber Optics, Smart Classrooms",
      "Outcome: A model interpretation of modern educational infrastructure."
    ]
  },
  {
    title: "Jenzabar Application Data Interface (JADI)",
    summary: "Seamless integration and data management for higher education ERP systems.",
    href: "/case-studies/jenzabar-application-data-interface",
    details: [
      "Challenge: Integrating legacy ERP data with modern web applications.",
      "Solution: Custom middleware interface (JADI) for secure data exchange.",
      "Technology: Jenzabar, SQL, API Development",
      "Outcome: Real-time data synchronization and improved administrative efficiency."
    ],
  },
  {
    title: "Multi-building Access Control Rollout",
    summary: "IP-based door control architecture with scalable deployment planning and clear documentation.",
    details: [
      "Challenge: ______________________________",
      "Solution: _______________________________",
      "Technology: Allegion / ISONAS, network design",
      "Outcome: ________________________________"
    ]
  },
  {
    title: "Infrastructure Modernization for Secure Systems",
    summary: "Network and cabling modernization to support security systems and business operations.",
    details: [
      "Challenge: ______________________________",
      "Solution: _______________________________",
      "Technology: Switching, VLAN design, fiber",
      "Outcome: ________________________________"
    ]
  }
];

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Case Studies</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        A few examples of how we approach secure, scalable deployments. Replace placeholders with your real projects as you publish them.
      </p>

      <div className="mt-8 grid gap-6">
        {cases.map((c) => (
          <div key={c.title} className="group relative">
            {c.href && <Link href={c.href} className="absolute inset-0 z-10"><span className="sr-only">View Case Study</span></Link>}
            <article className={`rounded-2xl border border-slate-200 p-8 transition-colors ${c.href ? 'group-hover:border-amber-500/50 group-hover:bg-slate-50' : ''}`}>
              <h2 className={`text-xl font-semibold tracking-tight ${c.href ? 'group-hover:text-amber-600' : ''}`}>{c.title}</h2>
              <p className="mt-2 text-slate-700">{c.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                {c.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>

      <CTABand />
    </>
  );
}
