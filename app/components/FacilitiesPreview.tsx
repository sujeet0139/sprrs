'use client';

import Link from 'next/link';

const previewItems = [
  {
    title: 'Smart Classes',
    icon: '📱',
    text: 'Interactive classrooms that bring modern learning to every student.',
  },
  {
    title: 'Labs & Library',
    icon: '🔬',
    text: 'Science labs, computer labs and a quiet library for deeper learning.',
  },
  {
    title: 'Sports & Culture',
    icon: '⚽',
    text: 'A balanced campus with sports fields, events, and performing arts.',
  },
];

export default function FacilitiesPreview() {
  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🏫 Facilities Snapshot
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Campus Facilities Built for Growth</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Explore a safe, modern campus with smart classrooms, specialist labs, sports spaces, and vibrant activity zones.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {previewItems.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 font-poppins text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/facilities" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-4 text-white text-base font-semibold shadow-lg transition hover:bg-blue-800">
            View All Facilities
          </Link>
        </div>
      </div>
    </section>
  );
}
