
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-azure-200 selection:text-azure-900">
      <Header />
      
      <main>
        <Hero />
        
        {/* Statistics Bar */}
        <div className="bg-primary py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-azure-400 text-xs font-bold uppercase tracking-widest">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">15k+</div>
              <div className="text-azure-400 text-xs font-bold uppercase tracking-widest">Pools Cleaned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-azure-400 text-xs font-bold uppercase tracking-widest">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-azure-400 text-xs font-bold uppercase tracking-widest">Support Access</div>
            </div>
          </div>
        </div>

        <Services />
        
        {/* Mid-Page CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070&auto=format&fit=crop" alt="Pool worker" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-azure-900/80 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to reclaim your weekends?</h2>
            <p className="text-xl text-white/80 mb-10">
              Join the Azure family today. Get a free, no-obligation on-site water analysis and quote.
            </p>
            <button className="bg-azure-500 hover:bg-azure-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl transition-all active:scale-95">
              Request My Free Quote
            </button>
          </div>
        </section>

        <Testimonials />
        <TrustBadges />
      </main>

      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <button className="w-full bg-azure-500 text-white py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call For A Quote
        </button>
      </div>
    </div>
  );
}

export default App;
