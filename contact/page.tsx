"use client";

import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      phone: String(form.get("phone") || ""),
      website: String(form.get("website") || ""),
      message: String(form.get("message") || ""),
      honey: String(form.get("honey") || ""), // spam trap field
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong.");
        return;
      }

      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Tell us a little about your project and we’ll follow up to schedule a consultation.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 p-6">
          {/* Honeypot (hidden) */}
          <div className="hidden">
            <label>Leave this empty</label>
            <input name="honey" />
          </div>

          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Your name"
          />

          <label className="mt-4 block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="you@company.com"
          />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Company (optional)</label>
              <input
                name="company"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Organization"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone (optional)</label>
              <input
                name="phone"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="(555) 555-5555"
              />
            </div>
          </div>

          <label className="mt-4 block text-sm font-medium">Website (optional)</label>
          <input
            name="website"
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="https://"
          />

          <label className="mt-4 block text-sm font-medium">Project details</label>
          <textarea
            name="message"
            required
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            rows={6}
            placeholder="What are you trying to accomplish?"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {status === "sent" && (
            <p className="mt-3 text-sm text-slate-700">Thanks — your message was sent.</p>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-600">{error || "Failed to send."}</p>
          )}
        </form>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">Direct contact</h2>
          <p className="mt-3 text-slate-700">Email: info@digitalsupportsystems.com</p>
          <p className="mt-2 text-slate-700">Phone: ____________________________</p>
          <p className="mt-2 text-slate-700">Location: ____________________________</p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-medium text-slate-900">What to expect</p>
            <p className="mt-1">We typically respond within 1 business day to schedule a brief consultation.</p>
          </div>
        </div>
      </div>
    </>
  );
}
