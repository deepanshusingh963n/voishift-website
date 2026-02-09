"use client"

import { motion } from "framer-motion"
import { Shield, RefreshCcw, AlertTriangle, Lock, ArrowRight, Activity, Database, CheckCircle, Smartphone, Zap, Box } from "lucide-react"
import { Button } from "@/components/ui/button"

const signals = [
    { text: "Fewer repeat calls", icon: RefreshCcw, trend: [20, 40, 30, 50, 45, 60], level: 0.6 },
    { text: "Less cleanup work", icon: AlertTriangle, trend: [60, 45, 50, 30, 35, 20], level: 0.2 },
    { text: "Fewer \"why did it do that?\" moments", icon: Shield, trend: [80, 60, 40, 30, 20, 10], level: 0.1 },
]

/* --- Advanced Dashboard Components --- */

const HolographicPillar = ({ level, delay }: { level: number, delay: number }) => (
    <div className="relative w-4 h-24 bg-gold/5 rounded-full overflow-hidden border border-gold/10">
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${level * 100}%` }}
            transition={{ duration: 2, delay, ease: "easeOut" }}
            className="absolute bottom-0 w-full bg-gradient-to-t from-gold via-gold/50 to-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        />
        {/* Glow Sweep */}
        <motion.div
            animate={{ y: ["100%", "-100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-4 bg-white/20 blur-sm"
        />
    </div>
)

const SignalCard = ({ signal, index }: { signal: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white rounded-xl border border-sand p-6 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 overflow-hidden"
    >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id={`pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gold" />
                </pattern>
                <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
            </svg>
        </div>

        <div className="flex items-start justify-between mb-8 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors border border-gold/10">
                <signal.icon className="w-5 h-5 text-gold" />
            </div>
            <HolographicPillar level={signal.level} delay={index * 0.2} />
        </div>

        <div className="relative z-10">
            <h4 className="text-warm-gray font-bold text-md mb-2 leading-tight">{signal.text}</h4>
            <div className="flex items-center gap-1.5 ">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest">Signal_Optimized</span>
            </div>
        </div>
    </motion.div>
)

const PathOfVeracity = () => (
    <div className="relative w-full h-40 bg-cream border border-sand overflow-hidden p-6 mb-8">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id="grid-veracity" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-veracity)" />
            </svg>
        </div>

        <div className="relative h-full flex items-center justify-between px-10">
            <div className="w-12 h-12 rounded-xl bg-white border border-sand flex items-center justify-center shadow-sm relative z-10">
                <Activity className="w-6 h-6 text-gold" />
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                    d="M 60,80 Q 50%,20 50%,80 T calc(100% - 60px),80"
                    fill="none" stroke="gold" strokeWidth="2" strokeDasharray="5 5"
                    className="opacity-20"
                />
                <motion.path
                    d="M 60,80 Q 50%,20 50%,80 T calc(100% - 60px),80"
                    fill="none" stroke="gold" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            {/* Safety Gasket Visual */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-2 border-gold/20 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-2 border-gold rounded-full"
                />
                <Lock className="w-5 h-5 text-gold" />
            </div>

            <div className="w-12 h-12 rounded-xl bg-white border border-sand flex items-center justify-center shadow-sm relative z-10">
                <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
        </div>
    </div>
)

