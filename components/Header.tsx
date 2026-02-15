
import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/sonnys-logo.jpg" alt="Sonny's Pool Services" className="h-10 md:h-12 w-auto rounded-full" />
          <span className={`text-xl font-bold transition-colors hidden sm:inline ${scrolled ? 'text-primary' : 'text-white'}`}>
            Sonny's<span className="text-azure-500">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Services', href: '#services' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Reviews', href: '#testimonials' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Areas', href: '#areas' },
          ].map(link => (
            <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-azure-500 ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors ${scrolled ? 'text-slate-700' : 'text-white/80'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE_NUMBER}
          </a>
          <a href="#contact" className="bg-azure-500 hover:bg-azure-600 text-white px-6 py-2.5 min-h-[40px] rounded-full text-sm font-bold transition-all shadow-lg shadow-azure-500/20 active:scale-95 cursor-pointer">
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
