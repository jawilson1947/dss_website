import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Jenzabar Application Data Integration (JADI) | Digital Support Systems",
    description: "Custom Accounts Receivable and Student Financial Clearance customization for Jenzabar ERP."
};

export default function JadiCaseStudyPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">Jenzabar Application Data Integration (JADI)</h1>
                <p className="text-xl text-slate-400">
                    Accounts Receivable - Student Financial Clearance Workflow Customization for <a href="https://www.jenzabar.com" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Jenzabar</a> ERP Accounts Receivable Module.
                </p>

                {/* Hero Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 my-8">
                    <Image
                        src="/images/jen.png"
                        alt="Modern Enterprise Architecture"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
                <div className="space-y-12">

                    {/* Overview */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Project Overview</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                The Jenzabar Application Data Integration (JADI) Accounts Receivable - Student Financial Clearance Workflow Customization is a set of tools designed to assist the student accounts office. Jenzabar serves as the administrative data repository for the university, but customization was required to achieve complete functionality for the organization.
                            </p>
                            <p>
                                JADI was developed to provide the necessary tools to manage receivables through a collection of SQL views, table subsets, stored procedures, Visual Studio programs, maintenance plans, and VBA-activated Excel spreadsheets.
                            </p>
                        </div>
                    </section>

                    {/* Key Modules */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Key Capabilities</h2>
                        <div className="space-y-4 text-slate-300">
                            <ul className="list-disc pl-6 text-slate-400 space-y-2">
                                <li><strong>Instant Assessment:</strong> Immediate evaluation of all students' financial clearance viability for the current semester's enrollment sprint.</li>
                                <li><strong>Data Replication:</strong> Replicates an on-premises subset of key AR data to minimize latency and optimize response times in high-traffic environments.</li>
                                <li><strong>Operator Tools:</strong> Provides tools for immediate review of student financial status, adjustment, registration, and automatic archiving of transactions.</li>
                                <li><strong>ATA Synchronization:</strong> Synchronizes relevant data with the Automatic Telephone Attendant (ATA) allowing students to check status, pay via credit card, or request refunds by phone.</li>
                                <li><strong>Batch Processing:</strong> A smart Windows application for rapid posting of repetitive transactions (Universal Batch Posting Utility).</li>
                                <li><strong>Automated Monitoring:</strong> A Windows service that monitors the 80% automatic clearance utility, notifying customers of approval/revocation and alerting supervisors to anomalies.</li>
                                <li><strong>Statistical Analysis:</strong> Utilities that surface critical financial clearance statistics on demand to target responses and assist unqualified students.</li>
                            </ul>
                        </div>
                    </section>

                    {/* JADI Explained Video */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">JADI Explained</h2>
                        <div className="overflow-hidden rounded-xl border border-slate-800 bg-black">
                            <video controls className="w-full aspect-video">
                                <source src="/images/WhatIsJADI.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="text-sm text-slate-400 italic">
                            Video overview of the JADI system architecture and workflow.
                        </p>
                    </section>

                    {/* Technical Architecture */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Technical Architecture</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                The solution relies on a rigorous understanding of Microsoft SQL Server and integrates multiple components:
                            </p>

                            <h3 className="text-lg font-medium text-amber-500 pt-2">1. Database Schema</h3>
                            <ul className="list-disc pl-6 text-slate-400 space-y-1">
                                <li><strong>JADI:</strong> Tables, Views, Replication Modules, Maintenance Plans.</li>
                                <li><strong>OUSADB:</strong> Tables (tblStudent, tblOUSA), Views (VIEW_OURM, VIEW_OURM_FCA, VIEW_OURM_STATS), Stored Procedures.</li>
                            </ul>

                            <h3 className="text-lg font-medium text-amber-500 pt-2">2. .NET Services</h3>
                            <ul className="list-disc pl-6 text-slate-400 space-y-1">
                                <li>Financial Clearance Audit Service</li>
                                <li>ATA Data Sync</li>
                                <li>IVR Automatic Telephone Attendant (ATA) Monitor</li>
                            </ul>

                            <h3 className="text-lg font-medium text-amber-500 pt-2">3. Integration Points</h3>
                            <ul className="list-disc pl-6 text-slate-400 space-y-1">
                                <li><strong>Automatic Telephone Attendant:</strong> Linux Centos Server running Asterisk Dial Plan.</li>
                                <li><strong>Registration Sprint:</strong> Semester configuration via group shares and maintenance plans.</li>
                                <li><strong>Excel Integration:</strong> Financial Clearance Worksheets powered by VBA and SQL views.</li>
                            </ul>
                        </div>
                    </section>

                </div>

                {/* Sidebar */}
                <div className="hidden lg:block">
                    <div className="sticky top-24 space-y-6">
                        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Project Details</h3>
                            <dl className="space-y-4 text-sm">
                                <div>
                                    <dt className="text-slate-500">Developer</dt>
                                    <dd className="font-medium text-slate-200">Digital Support Systems, Inc.</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-500">Location</dt>
                                    <dd className="font-medium text-slate-200">Huntsville, Alabama</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-500">Platform</dt>
                                    <dd className="font-medium text-slate-200">Jenzabar ERP / MS SQL Server</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-500">Type</dt>
                                    <dd className="font-medium text-slate-200">Integration / Middleware</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
