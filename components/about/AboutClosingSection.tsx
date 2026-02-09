import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles, Calendar } from "lucide-react";
import { useModal } from "@/context/modal-context";

const ConfidenceGauge = () => (
  <div className="relative w-24 h-24 mx-auto mb-8">
    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
      <circle
        cx="50" cy="50" r="45"
        fill="none" stroke="currentColor" strokeWidth="1"
        className="text-sand/30"
      />
      <motion.circle
        cx="50" cy="50" r="45"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeDasharray="283"
        initial={{ strokeDashoffset: 283 }}
        whileInView={{ strokeDashoffset: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "circOut" }}
        className="text-gold"
      />
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1="50" y1="5" x2="50" y2="8"
          transform={`rotate(${i * 30} 50 50)`}
          stroke="currentColor" strokeWidth="0.5"
          className="text-sand"
        />
      ))}
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-pulse mb-1" />
      <span className="text-[7px] font-black text-gold uppercase tracking-[0.2em]">Earned</span>
    </div>
  </div>
);

export const AboutClosingSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 bg-cream-light relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <ConfidenceGauge />

            <h2 className="text-2xl md:text-4xl font-serif font-black text-warm-gray leading-tight mb-6">
              You can rent a voice. <br />
              <span className="text-gold italic">You cannot rent ownership of what is true.</span>
            </h2>

            <div className="flex justify-center mb-8">
              <div className="w-12 h-[1px] bg-sand" />
            </div>

            <p className="text-lg md:text-xl text-warm-gray-light font-serif italic mb-3">
              Voice AI will speak with confidence.
            </p>
            <p className="text-xl md:text-2xl font-serif font-black text-warm-gray">
              The question is whether that confidence is <br className="md:hidden" />
              <span className="text-gold uppercase tracking-widest ml-2">earned.</span>
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-[9px] font-black tracking-[0.4em] text-warm-gray/30 uppercase mb-3">The Next Step</h3>
            <h4 className="text-2xl md:text-3xl font-serif font-black text-warm-gray leading-tight">
              Two ways to start. <br />
              <span className="text-xs font-serif italic text-warm-gray-light">Both focused on clarity.</span>
            </h4>
          </motion.div>

          <div className="relative">
            {/* Center Line visual */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-sand/30 -translate-x-1/2 hidden md:block" />

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
              {/* Strategy Session */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group p-8 bg-white rounded-[0rem] border border-sand hover:border-gold-dark/30 hover:bg-white hover:shadow-2xl transition-all duration-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white rounded-2xl border border-sand flex items-center justify-center mb-6 group-hover:bg-gold-dark group-hover:text-white transition-all duration-500 shadow-sm relative overflow-hidden">
                    <Sparkles className="w-6 h-6 text-gold group-hover:text-white" />
                    <div className="absolute top-1 right-1 text-[5px] font-mono text-warm-gray/20">V_01</div>
                  </div>

                  <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest mb-2">Starting Fresh</span>
                  <h5 className="text-lg font-serif font-black text-warm-gray mb-4">Voice AI Strategy Session</h5>

                  <p className="text-xs font-serif italic text-warm-gray-light leading-snug mb-8 max-w-[220px]">
                    Decide where automation makes sense—and where it does not.
                  </p>

                  <div className="w-full relative group/btn">
                    <Button
                      variant="hero"
                      className="w-full bg-white border border-sand text-warm-gray font-black uppercase text-[9px] tracking-widest hover:bg-gold-dark hover:text-white hover:border-gold-dark transition-all duration-300 py-5"
                      onClick={openModal}
                    >
                      <Calendar className="mr-2 w-3.5 h-3.5" />
                      Book the session
                      <ArrowRight className="ml-2 w-3.5 h-3.5" />
                    </Button>

                  </div>
                </div>
              </motion.div>

              {/* Stress Test */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group p-8 bg-white rounded-[0rem] border border-sand hover:border-gold-dark/30 hover:bg-white hover:shadow-2xl transition-all duration-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white rounded-2xl border border-sand flex items-center justify-center mb-6 group-hover:bg-warm-gray group-hover:text-white transition-all duration-500 shadow-sm relative overflow-hidden">
                    <Shield className="w-6 h-6 text-gold group-hover:text-white" />
                    <div className="absolute top-1 right-1 text-[5px] font-mono text-warm-gray/20">V_02</div>
                  </div>

                  <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest mb-2">Already Live</span>
                  <h5 className="text-lg font-serif font-black text-warm-gray mb-4">Voice AI Stress Test</h5>

                  <p className="text-xs font-serif italic text-warm-gray-light leading-snug mb-8 max-w-[220px]">
                    Find where the system will guess before users feel it.
                  </p>

                  <div className="w-full relative group/btn">
                    <Button
                      variant="heroSecondary"
                      className="w-full bg-warm-gray text-white border border-warm-gray font-black uppercase text-[9px] tracking-widest hover:bg-gold-dark hover:border-gold-dark transition-all duration-300 py-5"
                      onClick={openModal}
                    >
                      <Shield className="mr-2 w-3.5 h-3.5" />
                      Stress test build
                      <ArrowRight className="ml-2 w-3.5 h-3.5" />
                    </Button>

                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[6px] font-mono text-warm-gray/10 uppercase tracking-[0.4em] opacity-0 group-hover/btn:opacity-100 transition-opacity">
                      SIG_VALIDATION_ACTIVE
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-6 py-2 bg-[#faf9f6] border border-sand rounded-full">
              <p className="text-[10px] font-serif italic text-warm-gray-light">
                No sales decks. No pressure. <br className="sm:hidden" />
                <span className="not-italic font-black text-gold uppercase tracking-[0.2em] ml-2">Just clarity you can stand behind.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
