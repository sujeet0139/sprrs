'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function TopperList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const toppers = [
    // Class 5 Toppers
    { name: 'Ananya Singh', className: 'Class 5', percentage: '98.4%', rank: 'Rank 1', image: '/img/student/1700540.jpg' },
    { name: 'Rohan Kumar', className: 'Class 5', percentage: '97.8%', rank: 'Rank 2', image: '/img/student/1700541.jpg' },
    { name: 'Mira Patel', className: 'Class 5', percentage: '97.2%', rank: 'Rank 3', image: '/img/student/1700546.jpg' },
    // Class 8 Toppers
    { name: 'Aditya Yadav', className: 'Class 8', percentage: '96.9%', rank: 'Rank 1', image: '/img/student/1700548.jpg' },
    { name: 'Sonal Verma', className: 'Class 8', percentage: '96.5%', rank: 'Rank 2', image: '/img/student/1700550.jpg' },
    { name: 'Priya Sharma', className: 'Class 8', percentage: '96.2%', rank: 'Rank 3', image: '/img/student/1700567.jpg' },
    // Class 10 Toppers
    { name: 'Nikhil Gupta', className: 'Class 10', percentage: '99.0%', rank: 'Rank 1', image: '/img/student/1700572.jpg' },
    { name: 'Aarti Mishra', className: 'Class 10', percentage: '98.6%', rank: 'Rank 2', image: '/img/student/1700573.jpg' },
    { name: 'Vikas Singh', className: 'Class 10', percentage: '98.0%', rank: 'Rank 3', image: '/img/student/1700574.jpg' },
    // Class 12 Toppers
    { name: 'Meera Tiwari', className: 'Class 12', percentage: '99.3%', rank: 'Rank 1', image: '/img/student/1700577.jpg' },
    { name: 'Ankit Kumar', className: 'Class 12', percentage: '98.8%', rank: 'Rank 2', image: '/img/student/1700578.jpg' },
    { name: 'Riya Patel', className: 'Class 12', percentage: '98.4%', rank: 'Rank 3', image: '/img/student/1700579.jpg' },
  ];

  // Simulate a loading state (e.g., fetching from an API)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with Logo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-amber-400 shadow-lg">
              <Image
                src="/logo.svg"
                alt="SRPSS Logo"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                🏅 Top Achievers
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Class Toppers</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                Celebrating the highest performers from each key class level at SRPSS. Hover to see their achievements!
              </p>
            </div>
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

        {/* Scrollable Toppers Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-x-auto pb-10 pt-4 px-4 -mx-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {isLoading ? (
            // Skeleton Loading State
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 snap-center rounded-full shadow-xl border-4 border-slate-200 bg-slate-300 animate-pulse"
              />
            ))
          ) : (
            toppers.map((student, index) => (
              <div
                key={index}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 snap-center rounded-full overflow-hidden group cursor-pointer shadow-xl border-4 border-amber-400 transform transition-all duration-500 hover:-translate-y-4 hover:rotate-3 hover:shadow-2xl bg-slate-200"
              >
              <Image
                src={student.image}
                alt={student.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/80 to-amber-600/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-4 rounded-full backdrop-blur-[2px]">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <span className="inline-block bg-amber-400 text-blue-950 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider shadow-md animate-pulse">
                    {student.rank}
                  </span>
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-2">{student.name}</h3>
                  <p className="text-amber-300 font-semibold text-sm md:text-base mb-3">{student.className}</p>
                  <div className="w-12 h-0.5 bg-white/30 mx-auto my-3"></div>
                  <p className="text-white font-bold text-lg">{student.percentage}</p>
                </div>
              </div>

              {/* Floating animation effect */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
            </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
