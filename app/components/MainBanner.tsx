'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: '/1.jpg',
    tag: 'Estd. 1986 • 40+ Years of Excellence',
    title1: 'Shiksha Se Hi',
    title2: 'Sambhav Hai',
    desc: 'Empowering minds and shaping futures at Shri Rama Prasad Singh Shiksha Sansthan. Join our community of students achieving excellence.',
    statNum: '500+',
    statText: 'Enrolled Students',
    statIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    )
  },
  {
    image: '/2.jpg',
    tag: 'Classes 1 to 12',
    title1: 'Future-Ready',
    title2: 'Learning',
    desc: 'Providing comprehensive education with modern smart classes, well-equipped labs, and a strong focus on moral values.',
    statNum: 'Class 1-12',
    statText: 'Complete Journey',
    statIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
    )
  },
  {
    image: '/3.jpg',
    tag: 'Vibrant Community',
    title1: 'Holistic',
    title2: 'Development',
    desc: 'A balanced campus life with sports fields, cultural events, and performing arts for overall student growth.',
    statNum: '40+',
    statText: 'Years Legacy',
    statIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
    )
  }
];

export default function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-[calc(100vh-130px)] min-h-[480px] max-h-[700px] flex items-center justify-center overflow-hidden bg-[#0F2344]">
      {/* Animated decorative blobs (Static over the slides) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E3A8A] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      {/* Sliding Track */}
      <div 
        className="flex w-full h-full transition-transform duration-1000 ease-in-out z-0"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full shrink-0 relative flex items-center">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt="Shri Rama Prasad Singh Shiksha Sansthan"
                className="w-full h-full object-cover opacity-30 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/95 via-[#1E3A8A]/80 to-[#0F2344]/90"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pt-8 sm:pt-0">
              {/* Text Content */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#FCD34D]/10 text-[#FCD34D] text-xs sm:text-sm font-semibold tracking-widest mb-4 md:mb-6 border border-[#FCD34D]/30 backdrop-blur-sm uppercase">
                  {slide.tag}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-lg">
                  {slide.title1} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD34D] to-[#F59E0B]">
                    {slide.title2}
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-md">
                  {slide.desc}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  <Link href="/contact" className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] text-[#0F2344] font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-2 text-sm sm:text-base">
                    <span>Apply for Admission</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                  <Link href="/about-us" className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white/70 text-white font-bold rounded-full hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
                    Discover Our Legacy
                  </Link>
                </div>
              </div>

              {/* Stat Card */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-end pb-8 sm:pb-0 mt-4 md:mt-0">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 w-full max-w-[280px] sm:max-w-sm transform transition-all duration-500 hover:bg-white/15 hover:-translate-y-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] flex items-center justify-center text-[#0F2344] shrink-0">
                    {slide.statIcon}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-0 leading-none">{slide.statNum}</h3>
                    <p className="text-[#FCD34D] text-xs sm:text-sm mt-1 font-medium">{slide.statText}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#FCD34D] w-6 sm:w-8' : 'bg-white/40 hover:bg-white/70 w-2 sm:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-30 transition-colors border border-white/20 hidden sm:flex"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-30 transition-colors border border-white/20 hidden sm:flex"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </section>
  );
}