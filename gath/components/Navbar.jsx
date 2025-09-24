"use client"

import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Enable smooth scroll globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  // Removed duplicate navLinks declaration. Only the unique-key version remains below.
  const navLinks = [
    { href: '#hero', label: 'Home', type: 'anchor', key: 'home' },
    { href: '#hotels', label: 'Our Drive', type: 'anchor', key: 'discoveries' },
    { href: '#membership', label: 'Executives', type: 'anchor', key: 'executives' },
    { href: '#testimonials', label: 'Testimonials', type: 'anchor', key: 'testimonials' },
    { href: 'https://job-search-psi-three.vercel.app/', label: 'Apply Job', className: 'bg-gradient-to-r from-green-600 to-green-800 text-white px-4 py-2 rounded-full shadow hover:from-green-700 hover:to-green-900 font-bold transition', type: 'external', key: 'apply-job' },
    { href: '#contact', label: 'Contact', type: 'anchor', key: 'contact' },
    { href: '#location', label: 'Find Us', className: 'bg-yellow-400 text-black px-3 py-2 rounded-md hover:brightness-95', type: 'anchor', key: 'find-us' },
  ];

  return (
    <>
      {/* Info Bar */}
      <div className="w-full bg-green-900 text-white text-xs md:text-sm py-2 px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Working Hours:</span>
          <span>Mon-Fri: 09:00 AM To 5:00 PM</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">24hr Support:</span>
          <a href="mailto:gathstudents420@gmail.com" className="underline hover:text-yellow-300">gathstudents420@gmail.com</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Our Location:</span>
          <span>Accra</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={44} height={44} />
            <span className="font-bold text-lg text-green-800 tracking-wide">GATHS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center text-sm">
            {navLinks.map((link) => (
              link.type === 'external' ? (
                <a
                  key={link.key}
                  href={link.href}
                  className={
                    'transition-colors duration-150 hover:text-green-700 ' + (link.className || '')
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.key}
                  href={link.href}
                  className={
                    'transition-colors duration-150 hover:text-green-700 ' + (link.className || '')
                  }
                  onClick={e => {
                    e.preventDefault();
                    const id = link.href.replace('#', '');
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                // Close icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="#111827" strokeWidth="2" strokeLinecap="round"/></svg>
              ) : (
                // Hamburger icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#111827" strokeWidth="2" strokeLinecap="round"/></svg>
              )}
            </button>
          </div>
        </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />
      {/* Mobile Menu Drawer */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        aria-label="Mobile menu"
      >
        <div className="flex flex-col gap-6 p-8 pt-24 text-base">
          {navLinks.map((link) => (
            link.type === 'external' ? (
              <a
                key={link.key}
                href={link.href}
                className={
                  'text-left transition-colors duration-150 hover:text-green-700 ' + (link.className || '')
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <a
                  key={link.key}
                href={link.href}
                className={
                  'transition-colors duration-150 hover:text-green-700 ' + (link.className || '')
                }
                onClick={e => {
                  e.preventDefault();
                  setMenuOpen(false);
                  const id = link.href.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.label}
              </a>
            )
          ))}
        </div>
      </nav>
    </header>
  </>
  );
}

