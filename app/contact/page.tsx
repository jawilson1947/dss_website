"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honey: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", honey: "" });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Tell us a little about your project and we’ll follow up to schedule a consultation.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6">
          {/* Honeypot field - hidden */}
          <input
            name="honey"
            value={formData.honey}
            onChange={handleChange}
            type="text"
            className="hidden"
            autoComplete="off"
          />

          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Your name"
          />

          <label className="mt-4 block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="you@company.com"
          />

          <label className="mt-4 block text-sm font-medium">Project details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="What are you trying to accomplish?"
          />

          <div className="mt-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </div>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-green-600">
              Message sent successfully! We'll be in touch soon.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-600">
              Error: {errorMessage || "Failed to send message. Please try again."}
            </p>
          )}
        </form>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight">Direct contact</h2>
          <p className="mt-3 text-slate-700">Phone: ____________________________</p>
          <p className="mt-2 text-slate-700">Email: ____________________________</p>
          <p className="mt-2 text-slate-700">Location: ____________________________</p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-medium text-slate-900">Tip</p>
            <p className="mt-1">
              Add a short “What to expect” note: response time, consultation format, and what info helps you estimate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
