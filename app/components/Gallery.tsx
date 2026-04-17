import Image from 'next/image';
import Link from 'next/link';

const galleryItems = [
  { src: '/1.jpg', category: 'Campus', label: 'School Campus View' },
  { src: '/2.jpg', category: 'Learning', label: 'Students Learning' },
  { src: '/3.jpg', category: 'Events', label: 'School Event' },
  { src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80', category: 'Sports', label: 'Sports Activities' },
  { src: 'https://images.unsplash.com/photo-1427504494785-cddc0d312e60?auto=format&fit=crop&w=900&q=80', category: 'Arts', label: 'Art Program' },
  { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80', category: 'Learning', label: 'Science Class' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              📸 Campus Gallery
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Gallery Highlights</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              A quick selection of school life, activities, and special events. Visit the full gallery page for more photos.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800"
          >
            View Full Gallery
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-[2rem] bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-80 w-full">
                <Image src={item.src} alt={item.label} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="p-5">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
