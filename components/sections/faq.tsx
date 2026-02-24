"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  { question: "How long does this take?", answer: "The diagnostic work runs in days, not months. You get clarity fast, before momentum turns into risk.", id: "Q-01_TIMELINE" },
  { question: "What do you need from us to start?", answer: "Real transcripts, tickets, or workflows. Not polished decks. Not hypotheticals.", id: "Q-02_INPUTS" },
  { question: "Who from our side needs to be involved?", answer: "The people who actually do the work and handle exceptions. Not just the project owner.", id: "Q-03_TEAM" },
  { question: "What do we get at the end?", answer: "A clear map of what the agent should do, what it must not do, and where it must stop. Plus concrete next steps your team can act on.", id: "Q-04_OUTPUTS" },
  { question: "Is this about prompts or models?", answer: "No. This is about truth, decisions, and behavior under pressure.", id: "Q-05_NATURE" },
  { question: "How do you handle sensitive data and risk?", answer: "Access is limited. Data is scoped. Logs are controlled. Nothing is reused. Nothing is assumed.", id: "Q-06_SECURITY" },
  { question: "Can this scale beyond a pilot?", answer: "That is the point. We design for drift, change, and edge cases before scale begins.", id: "Q-07_SCALABILITY" },
  { question: "What happens after launch?", answer: "Regular review. Boundary updates. Reality checks. So the system stays correct as the business changes.", id: "Q-08_PERSISTENCE" }
];

const ProtocolCard = ({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <motion.div
      layout
      className={`bg-white border-2 transition-all duration-700 overflow-hidden relative group/card ${isOpen ? 'border-gold/30 shadow-2xl' : 'border-sand hover:border-gold/20 hover:shadow-xl'}`}
    >
      <button
        onClick={onClick}
        className="w-full px-8 py-7 flex items-center justify-between text-left relative z-10"
      >
        <span className="text-[17px] font-black text-warm-gray leading-tight tracking-tight">{faq.question}</span>
        <ChevronDown className={`w-6 h-6 text-gold transition-transform duration-700 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
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
              <div className="pt-4 border-t border-sand/30">
                <p className="text-warm-gray-light leading-relaxed text-[16px] font-medium selection:bg-gold/20">
                  {faq.answer}
                </p>
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
    <section id="faq" className="py-18 lg:py-24 bg-cream relative shadow-[inset_0_0_120px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-gold font-black leading-[0.9] mb-6 tracking-tighter">
            Frequently asked questions
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <ProtocolCard
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(isOpen => openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
