"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useModal } from "@/context/modal-context"

// Real brand logos with local assets
const companies = [
  { name: "Google", logo: "/google.png" },
  { name: "Meta", logo: "/Meta.png" },
  { name: "DXC", logo: "/DXC.png" },
  { name: "Accenture", logo: "/accenture.png" },
  { name: "Southwest Airlines", logo: "/Southwest_Airlines.png" },
  { name: "Apache Software Foundation", logo: "/Apache_Software_Foundation.png" },
  { name: "IBM", logo: "/ibm.png" },
  { name: "Pitney Bowes", logo: "/pitney_bowes.png" },
  { name: "Thomson Reuters", logo: "/Thomson-Reuters.png" },
]

const tools = [
  { name: "OpenAI", logo: "/openai.png" },
  { name: "Claude", logo: "/claude.png" },
  { name: "Hugging Face", logo: "/huggingface.png" },
  { name: "LangChain", logo: "/langchain.png" },
  { name: "CrewAI", logo: "/crewai.png" },
  { name: "LangGraph", logo: "/langgraph.png" },
  { name: "LlamaIndex", logo: "/llamaindex.png" },
  { name: "Mistral", logo: "/mistral.png" },
  { name: "Groq", logo: "/groq.png" },
  { name: "Ollama", logo: "/ollama.png" },
]

export function LogoStrip() {
  const { openModal } = useModal()
  const [isCompaniesHovered, setIsCompaniesHovered] = useState(false)
  const [isToolsHovered, setIsToolsHovered] = useState(false)

  return (
    <section className="py-20 bg-cream-light border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-center text-sm text-warm-gray-light font-medium uppercase tracking-[0.2em]">
          The builders at VoiShift bring expertise from
        </p>
      </div>

      {/* Companies Scroll */}
      <div 
        className="relative mb-20"
        onMouseEnter={() => setIsCompaniesHovered(true)}
        onMouseLeave={() => setIsCompaniesHovered(false)}
      >
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: isCompaniesHovered ? undefined : ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex items-center shrink-0"
          >
            {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 md:px-20"
              >
                <div className="relative h-20 w-32 opacity-100 hover:opacity-100 transition-all duration-500">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-center text-sm text-warm-gray-light font-medium uppercase tracking-[0.2em]">
          Powered by industry-leading technologies
        </p>
      </div>

      {/* Tools Scroll */}
      <div 
        className="relative mb-20"
        onMouseEnter={() => setIsToolsHovered(true)}
        onMouseLeave={() => setIsToolsHovered(false)}
      >
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: isToolsHovered ? undefined : ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            className="flex items-center shrink-0"
          >
            {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 md:px-20"
              >
                <div className="relative h-20 w-32 opacity-100 hover:opacity-100 transition-all duration-500">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <Button
          onClick={openModal}
          size="lg"
          className="bg-gold hover:bg-gold-dark text-warm-gray rounded-lg shadow-sm group"
        >
          Build with our expertise
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </section>
  )
}
