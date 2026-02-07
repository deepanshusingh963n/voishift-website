import { motion } from "framer-motion";
import { X, Check, Milestone, Package, Presentation, ShieldCheck, Hand, Search, TrendingDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";

const notPaidFor = [
  { icon: Milestone, text: "Milestones checked" },
  { icon: Package, text: "Features shipped" },
  { icon: Presentation, text: "Demos delivered" },
];

const paidForProof = [
  { icon: Hand, text: "Guessing has stopped" },
  { icon: ShieldCheck, text: "Refusal paths are enforced" },
  { icon: Search, text: "Decisions can be traced" },
  { icon: TrendingDown, text: "Risk is reduced before scale" },
];

const ValidationEngine = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
    <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
      {/* Processing Chamber */}
      <rect x="350" y="100" width="100" height="200" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
      
      {/* Particle Flow In */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`in-${i}`}
          cx="0" cy={150 + i * 50} r="3"
          fill="currentColor" className="text-warm-gray"
          animate={{ x: [0, 350], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "linear" }}
        />
      ))}

      {/* Particle Flow Out */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`out-${i}`}
          cx="450" cy={150 + i * 50} r="4"
          fill="currentColor" className="text-gold"
          animate={{ x: [450, 800], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
        />
      ))}
      
      {/* Scanning Line */}
      <motion.line
        x1="350" y1="100" x2="450" y2="100"
        stroke="currentColor" strokeWidth="2"
        className="text-gold/40"
        animate={{ y: [100, 300, 100] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

export const HowWeGetPaidSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <ValidationEngine />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-6">
            <span className="text-[10px] font-black tracking-[0.3em] text-gold uppercase">Accountability Core</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-warm-gray leading-[1.1] tracking-tight mb-4">
            How We Get Paid: <br />
            <span className="text-gold italic">Proof, Not Promises.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0 border border-sand rounded-[3rem] overflow-hidden shadow-2xl bg-white">
          {/* We do not get paid for - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 lg:p-16 bg-[#faf9f6]/50 border-r border-sand relative overflow-hidden"
          >
            {/* Visual Static Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            <div className="flex items-center gap-3 mb-12 relative z-10">
              <div className="w-10 h-10 bg-warm-gray/10 rounded-xl flex items-center justify-center border border-sand">
                <X className="w-5 h-5 text-warm-gray/40" />
              </div>
              <h3 className="text-xs font-black text-warm-gray/40 uppercase tracking-[0.3em]">
                We do not get paid for:
              </h3>
            </div>

            <div className="space-y-4 relative z-10">
              {notPaidFor.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 p-5 bg-white/50 border border-sand opacity-40 grayscale group transition-all"
                >
                  <item.icon className="w-5 h-5 text-warm-gray" />
                  <span className="text-sm font-bold text-warm-gray line-through tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-sand/30 bg-gradient-to-b from-transparent to-[#faf9f6]">
               <p className="text-[10px] font-mono text-warm-gray/20 uppercase tracking-[0.5em] text-center">
                 Commodity_Milestones_Null
               </p>
            </div>
          </motion.div>

          {/* We get paid on proof - Right */}
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
                <span className="text-[8px] font-black text-gold uppercase tracking-widest">Settlement_Criteria_Active</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-black text-warm-gray">We get paid on proof.</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {paidForProof.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col gap-4 p-6 bg-[#faf9f6] border border-sand hover:bg-white hover:border-gold-dark/30 hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 bg-white border border-sand rounded-xl flex items-center justify-center group-hover:bg-gold-dark group-hover:text-white transition-colors duration-500">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-white" />
                  </div>
                  <span className="text-xs font-black text-warm-gray uppercase tracking-tight">{item.text}</span>
                  
                  {/* Micro stamp */}
                  <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[6px] font-mono text-gold/40 tracking-widest uppercase">
                    SIG_VERIFIED_0{index + 1}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gold/5 border border-gold/10 rounded-[2rem] border-dashed flex flex-col items-center gap-8">
               <p className="text-lg font-serif italic text-gold text-center leading-relaxed">
                 "If the system cannot hold up under stress, <br />
                 <span className="not-italic font-black uppercase tracking-widest text-sm">the work is not finished.</span>"
               </p>

               <Button
                 onClick={openModal}
                 className="bg-[#1a1a1a] text-white hover:bg-gold hover:text-[#1a1a1a] px-8 py-6 rounded-full font-serif text-lg transition-all duration-500 group shadow-xl"
               >
                 Design My System
                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </Button>
            </div>
          </motion.div>
        </div>

        {/* Technical Footer Node */}
        <div className="mt-16 flex justify-center gap-12 opacity-10">
           {[1, 2, 3].map(i => (
             <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-warm-gray" />
                <span className="text-[7px] font-mono tracking-widest">PR_PROOF_CORE_0{i}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
