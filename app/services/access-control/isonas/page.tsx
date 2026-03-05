import { CTABand } from "@/components/cta-band";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/isonas_hero_bg.png"
          alt="Modern building with glass facade"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white tracking-wide">ISONAS</h1>
            <p className="mt-4 text-2xl font-light text-slate-100">
              Makes access control IP simple.
            </p>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
              ISONAS was the first to design and manufacture a cutting-edge, IP-to-the-door solution that eliminates needless complexity—including control panels, drop-down wires, and separate power supplies. Our network-based systems offer a simpler, more flexible, and more cost-effective path to total security.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div>
          <h2 className="text-xl font-semibold text-white border-b border-slate-700 pb-2 mb-4">Our Products</h2>
          <ul className="space-y-2">
            <li><Link href="#reader-controllers" className="text-amber-500 hover:text-amber-400 font-medium">Reader controllers</Link></li>
            <li><Link href="#ip-bridge" className="text-amber-500 hover:text-amber-400 font-medium">IP bridge</Link></li>
            <li><Link href="#cloud-software" className="text-amber-500 hover:text-amber-400 font-medium">Cloud software</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white border-b border-slate-700 pb-2 mb-4">Applications</h2>
          <ul className="grid grid-cols-2 gap-2">
            <li className="text-slate-300">Health care</li>
            <li className="text-slate-300">Commercial</li>
            <li className="text-slate-300">High security</li>
            <li className="text-slate-300">Education</li>
          </ul>
        </div>
      </section>

      {/* Main Product Grid */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Sidebar Filters (Mock) */}
        <div className="hidden lg:block lg:col-span-1 space-y-6">
          <h3 className="text-lg font-semibold text-white">Filter</h3>
          <div className="border-t border-slate-800 pt-4">
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">Brand</div>
            <label className="flex items-center gap-2 text-slate-300">
              <input type="checkbox" checked readOnly className="rounded border-slate-600 bg-slate-800 text-amber-500 focus:ring-amber-500" />
              ISONAS
            </label>
          </div>
          <div className="border-t border-slate-800 pt-4">
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">Category</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="rounded border-slate-600 bg-slate-800 text-amber-500 focus:ring-amber-500" />
                Reader Controllers
              </label>
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="rounded border-slate-600 bg-slate-800 text-amber-500 focus:ring-amber-500" />
                Software
              </label>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: IP-Bridge */}
          <div id="ip-bridge" className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10">
            <div className="relative aspect-square w-full bg-white p-6">
              <Image
                src="/images/ip_bridge_hardware.png"
                alt="IP-Bridge 2.0 Hardware"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors">IP-Bridge 2.0</h3>
              <p className="mt-2 text-sm text-slate-400">
                Easily transition legacy systems to IP-based control without re-wiring.
              </p>
            </div>
          </div>

          {/* Card 2: Software */}
          <div id="cloud-software" className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10">
            <div className="relative aspect-square w-full bg-slate-800 p-6">
              <Image
                src="/images/pure_access_cloud_ui.png"
                alt="Pure Access Cloud Software UI"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors">Pure Access Cloud</h3>
              <p className="mt-2 text-sm text-slate-400">
                Manage access from anywhere with our fully hosted cloud-based software.
              </p>
            </div>
          </div>

          {/* Card 3: Reader Controller */}
          <div id="reader-controllers" className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10">
            <div className="relative aspect-square w-full bg-white p-6">
              <Image
                src="/images/reader_controller_device.png"
                alt="RC-04 Reader Controller"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors">RC-04 Reader Controller</h3>
              <p className="mt-2 text-sm text-slate-400">
                The next evolution in IP-based access control hardware. Sleek and powerful.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Resource & Contact CTA Section */}
      <section className="mt-20 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Looking for literature, training, videos and more?</h3>
            <p className="mt-3 text-slate-300">
              Explore the document library to find technical specifications, installation guides, and more.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/docs" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400">
              Go To Resources
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Let us help.</h3>
            <p className="mt-3 text-slate-300">
              Our team serves as an extension of yours. Reach out for a consultation on your custom access control solution.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
