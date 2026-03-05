"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

// ─── Maintenance Plan Tiers ──────────────────────────────────────────────────
const MAINTENANCE_PLANS = [
    {
        id: "none",
        label: "No Maintenance Plan",
        description: "No annual support contract.",
        devicesRange: [0, Infinity],
    },
    {
        id: "basic",
        label: "Basic Plan",
        description: "Email support + 1 annual on-site inspection. Best for 1–10 devices.",
        devicesRange: [1, 10],
    },
    {
        id: "standard",
        label: "Standard Plan",
        description: "Priority phone & email + 2 on-site visits/year. Best for 11–25 devices.",
        devicesRange: [11, 25],
    },
    {
        id: "premium",
        label: "Premium Plan",
        description: "24/7 support + quarterly on-site visits + parts coverage. Best for 26+ devices.",
        devicesRange: [26, Infinity],
    },
];

// ─── Helper Components ───────────────────────────────────────────────────────
function SectionHeader({
    number,
    title,
    subtitle,
}: {
    number: string;
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="flex items-start gap-4 mb-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-slate-950">
                {number}
            </span>
            <div>
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                {subtitle && <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>}
            </div>
        </div>
    );
}

function NumInput({
    id,
    label,
    value,
    onChange,
}: {
    id: string;
    label: string;
    value: number;
    onChange: (v: number) => void;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-medium text-slate-300">
                {label}
            </label>
            <input
                id={id}
                type="number"
                min={0}
                value={value}
                onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
            />
        </div>
    );
}

