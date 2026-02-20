"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useModal } from "@/context/modal-context"
import { 
  Truck, 
  Factory, 
  Stethoscope, 
  ArrowRight, 
  MousePointer2,
  Activity
} from "lucide-react"

const caseStudies = [
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
    title: "Patient Pre-Admission Triage",
    category: "HEALTHCARE",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    description: "Voice-based triage system for surgical pre-admissions.",
    outcome: "Shifted 45% of routine data collection away from nursing staff.",
    metrics: "Zero data entry errors",
  },
]

export function CaseStudies() {
  const { openModal } = useModal()

  return (
    <section className="py-24 px-6 bg-cream-dark relative overflow-hidden">
      {/* Background Architectural Markings */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-px bg-warm-gray" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-warm-gray" />
        <div className="absolute left-[15%] top-0 w-px h-full bg-warm-gray" />
        <div className="absolute right-[15%] top-0 w-px h-full bg-warm-gray" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-warm-gray mb-6 tracking-tighter">
              How Teams Built <span className="text-gold italic">Confidence</span>
            </h2>
            <p className="text-xl text-warm-gray-light max-w-2xl mx-auto font-serif italic">
              Proven outcomes in environments where clarity and reliability are non-negotiable.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-sand rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-gold"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden bg-[#faf9f6]">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                
                {/* Metrics Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-gold text-[#1a1a1a] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] animate-pulse" />
                    {study.metrics}
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-md text-[8px] font-mono font-black text-gold uppercase tracking-[0.2em] border border-white/10">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-10">
                <h3 className="font-serif text-2xl text-warm-gray mb-4 leading-tight group-hover:text-gold transition-colors duration-500">
                  {study.title}
                </h3>
                <p className="text-sm text-warm-gray-light leading-relaxed mb-6 italic font-serif">
                  "{study.description}"
                </p>

                <div className="bg-[#faf9f6] border border-sand rounded-2xl p-6 mb-8 group-hover:bg-white transition-colors duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <MousePointer2 className="w-3 h-3 text-gold" />
                    <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest">Outcome_Protocol</span>
                  </div>
                  <p className="text-sm font-bold text-warm-gray leading-snug">
                    {study.outcome}
                  </p>
                </div>

                <Link 
                  href="/case-studies"
                  className="inline-flex items-center gap-3 text-xs font-black text-warm-gray uppercase tracking-widest group/btn"
                >
                  <span className="border-b-2 border-gold pb-1">Full Analysis</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover/btn:translate-x-3 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/case-studies">
            <button className="group relative px-12 py-5 bg-[#1a1a1a] text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-center gap-4 relative z-10">
                <span className="text-sm font-black uppercase tracking-[0.2em]">Explore All Case Studies</span>
                <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </Link>
          <p className="mt-6 text-[10px] font-mono text-warm-gray-light uppercase tracking-[0.3em]">
            9 sectors documented • Final technical reports available
          </p>
        </motion.div>
      </div>
    </section>
  )
}
