import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services/access-control", label: "Access Control" },
  { href: "/services/it-infrastructure", label: "IT Infrastructure" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="border-b border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Digital Support Systems, Inc.
        </Link>

        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-slate-200 transition-colors hover:text-amber-500">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-500"
        >
          Schedule a Consultation
        </Link>
      </div>
    </header>
  );
}
