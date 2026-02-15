
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>('1');

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <div className="text-azure-600 text-sm font-bold uppercase tracking-widest mb-4">Got Questions?</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        Everything Austin pool owners ask us before getting started. Can't find your answer? Give Sonny's a call — we love talking pools.
                    </p>
                </div>

                <div className="space-y-3">
                    {FAQ_ITEMS.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${isOpen ? 'border-azure-300 bg-azure-50/30 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-semibold text-primary pr-4">{item.question}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? 'bg-azure-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 text-secondary leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
