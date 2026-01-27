"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, ArrowRight, Map, Target, CheckCircle, AlertTriangle, ListChecks } from "lucide-react"

const freshStartDeliverables = [
  { text: "A clear map of where voice automation makes sense", icon: Map },
  { text: "Boundaries of what should never be automated yet", icon: Shield },
  { text: "A priority path you can take to your team", icon: Target },
]

const stressTestDeliverables = [
  { text: "A risk map of where the agent will guess", icon: AlertTriangle },
  { text: "Clear points where it must confirm, refuse, or stop", icon: CheckCircle },
  { text: "A short list of fixes that prevent quiet damage", icon: ListChecks },
]

export function Engage() {
  return (
    <section id="engage" className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray leading-tight mb-6 text-balance">
            Two ways to engage
          </h2>
          <p className="text-xl text-warm-gray-light max-w-2xl mx-auto">
            Both start with clarity. Both end with something you can use internally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Starting fresh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card rounded-xl border border-border p-8 shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold-dark" />
              </div>
              <div>
                <p className="text-sm text-warm-gray-light">I am starting fresh</p>
                <h3 className="text-xl font-medium text-warm-gray">Voice AI Strategy Session</h3>
              </div>
            </div>

            <p className="text-warm-gray-light mb-6">You leave with:</p>

            <div className="space-y-3 mb-6 flex-grow">
              {freshStartDeliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-3.5 h-3.5 text-gold-dark" />
                  </div>
                  <span className="text-warm-gray">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-warm-gray-light italic mb-6">
              This is for teams deciding what to build, and what not to.
            </p>

            <Button
              size="lg"
              className="w-full bg-gold hover:bg-gold-dark text-warm-gray rounded-lg shadow-sm transition-all duration-300"
              asChild
            >
              <a href="#contact">
                Book the strategy session
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Already have something */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card rounded-xl border border-border p-8 shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <Shield className="w-6 h-6 text-warm-gray" />
              </div>
              <div>
                <p className="text-sm text-warm-gray-light">I already have something live</p>
                <h3 className="text-xl font-medium text-warm-gray">Voice AI Stress Test</h3>
              </div>
            </div>

            <p className="text-warm-gray-light mb-6">You leave with:</p>

            <div className="space-y-3 mb-6 flex-grow">
              {stressTestDeliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-3.5 h-3.5 text-warm-gray-light" />
                  </div>
                  <span className="text-warm-gray">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-warm-gray-light italic mb-6">
              This is for teams asking &quot;Is this actually safe to scale?&quot;
            </p>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-gold/40 text-warm-gray hover:bg-gold/5 rounded-lg transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="#contact">
                Stress test my current build
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-warm-gray-light">
            No sales deck. No pressure. Just work you can carry back into your organisation tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
