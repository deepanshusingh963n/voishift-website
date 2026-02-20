"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

const forTeams = [
  "Voice AI can take action, not just answer",
  "Wrong actions cost more than slow ones",
  "Someone must explain outcomes internally or externally",
  "\"Why did it do that?\" is not acceptable",
]

const typicalTeams = [
  "Operations-led organizations",
  "Support and CX teams at scale",
  "Product, engineering, and compliance leaders",
]

const notForTeams = [
  "A fast demo",
  "A talking widget",
  "Automation without ownership",
  "Speed without restraint",
]

export default function WhoThisIsFor() {
  const [activeTab, setActiveTab] = useState<"for" | "not">("for")

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#faf9f6] p-3 border border-sand shadow-inner relative z-20 rounded-none">
            <button
              onClick={() => setActiveTab("for")}
              className={`relative z-10 px-8 py-4 rounded-none text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === "for" ? "bg-white border border-sand shadow-lg text-gold" : "text-gold/40 hover:text-gold/60"
                }`}
            >
              Who this is for
            </button>
            <button
              onClick={() => setActiveTab("not")}
              className={`relative z-10 px-8 py-4 rounded-none text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === "not" ? "bg-white border border-sand shadow-lg text-gold" : "text-gold/40 hover:text-gold/60"
                }`}
            >
              Who this is not for
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`grid md:grid-cols-2 border border-sand rounded-none overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] bg-white`}
        >
          {/* Split A */}
          <div className={`p-10 lg:p-20 relative overflow-hidden transition-colors duration-700 ${activeTab === "not" ? "bg-[#1a1a1a] text-white" : "bg-white"
            }`}>
            {/* Aesthetic overlays */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 blur-3xl opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                {activeTab === "for" ? (
                  <CheckCircle className="w-8 h-8 text-gold" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-500" />
                )}
                <span className={`text-[11px] font-black uppercase tracking-[0.4em] ${activeTab === "not" ? "text-warm-gray-light" : "text-gold"
                  }`}>
                  {activeTab === "for" ? "Strategic_Fit" : "System_Mismatch"}
                </span>
              </div>

              <h4 className="text-3xl md:text-4xl font-serif font-black mb-10 leading-tight">
                {activeTab === "for" ? (
                  <>Voice AI as a <span className="text-gold italic underline decoration-gold/20">system of record</span>, not an interface.</>
                ) : (
                  <>If <span className="text-red-500/80 italic">confident guesses</span> are acceptable, we are not the right partner.</>
                )}
              </h4>

              <p className="text-xl italic font-serif opacity-70 leading-relaxed max-w-md">
                {activeTab === "for" ? (
                  "We partner with organizations that view voice AI as a system of record, not just a talking interface."
                ) : (
                  "Speed without restraint leads to hidden costs that appear exactly when you scale."
                )}
              </p>
            </div>
          </div>

          {/* Split B */}
          <div className={`p-10 lg:p-20 flex flex-col justify-center border-l border-sand transition-colors duration-700 ${activeTab === "not" ? "bg-warm-gray text-white" : "bg-[#faf9f6]/40"
            }`}>
            <ul className="space-y-8">
              {(activeTab === "for" ? forTeams : notForTeams).map((item, i) => (
                <li key={i} className="flex items-start gap-6 group/item">
                  <div className={`mt-2.5 w-2 h-2 rounded-none shrink-0 transition-all duration-500 group-hover/item:scale-150 ${activeTab === "for" ? "bg-gold" : "bg-red-400"
                    }`} />
                  <span className="text-base font-bold tracking-tight opacity-90">{item}</span>
                </li>
              ))}
            </ul>

            {activeTab === "for" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 pt-10 border-t border-sand/30"
              >
                <p className="text-[10px] font-black text-warm-gray/30 uppercase tracking-[0.4em] mb-6 underline decoration-gold/30">Standard Profiles</p>
                <div className="flex flex-wrap gap-3">
                  {typicalTeams.map(team => (
                    <span key={team} className="px-5 py-2 bg-white border border-sand rounded-none text-[11px] font-bold text-warm-gray/60 shadow-sm hover:shadow-md transition-shadow">
                      {team}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
