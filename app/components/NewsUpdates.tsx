'use client';

import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image?: string;
  excerpt: string;
  content?: string;
}

export default function NewsUpdates() {
  const announcements = [
    {
      id: 1,
      title: 'Admission Open for Academic Year 2026-27',
      date: '2026-04-15',
      category: 'Admission',
      excerpt: 'Register now for classes 1 to 12 and secure your child’s place at SRPSS today.',
    },
    {
      id: 2,
      title: 'Summer Sports & Innovation Camp',
      date: '2026-04-10',
      category: 'Events',
      excerpt: 'A week of sports, science projects, and creative workshops for all students.',
    },
    {
      id: 3,
      title: 'Scholarship Applications Closing Soon',
      date: '2026-04-05',
      category: 'Scholarship',
      excerpt: 'Apply for merit and need-based scholarships before the deadline on May 10.',
    },
  ];

  return (
    <section id="noticeboard" className="py-20 md:py-24 bg-gradient-to-br from-amber-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            📌 Notice Board
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Latest Announcements</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Stay connected with the latest school notices and important updates for students and parents.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {announcements.map((item) => (
            <div key={item.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-4 text-sm font-semibold text-slate-500">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">{item.category}</span>
                <span>{new Date(item.date).toLocaleDateString('en-GB')}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
