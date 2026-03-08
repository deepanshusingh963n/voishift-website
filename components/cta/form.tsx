"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2 } from "lucide-react"
import { useModal } from "@/context/modal-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ResourceDownloadForm } from "@/components/cta/resource-download-form"
import { cn } from "@/lib/utils"
import PhoneInput from "react-phone-number-input"
import type { E164Number } from "libphonenumber-js/core"
import "react-phone-number-input/style.css"

export function CTAFormModal() {
    const { isOpen, closeModal, modalType, resourceData } = useModal()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState<E164Number | undefined>(undefined)
    const [company, setCompany] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyp2UbVaxo2WvyPftf_Yyb-U1NvlmGSt7ZfqEiMa9zrYkQiorT8i2Lb4yZn5iOtJSXAZA/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone: phone || "",
                    company,
                    jobTitle,
                    message
                }),
            })

            console.log("Form submitted successfully")
            setIsSubmitted(true)

            // Auto close after 2.5 seconds on success
            setTimeout(() => {
                closeModal()
                // Reset state for next time
                setTimeout(() => {
                    setIsSubmitted(false)
                    setName("")
                    setEmail("")
                    setPhone(undefined)
                    setCompany("")
                    setJobTitle("")
                    setMessage("")
                    setIsLoading(false)
                }, 500)
            }, 2500)
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("There was an error submitting the form. Please try again.")
            setIsLoading(false)
        }
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
                        onClick={() => closeModal()}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className={cn(
                                "bg-cream border border-gold/30 rounded-2xl shadow-2xl w-full overflow-hidden pointer-events-auto relative",
                                modalType === "resource" ? "max-w-2xl" : "max-w-xl"
                            )}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => closeModal()}
                                className="absolute top-4 right-4 text-warm-gray-light hover:text-gold transition-colors p-1 z-50"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
                                {modalType === "resource" && resourceData ? (
                                    <ResourceDownloadForm
                                        resourceName={resourceData.name}
                                        resourceType={resourceData.type}
                                    />
                                ) : (
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

                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                                            <Label htmlFor="email" className="text-warm-gray">Work Email</Label>
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
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="phone" className="text-warm-gray">Phone Number</Label>
                                                            <PhoneInput
                                                                id="phone"
                                                                international
                                                                defaultCountry="US"
                                                                value={phone}
                                                                onChange={setPhone}
                                                                className="voishift-phone-input"
                                                            />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label htmlFor="company" className="text-warm-gray">Company Name</Label>
                                                            <Input
                                                                id="company"
                                                                placeholder="Acme Corp"
                                                                required
                                                                value={company}
                                                                onChange={(e) => setCompany(e.target.value)}
                                                                className="bg-transparent border-gold/20 focus:border-gold transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label htmlFor="jobTitle" className="text-warm-gray">Job Title</Label>
                                                        <Input
                                                            id="jobTitle"
                                                            placeholder="Director of Operations"
                                                            required
                                                            value={jobTitle}
                                                            onChange={(e) => setJobTitle(e.target.value)}
                                                            className="bg-transparent border-gold/20 focus:border-gold transition-all"
                                                        />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label htmlFor="message" className="text-warm-gray">Message</Label>
                                                        <textarea
                                                            id="message"
                                                            placeholder="Tell us about your project..."
                                                            required
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            className="flex min-h-[80px] w-full rounded-md border border-gold/20 bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-gold transition-all"
                                                        />
                                                    </div>

                                                    <Button
                                                        type="submit"
                                                        disabled={isLoading}
                                                        className="w-full bg-gold hover:bg-gold-dark text-warm-gray font-semibold h-12 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                                    >
                                                        {isLoading ? "Sending..." : "Send My Request"}
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
                                )}
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
