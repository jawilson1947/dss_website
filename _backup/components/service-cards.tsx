import Link from "next/link";

type Card = { title: string; body: string; href: string };

export function ServiceCards({ items }: { items: Card[] }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {items.map((x) => (
        <Link key={x.href} href={x.href} className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-amber-500/50">
          <h3 className="text-base font-semibold tracking-tight text-white">{x.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{x.body}</p>
          <p className="mt-4 text-sm font-medium text-amber-500 group-hover:text-amber-400">Learn more →</p>
        </Link>
      ))}
    </div>
  );
}
