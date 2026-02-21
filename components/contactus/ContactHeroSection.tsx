"use client";

import { motion } from "framer-motion";

export function ContactHeroSection() {
    return (
        <section className="relative w-full bg-background pt-32 pb-20 overflow-hidden">
            {/* Abstract Background Element (similar to other VoiShift hero sections) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-gold/5 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                            Let's talk about <br />
                            <span className="text-gold">systematizing</span> your voice.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Whether you need to explore a custom integration, have a question about security,
                            or want to see how VoiShift handles messy edge cases natively, our team is ready.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
