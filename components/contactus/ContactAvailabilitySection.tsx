"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function ContactAvailabilitySection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full flex justify-center lg:justify-end pr-0 lg:pr-12 relative"
                    >
                        <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold/20 to-transparent border border-border/50 shadow-sm relative overflow-hidden">
                            <div className="relative items-center justify-center w-full h-full">
                                <img
                                    src="/contact-us-image.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col items-start pl-0 lg:pl-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
                            We're available 24x7
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Globe className="w-6 h-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-foreground tracking-tight">
                                    World Wide
                                </h3>
                            </div>

                            <a
                                href="tel:+14153493207"
                                className="inline-block text-lg text-red-700/80 font-medium hover:text-red-800 transition-colors pl-9"
                            >
                                +1 415-349-3207
                            </a>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
