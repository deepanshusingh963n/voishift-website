"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  { question: "How long does this take?", answer: "The diagnostic work runs in days, not months. You get clarity fast, before momentum turns into risk." },
  { question: "What do you need from us to start?", answer: "Real transcripts, tickets, or workflows. Not polished decks. Not hypotheticals." },
  { question: "Who from our side needs to be involved?", answer: "The people who actually do the work and handle exceptions. Not just the project owner." },
  { question: "What do we get at the end?", answer: "A clear map of what the agent should do, what it must not do, and where it must stop. Plus concrete next steps your team can act on." },
  { question: "Is this about prompts or models?", answer: "No. This is about truth, decisions, and behavior under pressure." },
  { question: "How do you handle sensitive data and risk?", answer: "Access is limited. Data is scoped. Logs are controlled. Nothing is reused. Nothing is assumed." },
  { question: "Can this scale beyond a pilot?", answer: "That is the point. We design for drift, change, and edge cases before scale begins." },
  { question: "What happens after launch?", answer: "Regular review. Boundary updates. Reality checks. So the system stays correct as the business changes." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-800 mb-16 text-center">Frequently asked questions</h2>
        <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="bg-stone-50 rounded-xl border border-amber-100 overflow-hidden">
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-amber-50">
            <span className="text-lg font-medium text-neutral-800 pr-4">{faq.question}</span>
            <ChevronDown className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} /></button>
          <div className={`overflow-hidden transition-all ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
            <div className="px-6 pb-5 text-neutral-700">{faq.answer}</div>
          </div>
        </div>))}
        </div>
        <div className="mt-16 text-center space-y-4">
          <p className="text-xl text-neutral-700">No fluff. No long procurement cycles.</p>
          <p className="text-2xl font-medium text-neutral-800">Just a clean way to decide if this is worth scaling.</p>
        </div>
      </div>
    </section>
  );
}
