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
} from "lucide-react";

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
    <section className="py-24 bg-[#faf9f6]/30 relative overflow-hidden">
      <BehavioralAnatomy />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-6">
            <span className="text-[10px] font-black tracking-[0.3em] text-gold uppercase">The Methodology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-warm-gray leading-[1.1] tracking-tight">
            How We Do the Same Things — <br />
            <span className="text-gold font-serif italic">Differently</span>
          </h2>
        </motion.div>

        {/* Comparison Section */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0 border border-sand rounded-[3rem] overflow-hidden shadow-2xl bg-white mb-24">
          {/* Most start with - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 lg:p-16 bg-[#faf9f6]/50 border-r border-sand"
          >
            <h3 className="text-[10px] font-black text-warm-gray/40 uppercase tracking-[0.3em] mb-12">
              Most voice AI builds start with:
            </h3>
            <div className="space-y-6">
              {mostStart.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-6 p-5 bg-white border border-sand rounded-2xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#faf9f6] rounded-xl flex items-center justify-center border border-sand group-hover:bg-warm-gray group-hover:text-white transition-colors">
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
                <span className="text-[8px] font-black text-gold uppercase tracking-widest">Sys_Trace_Active</span>
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
                  className="flex flex-col gap-4 p-6 bg-[#faf9f6] border border-sand rounded-[2rem] hover:bg-white hover:border-gold-dark/30 hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 bg-white border border-sand rounded-xl flex items-center justify-center group-hover:bg-gold-dark group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-white" />
                  </div>
                  <span className="text-xs font-black text-warm-gray uppercase tracking-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gold/5 border border-gold/10 rounded-2xl border-dashed">
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
                
                <div className="relative bg-[#faf9f6] p-4 rounded-full border border-sand mb-8 group-hover:border-gold-dark transition-colors z-10 shadow-sm">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-sand group-hover:bg-gold-dark group-hover:text-white transition-all duration-500 shadow-inner overflow-hidden">
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

                <div className="relative z-10 bg-white p-6 rounded-[2rem] border border-sand group-hover:border-gold group-hover:shadow-2xl transition-all duration-500 w-full min-h-[160px] flex flex-col justify-center">
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

                {/* Micro marking */}
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[7px] font-mono text-warm-gray/20 tracking-[0.4em] uppercase whitespace-nowrap">
                   Module_Auth_Ref_0{index + 1}
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
          className="mt-32 text-center"
        >
          <div className="inline-block p-1 bg-sand/30 rounded-full mb-6">
            <div className="px-6 py-2 bg-white border border-sand rounded-full shadow-sm">
               <p className="text-sm font-serif italic text-warm-gray-light">
                 Same tools. Same models. <span className="not-italic font-black text-gold uppercase tracking-widest ml-1">A very different outcome.</span>
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
