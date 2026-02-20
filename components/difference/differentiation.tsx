"use client"

import { motion } from "framer-motion"
import { Lock, ShieldOff, TestTube, Zap } from "lucide-react"

const disciplines = [
  {
    title: "Controlled truth",
    description: "The agent speaks only from sources the business has actually approved. No guessing. No helpful improvisation.",
    icon: Lock,
    color: "#D4AF37"
  },
  {
    title: "Designed refusal",
    description: "Refusal is planned upfront, not patched later. If it cannot be sure, it stops cleanly.",
    icon: ShieldOff,
    color: "#D4AF37"
  },
  {
    title: "Real evaluation",
    description: "We test against your calls, your tickets, your edge cases. Not demos. Not benchmarks.",
    icon: TestTube,
    color: "#D4AF37"
  },
  {
    title: "Long-tail first",
    description: "The rare cases are treated as the main job. That is where trust usually breaks.",
    icon: Zap,
    color: "#D4AF37"
  },
]

/* --- Abstract Illustrations --- */

const DisciplineVisual = ({ index }: { index: number }) => {
  // Custom SVGs based on discipline concepts
  const visuals = [
    // Controlled Truth: Logic Sieve
    <svg key="sieve" viewBox="0 0 100 100" className="w-full h-full text-gold">
      <motion.path
        d="M 20,30 L 80,30 L 70,80 L 30,80 Z"
        fill="none" stroke="currentColor" strokeWidth="2"
      />
      {[1, 2, 3].map(i => (
        <motion.circle
          key={i}
          animate={{ y: [0, 40], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          cx={40 + i * 5} cy="20" r="2" fill="currentColor"
        />
      ))}
      <motion.path
        d="M 40,80 Q 50,95 60,80"
        fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"
        animate={{ strokeDashoffset: [0, -10] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </svg>,
    // Designed Refusal: Crystal Break
    <svg key="refusal" viewBox="0 0 100 100" className="w-full h-full text-gold">
      <motion.rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
      <motion.path
        d="M 30,50 L 70,50 M 50,30 L 50,70"
        stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        d="M 10,10 L 30,30 M 90,10 L 70,30 M 10,90 L 30,70 M 90,90 L 70,70"
        stroke="currentColor" strokeWidth="3"
      />
    </svg>,
    // Real Evaluation: Stress Monitor
    <svg key="eval" viewBox="0 0 100 100" className="w-full h-full text-gold">
      <motion.path
        d="M 10,50 Q 25,20 40,50 T 70,50 T 90,50"
        fill="none" stroke="currentColor" strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.circle
        animate={{ r: [2, 4, 2] }}
        transition={{ duration: 1, repeat: Infinity }}
        cx="40" cy="50" r="2" fill="currentColor"
      />
    </svg>,
    // Long-tail First: Node Focus
    <svg key="long-tail" viewBox="0 0 100 100" className="w-full h-full text-gold">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
      {[0, 90, 180, 270].map(deg => (
        <circle
          key={deg}
          cx={50 + 30 * Math.cos(deg * Math.PI / 180)}
          cy={50 + 30 * Math.sin(deg * Math.PI / 180)}
          r="3" fill="currentColor" opacity="0.3"
        />
      ))}
      <motion.circle
        animate={{ r: [2, 6, 2], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        cx="80" cy="80" r="4" fill="currentColor"
      />
      <path d="M 50,50 L 80,80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
    </svg>
  ]
  return visuals[index]
}


export function Differentiation() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
        }}
      />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-gray leading-[1.1] mb-8 text-balance">
            What makes VoiShift different
          </h2>
          <p className="text-xl md:text-2xl text-warm-gray-light max-w-3xl mx-auto font-serif italic">
            Most teams make voice AI sound smart. <br className="hidden md:block" />
            <span className="text-warm-gray not-italic font-bold">We make it behave safely when things break.</span>
          </p>
        </motion.div>

        {/* Four disciplines grid */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 bg-cream border border-sand hover:border-gold transition-all duration-500 hover:shadow-2xl overflow-hidden"
              >
                {/* Background Blueprint Grain */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

          <div className="w-16 h-16 mb-8 relative">
            <div className="absolute inset-0 bg-gold/5 rounded-none group-hover:bg-gold/10 transition-colors" />
            <DisciplineVisual index={index} />
          </div>

                <h4 className="text-xl font-bold text-warm-gray mb-4">{discipline.title}</h4>
                <p className="text-warm-gray-light leading-relaxed text-sm">{discipline.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

