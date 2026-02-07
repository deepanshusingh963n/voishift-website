"use client"

import { useState } from "react"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useModal } from "@/context/modal-context"
import { cn } from "@/lib/utils"
import {
  Truck,
  Factory,
  Stethoscope,
  Wifi,
  ShoppingBag,
  ShieldCheck,
  Globe,
  Code2,
  Tv2,
  MousePointer2,
  Binary,
  ArrowRight
} from "lucide-react"

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
  { name: "ALL", icon: Binary },
  { name: "LOGISTICS", icon: Truck },
  { name: "MANUFACTURING", icon: Factory },
  { name: "HEALTHCARE", icon: Stethoscope },
  { name: "TELECOM", icon: Wifi },
  { name: "eCOMMERCE", icon: ShoppingBag },
  { name: "BFSI", icon: ShieldCheck },
  { name: "TRAVEL", icon: Globe },
  { name: "TECH/SaaS", icon: Code2 },
  { name: "MEDIA", icon: Tv2 },
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

const CaseStudyVisual = ({ category }: { category: string }) => {
  const animations: Record<string, React.ReactNode> = {
    LOGISTICS: (
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
        <motion.path
          d="M 10 10 L 40 40 L 60 20 L 90 80"
          fill="none"
          stroke="gold"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        {[10, 40, 60, 90].map((x, i) => (
          <circle key={i} cx={x} cy={[10, 40, 20, 80][i]} r="1" fill="gold" />
        ))}
      </svg>
    ),
    HEALTHCARE: (
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
        <motion.path
          d="M 0 50 Q 25 20 50 50 T 100 50"
          fill="none"
          stroke="gold"
          strokeWidth="0.5"
          animate={{ x: [-100, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    ),
    BFSI: (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,gold_1px,transparent_1px)] bg-[size:10px_10px]" />
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-x-0 h-px bg-gold/50 shadow-[0_0_10px_gold]"
        />
      </div>
    ),
    MANUFACTURING: (
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="gold" strokeWidth="0.2" />
        <motion.circle 
          cx="50" cy="50" r="20" 
          fill="none" stroke="gold" strokeWidth="0.5" strokeDasharray="2 2"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    )
  }

  return animations[category] || (
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,gold_1px,transparent_1px)] bg-[size:20px_20px]" />
  )
}

export function CaseStudyGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL")
  const { openModal } = useModal();

  const filteredStudies = activeCategory === "ALL"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory)

  return (
    <section className="py-24 px-6 bg-cream relative overflow-hidden">
      {/* Structural Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-sand/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-sand/30" />
        <div className="absolute left-[10%] top-0 w-px h-full bg-sand/10" />
        <div className="absolute right-[10%] top-0 w-px h-full bg-sand/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-8">
            <span className="text-[10px] font-black tracking-[0.3em] text-gold uppercase">Operational Archive</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-warm-gray mb-6 tracking-tighter leading-[0.9]">
            How Teams Built <br /> <span className="text-gold italic">Confidence</span>
          </h2>
          <p className="text-xl text-warm-gray-light max-w-2xl mx-auto mb-16 font-serif italic">
            From struggling to scale support to building voice AI that holds up under pressure.
          </p>

          {/* HUD Navigation Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-20 bg-[#faf9f6] p-2 rounded-2xl border border-sand shadow-inner max-w-4xl mx-auto">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <button
                  key={ind.name}
                  onClick={() => setActiveCategory(ind.name)}
                  className={cn(
                    "relative group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-500 overflow-hidden",
                    activeCategory === ind.name 
                      ? "bg-white shadow-xl border border-sand" 
                      : "hover:bg-white/40"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 transition-colors duration-500",
                    activeCategory === ind.name ? "text-gold" : "text-warm-gray/40 group-hover:text-warm-gray"
                  )} />
                  <div className="flex flex-col items-start leading-[1]">
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest",
                      activeCategory === ind.name ? "text-warm-gray" : "text-warm-gray/30 group-hover:text-warm-gray/60"
                    )}>
                      {ind.name}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={cn(
                  "group relative",
                  index % 3 === 1 ? "lg:mt-12" : index % 3 === 2 ? "lg:mt-24" : ""
                )}
              >
                <div className="relative bg-white border border-sand rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-gold group/card">
                  {/* Case Study Image Wrapper */}
                  <div className="relative h-64 overflow-hidden bg-[#faf9f6]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-all duration-1000 grayscale group-hover/card:grayscale-0 group-hover/card:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />
                    
                    {/* Illustrated Overlays */}
                    <CaseStudyVisual category={study.category} />
                    
                    {/* Category Floating Tag */}
                    <div className="absolute top-6 left-6 flex flex-col gap-1 items-start">
                       <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-md text-[8px] font-mono font-black text-gold uppercase tracking-[0.2em] border border-white/10">
                         {study.category}
                       </span>
                    </div>

                    {/* Metrics Floating Badge */}
                    {study.metrics && (
                      <div className="absolute bottom-6 left-6">
                        <div className="bg-gold text-[#1a1a1a] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2 group-hover/card:scale-110 transition-transform duration-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] animate-pulse" />
                          {study.metrics}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-10 relative">
                    {/* Card Narrative */}
                    <h3 className="font-serif text-2xl text-warm-gray mb-4 leading-tight group-hover/card:text-gold transition-colors duration-500">
                      {study.title}
                    </h3>

                    <p className="text-sm text-warm-gray-light leading-relaxed mb-6 italic font-serif">
                      "{study.description}"
                    </p>

                    {/* Outcome Evidence Panel */}
                    <div className="bg-[#faf9f6] border border-sand rounded-2xl p-6 mb-8 group-hover/card:bg-white transition-colors duration-500">
                      <div className="flex items-center gap-2 mb-3">
                         <MousePointer2 className="w-3 h-3 text-gold" />
                         <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest">Outcome_Protocol</span>
                      </div>
                      <p className="text-sm font-bold text-warm-gray leading-snug">
                        {study.outcome}
                      </p>
                    </div>

                    <button 
                      onClick={openModal}
                      className="flex items-center gap-3 text-xs font-black text-warm-gray uppercase tracking-widest group/btn transition-all"
                    >
                      <span className="border-b-2 border-gold pb-1">Read full story</span>
                      <ArrowRight className="w-4 h-4 text-gold group-hover/btn:translate-x-3 transition-transform duration-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-32 border-2 border-dashed border-sand rounded-[3rem]">
            <p className="text-warm-gray-light italic font-serif text-xl">System archive empty for this sector.</p>
          </div>
        )}
      </div>
    </section>
  )
}
