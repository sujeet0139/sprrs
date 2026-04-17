'use client';

import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
              📞 Contact Admissions
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold font-poppins">Ready to visit our campus or start admission?</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
              Get a personal tour, ask about fees, or receive help with the application process. Our admissions team is ready to assist you.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg transition hover:bg-amber-300">
              Book a Visit
            </Link>
            <a href="/brochure.pdf" className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white border border-white/20 transition hover:bg-white/20">
              Download Brochure
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
