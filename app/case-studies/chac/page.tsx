import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Community Health Action Center Case Study | Digital Support Systems",
    description: "Professional multi-camera video production and unified conferencing system built to support health education, community outreach, and hybrid collaboration."
};

export default function CHACPage() {
    return (
        <div className="space-y-12">

            {/* Hero */}
            <div className="space-y-4">
                <nav className="text-sm text-slate-400">
                    <Link href="/case-studies" className="hover:text-amber-500">Case Studies</Link>
                    {" › "}Community Health Action Center
                </nav>
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                    Community Health Action Center
                </h1>
                <p className="max-w-3xl text-xl text-slate-400">
                    A professional multi-camera video production and unified conferencing system built
                    to support health education, community outreach, and hybrid collaboration. The
                    facility is equipped with broadcast-quality PTZ cameras, a hardware video switcher,
                    Zoom Rooms, and multi-platform conferencing capability — all tied together through
                    a structured AV control and distribution network.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                    {["AV Systems Integration", "Video Production", "Unified Communications", "Zoom Rooms", "Network Infrastructure", "PTZ Camera Systems"].map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <div className="relative col-span-2 aspect-[16/7] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                    <Image src="/images/CHAC1.jpg" alt="CHAC production space — wide view" fill className="object-cover" />
                </div>
                <a href="https://proav.roland.com/global/products/v-80hd/" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-slate-800 bg-slate-900 hover:border-amber-500/50 transition-colors">
                    <div className="relative aspect-[4/3]">
                        <Image src="/images/v-80hd_panel_top.jpg" alt="Roland V-80HD video switcher" fill className="object-cover" />
                    </div>
                    <div className="px-3 py-2 text-xs font-medium text-slate-300 group-hover:text-amber-400 transition-colors">
                        Roland V80HD Video Production Switcher
                    </div>
                </a>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                    <Image src="/images/sony-srg-a40(black).jpg" alt="Sony SRG-X40 PTZ camera" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                    <Image src="/images/ou_bt1.jpg" alt="Samsung 98-inch commercial display" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                    <Image src="/images/allen_heath_ah_qu_16.jpg" alt="Allen &amp; Heath Qu-16 mixer and audio rack" fill className="object-cover" />
                </div>
            </div>

            {/* Main Content + Sidebar */}
            <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
                <div className="space-y-12">

                    {/* Project Overview */}
                    <section className="space-y-4">
                        <h2 className="border-b border-slate-800 pb-3 text-2xl font-semibold text-white">Project Overview</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                The Community Health Action Center needed a flexible, professional-grade AV system
                                capable of supporting live video production, recorded health education content, and
                                hybrid conference sessions — all from a single unified infrastructure. The goal was
                                to deliver a system that non-technical staff could confidently operate day-to-day,
                                while providing the depth and reliability required for broadcast-quality output.
                            </p>
                            <p>
                                Digital Support Systems designed and deployed a complete end-to-end solution:
                                multi-camera PTZ production through a Roland V-80HD hardware switcher, bidirectional
                                audio routing between the video switcher and a digital mixer, a Zoom Rooms-enabled
                                Intel NUC for conferencing, five Samsung commercial displays for audience and
                                operator feedback, and a managed network backbone supporting all IP-controlled devices.
                            </p>
                        </div>
                    </section>

                    {/* Deployment Objectives */}
                    <section className="space-y-4">
                        <h2 className="border-b border-slate-800 pb-3 text-2xl font-semibold text-white">Deployment Objectives</h2>
                        <p className="text-slate-300">Key objectives were established during the pre-deployment planning phase:</p>
                        <ul className="list-disc space-y-2 pl-6 text-slate-400">
                            <li><strong className="text-slate-200">Multi-Camera PTZ Production:</strong> Deploy Sony SRG-X40 PTZ cameras with centralized joystick control (Sony RM-IP10) integrated into the Roland V-80HD for real-time program switching.</li>
                            <li><strong className="text-slate-200">Hardware Video Switching:</strong> Configure the Roland V-80HD as the central production hub, handling SDI/HDMI inputs, PGM/AUX outputs, audio embedding, and remote control via Roland RCS over IP.</li>
                            <li><strong className="text-slate-200">Zoom Rooms Conferencing:</strong> Deploy a licensed Zoom Rooms environment on an Intel NUC, fully integrated with the AV system for camera, audio, and display routing.</li>
                            <li><strong className="text-slate-200">Multi-Platform Conferencing:</strong> Support Microsoft Teams and Google Meet workflows from both the NUC (room system) and a presenter Dell laptop, with remote participant video routed back into the V-80HD as a switchable source.</li>
                            <li><strong className="text-slate-200">Professional Audio Routing:</strong> Establish bidirectional audio between the Roland V-80HD and an Allen &amp; Heath Qu-16 digital mixer via a Focusrite Scarlett 4i4 USB interface, with documented signal-chain protection against feedback loops.</li>
                            <li><strong className="text-slate-200">Commercial Display Infrastructure:</strong> Deploy five Samsung commercial displays (four 98&quot; BE98D-H and one 75&quot; BE75D-H) managed via Samsung MDC for centralized power, input, and display control.</li>
                            <li><strong className="text-slate-200">AV Distribution &amp; Control:</strong> Integrate an Extron IPCP Pro 250 control processor, Extron DA6 HD 4K distribution amplifier, and Magewell USB Capture HDMI 4K+ for signal distribution and capture.</li>
                            <li><strong className="text-slate-200">Managed Network Infrastructure:</strong> Build a dedicated AV subnet with a TP-Link PoE switch powering cameras and a Ubiquiti UniFi 7 Pro access point for wireless RCS and room management.</li>
                            <li><strong className="text-slate-200">iPad Room Management:</strong> Enable wireless control of Zoom Rooms and Roland RCS from an iPad, with domain-aware firewall rules to ensure reliable connectivity.</li>
                            <li><strong className="text-slate-200">Comprehensive Technical Documentation:</strong> Deliver a full client-handoff package including a master technical manual, multi-platform runbooks, network topology, credentials reference, and troubleshooting guides.</li>
                        </ul>
                    </section>

                    {/* Infrastructure Details */}
                    <section className="space-y-6">
                        <h2 className="border-b border-slate-800 pb-3 text-2xl font-semibold text-white">Infrastructure Details</h2>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-amber-500">Video Production — Roland V-80HD</h3>
                            <p className="text-slate-300">
                                The Roland V-80HD serves as the production heart of the system. It accepts up to
                                eight inputs across SDI and HDMI, with PGM and AUX outputs feeding the display
                                distribution network. Camera presets and switcher control are managed via Roland
                                RCS software, accessible from both a Windows workstation and an iPad over the AV
                                LAN. The remote participant video feed from the conferencing laptop routes through
                                a Blackmagic HDMI-to-SDI converter and enters the switcher on SDI Input 1, making
                                it a fully switchable production source.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-amber-500">PTZ Camera System — Sony SRG-X40</h3>
                            <p className="text-slate-300">
                                Sony SRG-X40 PTZ cameras provide wide-angle 4K coverage of the production space.
                                Cameras are PoE-powered from the TP-Link managed switch and controlled via the
                                Sony RM-IP10 joystick controller, with IP-based management available through each
                                camera&apos;s HTTP web interface. Preset positions for standard production shots were
                                programmed and stored on the RM-IP10.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-amber-500">Audio Routing — Qu-16 &amp; Focusrite Scarlett 4i4</h3>
                            <p className="text-slate-300">
                                The Allen &amp; Heath Qu-16 digital mixer handles all microphone inputs and
                                program audio for the room. A Focusrite Scarlett 4i4 USB audio interface bridges
                                the mixer and the Roland V-80HD, enabling the switcher to embed program audio into
                                its SDI/HDMI outputs and return conference audio back to the mixer for in-room
                                playback. Speaker output is driven by a Powersoft amplifier/DSP for professionally
                                tuned room audio.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-amber-500">Display Infrastructure — Samsung Commercial Displays</h3>
                            <p className="text-slate-300">
                                Five Samsung commercial displays — four 98&quot; BE98D-H units and one 75&quot; BE75D-H —
                                are deployed throughout the space for audience viewing, operator monitoring, and
                                confidence display. All five are managed centrally via Samsung MDC (Multiple
                                Display Control), allowing coordinated power control, input switching, and display
                                settings from a single workstation.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-amber-500">Network Infrastructure</h3>
                            <p className="text-slate-300">
                                All AV devices reside on a dedicated subnet. The TP-Link TL-SG1218MP 18-port PoE
                                managed switch provides wired connectivity and powers the PTZ cameras. A Ubiquiti
                                UniFi 7 Pro access point delivers the wireless coverage required for iPad-based
                                RCS and Zoom Rooms controller access. Domain-profile Windows Firewall rules were
                                explicitly configured on the Intel NUC to permit TCP port 9090 traffic for the
                                Zoom Rooms iPad controller.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-amber-500">Control &amp; Capture</h3>
                            <p className="text-slate-300">
                                An Extron IPCP Pro 250 control processor provides programmatic AV control
                                integration. An Extron DA6 HD 4K distribution amplifier handles HDMI signal
                                distribution to multiple displays. A Magewell USB Capture HDMI 4K+ captures
                                the program output from the switcher for recording or streaming workflows.
                            </p>
                        </div>
                    </section>

                    {/* Outcomes */}
                    <section className="space-y-6">
                        <h2 className="border-b border-slate-800 pb-3 text-2xl font-semibold text-white">Outcomes</h2>
                        <p className="text-slate-300">
                            The completed system gives the Community Health Action Center a professional,
                            operator-friendly AV production environment capable of supporting live events,
                            recorded content, and hybrid conferencing — all from a single unified infrastructure.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { icon: "🎥", title: "Broadcast-Quality Production", desc: "Multi-camera PTZ switching with hardware-grade reliability for live and recorded programs." },
                                { icon: "🤝", title: "Unified Conferencing", desc: "Zoom Rooms, Microsoft Teams, and Google Meet fully integrated into the AV signal chain." },
                                { icon: "🔊", title: "Professional Audio", desc: "Bidirectional audio routing between mixer and switcher with documented feedback-loop protection." },
                                { icon: "📋", title: "Client-Ready Documentation", desc: "Full technical manual, platform runbooks, network diagrams, and operator guides delivered at handoff." },
                            ].map((card) => (
                                <div key={card.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                                    <div className="mb-2 text-2xl">{card.icon}</div>
                                    <strong className="mb-1 block text-sm font-semibold text-white">{card.title}</strong>
                                    <span className="text-sm text-slate-400">{card.desc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Sidebar */}
                <div className="hidden lg:block">
                    <div className="sticky top-24 space-y-6">
                        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Project Scope</h3>
                            <ul className="space-y-4">
                                {[
                                    { label: "PTZ Camera System", desc: "Sony SRG-X40 cameras with joystick control" },
                                    { label: "Video Switching", desc: "Roland V-80HD 8-input production switcher" },
                                    { label: "Zoom Rooms", desc: "Intel NUC with licensed conferencing" },
                                    { label: "Audio System", desc: "Allen & Heath Qu-16 with Focusrite interface" },
                                    { label: "Display Network", desc: "Five Samsung commercial displays via MDC" },
                                    { label: "Managed Network", desc: "Dedicated AV subnet with PoE switching" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <span className="text-sm font-medium text-amber-500">{item.label}</span>
                                        <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
