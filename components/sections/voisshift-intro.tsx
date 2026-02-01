"use client"

import { motion } from "framer-motion"
import { Eye, Zap, FileQuestion, UserCheck, AlertCircle } from "lucide-react"

const workflowPoints = [
  { text: "Where they pause", icon: Eye },
  { text: "Where they double-check", icon: FileQuestion },
  { text: "Where they ask someone", icon: UserCheck },
  { text: "Where they make an exception", icon: AlertCircle },
]

export function VoiShiftIntro() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Main message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-bold font-serif text-3xl md:text-4xl text-warm-gray leading-tight mb-6 text-center">
              VoiShift turns voice AI from a speaking layer into a <span className="text-gold">business system that holds up when conditions are not clean.</span>
            </h2>

            <div className="p-6 bg-gold/5 border border-gold/20 rounded-lg mb-8 text-center">
              <p className="text-xl font-medium text-foreground">
                You can rent a voice.
              </p>
              <p className="text-xl text-primary font-semibold">
                You cannot rent ownership of what is true.
              </p>
            </div>

            <div className="space-y-4 text-warm-gray-light">
              <div className="space-y-3">
                <p className="text-charcoal-muted line-through">
                  Not with prompts.
                </p>
                <p className="text-charcoal-muted line-through">Not with demos.</p>
                <p className="text-charcoal-muted line-through">
                  Not with "let's automate this one thing."
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-md text-foreground font-medium">
                  We walk the workflow end to end with the people inside it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Workflow points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-card rounded-xl border border-border p-10 shadow-sm">
              <h3 className="text-2xl font-medium text-warm-gray mb-2">
                We walk the workflow end to end
              </h3>
              <p className="text-xl text-warm-gray-light mb-6">
                With the people inside it.
              </p>

              <div className="space-y-4">
                {workflowPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-4 h-4 text-gold-dark" />
                    </div>
                    <span className="text-xl text-warm-gray">{point.text}</span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-xl text-warm-gray-light italic text-sm">
                Those are the moments voice AI will copy, at speed.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Leading question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-gold rounded-xl border border-border">
            <p className="text-xl md:text-2xl text-warm-gray font-serif italic">
              If someone asks why it said that, will your answer be clear, or a guess?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
