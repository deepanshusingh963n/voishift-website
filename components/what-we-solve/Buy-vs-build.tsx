"use client"

import { motion } from "framer-motion"
import { Home, Cpu } from "lucide-react"

export default function BuyVsBuild() {
    return (
        <section id="buy-vs-build" className="py-24 bg-cream relative overflow-hidden">
            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-4xl lg:text-6xl font-serif font-black text-warm-gray leading-tight">
                        Buy a Bot or{" "}
                        <span className="italic text-gold">Build a System?</span>
                    </h2>
                </motion.div>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-center text-xl lg:text-2xl font-serif text-warm-gray-light max-w-3xl mx-auto mb-4"
                >
                    What you are really deciding is whether the logic behind your business
                    conversations will be{" "}
                    <span className="font-black text-warm-gray">yours</span> or{" "}
                    <span className="font-black text-warm-gray">borrowed.</span>
                </motion.p>

                {/* Support line */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.18 }}
                    className="text-center text-lg italic text-gold font-serif font-bold mb-16"
                >
                    The choice is a lot like owning a house versus renting one.
                </motion.p>

                {/* Two Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">

                    {/* Left Card — Renting a House */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="group relative p-8 lg:p-10 border-2 border-sand bg-white rounded-none shadow-lg hover:border-gold/40 hover:shadow-xl transition-all duration-500 overflow-hidden"
                    >
                        {/* Corner accent */}
                        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold/0 group-hover:border-gold transition-all duration-500" />
                        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold/0 group-hover:border-gold transition-all duration-500" />

                        {/* Watermark icon */}
                        <div className="absolute -bottom-6 -right-6 opacity-[0.04] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-700">
                            <Home className="w-48 h-48 text-warm-gray" aria-hidden="true" />
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-sand/50 flex items-center justify-center rounded-none border border-sand group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                                <Home className="w-5 h-5 text-warm-gray/60 group-hover:text-gold transition-colors" aria-hidden="true" />
                            </div>
                            <p className="text-[10px] font-black text-warm-gray uppercase tracking-[0.25em]">
                                The Analogy
                            </p>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-serif font-black text-warm-gray mb-6 leading-tight">
                            Renting vs Owning a House
                        </h3>

                        <div className="space-y-4 font-serif text-warm-gray-light text-lg leading-relaxed">
                            <p>
                                When you rent a house, you can change the curtains, repaint the
                                walls, and rearrange the furniture.
                            </p>
                            <p>
                                But when you need to move a wall, rebuild a room, or fix
                                something structural, only the owner can do it.
                            </p>
                            <p className="font-black text-warm-gray">
                                So you live inside someone else&apos;s design.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Card — Ready-Made Voice AI */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.28 }}
                        className="group relative p-8 lg:p-10 border-2 border-gold/30 bg-black rounded-none shadow-lg hover:border-gold hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        {/* Corner accent */}
                        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold/0 group-hover:border-gold transition-all duration-500" />
                        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold/0 group-hover:border-gold transition-all duration-500" />

                        {/* Gold glow */}
                        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.03] transition-colors duration-700" />

                        {/* Watermark icon */}
                        <div className="absolute -bottom-6 -right-6 opacity-[0.05] pointer-events-none group-hover:opacity-[0.10] transition-opacity duration-700">
                            <Cpu className="w-48 h-48 text-gold" aria-hidden="true" />
                        </div>

                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-none border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                                <Cpu className="w-5 h-5 text-gold group-hover:text-black transition-colors" aria-hidden="true" />
                            </div>
                            <p className="text-[10px] font-black text-gold uppercase tracking-[0.25em]">
                                The Reality
                            </p>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-serif font-black text-white mb-6 leading-tight relative z-10">
                            Ready-Made Voice AI vs{" "}
                            <span className="text-gold">Built Around Your Business</span>
                        </h3>

                        <div className="space-y-4 font-serif text-white/90 text-lg leading-relaxed relative z-10">
                            <p>
                                With ready-made voice AI, you can tweak the prompt, tone, and
                                flow.
                            </p>
                            <p>
                                But when you need deeper exceptions, business-specific routing,
                                or precise human handoffs, you still depend on the vendor.
                            </p>
                            <p className="font-black text-white">
                                So your business voice runs inside someone else&apos;s system.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="p-8 lg:p-10 bg-gold rounded-none shadow-2xl text-center"
                >
                    <p className="text-xl lg:text-3xl font-serif font-bold text-black leading-relaxed">
                        The real choice is not <span className="font-black uppercase">bot vs System.</span>{" "}
                        <span className="italic">
                            It is borrowed logic vs owned logic.
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
