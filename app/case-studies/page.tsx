import { CTABand } from "@/components/cta-band";

const cases = [
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
          <article key={c.title} className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-xl font-semibold tracking-tight">{c.title}</h2>
            <p className="mt-2 text-slate-700">{c.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              {c.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <CTABand />
    </>
  );
}
