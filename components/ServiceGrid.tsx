
import React from 'react';

const services = [
    {
        name: 'Weekly Pool Cleaning',
        description: 'Chemical balancing, skimming, brushing, and vacuuming — with a post-visit update sent to your phone.',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        name: 'Green Pool Recovery',
        description: "Algae-infested pool? We offer same-day emergency service. Most green pools are restored to crystal clear in 24-72 hours.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        name: 'Pool Pump Repair',
        description: "Experienced technicians diagnose and repair pumps, motors, and impellers. Written estimates before any work begins.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        name: 'Filter Cleaning & Repair',
        description: "DE, cartridge, and sand filters serviced and deep-cleaned. We'll extend the life of your filter system with regular care.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
        ),
    },
    {
        name: 'Equipment Inspections',
        description: "Full diagnostic of pumps, heaters, automation panels, salt cells, and plumbing. We catch small issues before they become big bills.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        name: 'Pool Heater & Chiller Service',
        description: "Installation, repair, and seasonal maintenance for gas heaters, heat pumps, and pool chillers — essential for Austin's extreme temps.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        name: 'Salt Water Conversion',
        description: "Thinking about switching to salt? We handle the full conversion — equipment, plumbing, and ongoing salt cell maintenance.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
    },
    {
        name: 'Residential Pool Service',
        description: "From backyard oases to large estate pools — we provide personalized care tailored to your pool's specific needs.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
];

const ServiceGrid: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-azure-600 text-sm font-bold uppercase tracking-widest mb-4">What We Do</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Complete Pool Care for Austin Homes</h2>
                    <p className="text-lg text-secondary">
                        From weekly cleaning to emergency repairs, Sonny's handles every aspect of pool ownership. All work backed by our satisfaction guarantee.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-azure-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                        >
                            <div className="w-14 h-14 bg-azure-50 rounded-xl flex items-center justify-center text-azure-600 mb-5 group-hover:bg-azure-500 group-hover:text-white transition-colors duration-300">
                                {s.icon}
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2">{s.name}</h3>
                            <p className="text-sm text-secondary leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="inline-flex items-center gap-2 text-azure-600 font-bold hover:text-azure-700 transition-colors cursor-pointer group">
                        Need something specific? Contact us for a custom quote
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