export function BuiltForTeams() {
    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center mb-20">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-6">
                            <Activity className="w-3.5 h-3.5 text-gold" />
                            <span className="text-[10px] font-black tracking-widest text-gold uppercase">Operations Engineering</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-gray leading-[1.1] mb-8 text-balance">
                            We build for real-world teams
                        </h2>
                        <p className="text-xl md:text-2xl text-warm-gray-light max-w-3xl leading-relaxed font-serif italic mb-10">
                            We build for teams where <span className="text-gold not-italic font-bold">wrong actions cost more than slow answers.</span> Used inside environments where voice AI touches live workflows, changing rules, and real consequences.
                        </p>

                        <div className="flex items-center gap-4 py-6 border-t border-sand">
                            <div className="flex -space-x-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-sand flex items-center justify-center">
                                        <Database className="w-4 h-4 text-warm-gray/30" />
                                    </div>
                                ))}
                            </div>
                            <div className="h-4 w-px bg-sand mx-2" />
                            <p className="text-sm font-bold text-warm-gray/60 uppercase tracking-widest">Enterprise Ready Infrastructure</p>
                        </div>
                    </motion.div>

                    {/* Path of Veracity Visual Area */}
                    <div className="relative">
                        <PathOfVeracity />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-[#faf9f6]/50 rounded-xl border border-sand">
                                <div className="flex items-center gap-2 mb-4">
                                    <Database className="w-4 h-4 text-gold" />
                                    <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Audit Logs</span>
                                </div>
                                <div className="h-1.5 w-full bg-sand/30 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-full w-1/3 bg-gold"
                                    />
                                </div>
                            </div>
                            <div className="p-6 bg-[#faf9f6]/50 rounded-xl border border-sand">
                                <div className="flex items-center gap-2 mb-4">
                                    <Smartphone className="w-4 h-4 text-gold" />
                                    <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Client Sync</span>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-stretch">
                    {/* Dashboard Visual Area */}
                    <div className="relative bg-cream p-10 lg:p-12 border border-sand shadow-inner overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                            <Box className="w-40 h-40 text-warm-gray" />
                        </div>

                        <div className="flex items-center justify-between mb-12 pb-4 border-b border-sand relative z-10">
                            <h3 className="text-sm font-black text-gold uppercase tracking-[0.4em]">
                                Early signals we track
                            </h3>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6 relative z-10">
                            {signals.map((signal, index) => (
                                <SignalCard key={index} signal={signal} index={index} />
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-10">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-warm-gray-light italic text-xl font-serif max-w-sm"
                            >
                                Because the agent knows <span className="text-gold font-bold">when not to act.</span>
                            </motion.p>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-sand flex items-center justify-center shadow-sm">
                                    <Zap className="w-6 h-6 text-gold" />
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-white border border-sand flex items-center justify-center shadow-sm">
                                    <Activity className="w-6 h-6 text-gold" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Crystal Security Vault - Reimagined Light Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group relative bg-white p-10 lg:p-14 border-2 border-gold/30 shadow-2xl overflow-hidden flex flex-col justify-between"
                    >
                        {/* Crystal Vault SVG Backdrop */}
                        <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
                            <svg width="100%" height="100%" viewBox="0 0 200 200">
                                <motion.path
                                    d="M 100,20 L 180,60 L 180,140 L 100,180 L 20,140 L 20,60 Z"
                                    fill="none" stroke="gold" strokeWidth="1"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <circle cx="100" cy="100" r="40" fill="none" stroke="gold" strokeWidth="0.5" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-10">
                                <div className="w-16 h-16 rounded-3xl bg-gold/5 flex items-center justify-center border border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:bg-gold/10 transition-colors">
                                    <Lock className="w-8 h-8 text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif text-warm-gray">Security First</h3>
                                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-gold/10 text-gold rounded font-black text-[10px] uppercase tracking-widest mt-1">
                                        Tier 0 Infrastructure
                                    </div>
                                </div>
                            </div>

                            <p className="text-xl text-warm-gray-light leading-relaxed mb-12 font-serif italic">
                                Security, data handling, and audit expectations are treated as <span className="text-warm-gray not-italic font-bold underline decoration-gold/30">constraints from day one</span>, not patches added later.
                            </p>
                        </div>

                        <div className="relative z-10">
                            <div className="p-8 bg-[#faf9f6] border border-sand rounded-xl mb-10 group-hover:border-gold/30 transition-all shadow-inner">
                                <p className="text-warm-gray/40 text-xs font-bold uppercase tracking-widest mb-6">Internal Documentation & Evidence</p>
                                <Button
                                    variant="outline"
                                    className="w-full py-6 text-2xl bg-gold text-[#1a1a1a] hover:bg-white hover:text-gold rounded-full border-2 border-gold hover:border-gold transition-all duration-500 font-serif active:scale-[0.98] shadow-lg shadow-gold/10"
                                    asChild
                                >
                                    <a href="/case-studies">
                                        Case Studies
                                        <ArrowRight className="ml-3 h-8 w-8" />
                                    </a>
                                </Button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-warm-gray/40 uppercase tracking-[0.4em]">Audit_Status: PASSING</span>
                                </div>
                                <Shield className="w-5 h-5 text-gold/20" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
