import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "New Building Technology Plan | Digital Support Systems",
    description: "Comprehensive guide to creating a technology master plan for new construction projects."
};

export default function TechnologyPlanPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">New Building Technology Plan</h1>
                <p className="text-xl text-slate-400">
                    A strategic framework for integrating advanced technology infrastructure into modern construction projects.
                </p>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 my-8">
                    <Image
                        src="/images/technology-plan-hero.png"
                        alt="Digital blueprint of a modern smart building"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
                <div className="space-y-12">
                    {/* 1.0 Introduction */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">1.0 Introduction</h2>
                        <div className="space-y-4 text-slate-300">
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-amber-500">1.1 Overview</h3>
                                <p>
                                    In the rapidly evolving landscape of modern construction, a robust Building Technology Plan is no longer optional—it is essential. This document outlines the critical components required to future-proof a facility, ensuring it meets current operational needs while remaining adaptable to emerging technologies. From foundational electrical grids to sophisticated network topologies, every element plays a vital role in creating a smart, efficient, and secure environment.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-amber-500">1.2 Background</h3>
                                <p>
                                    Historically, technology systems were often treated as afterthoughts in the construction process, leading to costly retrofits and suboptimal performance. By integrating technology planning into the architectural specifications from day one, stakeholders can avoid these pitfalls, ensuring seamless integration of IT infrastructure, security systems, and building automation.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2.0 Executive Summary */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">2.0 Executive Summary</h2>
                        <div className="space-y-4 text-slate-300">
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-amber-500">2.1 Leadership and Vision</h3>
                                <p>
                                    Successful technology implementation requires strong leadership and a clear vision. This plan serves as a roadmap for decision-makers, aligning technology investments with organizational goals.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-amber-500">2.2 Vision Statement</h3>
                                <p>
                                    "To construct a facility that serves as a beacon of innovation, utilizing state-of-the-art technology to enhance productivity, security, and user experience, while maintaining operational efficiency and sustainability."
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-amber-500">2.3 Strategic Plan</h3>
                                <p>
                                    Our strategic approach involves a phased deployment of critical infrastructure, prioritizing high-impact systems such as high-speed connectivity and robust security frameworks, followed by the integration of user-centric technologies like digital signage and smart room scheduling.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3.0 Technology Planning */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">3.0 Technology Planning</h2>
                        <div className="space-y-4 text-slate-300">
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-amber-500">3.1 Electrical Grid Infrastructure</h3>
                                <p>
                                    A reliable power supply is the backbone of any technology plan. Specifications include redundant power sources, UPS deployment for critical systems, and clean power filtration to protect sensitive equipment.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-amber-500">3.2 Facility Requirements</h3>
                                <p>
                                    Physical spaces must be designed to accommodate technology needs. Key considerations include:
                                </p>
                                <ul className="list-disc pl-6 text-slate-400">
                                    <li><strong>Server Room Design:</strong> Dedicated climate control, fire suppression systems, and biometric access control.</li>
                                    <li><strong>Racks & Cabling:</strong> Standardized 19-inch racks with vertical and horizontal cable management.</li>
                                    <li><strong>Cooling:</strong> HVAC systems designed to handle the thermal load of high-density computing equipment.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-amber-500">3.3 Technology Objectives</h3>
                                <p>
                                    Primary objectives include achieving 99.99% network uptime, ensuring ubiquitous Wi-Fi 6 coverage, and implementing a zero-trust security architecture.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4.0 IT Infrastructure */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">4.0 IT Infrastructure</h2>
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 mb-6">
                            <Image
                                src="/images/it-infrastructure.png"
                                alt="Modern data center corridor"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                                <h3 className="mb-3 text-lg font-medium text-amber-500">4.1 Deployment Objectives</h3>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li><strong className="text-slate-200">User Community:</strong> Identity management and role-based access.</li>
                                    <li><strong className="text-slate-200">Desktop Management:</strong> MDM solutions for Windows, Apple, and Linux fleets.</li>
                                    <li><strong className="text-slate-200">Server Management:</strong> Virtualization strategy and patch management.</li>
                                    <li><strong className="text-slate-200">Disaster Recovery:</strong> Off-site backups and immutable snapshots.</li>
                                    <li><strong className="text-slate-200">Email & Wifi:</strong> Enterprise-grade exchange and mesh Wi-Fi networks.</li>
                                </ul>
                            </div>
                            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                                <h3 className="mb-3 text-lg font-medium text-amber-500">4.2 Network Topology</h3>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li><strong className="text-slate-200">Core Networking:</strong> High-availability routers and L3 core switches.</li>
                                    <li><strong className="text-slate-200">Edge Switching:</strong> PoE++ capability for powering APs and cameras.</li>
                                    <li><strong className="text-slate-200">Cybersecurity:</strong> Next-gen firewalls, IDS/IPS, and network segmentation.</li>
                                    <li><strong className="text-slate-200">Broadband:</strong> Dual-homed ISP connections for failover.</li>
                                    <li><strong className="text-slate-200">VOIP & Video:</strong> Dedicated VLANs for voice and video traffic to ensure QoS.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 5.0 Enterprise Wiring Spec */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">5.0 Enterprise Wiring Specifications</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                A structured cabling system is the nervous system of the building. We adhere to TIA/EIA standards to promote consistency and manageability.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="mb-2 font-medium text-slate-200">Network Wall Drops</h4>
                                    <ul className="grid gap-2 sm:grid-cols-2 text-sm text-slate-400">
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                            Standard Data: Cat 6 / Cat 6A cabling
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                            VOIP Outlets: Dedicated drops for handsets
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                            Fiber Optic: OM4/OM5 for backbone connections
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                            Smartboard & AV: High-bandwidth shielded drops
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="mb-2 font-medium text-slate-200">Specialized Drops</h4>
                                    <ul className="grid gap-2 sm:grid-cols-2 text-sm text-slate-400">
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                            Video Surveillance (CCTV)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                            Intercom & PA Systems
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                            Access Control (Readers/Locks)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                            Digital Signage (Visix, Meetingroom365)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6.0 Technical Readiness */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">6.0 Technical Readiness & Resilience</h2>
                        <div className="prose prose-invert max-w-none text-slate-300">
                            <p>
                                Ensuring technical readiness involves preparing for both routine operations and unexpected events.
                            </p>
                            <ul>
                                <li><strong>Electrical Grid Resilience:</strong> Implementation of backup generators capable of sustaining critical loads for 24+ hours. Comprehensive circuit analysis to prevent overloads.</li>
                                <li><strong>System Hardening:</strong> Physical wire hardening techniques to prevent tampering and environmental damage.</li>
                                <li><strong>Environmental Monitoring:</strong> IoT sensors for temperature, humidity, and water leak detection in critical infrastructure zones.</li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Sidebar Table of Contents or Quick Links */}
                <div className="hidden lg:block">
                    <div className="sticky top-24 space-y-6">
                        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Downloads</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/docs/Building_Technology_Plan.pdf" className="flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 hover:underline">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download Mind Map
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
