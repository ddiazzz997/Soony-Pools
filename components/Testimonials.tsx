
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="text-azure-600 text-sm font-bold uppercase tracking-widest mb-4">Real Reviews</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Our Austin Neighbors Are Saying</h2>
            <p className="text-lg text-secondary">
              Don't just take our word for it — see why pool owners across Austin trust Sonny's for their weekly pool care.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <div className="font-bold text-primary text-lg">Excellent</div>
              <div className="text-xs text-secondary uppercase tracking-widest">Based on 9 reviews</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-6 h-6" />
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-sm font-bold text-primary">5.0</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              {t.service && (
                <div className="inline-block bg-azure-50 text-azure-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                  {t.service}
                </div>
              )}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 text-sm">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full border-2 border-azure-100" loading="lazy" />
                <div>
                  <div className="font-bold text-primary text-sm">{t.name}</div>
                  <div className="text-xs text-secondary">{t.location}, Austin TX</div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="via Google" className="w-5 h-5 ml-auto opacity-40" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-primary px-6 py-3 rounded-full font-semibold text-sm hover:border-azure-300 hover:shadow-sm transition-all cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-5 h-5" />
            Read All Reviews on Google
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
