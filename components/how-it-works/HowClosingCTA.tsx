"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileCheck, Shield, Target, Zap } from "lucide-react"
import { useModal } from "@/context/modal-context"

const deliverables = [
  "System Blueprint",
  "Boundary Map",
  "Stress Test Report",
  "Evaluation Results",
  "Evidence & Verification Logs"
]

export default function HowClosingCTA() {
  const { openModal } = useModal()

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#1a1a1a] rounded-[3rem] p-8 lg:p-20 relative overflow-hidden group shadow-2xl">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-colors duration-1000" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="text-[15px] font-black text-gold uppercase tracking-[0.5em]">The Result</span>
                <h2 className="text-4xl lg:text-7xl font-serif text-white leading-tight">
                  Design My <br />
                  <span className="text-gold italic">System.</span>
                </h2>
                <p className="text-xl text-white/60 font-serif italic max-w-lg">
                  Stop hoping your voice AI works. Start proving it. We build the architecture that ensures your agents never "fly blind."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-warm-gray px-10 py-8 text-xl rounded-2xl h-auto transition-transform hover:scale-105"
                  onClick={openModal}
                >
                  Get Started
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-gold px-10 py-8 text-xl rounded-2xl h-auto bg-transparent"
                  onClick={openModal}
                >
                  Stress Test My Build
                </Button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 lg:p-12 rounded-3xl backdrop-blur-sm relative">
                <div className="absolute -top-6 -left-6 p-4 bg-gold rounded-2xl shadow-xl flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-warm-gray" />
                  <span className="text-xs font-black text-warm-gray uppercase tracking-widest">Deliverables</span>
                </div>
                
                <h4 className="text-sm font-black text-gold uppercase tracking-[0.3em] mb-8">What you get back:</h4>
                <div className="grid gap-6">
                  {deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                        <Zap className="w-4 h-4 text-gold group-hover:text-warm-gray transition-colors" />
                      </div>
                      <span className="text-lg font-serif text-white/80 group-hover:text-gold transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-gold/20 flex items-center justify-center text-[10px] font-black text-white">
                          0{i}
                        </div>
                      ))}
                   </div>
                   <span className="text-[10px] font-black uppercase text-gold/40 tracking-widest">VoiShift_Validated</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
