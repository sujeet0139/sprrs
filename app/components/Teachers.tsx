'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function Teachers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const teachers = [
    { name: 'R.K. Mishra', subject: 'Mathematics', experience: '15+ Years', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80' },
    { name: 'S. Verma', subject: 'Physics', experience: '12 Years', image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=400&q=80' },
    { name: 'A. Singh', subject: 'Chemistry', experience: '10 Years', image: 'https://images.unsplash.com/photo-1580894732444-8ecded790047?auto=format&fit=crop&w=400&q=80' },
    { name: 'P. Sharma', subject: 'Biology', experience: '8 Years', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'K. Patel', subject: 'English', experience: '14 Years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' },
    { name: 'M. Gupta', subject: 'Computer Science', experience: '9 Years', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80' },
    { name: 'L. Tiwari', subject: 'Hindi', experience: '20+ Years', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
    { name: 'V. Yadav', subject: 'Social Studies', experience: '11 Years', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80' },
  ];

  // Smooth horizontal scrolling for the arrow buttons
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="faculty" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              👨‍🏫 Our Faculty
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Expert Teachers</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Meet our dedicated and experienced educators who inspire and shape the future of our students every day.
            </p>
          </div>
          {/* Manual Scroll Controls */}
          <div className="flex gap-3 hidden sm:flex">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition transform hover:scale-105" aria-label="Scroll left">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition transform hover:scale-105" aria-label="Scroll right">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Scrollable Teacher Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-x-auto pb-10 pt-4 px-4 -mx-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 snap-center rounded-full overflow-hidden group cursor-pointer shadow-xl border-4 border-white transform transition-transform duration-300 hover:-translate-y-2 bg-slate-200"
            >
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/80 to-blue-800/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-4 rounded-full backdrop-blur-[2px]">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-1">{teacher.name}</h3>
                  <p className="text-amber-400 font-semibold text-sm md:text-base mb-2">{teacher.subject}</p>
                  <div className="w-12 h-0.5 bg-white/30 mx-auto my-2"></div>
                  <p className="text-blue-100 text-xs md:text-sm">{teacher.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link 
            href="/faculty" 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-8 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800"
          >
            <span>View All Faculty</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}