function TextInput({
    id,
    label,
    value,
    onChange,
    type = "text",
    placeholder,
    required,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
    placeholder?: string;
    required?: boolean;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-medium text-slate-300">
                {label}
                {required && <span className="text-amber-500 ml-1">*</span>}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                required={required}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
            />
        </div>
    );
}

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function ProjectEstimatorPage() {
    // ── Contact
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactCompany, setContactCompany] = useState("");

    // ── 1. External Doors
    const [extSingle, setExtSingle] = useState(0);
    const [extDouble, setExtDouble] = useState(0);
    const [extAutomatic, setExtAutomatic] = useState(0);

    // ── 2. Internal Doors
    const [intSingle, setIntSingle] = useState(0);
    const [intDouble, setIntDouble] = useState(0);
    const [intAutomatic, setIntAutomatic] = useState(0);

    // ── 3. Specialized Access
    const [motorizedGates, setMotorizedGates] = useState(0);
    const [elevators, setElevators] = useState(0);
    const [otherSpecialized, setOtherSpecialized] = useState("");

    // ── 4. License
    const [addCloudLicense, setAddCloudLicense] = useState(true);

    // ── 5. Maintenance
    const [maintenancePlan, setMaintenancePlan] = useState("none");

    // ── Submission state
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // ── Derived calculations
    const totalDoors = useMemo(
        () => extSingle + extDouble + extAutomatic + intSingle + intDouble + intAutomatic,
        [extSingle, extDouble, extAutomatic, intSingle, intDouble, intAutomatic]
    );

    const totalSpecialized = useMemo(
        () => motorizedGates + elevators + (otherSpecialized.trim() ? 1 : 0),
        [motorizedGates, elevators, otherSpecialized]
    );

    const totalDevices = totalDoors + totalSpecialized;

    // ── Rule: any double doors → mag locks, motion sensors, REX
    const hasDoubleDoors = extDouble > 0 || intDouble > 0;

    // ── Suggested maintenance plan based on device count
    const suggestedPlan = useMemo(() => {
        if (totalDevices === 0) return "none";
        if (totalDevices <= 10) return "basic";
        if (totalDevices <= 25) return "standard";
        return "premium";
    }, [totalDevices]);

    // ── Available maintenance plans (filter by device count range)
    const availablePlans = useMemo(() => {
        return MAINTENANCE_PLANS.filter(
            (p) => p.id === "none" || totalDevices >= p.devicesRange[0] || p.id === suggestedPlan
        );
    }, [totalDevices, suggestedPlan]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const payload = {
            contactName,
            contactEmail,
            contactPhone,
            contactCompany,
            extSingle,
            extDouble,
            extAutomatic,
            intSingle,
            intDouble,
            intAutomatic,
            motorizedGates,
            elevators,
            otherSpecialized,
            totalDoors,
            totalDevices,
            addCloudLicense,
            maintenancePlan:
                MAINTENANCE_PLANS.find((p) => p.id === maintenancePlan)?.label ?? maintenancePlan,
            needsMagLocks: hasDoubleDoors,
            needsMotionSensor: hasDoubleDoors,
            needsRexDevice: hasDoubleDoors,
        };

        try {
            const res = await fetch("/api/estimator", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");
            setStatus("success");
        } catch (err: any) {
            setStatus("error");
            setErrorMessage(err.message);
        }
    };

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-white">Estimate Submitted!</h1>
                <p className="mt-4 text-slate-400 max-w-md leading-relaxed">
                    Thank you, <strong className="text-white">{contactName}</strong>. We've received your
                    access control estimate request and will follow up at{" "}
                    <strong className="text-amber-400">{contactEmail}</strong> shortly.
                </p>
                <div className="mt-10 flex gap-4">
                    <Link
                        href="/services/access-control"
                        className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm text-slate-300 hover:border-amber-500 hover:text-amber-500 transition-colors"
                    >
                        ← Back to Access Control
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
                    >
                        Contact Us Directly
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Page Header */}
            <div className="border-b border-slate-800 pb-8 mb-10">
                <Link
                    href="/services/access-control"
                    className="mb-4 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-amber-500 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Access Control
                </Link>
                <h1 className="text-4xl font-bold text-white mt-2">Project Estimator</h1>
                <p className="mt-3 text-slate-400 max-w-2xl leading-relaxed">
                    Answer the questions below to help us understand your access control requirements. We'll
                    use this information to prepare a tailored proposal for your project.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 pb-20">
                {/* ── Contact Information ─────────────────────────────────────── */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <SectionHeader number="0" title="Your Contact Information" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <TextInput id="contactName" label="Full Name" value={contactName} onChange={setContactName} required placeholder="Jane Smith" />
                        <TextInput id="contactEmail" label="Email Address" type="email" value={contactEmail} onChange={setContactEmail} required placeholder="jane@company.com" />
                        <TextInput id="contactPhone" label="Phone Number" type="tel" value={contactPhone} onChange={setContactPhone} placeholder="(555) 555-5555" />
                        <TextInput id="contactCompany" label="Organization / Company" value={contactCompany} onChange={setContactCompany} placeholder="Acme Corp" />
                    </div>
                </div>

                {/* ── Section 1: External Doors ───────────────────────────────── */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <SectionHeader
                        number="1"
                        title="External Doors"
                        subtitle="Entrance and exit doors on the exterior of the building."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <NumInput id="extSingle" label="1.1 — Single Doors" value={extSingle} onChange={setExtSingle} />
                        <NumInput id="extDouble" label="1.2 — Double Doors" value={extDouble} onChange={setExtDouble} />
                        <NumInput id="extAutomatic" label="1.3 — Automatic Doors" value={extAutomatic} onChange={setExtAutomatic} />
                    </div>
                </div>

                {/* ── Section 2: Internal Doors ───────────────────────────────── */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <SectionHeader
                        number="2"
                        title="Internal Doors"
                        subtitle="Interior doors within the facility that require access control."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <NumInput id="intSingle" label="2.1 — Single Doors" value={intSingle} onChange={setIntSingle} />
                        <NumInput id="intDouble" label="2.2 — Double Doors" value={intDouble} onChange={setIntDouble} />
                        <NumInput id="intAutomatic" label="2.3 — Automatic Doors" value={intAutomatic} onChange={setIntAutomatic} />
                    </div>
                </div>

                {/* ── Section 3: Specialized Access ──────────────────────────── */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <SectionHeader
                        number="3"
                        title="Specialized Access"
                        subtitle="Non-door access points that require access control hardware."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <NumInput id="motorizedGates" label="3.1 — Motorized Gates" value={motorizedGates} onChange={setMotorizedGates} />
                        <NumInput id="elevators" label="3.2 — Elevators" value={elevators} onChange={setElevators} />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="otherSpecialized" className="text-sm font-medium text-slate-300">
                            3.3 — Other Specialized Access
                        </label>
                        <p className="text-xs text-slate-500 mt-0.5 mb-2">
                            Describe any other access points not listed above (e.g., turnstiles, parking barriers).
                        </p>
                        <textarea
                            id="otherSpecialized"
                            rows={3}
                            value={otherSpecialized}
                            onChange={(e) => setOtherSpecialized(e.target.value)}
                            placeholder="Describe any additional specialized access points&hellip;"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                        />
                    </div>
                </div>

                {/* ── Section 4: Totals + License ─────────────────────────────── */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <SectionHeader
                        number="4"
                        title="ISONAS Pure Access Cloud License"
                        subtitle="Summary of access points and software licensing."
                    />

                    {/* Live summary table */}
                    <div className="mb-6 rounded-xl border border-slate-700 bg-slate-800/60 p-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                            4.1–4.2 · Device Summary
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                            {[
                                { label: "External Doors", value: extSingle + extDouble + extAutomatic },
                                { label: "Internal Doors", value: intSingle + intDouble + intAutomatic },
                                { label: "Specialized", value: totalSpecialized },
                                { label: "Total Devices", value: totalDevices, highlight: true },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className={`rounded-xl p-4 ${item.highlight
                                            ? "bg-amber-500/20 border border-amber-500/40"
                                            : "bg-slate-900 border border-slate-700"
                                        }`}
                                >
                                    <div
                                        className={`text-3xl font-bold ${item.highlight ? "text-amber-400" : "text-white"}`}
                                    >
                                        {item.value}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* License toggle */}
                    <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-5 hover:border-amber-500/50 transition-colors">
                        <input
                            type="checkbox"
                            checked={addCloudLicense}
                            onChange={(e) => setAddCloudLicense(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-amber-500 focus:ring-amber-500"
                        />
                        <div>
                            <span className="font-semibold text-white">
                                Add ISONAS Pure Access Cloud License
                            </span>
                            <p className="mt-1 text-sm text-slate-400">
                                Includes cloud-hosted access management software supporting all{" "}
                                <span className="text-white font-medium">{totalDevices}</span> enrolled devices.
                                Pricing based on total device count.
                            </p>
                        </div>
                    </label>
                </div>

                {/* ── Section 5: Maintenance Plans ────────────────────────────── */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <SectionHeader
                        number="5"
                        title="Annual Maintenance Plan"
                        subtitle={
                            totalDevices > 0
                                ? `Based on ${totalDevices} total devices, the ${MAINTENANCE_PLANS.find((p) => p.id === suggestedPlan)?.label
                                } is recommended.`
                                : "Select an annual support and maintenance plan."
                        }
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {MAINTENANCE_PLANS.map((plan) => {
                            const isSuggested = plan.id === suggestedPlan && totalDevices > 0;
                            const isSelected = maintenancePlan === plan.id;
                            return (
                                <label
                                    key={plan.id}
                                    className={`relative flex cursor-pointer flex-col rounded-xl border p-5 transition-all ${isSelected
                                            ? "border-amber-500 bg-amber-500/10"
                                            : "border-slate-700 bg-slate-800/60 hover:border-slate-600"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="maintenancePlan"
                                        value={plan.id}
                                        checked={isSelected}
                                        onChange={() => setMaintenancePlan(plan.id)}
                                        className="sr-only"
                                    />
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-white">{plan.label}</span>
                                        <div className="flex gap-2">
                                            {isSuggested && (
                                                <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-slate-950">
                                                    Recommended
                                                </span>
                                            )}
                                            {isSelected && (
                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-slate-950">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                                </label>
                            );
                        })}
                    </div>
                </div>

                {/* ── Section 6: Hardware Add-Ons (double doors rule) ─────────── */}
                {hasDoubleDoors && (
                    <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-8">
                        <SectionHeader
                            number="6"
                            title="Required Hardware Add-Ons"
                            subtitle="Your project includes double doors. The following hardware will be required."
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    ),
                                    label: "Magnetic Locks",
                                    desc: "Fail-safe electromagnetic lock for each leaf of a double door.",
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ),
                                    label: "Motion Sensors",
                                    desc: "Detects occupancy on the secure side to prevent door holdback.",
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    label: "REX Devices",
                                    desc: "Request-to-exit push paddle or sensor for safe egress.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex gap-4 rounded-xl border border-amber-500/30 bg-slate-900 p-5"
                                >
                                    <div className="shrink-0 text-amber-500">{item.icon}</div>
                                    <div>
                                        <div className="font-semibold text-white">{item.label}</div>
                                        <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-amber-400/80">
                            * Quantities will be determined during the consultation phase based on exact double-door counts.
                        </p>
                    </div>
                )}

                {/* ── Section 7: Submit ────────────────────────────────────────── */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <SectionHeader
                        number="7"
                        title="Submit Your Estimate Request"
                        subtitle="Review your selections above, then click Submit. We'll follow up with a detailed proposal."
                    />

                    {/* Quick summary before submit */}
                    <div className="mb-6 rounded-xl border border-slate-700 bg-slate-800/60 p-5 text-sm space-y-1.5 text-slate-300">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                            <span className="text-slate-500">Total doors</span>
                            <span className="text-white font-medium">{totalDoors}</span>
                            <span className="text-slate-500">Specialized access points</span>
                            <span className="text-white font-medium">{totalSpecialized}</span>
                            <span className="text-slate-500">Total devices</span>
                            <span className="text-amber-400 font-semibold">{totalDevices}</span>
                            <span className="text-slate-500">Cloud license</span>
                            <span className="text-white font-medium">{addCloudLicense ? "Yes" : "No"}</span>
                            <span className="text-slate-500">Maintenance plan</span>
                            <span className="text-white font-medium">
                                {MAINTENANCE_PLANS.find((p) => p.id === maintenancePlan)?.label ?? "—"}
                            </span>
                            {hasDoubleDoors && (
                                <>
                                    <span className="text-slate-500">Hardware add-ons</span>
                                    <span className="text-amber-400 font-medium">Mag locks, Motion sensors, REX</span>
                                </>
                            )}
                        </div>
                    </div>

                    {status === "error" && (
                        <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                            {errorMessage || "Failed to submit. Please try again."}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === "submitting" || !contactName || !contactEmail}
                        className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? (
                            <>
                                <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                </svg>
                                Submitting&hellip;
                            </>
                        ) : (
                            <>
                                Submit Estimate Request
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </>
                        )}
                    </button>
                    {(!contactName || !contactEmail) && (
                        <p className="mt-2 text-xs text-slate-500">
                            Please fill in your name and email address to submit.
                        </p>
                    )}
                </div>
            </form>
        </>
    );
}
