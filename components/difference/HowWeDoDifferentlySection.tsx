"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageSquare,
  Cpu,
  List,
  Eye,
  Pause,
  CheckCheck,
  AlertCircle,
  Search,
  Lock,
  Hand,
  Users,
  RotateCcw,
  Settings,
  BarChart3,
  RefreshCw,
  Activity,
  Plug,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const scaleSteps = [
  { text: "Define what the agent can do, confirm, refuse, escalate", icon: Settings },
  { text: "Measure what it actually did in real situations", icon: BarChart3 },
  { text: "Review drift, changes, and new failure paths", icon: RefreshCw },
  { text: "Own corrections before they hit customers or teams", icon: Users },
]

const ScaleOrbit = () => (
  <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center">
    <div className="relative z-10 w-24 h-24 rounded-none bg-white border-2 border-gold shadow-[0_0_50px_rgba(212,175,55,0.2)] flex items-center justify-center">
      <RotateCcw className="w-10 h-10 text-gold animate-spin-slow" />
    </div>
    <div className="absolute inset-0 border border-gold rounded-full" />
    <div className="absolute inset-8 border border-gold/50 rounded-full" />
    {scaleSteps.map((step, i) => {
      const angle = (i * 90) * (Math.PI / 180)
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="absolute bg-white rounded-none border border-gold shadow-lg flex items-center justify-center text-gold z-20 w-15 h-15"
          style={{
            left: `calc(50% + ${Math.cos(angle) * 45}% - 24px)`,
            top: `calc(50% + ${Math.sin(angle) * 45}% - 24px)`
          }}
        >
          <step.icon className="w-8 h-8" />
        </motion.div>
      )
    })}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ rotate: 360 }}
        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-gold/40"
          style={{ transform: `translateX(180px) translateY(${i * 10}px)` }}
        />
      </motion.div>
    ))}
  </div>
)

