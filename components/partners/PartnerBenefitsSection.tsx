import React from 'react';
import { ShieldCheck, TrendingUp, HandshakeIcon, Lightbulb, GraduationCap } from 'lucide-react';

const benefits = [
    {
        title: 'Advanced AI Offering',
        description: 'Leverage VoiShift\'s comprehensive generative voice tools, built for low latency and high realism, to elevate your clients\' automation capabilities.',
        icon: <ShieldCheck className="h-5 w-5 text-orange-600" />,
    },
    {
        title: 'Demand Generation',
        description: 'Co-market with VoiShift through joint webinars, virtual events, and case studies to build a robust, AI-focused sales pipeline.',
        icon: <Lightbulb className="h-5 w-5 text-orange-600" />,
    },
    {
        title: 'Revenue Opportunities',
        description: 'Unlock multiple revenue streams through generous commissions, tiered reseller discounts, and your own implementation services.',
        icon: <TrendingUp className="h-5 w-5 text-orange-600" />,
    },
    {
        title: 'Growth Enablement',
        description: 'Access exclusive marketing resources, battlecards, and a dedicated partner success manager to help you close deals faster.',
        icon: <GraduationCap className="h-5 w-5 text-orange-600" />,
    },
    {
        title: 'Dedicated Support',
        description: 'Receive priority technical routing, implementation training, and highly responsive assistance to ensure your clients succeed.',
        icon: <HandshakeIcon className="h-5 w-5 text-orange-600" />,
    }
];

export function PartnerBenefitsSection() {
    return (
        <section className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/30 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Sticky Sidebar for Title */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
                            Why become a <br className="hidden lg:block" /> VoiShift partner?
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We equip our partners with the cutting-edge tools, resources, and dedicated support needed to dominate the voice AI revolution.
                        </p>
                        <a
                            href="#programs"
                            className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-orange-600 transition-colors"
                        >
                            Review Programs
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                        </a>
                    </div>

                    {/* Benefits List */}
                    <div className="lg:col-span-7 lg:col-start-6">
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-orange-100 transition-colors flex flex-col sm:flex-row gap-6 items-start"
                                >
                                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
