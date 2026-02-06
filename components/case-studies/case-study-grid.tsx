"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CaseStudy {
  id: string
  title: string
  category: string
  image: string
  description: string
  outcome: string
  metrics?: string
}

const industries = [
  "ALL",
  "LOGISTICS",
  "MANUFACTURING",
  "HEALTHCARE",
  "TELECOM",
  "eCOMMERCE",
  "BFSI",
  "TRAVEL",
  "TECH/SaaS",
  "MEDIA",
]

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Route Optimization Voice Assistant",
    category: "LOGISTICS",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Real-time coordination for a fleet of 500+ vehicles using voice-first dispatch.",
    outcome: "Reduced manual dispatch calls by 70% while improving driver safety.",
    metrics: "22% fuel cost reduction",
  },
  {
    id: "2",
    title: "Shop Floor Diagnostic Bot",
    category: "MANUFACTURING",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    description: "Hands-free diagnostic reporting for heavy machinery operators.",
    outcome: "Eliminated reporting downtime; technicians log issues via voice mid-repair.",
    metrics: "15% increase in OEE",
  },
  {
    id: "3",
    title: "Patient Pre-Admission triage",
    category: "HEALTHCARE",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    description: "voice-based triage system for surgical pre-admissions.",
    outcome: "Shifted 45% of routine data collection away from nursing staff.",
    metrics: "Zero data entry errors",
  },
  {
    id: "4",
    title: "Automated Service Activation",
    category: "TELECOM",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    description: "End-to-end voice-driven troubleshooting and activation.",
    outcome: "Resolved 60% of common connectivity issues without human agents.",
    metrics: "4.8/5 CSAT score",
  },
  {
    id: "5",
    title: "Returns Management Voice Bot",
    category: "eCOMMERCE",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    description: "Handling peak-season return inquiries via automated voice channels.",
    outcome: "Processed 10,000+ returns weekly with zero wait times.",
    metrics: "35% lower return costs",
  },
  {
    id: "6",
    title: "Secure Verification Systems",
    category: "BFSI",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=800",
    description: "Voice-biometric enabled account verification for high-net-worth clients.",
    outcome: "Increased security while reducing verification friction.",
    metrics: "99.9% fraud prevention",
  },
  {
    id: "7",
    title: "Dynamic Booking Assistant",
    category: "TRAVEL",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800",
    description: "Multilingual reservation support for global hotel chain.",
    outcome: "Instant booking confirmations in 12 languages.",
    metrics: "30% more direct bookings",
  },
  {
    id: "8",
    title: "Developer Documentation Guide",
    category: "TECH/SaaS",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    description: "Voice-searchable documentation for rapid API integration.",
    outcome: "Reduced support tickets for basic implementation queries.",
    metrics: "50% faster onboarding",
  },
  {
    id: "9",
    title: "Interactive Content Guide",
    category: "MEDIA",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    description: "Voice-activated content navigation for streaming platforms.",
    outcome: "Improved content discoverability for new users.",
    metrics: "25% higher user retention",
  },
]

export function CaseStudyGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL")

  const filteredStudies = activeCategory === "ALL"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory)

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cream-dark via-background to-gold/3 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-warm-gray mb-4 text-balance">
            How Teams Built Confidence
          </h2>
          <p className="text-lg text-warm-gray-light max-w-2xl mx-auto mb-12">
            From struggling to scale support to building voice AI that holds up under pressure
          </p>

          {/* Industry Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveCategory(industry)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === industry
                    ? "bg-gold text-warm-gray border-gold shadow-md"
                    : "bg-background/50 text-warm-gray-light border-gold/20 hover:border-gold/50 hover:bg-gold/5"
                )}
              >
                {industry}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <Card className="overflow-hidden h-full bg-background border border-gold/10 hover:border-gold/30 shadow-md hover:shadow-lg transition-all duration-300 relative">
                  <div className="relative h-48 overflow-hidden bg-gold/5">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-gold/10 rounded-full mb-4">
                      <span className="text-xs font-semibold text-gold-dark uppercase tracking-wider">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-warm-gray mb-3 leading-tight">
                      {study.title}
                    </h3>

                    <p className="text-sm text-warm-gray-light leading-relaxed mb-4">
                      {study.description}
                    </p>

                    <div className="bg-warm-gray/5 rounded-lg p-4 mb-6">
                      <p className="text-sm text-warm-gray-light mb-2">
                        <span className="font-semibold text-warm-gray">Outcome: </span>
                        {study.outcome}
                      </p>
                      {study.metrics && (
                        <p className="text-sm text-gold-dark font-semibold flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-gold rounded-full" />
                          {study.metrics}
                        </p>
                      )}
                    </div>

                    <button className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors group/btn">
                      Read full story
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-warm-gray-light italic">No case studies found for this industry yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
