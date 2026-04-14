'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Logo />
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-slate-900 leading-tight">Shri Rama Prasad Singh Shiksha Sansthan</p>
              <p className="text-xs text-amber-600 font-medium">Pushp Nagar, Azamgarh</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/#about', label: 'About' },
              { href: '/#academics', label: 'Academics' },
              { href: '/#facilities', label: 'Facilities' },
              { href: '/#noticeboard', label: 'Notice Board' },
              { href: '/#gallery', label: 'Gallery' },
              { href: '/#admission', label: 'Admission' },
              { href: '/#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-700 hover:text-blue-700 transition-all duration-300 hover:bg-slate-100 rounded-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition-transform" title="Facebook" aria-label="Facebook">
                <span className="text-lg">📘</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-pink-600 transition-transform" title="Instagram" aria-label="Instagram">
                <span className="text-lg">📸</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-red-600 transition-transform" title="YouTube" aria-label="YouTube">
                <span className="text-lg">▶️</span>
              </a>
            </div>

            <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800">
              Contact Us
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-700 transition"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 rounded-3xl border border-slate-200 bg-white shadow-sm p-4 space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/about-us', label: 'About Us' },
              { href: '/academics-detail', label: 'Academics' },
              { href: '/facilities-detail', label: 'Facilities' },
              { href: '#noticeboard', label: 'Notice Board' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#admission', label: 'Admission' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-full px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-blue-700 transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-200">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600" aria-label="Facebook">
                <span className="text-lg">📘</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-pink-600" aria-label="Instagram">
                <span className="text-lg">📸</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-red-600" aria-label="YouTube">
                <span className="text-lg">▶️</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
