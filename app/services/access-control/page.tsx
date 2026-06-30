import Link from "next/link";

const subServices = [
  {
    href: "/services/access-control/isonas",
    label: "Isonas",
    description:
      "IP-to-the-door access control solutions that eliminate complexity. Explore ISONAS reader controllers, IP Bridge hardware, and Pure Access Cloud software.",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    href: "/services/access-control/project-estimator",
    label: "Project Estimator",
    description:
      "Get a tailored estimate for your access control project. Our estimating tool helps you scope hardware, software, and installation requirements quickly.",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 7h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    href: "https://vms.digitalsupportsystems.com",
    label: "VMS Portal",
    description:
      "Access our Video Management, Access Control Estimator, and Project Management platform. Manage estimates, track projects, and monitor your systems—all in one place.",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
];

export default function AccessControlPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-white tracking-tight">Access Control</h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Comprehensive access control solutions designed to protect your facility securely and simply. Choose a service below to learn more.
        </p>
      </section>

      {/* Sub-service cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20 max-w-6xl mx-auto">
        {subServices.map((service) => {
          const cardClasses =
            "group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/10";

          const cardInner = (
            <>
              <div className="mb-4 flex items-start justify-between">
                {service.icon}
                {service.external && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-slate-500 group-hover:text-amber-500 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
              <h2 className="text-2xl font-semibold text-white group-hover:text-amber-500 transition-colors">
                {service.label}
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed flex-1">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-amber-500 group-hover:gap-2 transition-all">
                {service.external ? "Open portal" : "Learn more"}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </>
          );

          return service.external ? (
            <a
              key={service.href}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              {cardInner}
            </a>
          ) : (
            <Link
              key={service.href}
              href={service.href}
              className={cardClasses}
            >
              {cardInner}
            </Link>
          );
        })}
      </section>
    </>
  );
}

