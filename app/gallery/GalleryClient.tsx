'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Link from 'next/link';

const galleryItems = [
  { id: 1, category: 'Campus', title: 'Morning assembly', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80' },
  { id: 2, category: 'Events', title: 'Cultural celebration', image: 'https://images.unsplash.com/photo-1515165562835-c12edd0ad2b8?auto=format&fit=crop&w=900&q=80' },
  { id: 3, category: 'Learning', title: 'Practical science lab', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80' },
  { id: 4, category: 'Campus', title: 'Sports practice', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=80' },
  { id: 5, category: 'Events', title: 'Award ceremony', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80' },
  { id: 6, category: 'Learning', title: 'Art workshop', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80' },
  { id: 7, category: 'Campus', title: 'Garden walk', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' },
  { id: 8, category: 'Events', title: 'Science fair', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80' },
  { id: 9, category: 'Learning', title: 'Group study', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80' },
];

const categories = ['All', 'Campus', 'Events', 'Learning'];

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = useMemo(
    () =>
      selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleItems.length < filteredItems.length;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setSelectedCategory(category);
              setVisibleCount(6);
            }}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${selectedCategory === category ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-[2rem] bg-white shadow-xl hover:-translate-y-1 transition">
            <div className="relative h-72 w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{item.category}</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-700 shadow-md">
          No photos found in this category yet.
        </div>
      )}

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-4 text-white font-semibold shadow-lg transition hover:bg-blue-800"
          >
            Load More
          </button>
        </div>
      )}

      <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <p className="text-slate-700">
          Looking for more images from our campus events or celebration days? Reach out through our{' '}
          <Link href="/contact" className="font-semibold text-blue-700 hover:text-blue-900">
            contact page
          </Link>{' '}
          for a personalised tour and photo highlights.
        </p>
      </div>
    </section>
  );
}
