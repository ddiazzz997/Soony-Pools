
import React from 'react';
import { SERVICE_TIERS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-secondary">
            No contracts. No hidden fees. Just professional service that keeps your pool ready for a swim any time of day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 border transition-all duration-200 hover:shadow-2xl cursor-pointer ${tier.popular
                  ? 'border-azure-500 bg-azure-50/30 ring-1 ring-azure-500 shadow-xl scale-105'
                  : 'border-slate-200 bg-white hover:border-azure-300'
                }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-azure-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">{tier.name}</h3>
                <p className="text-secondary text-sm h-10 leading-snug">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">{tier.price}</span>
                <span className="text-secondary font-medium">/month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-azure-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 min-h-[48px] rounded-xl font-bold transition-all duration-200 active:scale-95 cursor-pointer ${tier.popular
                  ? 'bg-azure-500 text-white hover:bg-azure-600 shadow-lg shadow-azure-500/20'
                  : 'bg-slate-100 text-primary hover:bg-slate-200'
                }`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-secondary text-sm">
            * Custom quotes available for commercial pools and extra-large residential estates.
            <a href="#contact" className="text-azure-600 font-bold ml-1 hover:underline cursor-pointer">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
