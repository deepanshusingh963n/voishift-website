"use client"

import { motion } from "framer-motion"
import { Quote, Fingerprint, Activity, Terminal } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  avatar: string
  category: "FINANCE" | "SAAS" | "HEALTHCARE" | "FINTECH"
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "We tried three solutions before VoiShift. Every one promised confidence. Only VoiShift actually delivered systems we could explain. That's not a feature. That's the business model.",
    author: "Sarah Chen",
    title: "VP of Operations",
    company: "Global Financial Services",
    avatar: "SC",
    category: "FINANCE",
  },
  {
    id: "2",
    quote: "The difference isn't in the voice quality. It's in what the system does when it doesn't know. VoiShift escalates with clarity. Our teams now trust it.",
    author: "Marcus Webb",
    title: "Head of Customer Success",
    company: "Enterprise SaaS",
    avatar: "MW",
    category: "SAAS",
  },
  {
    id: "3",
    quote: "We reduced support overhead by 40%, but the real win was the audit trail. When compliance asked why the system said something, we had an answer.",
    author: "Dr. Patricia Liu",
    title: "Chief Operations Officer",
    company: "Healthcare Provider",
    avatar: "PL",
    category: "HEALTHCARE",
  },
  {
    id: "4",
    quote: "Building voice AI internally was costing us time and risk. VoiShift gave us the behavior architecture we were trying to build ourselves.",
    author: "James Morrison",
    title: "Director of Engineering",
    company: "Fintech Startup",
    avatar: "JM",
    category: "FINTECH",
  },
]

const VoicePulse = ({ category }: { category: string }) => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 0 50 Q 25 40 50 50 T 100 50"
          fill="none"
          stroke="gold"
          strokeWidth="0.5"
          animate={{
            d: [
              "M 0 50 Q 25 40 50 50 T 100 50",
              "M 0 50 Q 25 60 50 50 T 100 50",
              "M 0 50 Q 25 40 50 50 T 100 50",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0 50 Q 25 60 50 50 T 100 50"
          fill="none"
          stroke="gold"
          strokeWidth="0.2"
          animate={{
            d: [
              "M 0 50 Q 25 60 50 50 T 100 50",
              "M 0 50 Q 25 30 50 50 T 100 50",
              "M 0 50 Q 25 60 50 50 T 100 50",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* CAD Grid Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.sand/20)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute left-[5%] top-0 w-px h-full bg-sand/10" />
        <div className="absolute right-[5%] top-0 w-px h-full bg-sand/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-8">
            <Fingerprint className="w-3 h-3 text-gold" />
            <span className="text-[10px] font-black tracking-[0.3em] text-gold uppercase">Verified Records</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-warm-gray mb-6 tracking-tighter">
            Statements of <span className="text-gold italic">Confidence</span>
          </h2>
          <p className="text-xl text-warm-gray-light max-w-2xl mx-auto font-serif italic">
            From teams who built something they can stand behind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative py-12 px-10 bg-white border border-gold rounded-[3rem] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-gold",
                idx % 2 === 1 ? "md:mt-16" : ""
              )}
            >
              {/* Voice Signature Animation */}
              <VoicePulse category={testimonial.category} />
              
              {/* Card HUD Detail */}
              <div className="absolute top-8 right-10 flex items-center gap-4">
                 <Activity className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors duration-700" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <Quote className="w-10 h-10 text-gold/50 mb-8 group-hover:text-gold/70 transition-colors" />
                
                <p className="font-serif text-2xl text-warm-gray mb-12 leading-tight italic group-hover:text-warm-gray transition-colors duration-500">
                  "{testimonial.quote}"
                </p>

                <div className="mt-auto flex items-center gap-6 pt-10 border-t border-sand">
                  {/* Identity HUD Avatar */}
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gold/10 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white border border-sand rounded-2xl flex items-center justify-center group-hover:border-gold group-hover:shadow-lg transition-all">
                       <span className="text-[10px] font-black text-warm-gray tracking-tighter uppercase">{testimonial.avatar}</span>
                    </div>
                    {/* CAD Crosshairs */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gold/40" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gold/40" />
                  </div>

                  <div className="flex-1">
                    <p className="text-lg font-serif italic text-warm-gray leading-none mb-1">{testimonial.author}</p>
                    <p className="text-xs font-black text-warm-gray/40 uppercase tracking-widest leading-none mb-2">
                      {testimonial.title}
                    </p>
                    <div className="inline-block px-3 py-1 bg-[#faf9f6] border border-sand rounded-md group-hover:bg-gold/5 group-hover:border-gold/20 transition-all">
                       <span className="text-[10px] font-mono font-black text-gold uppercase tracking-tighter">
                         ORG: {testimonial.company}
                       </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Scanline effect */}
              <motion.div 
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-px bg-gold/5 blur-sm opacity-0 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
