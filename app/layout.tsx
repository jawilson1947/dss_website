import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Digital Support Systems, Inc.",
  description: "IP-based access control (Allegion / ISONAS) and IT infrastructure design & development."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-200">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
