
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-blur-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="text-white text-xs font-semibold uppercase tracking-wider">5.0★ Rated · Trusted by Austin Pool Owners</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-blur-up" style={{ animationDelay: '0.2s' }}>
            Austin Pool Care,<br />
            <span className="text-azure-400">Done Right.</span>
          </h1>

          <p className="text-xl text-white/80 mb-4 animate-blur-up max-w-lg" style={{ animationDelay: '0.3s' }}>
            We handle the chemistry and the sweat so you can just enjoy the splash. Weekly maintenance, repairs, and green pool recovery from your local Austin neighbors.
          </p>

          <ul className="flex flex-col gap-2 mb-10 animate-blur-up" style={{ animationDelay: '0.35s' }}>
            {[
              'Text before arrival + update after every visit',
              'No contracts · No hidden fees · Chemicals included',
              'Same-day emergency service available',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-4 h-4 text-azure-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 animate-blur-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="bg-white text-primary px-8 py-4 min-h-[48px] rounded-full text-lg font-bold hover:bg-azure-100 transition-all duration-200 shadow-xl active:scale-95 cursor-pointer text-center">
              Get Your Free Quote
            </a>
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 min-h-[48px] rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block" aria-hidden="true">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
