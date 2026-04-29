import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About School' },
  { href: '/academics-detail', label: 'Academics' },
  { href: '/facilities-detail', label: 'Facilities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact Us' },
];

const academics = [
  { label: 'Primary (Classes 1–5)' },
  { label: 'Middle (Classes 6–8)' },
  { label: 'Secondary (Classes 9–10)' },
  { label: 'Senior Secondary (11–12)' },
  { label: 'Science Stream (PCM/PCB)' },
  { label: 'Commerce & Humanities' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top Band */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xl font-bold text-white">Admissions Open for 2026–27</p>
              <p className="mt-1 text-blue-200">Limited seats per section. Apply before May 31, 2026.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-end">
              <a
                href="tel:7054272888"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
              >
                <i className="fas fa-phone-alt text-xs"></i> Call Now
              </a>
              <a
                href="https://wa.me/917054272888?text=Hello%20SRPSS,%20I%20want%20to%20know%20about%20admission."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <i className="fab fa-whatsapp text-green-400 text-base"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-amber-400 bg-blue-950">
                <Image src="/logo.svg" alt="SRPSS Logo" fill className="object-contain" />
              </div>
              <div>
                <p className="font-bold text-white leading-tight">SRPSS</p>
                <p className="text-xs text-slate-400">Est. 1986 · Azamgarh, UP</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              Shri Rama Prasad Singh Shiksha Sansthan — empowering students with quality education, strong moral values, and future-ready skills since 1986.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.facebook.com/srpssschool" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-blue-700 hover:text-white hover:scale-110">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="https://www.instagram.com/srpssschool" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:text-white hover:scale-110">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://www.youtube.com/@srpssschool" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-red-600 hover:text-white hover:scale-110">
                <i className="fab fa-youtube text-sm"></i>
              </a>
              <a href="https://twitter.com/srpssschool" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-black hover:text-white hover:scale-110">
                <i className="fab fa-x-twitter text-sm"></i>
              </a>
              <a href="https://wa.me/917054272888" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-green-600 hover:text-white hover:scale-110">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-amber-500 transition-all group-hover:w-3"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white">Academics</h4>
            <ul className="space-y-2.5">
              {academics.map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500"></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <i className="fas fa-map-marker-alt mt-0.5 shrink-0 text-amber-400"></i>
                <span className="text-slate-400">
                  Deedarganj–Saraimeer Road, Pushpnagar,<br />
                  Azamgarh, Uttar Pradesh – 223226
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <i className="fas fa-phone-alt mt-0.5 shrink-0 text-amber-400"></i>
                <div className="text-slate-400">
                  <a href="tel:7054272888" className="block transition hover:text-amber-400">7054272888</a>
                  <a href="tel:9935535005" className="block transition hover:text-amber-400">9935535005</a>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <i className="fas fa-envelope mt-0.5 shrink-0 text-amber-400"></i>
                <a href="mailto:info@srpssschool.in" className="text-slate-400 transition hover:text-amber-400">
                  info@srpssschool.in
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <i className="fas fa-clock mt-0.5 shrink-0 text-amber-400"></i>
                <span className="text-slate-400">Mon – Sat: 8:00 AM – 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
            <p>&copy; {year} Shri Rama Prasad Singh Shiksha Sansthan. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/contact" className="transition hover:text-amber-400">Privacy Policy</Link>
              <Link href="/contact" className="transition hover:text-amber-400">Terms of Use</Link>
              <Link href="/contact" className="transition hover:text-amber-400">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
