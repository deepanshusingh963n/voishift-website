import React from 'react';

export function PartnerCTASection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements to add VoiShift aesthetic */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-100/50 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-100/30 rounded-full blur-[80px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center bg-slate-900 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">

                    {/* Inner styling for the dark card */}
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl"></div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 relative z-10">
                        Ready to accelerate your growth?
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 relative z-10">
                        Join the VoiShift Partner Network today and start delivering next-generation conversational AI solutions to your clients while building a profitable new revenue channel.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <button className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                            Apply to Partner Program
                        </button>
                        <button className="inline-flex h-12 items-center justify-center rounded-lg bg-white/10 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 backdrop-blur-sm">
                            Contact Partnerships Team
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
