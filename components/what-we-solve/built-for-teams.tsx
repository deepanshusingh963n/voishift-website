"use client"

import { motion } from "framer-motion"
import { Shield, RefreshCcw, AlertTriangle, Lock, ArrowRight, Activity, Database, CheckCircle, Smartphone, Zap, Box, Eye, FileQuestion, UserCheck, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const signals = [
    { text: "Fewer repeat calls", icon: RefreshCcw, trend: [20, 40, 30, 50, 45, 60], level: 0.6 },
    { text: "Less cleanup work", icon: AlertTriangle, trend: [60, 45, 50, 30, 35, 20], level: 0.2 },
    { text: "Fewer \"why did it do that?\" moments", icon: Shield, trend: [80, 60, 40, 30, 20, 10], level: 0.1 },
]

const workflowPoints = [
    { text: "Where they pause", icon: Eye },
    { text: "Where they double-check", icon: FileQuestion },
    { text: "Where they ask someone", icon: UserCheck },
    { text: "Where they make an exception", icon: AlertCircle },
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
            <h3 className="text-warm-gray font-bold text-md mb-2 leading-tight">{signal.text}</h3>
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
        <section id="teams" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center mb-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-gold/10 rounded-full mb-6">
                            <Activity className="w-3.5 h-3.5 text-gold" />
                            <span className="text-[15px] font-black tracking-widest text-gold uppercase">Operations Engineering</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold font-black leading-[1.1] mb-8 text-balance">
                            We build for real-world teams
                        </h2>
                        <p className="text-xl md:text-2xl text-warm-gray-light max-w-3xl leading-relaxed font-serif italic mb-10">
                            We build for teams where <span className="not-italic font-bold">wrong actions cost more than slow answers.</span> Used inside environments where voice AI touches live workflows, changing rules, and real consequences.
                        </p>
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
                <div className="h-1 w-full bg-sand" />


                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center mb-10 mt-10">
                    <div className="space-y-8 lg:pl-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl lg:text-4xl font-serif text-warm-gray mb-4">
                                We walk the workflow end to end
                            </h3>
                            <p className="text-xl text-warm-gray-light font-serif italic mb-8">
                                With the people inside it.
                            </p>

                            <div className="p-8 bg-[#2a2a2a] rounded-xl border border-white/5 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-gold/20 transition-colors" />

                                <p className="text-lg text-white/90 leading-relaxed relative z-10 font-medium pb-6">
                                    We walk the workflow end to end with the people inside it.
                                </p>
                                <div className="h-px w-full bg-white/5 relative z-10" />
                                <p className="pt-6 text-gold/90 italic font-serif text-lg relative z-10">
                                    Those are the moments voice AI will copy, at speed.
                                </p>
                            </div>

                            {/* Question Card - Integrated more tightly */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-10 flex gap-4 items-start"
                            >
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex-shrink-0 flex items-center justify-center">
                                    <ArrowRight className="w-5 h-5 text-gold rotate-[-45deg]" />
                                </div>
                                <p className="text-xl font-serif italic text-warm-gray leading-tight pt-1">
                                    "If someone asks why it said that, will your answer be clear, or a guess?"
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                    {/* Visual: Integrated Circuit Path */}
                    <div className="relative p-8 lg:p-12 bg-[#faf9f6] border border-sand overflow-hidden">
                        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                            <svg width="100%" height="100%" className="text-gold/20">
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {workflowPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-5 rounded-xl border border-sand shadow-sm hover:shadow-md hover:border-gold/30 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                                        <point.icon className="w-5 h-5 text-gold" />
                                    </div>
                                    <p className="text-sm font-bold text-warm-gray uppercase tracking-tighter leading-tight">{point.text}</p>
                                </motion.div>
                            ))}

                            {/* Animated Circuit Path SVG */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 8px gold)" }}>
                                <motion.path
                                    d="M 50,50 L 250,50 L 250,200 L 50,200 Z"
                                    fill="none"
                                    stroke="#D4AF37"
                                    strokeWidth="1"
                                    strokeDasharray="10 5"
                                    className="opacity-20"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
