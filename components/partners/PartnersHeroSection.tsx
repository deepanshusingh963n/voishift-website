import React from 'react';

export function PartnersHeroSection() {
    return (
        <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-background">
            {/* Subtle background glow effect consistent with VoiShift aesthetic */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-orange-100/50 blur-[100px] rounded-full pointer-events-none opacity-50" />

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="flex flex-col items-center text-center max-w-[900px] mx-auto space-y-6">
                    <div className="inline-flex items-center rounded-full border border-orange-200/50 bg-orange-50/50 px-3 py-1 text-sm text-orange-900 shadow-sm backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                        VoiShift Partner Network
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                        Grow your business with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">voice AI frontier.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-[700px] leading-relaxed">
                        Partner with VoiShift to deliver world-class generative voice solutions to your clients. Together, we can automate operations and unlock new revenue streams.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                        <button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                            Explore Programs
                        </button>
                        <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2">
                            Talk to Partner Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
