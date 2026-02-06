"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "We tried three solutions before VoiShift. Every one promised confidence. Only VoiShift actually delivered systems we could explain. That's not a feature. That's the business model.",
    author: "Sarah Chen",
    title: "VP of Operations",
    company: "Global Financial Services",
    avatar: "SC",
  },
  {
    id: "2",
    quote: "The difference isn't in the voice quality. It's in what the system does when it doesn't know. VoiShift escalates with clarity. Our teams now trust it.",
    author: "Marcus Webb",
    title: "Head of Customer Success",
    company: "Enterprise SaaS",
    avatar: "MW",
  },
  {
    id: "3",
    quote: "We reduced support overhead by 40%, but the real win was the audit trail. When compliance asked why the system said something, we had an answer.",
    author: "Dr. Patricia Liu",
    title: "Chief Operations Officer",
    company: "Healthcare Provider",
    avatar: "PL",
  },
  {
    id: "4",
    quote: "Building voice AI internally was costing us time and risk. VoiShift gave us the behavior architecture we were trying to build ourselves.",
    author: "James Morrison",
    title: "Director of Engineering",
    company: "Fintech Startup",
    avatar: "JM",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-cream-dark to-gold/3 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-warm-gray mb-4 text-balance">
            What They Say About Us
          </h2>
          <p className="text-lg text-warm-gray-light max-w-2xl mx-auto">
            From teams who built something they can stand behind
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-8 bg-gradient-to-br from-gold/5 via-background to-background border border-gold/20 hover:border-gold/40 h-full shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  
                  <p className="text-lg text-warm-gray-light leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gold/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-gold-dark text-sm">{testimonial.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-warm-gray">{testimonial.author}</p>
                      <p className="text-sm text-warm-gray-light">{testimonial.title}</p>
                      <p className="text-xs text-gold-dark font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
