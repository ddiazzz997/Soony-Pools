
import React from 'react';
import { SERVICE_AREAS } from '../constants';

const TrustBadges: React.FC = () => {
  return (
    <section id="areas" className="py-20 border-t border-slate-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="text-azure-600 text-sm font-bold uppercase tracking-widest mb-4">We're in the Neighborhood</div>
          <h3 className="text-3xl font-bold text-primary mb-4">Proudly Serving Greater Austin</h3>
          <p className="text-secondary max-w-2xl mx-auto">
            Sonny's covers all of greater Austin and surrounding communities. Wherever your pool is, we've probably got a truck nearby.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {SERVICE_AREAS.map(area => (
            <span key={area.id} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-azure-400 hover:text-azure-700 hover:bg-azure-50 transition-all duration-200 cursor-pointer">
              {area.name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 pt-10 border-t border-slate-100">
          <div className="flex items-center gap-3 text-slate-500">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
            <div>
              <div className="font-bold text-primary text-sm">Licensed & Insured</div>
              <div className="text-xs text-slate-400">Full coverage</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            <div>
              <div className="font-bold text-primary text-sm">5.0-Star Rated</div>
              <div className="text-xs text-slate-400">Google reviews</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <div>
              <div className="font-bold text-primary text-sm">Trusted Pros</div>
              <div className="text-xs text-slate-400">All technicians vetted</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
            <div>
              <div className="font-bold text-primary text-sm">Locally Owned</div>
              <div className="text-xs text-slate-400">Austin, TX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
