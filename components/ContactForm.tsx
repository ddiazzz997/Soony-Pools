
import React, { useState } from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const serviceOptions = [
    'Weekly Pool Cleaning',
    'Green Pool Recovery',
    'Pool Pump Repair',
    'Filter Cleaning & Repair',
    'Equipment Inspection',
    'Heater / Chiller Service',
    'Salt Water Conversion',
    'Commercial Pool Service',
    'Other / Not Sure',
];

const ContactForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Info */}
                    <div>
                        <div className="text-azure-600 text-sm font-bold uppercase tracking-widest mb-4">Let's Talk</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get Your Free, No-Obligation Quote</h2>
                        <p className="text-lg text-secondary mb-10 max-w-lg">
                            Tell us about your pool and we'll send a transparent quote within 24 hours. No pressure, no sales pitch — just honest pricing from your Austin neighbors at Sonny's.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-azure-100 rounded-xl flex items-center justify-center text-azure-600 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Call or Text Us</h4>
                                    <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-azure-600 font-semibold text-lg hover:underline">{PHONE_NUMBER}</a>
                                    <p className="text-sm text-secondary">Mon–Sat 7am–7pm · Emergency line 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-azure-100 rounded-xl flex items-center justify-center text-azure-600 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Email Us</h4>
                                    <a href={`mailto:${EMAIL_ADDRESS}`} className="text-azure-600 font-semibold hover:underline">{EMAIL_ADDRESS}</a>
                                    <p className="text-sm text-secondary">We respond within a few hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-azure-100 rounded-xl flex items-center justify-center text-azure-600 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Locally Owned & Operated</h4>
                                    <p className="text-secondary">Proudly serving greater Austin, TX</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust signals */}
                        <div className="flex flex-wrap gap-6 items-center opacity-60">
                            <div className="flex items-center gap-2">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                                <span className="text-sm font-bold">Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <span className="text-sm font-bold">5.0★ on Google</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
                                <span className="text-sm font-bold">Trusted Locally</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        {submitted ? (
                            <div className="bg-white p-12 rounded-3xl border border-azure-200 shadow-lg text-center">
                                <div className="w-20 h-20 bg-azure-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-azure-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-3">Thanks! We'll Be in Touch.</h3>
                                <p className="text-secondary mb-6">Expect a call or email within 24 hours with your personalized quote. In the meantime, feel free to call us at <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-azure-600 font-semibold">{PHONE_NUMBER}</a>.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg">
                                <h3 className="text-2xl font-bold text-primary mb-1">Request a Quote</h3>
                                <p className="text-secondary text-sm mb-8">We'll get back to you within 24 hours.</p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-2">First Name *</label>
                                        <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-azure-400 focus:ring-2 focus:ring-azure-100 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-primary mb-2">Last Name *</label>
                                        <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-azure-400 focus:ring-2 focus:ring-azure-100 outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email *</label>
                                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-azure-400 focus:ring-2 focus:ring-azure-100 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Phone *</label>
                                        <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-azure-400 focus:ring-2 focus:ring-azure-100 outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-sm font-semibold text-primary mb-2">Pool Address</label>
                                    <input type="text" id="address" placeholder="Street address, city, zip" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-azure-400 focus:ring-2 focus:ring-azure-100 outline-none transition-all" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">What Can We Help With? *</label>
                                    <select id="service" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-azure-400 focus:ring-2 focus:ring-azure-100 outline-none transition-all bg-white">
                                        <option value="">Select a service...</option>
                                        {serviceOptions.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Tell Us More</label>
                                    <textarea id="message" rows={4} placeholder="Pool type (chlorine/saltwater), size, what's going on..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-azure-400 focus:ring-2 focus:ring-azure-100 outline-none transition-all resize-none" />
                                </div>

                                <button type="submit" className="w-full bg-azure-500 hover:bg-azure-600 text-white py-4 min-h-[48px] rounded-xl font-bold text-lg shadow-lg shadow-azure-500/20 transition-all duration-200 active:scale-[0.98] cursor-pointer">
                                    Send My Free Quote Request
                                </button>

                                <p className="text-xs text-secondary text-center mt-4">No spam, no obligation. We'll only use this to contact you about your pool service.</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
