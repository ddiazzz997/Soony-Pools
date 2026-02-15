
import React from 'react';

const steps = [
    {
        step: 1,
        title: 'Request Your Free Quote',
        description: "Tell us about your pool — size, type (chlorine or saltwater), and what you're looking for. We'll send a transparent quote with flat-rate pricing within 24 hours. No pressure, no obligations.",
    },
    {
        step: 2,
        title: 'Meet Your Dedicated Technician',
        description: "We'll pair you with an experienced, background-checked technician who'll learn your pool inside and out. They'll do an initial on-site assessment and set your recurring service day.",
    },
    {
        step: 3,
        title: 'Enjoy Your Pool — We Handle the Rest',
        description: "You'll get a text before each visit and a detailed photo report when we're done. All chemicals are included. Just show up, swim, and relax — your pool is always ready.",
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="text-azure-600 text-sm font-bold uppercase tracking-widest mb-4">Simple & Transparent</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">How It Works</h2>
                    <p className="text-lg text-secondary">
                        Getting started is easy. We believe pool care should feel like help from a good neighbor — because that's exactly what we are.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    {steps.map((s, idx) => (
                        <div key={s.step} className="relative text-center group">
                            {/* Connector line */}
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-azure-300 to-azure-100" aria-hidden="true"></div>
                            )}

                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-azure-50 border-2 border-azure-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-azure-100 group-hover:border-azure-400 transition-all duration-300">
                                    <span className="text-3xl font-bold text-azure-600">{s.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                                <p className="text-secondary leading-relaxed max-w-sm mx-auto">{s.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
