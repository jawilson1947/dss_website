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
      "Challenge: Enhance AR functionality and integrate Asterisk soft PBX with Student Billing module.",
      "Solution: Custom middleware interface (JADI) for secure data exchange.",
      "Technology: Jenzabar, SQL, API Development",
      "Outcome: Real-time data synchronization and improved administrative efficiency."
    ],
  },
  {
    title: "iPad Classroom Scheduler Project",
    summary: "Cloud-connected, centrally managed classroom scheduling platform for wall-mounted iPads.",
    href: "/case-studies/ipad-classroom-scheduler",
    details: [
      "Challenge: Develop centralized wall mounted classroom information display system for tablets",
      "Solution: Full-stack system with native iPad UI, Next.js admin portal, and MySQL backend.",
      "Technology: SwiftUI, Next.js, Node.js, MySQL (Cloud SQL), Vercel",
      "Outcome: Eliminated double-bookings and modernized the facility experience."
    ]
  },
  {
    title: "Alexa controled \"Zoom Room\" by Shure Technologies",
    summary: "Network-centric AV-over-IP Zoom Room built around Dante-enabled audio and AI-driven camera systems.",
    href: "/case-studies/alexa-zoom-room",
    details: [
      "Challenge: Deliver enterprise-grade hybrid meeting capabilities with broadcast-quality audio.",
      "Solution: Integrated Zoom Room using Shure IntelliMix DSP, Poly E70 4K camera, and dual 55\" displays.",
      "Technology: Shure Dante Ecosystem, Poly E70, Zoom Room PC, iPad Controller",
      "Outcome: Professional visual presence with one-touch seamless hybrid collaboration."
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
