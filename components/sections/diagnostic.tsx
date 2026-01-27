"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, AlertTriangle, Target, Shield, DollarSign, ArrowRight, Map, Gauge } from "lucide-react"

const questionTopics = [
  { text: "Does your bot have a fallback for silence longer than 4 seconds?", icon: AlertTriangle },
  { text: "Can you trace exactly why a specific answer was given?", icon: Target },
  { text: "Is your latency under 800ms for 99% of calls?", icon: Shield },
  { text: "Do you filter PII before it hits the LLM?", icon: ClipboardCheck },
  { text: "Can you update a policy without retraining the model?", icon: DollarSign },
]

const outputs = [
  { text: "A risk map of where your agent will guess", icon: Map },
  { text: "A boundary line of what it should not do", icon: Shield },
  { text: "A simple trust grade you can share internally", icon: Gauge },
]

export function Diagnostic() {
  return (
    <section id="diagnostic" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray leading-tight mb-6 text-balance">
            A five-question reality check
          </h2>
          <p className="text-xl text-warm-gray-light max-w-2xl mx-auto">
            Before you book anything, answer five questions. Not about tools. About behavior.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Questions surface these things */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-sm font-medium text-warm-gray-light uppercase tracking-wider mb-6">
              The questions surface things like
            </h3>
            <div className="space-y-4">
              {questionTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <topic.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="text-warm-gray">{topic.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm h-full">
              <h3 className="text-lg font-medium text-warm-gray mb-2">You answer in minutes.</h3>
              <p className="text-warm-gray-light mb-6">We return one screen. You see:</p>

              <div className="space-y-4 mb-8">
                {outputs.map((output, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <output.icon className="w-5 h-5 text-gold-dark flex-shrink-0" />
                    <span className="text-warm-gray">{output.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gold/5 border border-gold/20 rounded-lg mb-6">
                <p className="text-warm-gray-light text-sm">
                  No pitch. No demo. Just clarity you can act on.
                </p>
              </div>

              <p className="text-warm-gray italic mb-6">
                If the output feels uncomfortable, good. That is the point.
              </p>

              <Button
                size="lg"
                className="w-full bg-gold hover:bg-gold-dark text-warm-gray rounded-lg shadow-sm transition-all duration-300"
                asChild
              >
                <a href="#engage">
                  Continue to the diagnostic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
