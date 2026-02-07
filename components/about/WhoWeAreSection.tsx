import { motion } from "framer-motion";
import { Cpu, Briefcase, Scale, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";

const betweenItems = [
  { left: "AI capability", right: "business reality", icon: Cpu },
  { left: "Automation", right: "accountability", icon: Briefcase },
  { left: "Fluency", right: "correctness", icon: Scale },
];

const EquilibriumBridge = () => (
  <div className="space-y-4 relative">
    {/* Central Fulcrum Line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-sand/30 -translate-x-1/2 hidden md:block" />
    
    {betweenItems.map((item, index) => (
      <motion.div
        key={item.left}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col md:flex-row items-center gap-4 md:gap-0"
      >
        <div className="flex-1 text-center md:text-right md:pr-12">
          <span className="text-sm font-black text-warm-gray uppercase tracking-tight group-hover:text-gold transition-colors">
            {item.left}
          </span>
        </div>

        <div className="relative z-10 w-12 h-12 bg-white rounded-full border border-sand flex items-center justify-center shadow-sm group-hover:border-gold-dark group-hover:scale-110 transition-all duration-500">
           <item.icon className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors" />
           
           {/* Connection dots */}
           <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sand/40 hidden md:block" />
           <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sand/40 hidden md:block" />
        </div>

        <div className="flex-1 text-center md:text-left md:pl-12">
          <span className="text-sm font-black text-warm-gray uppercase tracking-tight group-hover:text-gold transition-colors">
            {item.right}
          </span>
        </div>

        {/* Micro-annotation */}
        <div className="absolute right-0 top-0 text-[7px] font-mono text-warm-gray/10 hidden lg:block uppercase tracking-widest">
           Axis_Ref_0{index + 1}
        </div>
      </motion.div>
    ))}
  </div>
);

const SystemIntegrityVisual = () => (
   <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,146,64,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,64,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent"
      />
   </div>
);

export const WhoWeAreSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center mb-24">
          {/* Headline & Narrative - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-6">
              <span className="text-[10px] font-black tracking-[0.3em] text-gold uppercase">The Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-warm-gray leading-[1.1] tracking-tight mb-8">
              Who We Are
            </h2>
            <p className="text-2xl font-serif font-black text-warm-gray leading-tight mb-6">
              A system-first voice AI team focused on <br />
              <span className="text-gold italic">real-world behavior.</span>
            </p>
            <p className="text-lg text-warm-gray-light font-serif italic max-w-md">
              Our work sits between raw capability and operational reality, ensuring technology translates into results.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <Button
                onClick={openModal}
                className="bg-[#1a1a1a] text-white hover:bg-gold hover:text-[#1a1a1a] px-8 py-6 rounded-full font-serif text-lg transition-all duration-500 group shadow-xl"
              >
                Stress Test My Current Build
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
            
            <div className="mt-12 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-sand" />
               <span className="text-[10px] font-black text-warm-gray/30 uppercase tracking-[0.4em]">Equilibrium Axis</span>
            </div>
          </motion.div>

          {/* Equilibrium Bridge - Right */}
          <div className="relative pt-12">
             <div className="absolute top-0 right-0 text-[8px] font-mono text-warm-gray/20 uppercase tracking-[0.5em] mb-4">
                STRESS_LOAD_ANALYSIS_VERIFIED
             </div>
             <EquilibriumBridge />
          </div>
        </div>

        {/* Core Belief Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative group"
        >
          <div className="relative bg-[#faf9f6] rounded-[3rem] border border-sand p-10 lg:p-16 text-center overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-gold">
            <SystemIntegrityVisual />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-10 border border-sand shadow-sm group-hover:bg-gold-dark group-hover:text-white transition-all duration-500">
                <Zap className="w-8 h-8 text-gold group-hover:text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-black text-warm-gray leading-[1.3] mb-8">
                We care less about how <br className="hidden md:block" /> impressive something sounds
              </h3>
              
              <div className="flex justify-center mb-8">
                <div className="w-8 h-[2px] bg-gold-dark/20" />
              </div>
              
              <p className="text-xl md:text-2xl font-serif italic text-warm-gray-light">
                and more about whether it <br />
                <span className="not-italic font-black text-gold uppercase tracking-widest text-lg md:text-xl ml-2">holds up under pressure.</span>
              </p>
              
              <div className="mt-12 flex justify-center gap-6">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-dark/20" />
                      <span className="text-[8px] font-black text-warm-gray/20 uppercase tracking-widest">VERIFIED_0{i}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          {/* Decorative Corner Numbers */}
          <div className="absolute top-4 left-6 text-[8px] font-mono text-warm-gray/20">BELIEF_SYS_ENG</div>
          <div className="absolute bottom-4 right-6 text-[8px] font-mono text-warm-gray/20">V_01_INTEGRITY</div>
        </motion.div>
      </div>
    </section>
  );
};
