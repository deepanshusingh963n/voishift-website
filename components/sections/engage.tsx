"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, ArrowRight, Map, Target, CheckCircle, AlertTriangle, ListChecks, Database, Zap, Cpu, Boxes, Activity } from "lucide-react"
import { useModal } from "@/context/modal-context"

const freshStartDeliverables = [
  { text: "A clear map of where voice automation makes sense", icon: Map, id: "MAP_01" },
  { text: "Boundaries of what should never be automated yet", icon: Shield, id: "BND_01" },
  { text: "A priority path you can take to your team", icon: Target, id: "PTH_01" },
]

const stressTestDeliverables = [
  { text: "A risk map of where the agent will guess", icon: AlertTriangle, id: "RSK_01" },
  { text: "Clear points where it must confirm, refuse, or stop", icon: CheckCircle, id: "GAT_01" },
  { text: "A short list of fixes that prevent quiet damage", icon: ListChecks, id: "FIX_01" },
]

/* --- v2.0 Strategic Visuals --- */

const BlueprintConstructionVisual = () => (
  <div className="relative w-full aspect-square max-w-[200px] mx-auto group">
    <div className="absolute inset-0 bg-[#faf9f6] border border-sand overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,gold_1px,transparent_1px),linear-gradient(to_bottom,gold_1px,transparent_1px)] bg-[size:25px_25px]" />
    </div>

    {/* Animated Wireframe Cube */}
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ rotateY: 360, rotateX: 20 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-32 h-32 [transform-style:preserve-3d]"
      >
        {/* Wireframe Faces */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-gold/40 bg-gold/5 flex items-center justify-center"
            style={{
              transform: `rotateX(${i * 90}deg) translateZ(64px)`
            }}
          >
            <div className="w-1/2 h-1/2 border border-gold/20 dashed" />
          </div>
        ))}
        {/* Inner Core */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-8 bg-gold rounded-xl shadow-[0_0_20px_gold] flex items-center justify-center"
        >
          <Zap className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </div>
  </div>
)

const StructuralAuditVisual = () => (
  <div className="relative w-full aspect-square max-w-[200px] mx-auto group">
    <div className="absolute inset-0 bg-white border-2 border-gold/50 shadow-inner overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asphalt.png')]" />
    </div>

    {/* Shielded Column */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-24 h-48 bg-gold/5 border-2 border-gold/20 rounded-xl overflow-hidden">
        <motion.div
          animate={{ top: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gold to-transparent h-20 opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="w-10 h-10 text-gold" />
        </div>
      </div>

      {/* Orbital Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 border border-gold border-dashed rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 border border-gold border-dashed rounded-full"
      />
    </div>
  </div>
)

const DossierItem = ({ item, type }: { item: any, type: 'fresh' | 'stress' }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="group flex items-center gap-4 p-4 bg-cream backdrop-blur-sm border border-sand hover:bg-white hover:border-gold/30 hover:shadow-lg transition-all"
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${type === 'fresh' ? 'bg-gold/5 border-gold/10 group-hover:bg-gold/10' : 'bg-sand/10 border-sand group-hover:bg-sand/20'}`}>
      <item.icon className={`w-5 h-5 ${type === 'fresh' ? 'text-gold' : 'text-warm-gray'}`} />
    </div>
    <div className="flex-1">
      <span className="text-[14px] font-medium text-warm-gray leading-tight block">{item.text}</span>
    </div>
  </motion.div>
)

export function Engage() {
  const { openModal } = useModal()
  return (
    <section id="engage" className="py-24 lg:py-32 bg-cream-dark relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-warm-gray leading-[1.1] mb-8 text-balance max-w-5xl mx-auto">
            Two ways to engage
          </h2>
          <p className="text-xl md:text-2xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
            Both start with clarity. <br className="hidden md:block" />
            <span className="text-warm-gray not-italic font-bold underline decoration-gold/20">Both end with something you can use internally.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

          {/* PATH 1: STARTING FRESH */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col h-full bg-white border-2 border-gold/30 p-10 lg:p-14 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]" />

            <div className="relative z-10 flex-grow">
              <div className="mb-12">
                <BlueprintConstructionVisual />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-[1.5rem] bg-gold text-white flex items-center justify-center shadow-lg shadow-gold/20">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-warm-gray/40 uppercase tracking-[0.2em] mb-1">I am starting fresh</p>
                  <h3 className="text-2xl font-serif font-black text-warm-gray leading-tight">Voice AI Strategy Session</h3>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <h4 className="text-[11px] font-black text-warm-gray/30 uppercase tracking-[0.4em] mb-4">Engagement_Dossier</h4>
                <div className="space-y-4">
                  {freshStartDeliverables.map((item, index) => (
                    <DossierItem key={index} item={item} type="fresh" />
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gold/5 rounded-[2rem] border border-gold/10 mb-10 relative overflow-hidden group/text">
                <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                  <Cpu className="w-12 h-12 text-gold" />
                </div>
                <p className="text-md text-warm-gray-light italic font-serif leading-relaxed relative z-10">
                  "This is for teams <span className="text-warm-gray not-italic font-bold">deciding what to build, and what not to.</span>"
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <Button
                size="lg"
                className="w-full py-10 text-xl font-serif bg-gold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white border-2 border-gold hover:border-[#1a1a1a] rounded-[2.5rem] transition-all duration-500 shadow-xl group/btn active:scale-95"
                onClick={openModal}
              >
                Book the strategy session
                <ArrowRight className="ml-3 h-8 w-8 group-hover/btn:translate-x-3 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* PATH 2: ALREADY LIVE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col h-full bg-[#faf9f6]/90 backdrop-blur border-2 border-gold/50 p-10 lg:p-14 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex-grow">
              <div className="mb-12">
                <StructuralAuditVisual />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-[1.5rem] bg-warm-gray text-white flex items-center justify-center">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-warm-gray/40 uppercase tracking-[0.2em] mb-1">I already have something live</p>
                  <h3 className="text-2xl font-serif font-black text-warm-gray leading-tight">Voice AI Stress Test</h3>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <div className="space-y-4">
                  {stressTestDeliverables.map((item, index) => (
                    <DossierItem key={index} item={item} type="stress" />
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white/60 rounded-lg border border-sand mb-10 relative overflow-hidden group/text">
                <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                  <Activity className="w-12 h-12 text-warm-gray" />
                </div>
                <p className="text-md text-warm-gray-light italic font-serif leading-relaxed relative z-10">
                  "This is for teams asking <span className="text-warm-gray not-italic font-bold">Is this actually safe to scale?</span>"
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full py-10 text-xl font-serif border-2 border-warm-gray/20 text-warm-gray bg-cream hover:bg-warm-gray hover:text-white rounded-[2.5rem] transition-all duration-500 shadow-md group/btn active:scale-95"
                onClick={openModal}
              >
                Stress test my current build
                <ArrowRight className="ml-3 h-8 w-8 group-hover/btn:translate-x-3 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center relative"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-xl md:text-3xl text-warm-gray-light font-serif italic max-w-4xl mx-auto leading-relaxed">
              No sales deck. No pressure. <br className="hidden md:block" />
              <span className="text-warm-gray not-italic font-black text-2xl md:text-4xl uppercase tracking-tighter decoration-gold/30">Just work you can carry back <br className="md:hidden" /> into your organisation tomorrow.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
