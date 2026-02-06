"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useModal } from "@/context/modal-context"

export function CaseStudiesCTA() {
  const { openModal } = useModal()
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cream-dark via-background to-gold/3 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-warm-gray mb-6 text-balance">
            Ready to Build Voice AI That Holds Up?
          </h2>

          <p className="text-xl text-warm-gray-light mb-12 max-w-2xl mx-auto">
            See how your voice AI could work. No demos. No hype. Just clarity.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-dark hover:via-gold hover:to-gold-dark text-warm-gray px-8 py-8 text-base rounded-xl shadow-lg hover:shadow-xl h-auto flex flex-col items-center justify-center gap-3 transition-all duration-300 font-semibold"
                onClick={openModal}
              >
                Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="w-full border-2 border-gold text-gold hover:bg-gold/10 px-8 py-8 text-base rounded-xl h-auto flex flex-col items-center justify-center gap-3 transition-all duration-300 bg-transparent font-semibold hover:border-gold-dark shadow-md hover:shadow-lg"
                onClick={openModal}
              >
                Voice AI Stress Test
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-warm-gray-light mt-10"
          >
            No sales decks. No pressure. Just the clarity you need to decide.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
