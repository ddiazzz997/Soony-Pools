
import React from 'react';
import { SERVICE_AREAS } from '../constants';

const TrustBadges: React.FC = () => {
  return (
    <section id="areas" className="py-20 border-t border-slate-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Serving Great Orlando</h3>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map(area => (
                <span key={area.id} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-azure-400 transition-colors cursor-default">
                  {area.name}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-end items-center gap-12 grayscale opacity-40">
             <div className="flex items-center gap-2">
               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
               <span className="font-bold">CPO Certified</span>
             </div>
             <div className="flex items-center gap-2">
               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
               <span className="font-bold">Licensed & Insured</span>
             </div>
             <div className="flex items-center gap-2">
               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
               <span className="font-bold">5-Star Elite</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
