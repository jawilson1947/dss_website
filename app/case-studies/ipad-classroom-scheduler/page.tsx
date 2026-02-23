import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "iPad Classroom Scheduler Case Study | Digital Support Systems",
    description: "Enterprise-Grade Room Management for Modern Educational Facilities using iPad & Android tablets."
};

export default function IPadClassroomSchedulerPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">Tablet-Based Classroom Scheduling System</h1>
                <p className="text-xl text-slate-400">
                    Enterprise-Grade Room Management for Modern Educational Facilities. Digital Support Systems designed and deployed a fully integrated, cloud-connected classroom scheduling platform built specifically for wall-mounted IOS iPads and Android tablets.
                </p>

                {/* Hero Image */}
                <div className="my-8 h-[500px]">
                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                        <Image
                            src="/images/ipad-scheduler.png"
                            alt="iPad Classroom Scheduler Display"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
                <div className="space-y-12">

                    {/* Project Overview */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Project Overview</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Digital Support Systems designed and deployed a fully integrated, cloud-connected classroom scheduling platform built specifically for wall-mounted tablets in educational environments. The solution combines native iPad/Android development, cloud infrastructure, and real-time database management to deliver a secure, scalable, and intuitive scheduling experience.
                            </p>
                            <p>
                                The system replaces paper schedules and disconnected booking tools with a modern, touch-enabled interface that provides instant room availability, booking control, and administrative oversight.
                            </p>
                        </div>
                    </section>

                    {/* The Challenge */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">The Challenge</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Educational institutions often struggle with:
                            </p>
                            <ul className="list-disc pl-6 text-slate-400 space-y-2">
                                <li>Double-booked classrooms</li>
                                <li>Lack of real-time visibility</li>
                                <li>Manual scheduling conflicts</li>
                                <li>Outdated paper-based systems</li>
                                <li>No centralized management</li>
                                <li>Poor user adoption due to complex interfaces</li>
                            </ul>
                            <p className="mt-4">The goal was to design a solution that was:</p>
                            <ul className="list-disc pl-6 text-slate-400 space-y-2">
                                <li>Simple for users</li>
                                <li>Powerful for administrators</li>
                                <li>Secure and cloud-based</li>
                                <li>Scalable across multiple buildings</li>
                                <li>Optimized for wall-mounted iPads</li>
                            </ul>
                        </div>
                    </section>

                    {/* The Solution */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">The Solution</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Digital Support Systems built a full-stack, enterprise-ready system consisting of:
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-amber-500">1️⃣ Native iPad and Android Interface</h3>
                                    <ul className="list-disc pl-6 text-slate-400 mt-2">
                                        <li>Built using Apple's SwiftUI and Android Jetpack Compose frameworks</li>
                                        <li>Optimized for kiosk mode</li>
                                        <li>Touch-friendly interface</li>
                                        <li>Real-time availability display</li>
                                        <li>Color-coded room status indicators</li>
                                        <li>Instant booking capability</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-amber-500">2️⃣ Cloud-Based Admin Portal (Next.js + React)</h3>
                                    <ul className="list-disc pl-6 text-slate-400 mt-2">
                                        <li>Web-based administrative dashboard</li>
                                        <li>Built with Next.js and React</li>
                                        <li>Secure authentication layer</li>
                                        <li>Event management and reporting tools</li>
                                        <li>Multi-room configuration</li>
                                        <li>User role management</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-amber-500">3️⃣ Backend & Database Infrastructure</h3>
                                    <ul className="list-disc pl-6 text-slate-400 mt-2">
                                        <li>Node.js API layer with REST architecture</li>
                                        <li>MySQL (Cloud SQL) for structured relational data</li>
                                        <li>Real-time database updates and conflict detection</li>
                                        <li>Secure encrypted connections</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-amber-500">4️⃣ Email & Notification Engine</h3>
                                    <ul className="list-disc pl-6 text-slate-400 mt-2">
                                        <li>SendGrid integration</li>
                                        <li>Booking confirmations and cancellations</li>
                                        <li>Administrative alerts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Security & Reliability */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Security & Reliability</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                The system was designed with enterprise-grade security and long-term scalability in mind:
                            </p>
                            <ul className="list-disc pl-6 text-slate-400 space-y-2">
                                <li>Environment-based secret management</li>
                                <li>Role-based authentication</li>
                                <li>Cloud-hosted infrastructure</li>
                                <li>HTTPS encryption</li>
                                <li>Controlled kiosk deployment</li>
                            </ul>
                        </div>
                    </section>

                    {/* Results */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Results</h2>
                        <div className="space-y-4 text-slate-300">
                            <ul className="list-disc pl-6 text-slate-400 space-y-2">
                                <li>✔ Eliminated double-bookings</li>
                                <li>✔ Increased room utilization visibility</li>
                                <li>✔ Reduced administrative overhead</li>
                                <li>✔ Modernized facility experience</li>
                                <li>✔ Scalable across campuses</li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Sidebar / Technical Stack */}
                <div className="hidden lg:block">
                    <div className="sticky top-24 space-y-6">
                        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Technical Stack</h3>
                            <ul className="space-y-3">
                                <li>
                                    <span className="text-sm font-medium text-white">iPad App</span>
                                    <p className="text-sm text-slate-400">SwiftUI</p>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-white">Web Portal</span>
                                    <p className="text-sm text-slate-400">Next.js + React</p>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-white">Backend</span>
                                    <p className="text-sm text-slate-400">Node.js (API Routes)</p>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-white">Database</span>
                                    <p className="text-sm text-slate-400">MySQL (Cloud SQL)</p>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-white">Hosting & Delivery</span>
                                    <p className="text-sm text-slate-400">Vercel & SendGrid</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
