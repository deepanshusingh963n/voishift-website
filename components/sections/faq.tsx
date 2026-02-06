"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Database, Cpu, Search, Layers, ShieldCheck, Activity, BookOpen, Fingerprint, Loader2 } from "lucide-react"

const faqs = [
  { question: "How long does this take?", answer: "The diagnostic work runs in days, not months. You get clarity fast, before momentum turns into risk.", id: "Q-01_TIMELINE", layer: 0 },
  { question: "What do you need from us to start?", answer: "Real transcripts, tickets, or workflows. Not polished decks. Not hypotheticals.", id: "Q-02_INPUTS", layer: 1 },
  { question: "Who from our side needs to be involved?", answer: "The people who actually do the work and handle exceptions. Not just the project owner.", id: "Q-03_TEAM", layer: 2 },
  { question: "What do we get at the end?", answer: "A clear map of what the agent should do, what it must not do, and where it must stop. Plus concrete next steps your team can act on.", id: "Q-04_OUTPUTS", layer: 3 },
  { question: "Is this about prompts or models?", answer: "No. This is about truth, decisions, and behavior under pressure.", id: "Q-05_NATURE", layer: 4 },
  { question: "How do you handle sensitive data and risk?", answer: "Access is limited. Data is scoped. Logs are controlled. Nothing is reused. Nothing is assumed.", id: "Q-06_SECURITY", layer: 1 },
  { question: "Can this scale beyond a pilot?", answer: "That is the point. We design for drift, change, and edge cases before scale begins.", id: "Q-07_SCALABILITY", layer: 0 },
  { question: "What happens after launch?", answer: "Regular review. Boundary updates. Reality checks. So the system stays correct as the business changes.", id: "Q-08_PERSISTENCE", layer: 2 }
];

/* --- v2.1 Refined Neural Library Visual --- */

