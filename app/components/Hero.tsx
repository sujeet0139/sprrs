'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-700 z-0">
        {/* Animated shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Parallax background overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 z-10 relative text-white text-center py-20">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-block px-6 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full border border-white border-opacity-30 text-sm font-semibold">
            🏫 Leading School in Azamgarh
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-poppins leading-tight animate-fade-in">
          Empowering Future Through
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent">
            Education Since 1986
          </span>
        </h1>

        {/* Subtitle with animation */}
        <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto animate-fade-in-delay">
          40+ Years of Excellence • 500+ Students • Classes 1-12
        </p>

        {/* Highlight stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 my-12 max-w-2xl mx-auto">
          {[
            { stat: '40+', label: 'Years', icon: '📚' },
            { stat: '500+', label: 'Students', icon: '👨‍🎓' },
            { stat: '1-12', label: 'Classes', icon: '🎓' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center animate-fade-in-delay" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-3xl font-bold">{item.stat}</p>
              <p className="text-blue-100">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#admission"
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span>🎓 Apply Now</span>
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span>📞 Contact Us</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-blue-100">Scroll to explore</p>
            <i className="fas fa-chevron-down text-2xl text-amber-300"></i>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-6 text-8xl opacity-10 animate-float">📚</div>
      <div className="absolute bottom-1/4 right-12 text-8xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🎓</div>
    </section>
  );
}