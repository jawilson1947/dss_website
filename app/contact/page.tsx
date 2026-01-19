"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    location: "",
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
      setFormData({ name: "", email: "", message: "", phone: "", location: "", honey: "" });
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
        <form onSubmit={handleSubmit} className="contents">
          {/* Main contact form section */}
          <div className="rounded-2xl border border-slate-200 p-6">
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
          </div>

          {/* Additional details (Direct contact) section */}
          <div className="rounded-2xl border border-slate-200 p-6 h-fit">
            <h2 className="text-lg font-semibold tracking-tight">Additional details</h2>

            <label className="mt-4 block text-sm font-medium">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="(555) 555-5555"
            />

            <label className="mt-4 block text-sm font-medium">Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="City, State"
            />

            {/* Tip section removed as it makes less sense with inputs, or could be kept if desired. Removing for cleaner look as implied. */}
          </div>
        </form>
      </div>
    </>
  );
}
