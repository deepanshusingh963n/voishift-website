"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export function ContactFormSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset form or handle actual submission logic here
        }, 1500);
    };

    return (
        <section className="py-20 bg-white relative">
            <div className="section-container relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                            Send us a message
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Fill out the form below and we'll route your inquiry to the right expert.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-foreground">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                                    placeholder="Acme Corp"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="role" className="text-sm font-medium text-foreground">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    id="role"
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                                    placeholder="Director of Operations"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">
                                Message & Goals
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground resize-y min-h-[120px]"
                                placeholder="Tell us about the problems you are trying to solve..."
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gold text-white font-medium hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : isSuccess ? (
                                    "Message Sent successfully!"
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>

                        {isSuccess && (
                            <p className="text-sm text-center text-muted-foreground mt-4">
                                We've received your message. A specialist will be in touch shortly.
                            </p>
                        )}

                        <p className="text-xs text-muted-foreground mt-4 text-center">
                            By submitting this form, you agree to our <a href="#" className="underline hover:text-foreground">Privacy Policy</a> and <a href="#" className="underline hover:text-foreground">Terms of Service</a>.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
