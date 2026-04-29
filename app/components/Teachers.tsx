'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const teachers = [
  {
    name: 'Mr. Rajesh Kumar Pandey',
    subject: 'Mathematics',
    qualification: 'M.Sc. (Maths), B.Ed.',
    experience: '18 Years',
    image: '/img/teacher/1700320.jpg',
  },
  {
    name: 'Mrs. Sunita Devi Singh',
    subject: 'Science & Physics',
    qualification: 'M.Sc. (Physics), B.Ed.',
    experience: '14 Years',
    image: '/img/teacher/1700339.jpg',
  },
  {
    name: 'Mr. Anil Kumar Tiwari',
    subject: 'Chemistry',
    qualification: 'M.Sc. (Chemistry), B.Ed.',
    experience: '12 Years',
    image: '/img/teacher/1700577.jpg',
  },
  {
    name: 'Mrs. Poonam Yadav',
    subject: 'Biology',
    qualification: 'M.Sc. (Biology), B.Ed.',
    experience: '10 Years',
    image: '/img/teacher/1700580.jpg',
  },
  {
    name: 'Mr. Rakesh Nath Tiwari',
    subject: 'English',
    qualification: 'M.A. (English), B.Ed.',
    experience: '16 Years',
    image: '/img/teacher/1700612.jpg',
  },
  {
    name: 'Mrs. Geeta Sharma',
    subject: 'Hindi',
    qualification: 'M.A. (Hindi), B.Ed.',
    experience: '20+ Years',
    image: '/img/teacher/1700614.jpg',
  },
  {
    name: 'Mr. Suresh Prasad Mishra',
    subject: 'Social Studies',
    qualification: 'M.A. (History), B.Ed.',
    experience: '15 Years',
    image: '/img/teacher/1700699.jpg',
  },
  {
    name: 'Mrs. Kavita Srivastava',
    subject: 'Computer Science',
    qualification: 'M.C.A., B.Ed.',
    experience: '9 Years',
    image: '/img/teacher/1700797.jpg',
  },
  {
    name: 'Mr. Mahendra Prasad Gupta',
    subject: 'Sanskrit',
    qualification: 'M.A. (Sanskrit), B.Ed.',
    experience: '22+ Years',
    image: '/img/teacher/1700805.jpg',
  },
  {
    name: 'Mrs. Anita Kumari',
    subject: 'Mathematics (Jr.)',
    qualification: 'M.Sc. (Maths), B.Ed.',
    experience: '7 Years',
    image: '/img/teacher/1700807.jpg',
  },
];

export default function Teachers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -350 : 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="faculty" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <i className="fas fa-chalkboard-teacher text-blue-600"></i> Our Faculty
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Expert Teachers</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Meet our dedicated and experienced educators who inspire and shape the future of every student at SRPSS every single day.
            </p>
          </div>
          <div className="flex gap-3 hidden sm:flex">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition transform hover:scale-105" aria-label="Scroll left">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition transform hover:scale-105" aria-label="Scroll right">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/80 to-blue-800/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-4 rounded-full backdrop-blur-[2px]">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-base md:text-lg mb-1 leading-tight">{teacher.name}</h3>
                  <p className="text-amber-400 font-semibold text-sm mb-1">{teacher.subject}</p>
                  <p className="text-blue-200 text-xs mb-2">{teacher.qualification}</p>
                  <div className="w-10 h-0.5 bg-white/30 mx-auto my-2"></div>
                  <p className="text-blue-100 text-xs">{teacher.experience} Experience</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-8 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800"
          >
            <span>Meet Our Full Faculty</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
