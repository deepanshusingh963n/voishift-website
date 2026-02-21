import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PartnerProgramsSection() {
    return (
        <section className="py-20 md:py-28 bg-white" id="programs">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-slate-900 mb-6">
                        Explore different partner programs of VoiShift and choose the one that's right for you
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-3xl leading-relaxed">
                        VoiShift offers tailored partnership opportunities to help grow your business. Explore our flexible programs designed to match your business model and client needs.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                            Become a Partner
                        </button>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors group/link mt-2">
                            Join Our Affiliate Program <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {/* Agency Partner Card */}
                    <div className="p-8 md:p-12 rounded-2xl bg-[#faf9f6] border border-sand">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">
                            Agency partner
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Help businesses unlock their full operational potential with VoiShift. Offer your expertise in automation and system integration to drive growth and deliver value for your clients.
                        </p>

                        {/* Placeholder Logos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {['AGENCY 1', 'AGENCY 2', 'AGENCY 3', 'AGENCY 4'].map((name, i) => (
                                <div key={i} className="flex h-16 items-center justify-center rounded bg-white shadow-sm border border-slate-100">
                                    <span className="text-sm font-bold tracking-widest text-slate-400 opacity-60">{name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="#" className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors group/link">
                                Explore our Agency Program <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                            <Link href="#" className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors group/link">
                                View all Agency Partners <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Technology Partner Card */}
                    <div className="p-8 md:p-12 rounded-2xl bg-[#faf9f6] border border-sand">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">
                            Technology partner
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Join VoiShift's network of leading technology partners and unlock powerful optimization capabilities for your customers. Seamlessly integrate with VoiShift to enhance your product's value proposition and drive client success.
                        </p>

                        {/* Placeholder Logos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {['TECH 1', 'TECH 2', 'TECH 3', 'TECH 4'].map((name, i) => (
                                <div key={i} className="flex h-16 items-center justify-center rounded bg-white shadow-sm border border-slate-100">
                                    <span className="text-sm font-bold tracking-widest text-slate-400 opacity-60">{name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-6">
                            <Link href="#" className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors group/link">
                                View all Integration Partners <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Affiliate Partner Card */}
                    <div className="p-8 md:p-12 rounded-2xl bg-[#faf9f6] border border-sand">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">
                            Affiliate partner
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Unlock significant earnings by referring customers to VoiShift. Our top affiliates earn robust commissions by connecting their audience with VoiShift's voice intelligence. Start monetizing your network today.
                        </p>

                        <div className="flex flex-col gap-6">
                            <Link href="#" className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors group/link">
                                Explore our Affiliate Program <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
