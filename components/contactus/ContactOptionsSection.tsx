"use client";

import { motion } from "framer-motion";
import { MessageSquare, LifeBuoy, ShieldCheck, Phone } from "lucide-react";

export function ContactOptionsSection() {
    const options = [
        {
            icon: MessageSquare,
            title: "Talk to Sales",
            description: "Discuss pricing, custom implementations, and how VoiShift can integrate into your existing operations stack.",
            links: [
                { label: "sales@voishift.com", href: "mailto:sales@voishift.com" }
            ]
        },
        {
            icon: LifeBuoy,
            title: "Technical Support",
            description: "Need help with an ongoing deployment or troubleshooting edge cases? Our engineering team is here.",
            links: [
                { label: "support@voishift.com", href: "mailto:support@voishift.com" }
            ]
        },
        {
            icon: ShieldCheck,
            title: "Security & Privacy",
            description: "Have questions about compliance, data handling, or our infrastructure security protocols?",
            links: [
                { label: "security@voishift.com", href: "mailto:security@voishift.com" },
                { label: "privacy@voishift.com", href: "mailto:privacy@voishift.com" }
            ]
        },
        {
            icon: Phone,
            title: "Urgent Inquiries",
            description: "For immediate, mission-critical operational needs, reach our on-call team.",
            links: [
                { label: "1-800-VOISHIFT", href: "tel:+18008647443" }
            ]
        }
    ];

    return (
        <section className="py-20 bg-background relative border-t border-border/40">
            <div className="section-container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-7xl font-black text-gold tracking-tight text-foreground mb-4">
                        How can we help you today?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Select the team you need to reach, or fill out the form below. We aim to respond to all inquiries within 4 hours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {options.map((option, index) => (
                        <motion.div
                            key={option.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-card border border-border flex flex-col items-start hover:border-gold/30 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                                <option.icon className="w-6 h-6 text-gold" />
                            </div>

                            <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
                            <p className="text-muted-foreground mb-6 flex-grow">{option.description}</p>

                            <div className="flex flex-col gap-2 mt-auto">
                                {option.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-gold font-medium hover:text-gold-dark transition-colors inline-block"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
