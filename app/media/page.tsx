import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media Channel - Shri Rama Prasad Singh Shiksha Sansthan',
  description: 'Watch school videos sorted by activity, date, and highlight. Follow our media channel for the latest campus updates.',
};

const videos = [
  {
    id: 'ysz5S6PUM-U',
    title: 'School Annual Day Highlights',
    date: '2026-03-10',
    activity: 'Cultural performances and awards night',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Science Lab Showcase',
    date: '2026-02-18',
    activity: 'Interactive experiments and student projects',
  },
  {
    id: 'J---aiyznGQ',
    title: 'Sports Meet Celebration',
    date: '2026-01-26',
    activity: 'Athletics, teamwork, and champion moments',
  },
  {
    id: 'L_jWHffIx5E',
    title: 'Art & Culture Day',
    date: '2025-12-05',
    activity: 'Creative workshops and cultural display',
  },
];

export default function MediaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Media Channel</p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight">Social Media & Video Library</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100">
              Browse our latest video stories and activities, arranged by name, date, and event highlight.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {videos.map((video) => (
              <article key={video.id} className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
                <div className="relative aspect-video bg-slate-900">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{video.date}</p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-900">{video.title}</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">Activity: {video.activity}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
            <p className="text-lg text-slate-700">
              Want more videos? Follow our school channel to see teacher-led lessons, cultural celebrations, sports days and student showcases. This feed is crafted to feel like a media channel with easy-to-scan video stories.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
