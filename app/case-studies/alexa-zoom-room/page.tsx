import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Alexa controlled \"Zoom Room\" by Shure Technologies Case Study | Digital Support Systems",
    description: "Enterprise-Grade Hybrid Meeting Capabilities for Modern Boardrooms."
};

export default function AlexaZoomRoomPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">Alexa controlled &quot;Zoom Room&quot; by Shure Technologies</h1>
                <p className="text-xl text-slate-400">
                    A network-centric AV-over-IP Zoom Room design, built around Dante-enabled audio processing, dual-display visual presentation, and professional-grade camera capture.
                </p>

                {/* Hero Image */}
                <div className="my-8 h-[500px]">
                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                        <Image
                            src="/images/zoom-room.png"
                            alt="Zoom Room Hero Setup"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
                <div className="space-y-12">

                    {/* System Architecture Overview */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">System Architecture Overview</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                The system is a network-centric AV-over-IP Zoom Room design that leverages the best-in-class Dante-enabled audio processing ecosystem by Shure, alongside a dual-display visual presentation setup, and professional-grade camera capture.
                            </p>
                            <p>
                                The architecture leverages a structured network backbone: a central switch connecting the microphone, speaker, DSP, and Zoom PC to provide a clean, scalable AV-over-IP design that reduces analog cabling and provides enterprise-level reliability.
                            </p>
                        </div>
                    </section>

                    {/* Core Components */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Core Components</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                This enterprise-ready system consists of:
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-amber-500">🎥 Video Capture & Displays</h3>
                                    <ul className="list-disc pl-6 text-slate-400 mt-2">
                                        <li><strong>Poly E70 4K Dual-Lens Camera:</strong> Professional-grade intelligent PTZ camera with AI-driven speaker tracking, automatic framing, and USB connectivity.</li>
                                        <li><strong>Dual 55” Displays:</strong> Positioned at the front of the room. One display for remote participants (gallery view) and the second for shared content and presentations.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-amber-500">🎤 Audio System (Dante-Based)</h3>
                                    <ul className="list-disc pl-6 text-slate-400 mt-2">
                                        <li><strong>Shure MCA902 Microphone:</strong> Ceiling or table-mounted solution with beamforming pickup for clarity and minimal background noise.</li>
                                        <li><strong>Shure MXN-C Network Speaker:</strong> Dante-enabled speaker to evenly distribute remote participant audio and eliminate echo.</li>
                                        <li><strong>Shure P300 IntelliMix Processor:</strong> Core digital signal processor providing acoustic echo cancellation, automatic mixing, noise reduction, and Dante routing.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-amber-500">🖥 Compute & Control Interface</h3>
                                    <ul className="list-disc pl-6 text-slate-400 mt-2">
                                        <li><strong>Zoom Room Compute Platform:</strong> Dedicated PC running Zoom Room software, interfacing with the Poly E70, Shure P300, and dual displays.</li>
                                        <li><strong>iPad Zoom Room Controller:</strong> Mounted on the conference table for one-touch meeting start, room scheduling, and camera control.</li>
                                        <li><strong>Echo Dot:</strong> Auxiliary device for voice assistant control and smart environmental integration.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* System Design Philosophy */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">System Design Philosophy</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                The Zoom Room solution reflects several strategic principles:
                            </p>
                            <ul className="list-disc pl-6 text-slate-400 space-y-2">
                                <li><strong>Simplicity for End Users:</strong> One-touch start via iPad and Alexa integration.</li>
                                <li><strong>Enterprise Audio Quality:</strong> Shure IntelliMix DSP ensures professional sound.</li>
                                <li><strong>AI-Driven Video Intelligence:</strong> Poly E70 automatically frames speakers.</li>
                                <li><strong>Scalable AV-over-IP Architecture:</strong> Dante network allows expansion.</li>
                                <li><strong>Professional Presentation Environment:</strong> Dual 55&quot; displays support hybrid collaboration.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Results */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Project Outcome</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Oakwood University Church, Huntsville, Alabama implemented a fully integrated Zoom Room solution designed to deliver enterprise-grade hybrid meeting capabilities. The system features a Poly E70 4K intelligent camera, dual 55-inch displays, and a Dante-based Shure digital audio ecosystem powered by the IntelliMix P300 processor. Controlled via an intuitive iPad interface, the solution enables seamless hybrid collaboration while maintaining broadcast-quality audio and professional visual presence.
                            </p>
                        </div>
                    </section>

                    {/* Video Overview */}
                    <section className="space-y-4 pt-8 border-t border-slate-800">
                        <h2 className="text-2xl font-semibold text-white">Video Demonstration</h2>
                        <div className="space-y-4 text-slate-300">
                            <div className="overflow-hidden rounded-xl border border-slate-800 bg-black">
                                <video controls className="w-full aspect-video">
                                    <source src="/images/ouc-zoom-project.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <p className="mt-2 text-sm text-slate-400 italic">
                                Video: Oakwood University Church Zoom Room Demonstration
                            </p>
                        </div>
                    </section>

                </div>

                {/* Sidebar / Business Impact */}
                <div className="hidden lg:block">
                    <div className="sticky top-24 space-y-6">
                        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Business Impact</h3>
                            <ul className="space-y-4">
                                <li>
                                    <span className="text-sm font-medium text-amber-500">Professional presence</span>
                                    <p className="text-sm text-slate-300 mt-1">Strengthens church&apos;s digital engagement</p>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-amber-500">Clear audio</span>
                                    <p className="text-sm text-slate-300 mt-1">Reduces meeting fatigue</p>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-amber-500">Reliable connectivity</span>
                                    <p className="text-sm text-slate-300 mt-1">Fewer technical disruptions</p>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-amber-500">Scalable architecture</span>
                                    <p className="text-sm text-slate-300 mt-1">Future-ready investment</p>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-amber-500">Simple operation</span>
                                    <p className="text-sm text-slate-300 mt-1">Reduces IT dependency</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
