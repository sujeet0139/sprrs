'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#1E3A8A] via-blue-800 to-[#1E3A8A] text-white overflow-hidden shadow-md">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-6 -left-4 w-32 h-32 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-soft"></div>
        <div className="absolute top-0 right-10 w-32 h-32 bg-[#FCD34D] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between py-3">
          <div className="flex-1 flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4">
            <span className="flex p-2 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] text-[#0F2344]">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
            <p className="font-medium text-white text-sm sm:text-base">
              <span className="md:hidden text-[#FCD34D] font-bold">Admissions Open 2026-27!</span>
              <span className="hidden md:inline">
                <strong className="text-[#FCD34D] tracking-wide">ADMISSIONS OPEN!</strong> Enroll now for the upcoming academic session. Limited seats available.
              </span>
            </p>
            <Link href="/contact" className="mt-2 sm:mt-0 text-xs sm:text-sm font-bold text-[#1E3A8A] bg-[#FCD34D] hover:bg-white px-5 py-1.5 rounded-full transition-all duration-300 shadow-sm whitespace-nowrap transform hover:scale-105">
              Apply Now
            </Link>
          </div>
          
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="-mr-1 flex p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 transition-colors duration-200"
              aria-label="Dismiss"
            >
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}