'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/#leadership', label: 'Leadership' },
  { href: '/academics-detail', label: 'Academics' },
  { href: '/facilities-detail', label: 'Facilities' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 text-xs sm:text-sm">
          <div className="min-w-0">
            <p className="truncate font-semibold tracking-[0.12em] text-blue-50 uppercase">Shri Rama Prasad Singh Shiksha Sansthan</p>
            <p className="truncate text-[11px] text-blue-100 sm:text-xs">Excellence in Education</p>
          </div>
          <p className="hidden text-blue-100 md:block">Deedarganj-Saraimeer Road, Pushpnagar</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Logo sizeClassName="h-[60px] w-[60px] sm:h-[68px] sm:w-[68px] lg:h-[76px] lg:w-[76px]" />
            <div className="min-w-0">
              <p className="text-sm font-bold leading-tight text-slate-900 sm:text-base lg:text-lg">
                Shri Rama Prasad Singh Shiksha Sansthan
              </p>
              <p className="text-xs font-medium text-blue-700 sm:text-sm">Since 1986</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:text-blue-700"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-3 md:flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 transition-transform hover:scale-110 hover:text-blue-700" title="Facebook" aria-label="Facebook">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 transition-transform hover:scale-110 hover:text-pink-600" title="Instagram" aria-label="Instagram">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 transition-transform hover:scale-110 hover:text-red-600" title="YouTube" aria-label="YouTube">
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>

            <Link href="/contact" className="hidden sm:inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-800">
              Contact Us
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full border border-slate-200 p-2.5 text-slate-700 transition hover:border-blue-200 hover:text-blue-700 lg:hidden"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-4 space-y-2 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-full px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15"
            >
              Admission Enquiry
            </Link>
            <div className="flex items-center gap-4 border-t border-slate-200 pt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-700" aria-label="Facebook">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-pink-600" aria-label="Instagram">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-red-600" aria-label="YouTube">
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
