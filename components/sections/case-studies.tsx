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
    title: "Role-Aware Policy, SOP, and Safety Voice Copilot",
    category: "MANUFACTURING",
    image: "/Case-studies/Role-Aware Policy, SOP, and Safety Voice Copilot.png",
    description: "A mobile voice AI app that delivers the correct policy, SOP, or safety answer to employees based on their role, department, and site by retrieving information from the relevant documents.",
    outcome: "Enabled faster and more accurate policy access, reduced confusion from multiple document versions, and created a clear audit trail of guidance provided.",
  },
  {
    id: "2",
    title: "Store Performance Voice Analyst",
    category: "RETAIL",
    image: "/Case-studies/Store Performance Voice Analyst.png",
    description: "A voice-powered analytics assistant that helps sales teams analyze store performance, identify sales drivers, and forecast demand by combining sales, inventory, and promotion data.",
    outcome: "Enabled sales teams to explain performance with data, improve replenishment decisions, and act earlier on stockout risks and demand changes.",
  },
  {
    id: "3",
    title: "Contract and Supplier Change Voice Copilot",
    category: "PROCUREMENT",
    image: "/Case-studies/Contract and Supplier Change Voice Copilot.png",
    description: "A voice-based system that helps procurement and category teams quickly find contract terms, supplier information, and change request status by retrieving relevant details from contracts, supplier profiles, and change logs.",
    outcome: "Enabled faster supplier and contract research, reduced time spent searching through documents, and improved responsiveness during supplier discussions and change management processes.",
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
            <h2 className="font-serif text-4xl md:text-6xl text-gold font-black mb-6 tracking-tighter">
              How Teams Built <span className="underline underline-offset-6 italic">Confidence</span>
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
                <p className="text-[12px] text-warm-gray-light leading-relaxed mb-6 italic font-serif">
                  "{study.description}"
                </p>

                <div className="bg-[#faf9f6] border border-sand rounded-2xl p-6 mb-8 group-hover:bg-white transition-colors duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <MousePointer2 className="w-3 h-3 text-gold" />
                    <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest">Outcome_Protocol</span>
                  </div>
                  <p className="text-[12px] font-medium text-warm-gray leading-snug">
                    {study.outcome}
                  </p>
                </div>

                <Link
                  href="/case-studies#studies"
                  className="inline-flex items-center gap-3 text-xs font-black text-warm-gray uppercase tracking-widest group/btn"
                >
                  <span className="border-b-2 border-gold pb-1">Read More</span>
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
                <span className="text-sm font-black uppercase tracking-[0.2em]">Explore More</span>
                <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
