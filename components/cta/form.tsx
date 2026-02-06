"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2 } from "lucide-react"
import { useModal } from "@/context/modal-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CTAFormModal() {
    const { isOpen, closeModal } = useModal()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate form submission
        console.log("Form submitted:", { name, email })
        setIsSubmitted(true)

        // Auto close after 2 seconds on success
        setTimeout(() => {
            closeModal()
            // Reset state for next time
            setTimeout(() => {
                setIsSubmitted(false)
                setName("")
                setEmail("")
            }, 500)
        }, 2500)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-cream border border-gold/30 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-warm-gray-light hover:text-gold transition-colors p-1"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <h2 className="font-serif text-3xl text-warm-gray mb-2">
                                                Get Started with VoiShift
                                            </h2>
                                            <p className="text-warm-gray-light mb-8">
                                                Secure your strategy session and build voice AI that holds up.
                                            </p>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name" className="text-warm-gray">Full Name</Label>
                                                    <Input
                                                        id="name"
                                                        placeholder="John Doe"
                                                        required
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="bg-transparent border-gold/20 focus:border-gold transition-all"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="text-warm-gray">Email Address</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="bg-transparent border-gold/20 focus:border-gold transition-all"
                                                    />
                                                </div>

                                                <Button
                                                    type="submit"
                                                    className="w-full bg-gold hover:bg-gold-dark text-warm-gray font-semibold h-12 rounded-xl transition-all shadow-lg hover:shadow-xl"
                                                >
                                                    Send My Request
                                                </Button>

                                                <p className="text-[10px] text-center text-warm-gray-light uppercase tracking-widest mt-4">
                                                    No Spam. Just Clarity.
                                                </p>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12"
                                        >
                                            <div className="flex justify-center mb-6">
                                                <CheckCircle2 className="w-20 h-20 text-gold" />
                                            </div>
                                            <h2 className="font-serif text-3xl text-warm-gray mb-4">
                                                Request Received
                                            </h2>
                                            <p className="text-warm-gray-light">
                                                Our team will reach out within 24 hours to schedule your strategy session.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Decorative side accent */}
                            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gold shadow-[0_0_10px_rgba(226,167,70,0.5)]" />
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
