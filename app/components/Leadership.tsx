'use client';

import Image from 'next/image';

export default function Leadership() {
  const leaders = [
    {
      name: 'Mrs. Kusham Lata',
      position: 'Principal',
      image: '/1.jpg',
      accent: 'from-blue-700 via-blue-600 to-cyan-500',
      message:
        'We believe every child deserves a learning environment built on care, discipline, and confidence. Our focus remains academic excellence with values, curiosity, and character at the center of every school day.'
    },
    {
      name: 'Mr. Krishna Kumar Singh',
      position: 'Director',
      image: '/2.jpg',
      accent: 'from-amber-500 via-orange-500 to-rose-500',
      message:
        'For decades, the school has grown by balancing strong tradition with modern opportunity. We continue to invest in infrastructure, teaching quality, and student development so families can trust the journey ahead.'
    },
    {
      name: 'Late Shri Raam Prasad Singh',
      position: 'Founder',
      image: '/3.jpg',
      accent: 'from-slate-800 via-slate-700 to-blue-700',
      message:
        'His vision was rooted in one conviction: education can transform families and communities. That founding spirit still guides our mission to make quality learning accessible, dignified, and deeply meaningful.'
    },
  ];

  return (
    <section id="leadership" className="relative overflow-hidden bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_48%,#f8fbff_100%)] py-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.18),_transparent_60%)]" />
      <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-amber-200/35 blur-3xl" />
      <div className="absolute -right-16 bottom-12 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Our Leadership
          </p>
          <h2 className="mt-6 font-poppins text-4xl font-bold text-slate-900 md:text-5xl">
            Guiding Vision, Daily Commitment
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Meet the leadership team shaping the school with academic purpose, long-term vision, and a deep commitment to student growth.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${leader.accent}`}></div>
              <div className="p-6 sm:p-8">
                <div className="mb-6 overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${leader.accent} opacity-60`} />
                  </div>
                </div>

                <div className="space-y-3">
                  <span className={`inline-flex rounded-full bg-gradient-to-r ${leader.accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white`}>
                    {leader.position}
                  </span>
                  <h3 className="font-poppins text-2xl font-bold text-slate-900">
                    {leader.name}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {leader.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-8 text-white shadow-[0_24px_60px_rgba(30,64,175,0.28)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Shared Vision</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-blue-50 md:text-xl">
            We are committed to building a school culture where strong academics, moral values, and future-ready learning work together. Every decision is guided by student wellbeing, parent trust, and long-term excellence.
          </p>
        </div>
      </div>
    </section>
  );
}