const FixCard = ({ failure, why, fix, result, details }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative grid lg:grid-cols-[1fr_1.5fr] gap-px bg-gold overflow-hidden border border-sand transition-all duration-500 hover:shadow-2xl"
  >
    <div className="bg-white p-8 relative flex flex-col justify-center">
      <div className="flex items-center gap-2 text-destructive font-black text-[10px] uppercase tracking-widest mb-4">
        <AlertTriangle className="w-3.5 h-3.5" />
        Failure Mode
      </div>
      <motion.h4
        animate={{ opacity: [1, 0.8, 1], x: [0, -1, 1, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
        className="text-xl text-warm-gray font-bold italic"
      >
        {failure}
      </motion.h4>
      <p className="text-sm text-warm-gray-light mt-4">{why}</p>
    </div>
    <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-gold/10 to-transparent skew-x-12"
      />
      <div className="flex-1 relative z-10">
        <div className="text-gold font-black text-[10px] uppercase tracking-widest mb-4">VoiShift Fix</div>
        <p className="text-lg font-bold text-warm-gray">
          {fix}
          {details && <br />}
          {details && <span className="text-sm font-normal text-warm-gray/60">{details}</span>}
        </p>
      </div>
      <div className="h-px lg:w-px lg:h-12 bg-gold/20 w-full relative z-10" />
      <div className="flex-1 relative z-10">
        <div className="text-green-600 font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Result
        </div>
        <p className="text-lg font-bold text-green-700">{result}</p>
      </div>
    </div>
  </motion.div>
)

const mostStart = [
  { icon: MessageSquare, label: "Prompts" },
  { icon: Cpu, label: "Models" },
  { icon: List, label: "Feature lists" },
];

const weStart = [
  { icon: Eye, label: "Where they pause" },
  { icon: Pause, label: "Where they double-check" },
  { icon: CheckCheck, label: "Where they override rules" },
  { icon: AlertCircle, label: "Where exceptions live" },
];

const whatWeDesign = [
  {
    icon: Lock,
    title: "Controlled truth",
    description: "What the system is allowed to treat as true",
  },
  {
    icon: Hand,
    title: "Designed refusal",
    description: "When the agent must stop",
  },
  {
    icon: Users,
    title: "Clear escalation",
    description: "Who owns uncertainty",
  },
  {
    icon: RotateCcw,
    title: "Replayable decisions",
    description: "So behavior can be explained",
  },
];

const BehavioralAnatomy = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none">
      <motion.path
        d="M -50,300 Q 200,100 400,300 T 850,300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-gold"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M -50,350 Q 200,150 400,350 T 850,350"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-gold"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
      />
    </svg>
  </div>
);

export const HowWeDoDifferentlySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#faf9f6]/30 relative overflow-hidden">
      <BehavioralAnatomy />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-black text-gold leading-[1.1] tracking-tight">
            How We Do the Same Things,
            <span className="font-serif underline underline-offset-6 italic"> Differently</span>
          </h2>
        </motion.div>

        {/* Comparison Section */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0 border border-sand rounded-[0rem] overflow-hidden shadow-2xl bg-white mb-24">
          {/* Most start with - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 lg:p-16 bg-[#faf9f6]/50 border-r border-sand"
          >
            <h3 className="text-[15px] font-black text-warm-gray/60 uppercase tracking-[0.3em] mb-12">
              Most voice AI builds start with:
            </h3>
            <div className="space-y-6">
              {mostStart.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-6 p-5 bg-cream border border-sand rounded-none shadow-sm opacity-80 hover:opacity-100 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#faf9f6] rounded-none flex items-center justify-center border border-sand group-hover:bg-gold group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-warm-gray">{item.label}</span>

                  <div className="ml-auto w-1 h-1 rounded-full bg-warm-gray/20" />
                </div>
              ))}
            </div>

            <p className="mt-12 text-xs font-serif italic text-warm-gray-light">
              Focusing on the interface before the operational logic.
            </p>
          </motion.div>

          {/* We start with - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 lg:p-16 relative"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-pulse" />
              </div>
            </div>

            <h3 className="text-2xl font-serif font-black text-warm-gray mb-2">We start with behavior.</h3>
            <p className="text-lg text-warm-gray-light font-serif italic mb-12">
              We walk the workflow end to end with the people inside it:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {weStart.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col gap-4 p-6 bg-cream border border-sand rounded-none hover:bg-white hover:border-gold hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 bg-white border border-sand rounded-none flex items-center justify-center group-hover:bg-gold-dark group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-white" />
                  </div>
                  <span className="text-xs font-black text-warm-gray uppercase tracking-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gold/5 border border-gold/10 rounded-none border-dashed">
              <p className="text-sm font-serif italic text-gold text-center">
                "Those moments are what voice AI will copy—<span className="not-italic font-black uppercase tracking-widest ml-2">at speed.</span>"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Structural Foundations */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-[10px] font-black text-warm-gray/30 uppercase tracking-[0.5em] mb-4">
              Operational Architecture
            </h3>
            <p className="text-2xl font-serif font-black text-warm-gray">So instead of optimizing responses, we design:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDesign.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex flex-col items-center text-center"
              >
                {/* CAD vertical line */}
                <div className="absolute top-[-30px] bottom-[-30px] left-1/2 w-[1px] bg-sand/50 -translate-x-1/2 pointer-events-none" />

                <div className="relative bg-[#faf9f6] p-4 rounded-none border border-sand mb-8 group-hover:border-gold-dark transition-colors z-10 shadow-sm">
                  <div className="w-16 h-16 bg-white rounded-none flex items-center justify-center border border-sand group-hover:bg-gold-dark group-hover:text-white transition-all duration-500 shadow-inner overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        rotate: hoveredIndex === index ? (index % 2 === 0 ? 90 : -90) : 0
                      }}
                    >
                      <item.icon className="w-7 h-7 text-gold group-hover:text-white" />
                    </motion.div>
                  </div>
                </div>

                <div className="relative z-10 bg-white p-6 rounded-[0rem] border border-sand group-hover:border-gold group-hover:shadow-2xl transition-all duration-500 w-full min-h-[160px] flex flex-col justify-center">
                  <h4 className="text-xs font-black text-gold uppercase tracking-widest mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm font-serif italic text-warm-gray-light leading-snug">
                    {item.description}
                  </p>

                  <div className="mt-4 flex justify-center gap-1 opacity-10">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-1 h-1 rounded-full bg-warm-gray" />
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 bg-sand/30 rounded-none mb-6">
            <div className="px-6 py-2 bg-white border border-sand rounded-none shadow-sm">
              <p className="text-sm font-serif italic text-warm-gray-light">
                Same tools. Same models. <span className="not-italic font-black text-gold uppercase tracking-widest ml-1">A very different outcome.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Anatomy of a Fix */}
        <div className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* ===== Section: Anatomy of a Fix ===== */}
    <div className="text-center mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-warm-gray mb-4">
          The Anatomy of a Fix
        </h2>
        <p className="text-warm-gray-light leading-relaxed max-w-2xl mx-auto">
          Closing the gap between model potential and business reality.
        </p>
      </motion.div>
    </div>

    <div className="space-y-6 max-w-4xl mx-auto">
      <FixCard
        failure='"I can offer you a full refund."'
        why="LLM hallucinated policy based on training data overlap."
        fix="Deterministic Policy Layer"
        details="RAG + Hard Rules"
        result="0% unauthorized refund rate."
      />
      <FixCard
        failure='Bot looping "I didn&apos;t catch that."'
        why="Timeout settings too aggressive for elderly callers."
        fix="Adaptive Listening Duration"
        result="40% drop in hang-ups."
      />
    </div>

    {/* ===== Divider Space ===== */}
    <div className="mt-20 md:mt-28" />

    {/* ===== Scale Section ===== */}
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
      
      <div className="flex justify-center lg:justify-start">
        <ScaleOrbit />
      </div>

      <div className="space-y-12">

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-warm-gray mb-8">
            How this stays sane at scale
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {scaleSteps.map((step, i) => (
              <div
                key={i}
                className="p-6 bg-[#faf9f6] border border-sand hover:border-gold/30 transition-all group"
              >
                <div className="w-10 h-10 bg-white border border-sand flex items-center justify-center shadow-sm">
                  <Activity className="w-5 h-5 text-gold" />
                </div>
                <p className="text-sm font-medium text-warm-gray-light leading-relaxed mt-4">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-px w-full bg-gradient-to-r from-sand to-transparent" />

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gold font-black text-[10px] uppercase tracking-widest">
              <RotateCcw className="w-4 h-4" />
              System Lifecycle
            </div>
            <p className="text-base text-warm-gray-light italic leading-relaxed">
              Voice AI is reviewed like a system, not shipped like a feature.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gold font-black text-[10px] uppercase tracking-widest">
              <Plug className="w-4 h-4" />
              Infrastructure Fit
            </div>
            <p className="text-base text-warm-gray-light leading-relaxed">
              Every action can be replayed and explained across your existing stack.
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>


      </div>
    </section>
  );
};