const NeuralLibraryVisual = ({ activeLayer = 0 }: { activeLayer?: number }) => (
  <div className="relative w-full aspect-square max-w-[340px] mx-auto group">
    <div className="absolute inset-0 bg-[#faf9f6] rounded-[3rem] border-2 border-sand overflow-hidden shadow-inner">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,gold_1px,transparent_1px),linear-gradient(to_bottom,gold_1px,transparent_1px)] bg-[size:30px_30px]" />
    </div>

    {/* Knowledge Stack */}
    <div className="absolute inset-0 flex items-center justify-center p-12">
      <div className="relative w-full h-full [transform-style:preserve-3d] -rotate-x-12 rotate-y-6">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: activeLayer === i ? 0.8 : 0.15,
              scale: activeLayer === i ? 1.05 : 1,
              y: -i * 15,
              borderColor: activeLayer === i ? "#d4af37" : "#e5e7eb"
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white border-2 rounded-2xl shadow-sm flex items-center justify-center"
            style={{ transform: `translateZ(${i * 15}px)` }}
          >
            {/* Data Fragments inside layers */}
            <div className="flex gap-1">
              {[...Array(4)].map((_, j) => (
                <div key={j} className={`w-3 h-0.5 rounded-full ${activeLayer === i ? 'bg-gold' : 'bg-sand'}`} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* The Scanning/Retrieval Beam */}
        <motion.div
          animate={{
            y: [-activeLayer * 15, -activeLayer * 15 - 10, -activeLayer * 15],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-[-20%] h-32 bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none"
          style={{ top: '50%' }}
        />

        {/* Floating Selection Indicator */}
        <motion.div
          animate={{
            y: -activeLayer * 15,
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_gold] z-50 border-2 border-white"
        />
      </div>
    </div>

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-sand shadow-sm z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <Cpu className="w-3.5 h-3.5 text-gold-dark" />
      </motion.div>
      <span className="text-[10px] font-black text-warm-gray uppercase tracking-[0.3em] whitespace-nowrap">Neural_Index_Active</span>
    </div>
  </div>
)

const ProtocolCard = ({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) => {
  const [decoding, setDecoding] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      setDecoding(true);
      setTimeout(() => {
        setDecoding(false);
        onClick();
      }, 600);
    } else {
      onClick();
    }
  }

  return (
    <motion.div
      layout
      className={`bg-white rounded-[2.5rem] border-2 transition-all duration-700 overflow-hidden relative group/card ${isOpen ? 'border-gold/30 shadow-2xl' : 'border-sand hover:border-gold/20 hover:shadow-xl'}`}
    >
      {/* Background Thematic Decal */}
      <div className="absolute -top-10 -left-10 opacity-[0.01] pointer-events-none">
        <Fingerprint className="w-40 h-40 text-warm-gray" />
      </div>

      <button
        onClick={handleToggle}
        className="w-full px-8 py-7 flex items-center justify-between text-left relative z-10"
      >
        <div className="flex items-center gap-5">
          <div className={`w-12 h-12 rounded-[1.25rem] flex items-center justify-center border-2 transition-all duration-500 ${isOpen ? 'bg-gold border-gold text-white rotate-12' : 'bg-gold/5 border-gold/10 text-gold-dark group-hover/card:bg-gold/10'}`}>
            {decoding ? <Loader2 className="w-6 h-6 animate-spin" /> : <Fingerprint className="w-6 h-6" />}
          </div>
          <span className="text-[17px] font-black text-warm-gray leading-tight tracking-tight">{faq.question}</span>
        </div>
        <ChevronDown className={`w-6 h-6 text-gold-dark transition-transform duration-700 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 pb-10 relative z-10">
              {/* Retrieval Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-[8px] font-black text-warm-gray/30 uppercase tracking-[0.2em] mb-1.5">
                  <span>Retrieving_Protocol_0{faq.id[3]}</span>
                  <span className="text-gold-dark">100%_DECRYPTED</span>
                </div>
                <div className="h-1 w-full bg-sand rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-gold"
                  />
                </div>
              </div>

              <div className="relative group/text">
                <p className="text-warm-gray-light leading-relaxed pr-6 text-[16px] font-medium selection:bg-gold/20">
                  {faq.answer}
                </p>
                <div className="absolute -bottom-4 -right-2 opacity-[0.03] rotate-12 group-hover/text:opacity-[0.06] transition-opacity duration-700">
                  <ShieldCheck className="w-24 h-24 text-gold-dark" />
                </div>
              </div>

              <div className="mt-10 pt-5 border-t border-sand/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_green]" />
                  <span className="text-[9px] font-black text-warm-gray/30 uppercase tracking-widest whitespace-nowrap">Source: Verified_System_Kernel</span>
                </div>
                <span className="text-[9px] font-mono text-gold-dark/40 font-bold">{faq.id}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream-dark relative shadow-[inset_0_0_120px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gold/5 blur-[140px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold/5 blur-[140px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24 items-start">

          {/* LEFT: Reactive Context */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border-2 border-sand rounded-full mb-10 shadow-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Database className="w-4 h-4 text-gold-dark" />
              <span className="text-[11px] font-black tracking-[0.3em] text-warm-gray uppercase relative z-10">Protocol_Library</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-warm-gray leading-[0.9] mb-12 tracking-tighter">
              Frequently asked questions
            </h2>

            <div className="mb-14 px-4">
              <NeuralLibraryVisual activeLayer={openIndex !== null ? faqs[openIndex].layer : 0} />
            </div>

            <div className="space-y-8 border-l-4 border-gold/10 pl-10 ml-4">
              <p className="text-xl md:text-2xl text-warm-gray-light font-serif italic leading-snug max-w-sm">
                Real talk about truth, decisions, and <span className="text-warm-gray not-italic font-bold">behavior under pressure.</span>
              </p>
              <div className="flex gap-4">
                {[Search, Activity, Layers].map((Icon, i) => (
                  <Icon key={i} className="w-5 h-5 text-gold-dark/20" />
                ))}
              </div>
            </div>
            {/* Closing Tactical Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-16 p-12 bg-white/30 backdrop-blur-xl rounded-[4rem] border-2 border-sand border-dashed text-center relative overflow-hidden group"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gold shadow-[0_0_20px_gold] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 rounded-full border border-gold/10 text-[9px] font-black text-gold-dark uppercase tracking-widest">Decision_Integrity_Final</span>
                <p className="text-lg md:text-xl text-warm-gray-light font-serif italic leading-relaxed">No fluff. No long procurement cycles.</p>
                <p className="text-2xl md:text-3xl font-serif text-warm-gray leading-[0.95] tracking-tighter">
                  Just a <span className="text-[#1a1a1a] font-black not-italic uppercase tracking-tighter underline decoration-gold/40 decoration-wavy">clean way to decide</span> <br className="hidden md:block" />
                  if this is worth scaling.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Protocols Staggered Grid */}
          <div className="flex flex-col gap-6">
            {faqs.map((faq, index) => (
              <ProtocolCard
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
