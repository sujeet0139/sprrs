import Image from 'next/image';
import HeroBannerCarousel from './HeroBannerCarousel';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-8rem)] overflow-hidden text-white sm:min-h-[calc(100svh-8.5rem)] lg:min-h-[calc(100svh-9rem)]"
    >
      <HeroBannerCarousel />
      <div className="pointer-events-none absolute inset-0 bg-black/25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.16),_transparent_30%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_0.75fr]">
          <div className="max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-100">
                ⭐
              </span>
              Empowering future-ready learners since 1986
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Empowering Future Through Education
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              A premier school in Azamgarh committed to academic excellence, values-based leadership, and joyful
              learning for every child.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300"
              >
                Book a Visit
              </a>
              <a
                href="/brochure.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Download Brochure
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Enquire Now
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { title: '40+ Years', desc: 'Proven legacy of learning' },
                { title: '500+ Students', desc: 'Growing with strong community' },
                { title: 'Classes 1-12', desc: 'Complete school journey' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <p className="text-3xl font-bold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/2.jpg"
                  alt="Students learning together at SRPSS"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
            <div className="mt-8 rounded-3xl bg-slate-900/80 p-6 text-slate-100">
              <p className="font-semibold uppercase tracking-[0.2em] text-amber-300">
                Leadership through learning
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Discover a school environment that blends modern classrooms, strong values, and personalised
                mentorship to help every student thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

