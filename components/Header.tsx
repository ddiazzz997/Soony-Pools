
import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass h-16 shadow-sm' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-azure-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>AZURE</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-secondary hover:text-azure-600' : 'text-white/80 hover:text-white'}`}>Services</a>
          <a href="#pricing" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-secondary hover:text-azure-600' : 'text-white/80 hover:text-white'}`}>Pricing</a>
          <a href="#testimonials" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-secondary hover:text-azure-600' : 'text-white/80 hover:text-white'}`}>Reviews</a>
          <a href="#areas" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-secondary hover:text-azure-600' : 'text-white/80 hover:text-white'}`}>Areas</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
            className={`hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors ${isScrolled ? 'text-azure-600 hover:text-azure-700' : 'text-white hover:text-azure-100'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE_NUMBER}
          </a>
          <button className="bg-azure-500 hover:bg-azure-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-azure-500/25 active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
