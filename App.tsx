
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import { PHONE_NUMBER } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-azure-200 selection:text-azure-900">
      <Header />

      <main>
        {/* 1. Hero — immediate hook + social proof */}
        <Hero />

        {/* 2. Stats bar — quick credibility */}
        <div className="bg-primary py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Pools Maintained Weekly', value: '50+' },
              { label: 'Years in Austin', value: '3+' },
              { label: 'Client Satisfaction', value: '100%' },
              { label: 'Google Rating', value: '5.0★' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Service Grid */}
        <ServiceGrid />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. Pricing Tiers */}
        <Services />

        {/* 6. Mid-page CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1564429238961-bf8e82afc46a?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Reclaim Your Weekends?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Stop spending Saturday mornings testing chemicals and skimming leaves. Let Sonny's handle it — so you can just enjoy the splash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary px-10 py-4 min-h-[48px] rounded-full text-lg font-bold hover:bg-azure-100 transition-all shadow-xl active:scale-95 cursor-pointer">
                Get Your Free Quote
              </a>
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="border-2 border-white/30 text-white px-10 py-4 min-h-[48px] rounded-full text-lg font-bold hover:bg-white/10 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. Contact Form */}
        <ContactForm />

        {/* 10. Trust & Areas */}
        <TrustBadges />
      </main>

      <Footer />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <a href="#contact" className="bg-azure-500 text-white w-full py-4 rounded-2xl shadow-2xl shadow-azure-500/30 text-center font-bold text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Get Your Free Quote
        </a>
      </div>
    </div>
  );
}

export default App;
