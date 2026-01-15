import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Oakwood Adventist Academy Case Study | Digital Support Systems",
    description: `High-Tech High School Building designed based on a new building technology plan `
};

export default function OakwoodCaseStudyPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">Oakwood Adventist Academy</h1>
                <p className="text-xl text-slate-400">
                    This High School Building opened on August 2020 is the most technologically advanced building on the Oakwood University Campus.
                    This State- of - the - art facility is designed for full automation, distance learning, internodal fiber, and cloud - based access control to name a few.
                    It employs Extreme's  Virtual Campus for it's corporate network with a dedicated broadband connection just for WiFi.
                </p>

                {/* Placeholder for Hero Image - using a generic placeholder if specific one isn't available, or can use a gradient until an image is provided */}
                {/* Hero Gallery Grid */}
                <div className="my-8 grid h-[500px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                    {/* Main Image - Sliding Doors */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 sm:col-span-2 lg:col-span-2 lg:row-span-2">
                        <Image
                            src="/images/OAA_SlidingDoor.jpeg"
                            alt="Oakwood Adventist Academy automated sliding doors"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    {/* Image 2 - Foyer */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                        <Image
                            src="/images/OAA_Foyer.jpeg"
                            alt="Modern Foyer"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    {/* Image 3 - Science Lab */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                        <Image
                            src="/images/OAA_ScienceLab.jpeg"
                            alt="Science Lab"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    {/* Image 4 - Classroom Display */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                        <Image
                            src="/images/OAA_ClassroomDisplay.jpeg"
                            alt="Classroom Technology"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    {/* Image 5 - Plaque */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                        <Image
                            src="/images/oaa_plaque.jpeg"
                            alt="Dedication Plaque"
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
                                Oakwood Adventist Academy required a robust technological foundation for their new high school building. The goal was to create a facility that supports modern educational needs including full automation, seamless distance learning capabilities, and high-speed internodal fiber connectivity.
                            </p>
                        </div>
                    </section>

                    {/* Deployment Objectives */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Deployment Objectives</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Key objectives for this deployment were drawn from the strategic planning documents.
                            </p>
                            <ul className="list-disc pl-6 text-slate-400 space-y-2">
                                <li><strong>Full Automation:</strong> Integration of building management systems for efficiency and control.</li>
                                <li><strong>Distance Learning:</strong> Classroom AV and network setups optimized for remote instruction.</li>
                                <li><strong>Internodal Fiber:</strong> High-bandwidth fiber backbone connecting all campus nodes.</li>
                                <li>On Premise VOIP Server using FreePBX</li>
                                <li>Cybernet PA/Intercom interoperbility</li>
                                <li>ISONAS Pure Access Cloud</li>
                                <li>Extreme Technologies Virtual Campus</li>
                                <li>Integrate Middle & Elementary School in a single Corporate Active Directory</li>
                                <li>Equip each classroom with dedicated, independent Distance Learning connectivity</li>
                                <li>Deploy Hanhwa Wavenet Video Surveillance System</li>
                                <li>Provide comprehensive backup and disaster recovery systems</li>
                                <li>Harden network infrastructure  with proven cybersecurity strategies</li>
                                <li>Deploy cloud managed Classroom Scheduling on wall-mounted iPad displays</li>
                            </ul>
                        </div>
                    </section>

                    {/* Infrastructure Details */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Infrastructure Details</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-amber-500">Wiring & Cabling</h3>
                                <p className="text-slate-300 mt-2">
                                    The wiring scheme was meticulously planned to support current and future needs.
                                </p>
                                <ul className="list-disc pl-6 text-slate-400 mt-2">
                                    <li>Detailed annotation schemes were used for all drops.</li>
                                    {/* Video Embed */}
                                    <li className="block pt-4">
                                        <div className="overflow-hidden rounded-xl border border-slate-800 bg-black">
                                            <video controls className="w-full aspect-video">
                                                <source src="/images/WiringAnnotationScheme.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <p className="mt-2 text-sm text-slate-400 font-style: italic">
                                            Video: Wiring Annotation Scheme Overview
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-amber-500">Server Rack Configuration</h3>
                                <p className="text-slate-300 mt-2">
                                    The server room is the heart of the network, designed for optimal cooling, power management, and accessibility.
                                </p>
                                <ul className="list-disc pl-6 text-slate-400 mt-2">
                                    <li className="list-none -ml-6 pt-4">
                                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                                            <Image
                                                src="/images/OAA Server Rack Scheme.png"
                                                alt="Server Rack Configuration Scheme"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Outcomes */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Outcomes</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                The completed facility now stands as a model for modern educational infrastructure, empowering students and faculty with the tools they need for success in a digital world.
                            </p>
                        </div>
                    </section>

                </div>

                {/* Sidebar / Downloads */}
                <div className="hidden lg:block">
                    <div className="sticky top-24 space-y-6">
                        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Reference Documents</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/docs/technology_plan.pdf" className="flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 hover:underline">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Technology Plan (PDF)
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
