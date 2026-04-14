'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white shadow-lg backdrop-blur-sm bg-opacity-95 border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo and branding */}
          <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <Logo />
            <div className="hidden sm:block border-l-2 border-blue-200 pl-4">
              <h1 className="text-sm sm:text-base font-bold text-blue-900 font-poppins leading-tight group-hover:text-blue-700">
                Shri Rama Prasad Singh Shiksha Sansthan
              </h1>
              <p className="text-xs text-amber-600 font-semibold">Pushp Nagar, Azamgarh</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about-us', label: 'About' },
              { href: '/academics-detail', label: 'Academics' },
              { href: '/facilities-detail', label: 'Facilities' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#admission', label: 'Admission' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-gray-700 hover:text-blue-700 font-medium text-sm transition-all duration-300 hover:bg-blue-100 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Media + Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social icons */}
            <div className="hidden md:flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:scale-110 transition-transform"
                title="Follow us on Facebook"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 hover:scale-110 transition-transform"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 hover:scale-110 transition-transform"
                title="Subscribe on YouTube"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>

            {/* Contact button */}
            <a
              href="#contact"
              className="hidden sm:inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Contact
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-700 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-blue-100 pt-4 space-y-2 animate-fadeIn">
            {[
              { href: '/', label: 'Home' },
              { href: '/about-us', label: 'About Us' },
              { href: '/academics-detail', label: 'Academics' },
              { href: '/facilities-detail', label: 'Facilities' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#admission', label: 'Admission' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile social links */}
            <div className="flex gap-4 px-4 pt-4 border-t border-blue-100 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-lg">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-lg">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 text-lg">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}