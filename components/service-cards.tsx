import Link from "next/link";

type Card = { title: string; body: string; href: string };

export function ServiceCards({ items }: { items: Card[] }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {items.map((x) => (
        <Link key={x.href} href={x.href} className="rounded-2xl border border-slate-200 p-6 hover:border-slate-300">
          <h3 className="text-base font-semibold tracking-tight">{x.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{x.body}</p>
          <p className="mt-4 text-sm font-medium text-slate-900">Learn more →</p>
        </Link>
      ))}
    </div>
  );
}
