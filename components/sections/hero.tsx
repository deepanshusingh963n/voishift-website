"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Cpu, Activity, Layout, Layers, Terminal } from "lucide-react";
import { useModal } from "@/context/modal-context";
import { useRef, useState, useEffect } from "react";

/* --- v2.0 System Logic Engine Illustration --- */

const LogicEngineVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[300px] mx-auto group perspective-1000">
      {/* Background Structural Grid */}
      <div className="absolute inset-0 bg-[#faf9f6] border-2 border-sand overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,gold_1px,transparent_1px),linear-gradient(to_bottom,gold_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent" />
      </div>

      {/* Reactive HUD Elements */}
      <div className="absolute top-10 left-10 flex flex-col gap-2">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-sand shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-black text-warm-gray uppercase tracking-widest">System_Live: VERIFIED</span>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [4, 12, 4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-1 bg-gold/30 rounded-full"
            />
          ))}
        </div>
        <span className="text-[8px] font-black text-warm-gray/30 uppercase tracking-[0.3em]">Frequency_Audit_Stream</span>
      </div>

      {/* The Central Logic Engine (3D Sphere of Nodes) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            rotateY: mousePos.x * 30,
            rotateX: -mousePos.y * 30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="relative w-64 h-64 flex items-center justify-center"
        >
          {/* Core Node */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: 360 }}
            transition={{ scale: { duration: 2, repeat: Infinity }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
            className="relative w-32 h-32 rounded-full bg-gold shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center justify-center z-20"
          >
            <Zap className="w-12 h-12 text-[#1a1a1a]" />
            {/* Orbiting Ring */}
            <div className="absolute inset-[-20%] border-2 border-white/40 rounded-full dashed opacity-50" />
          </motion.div>

          {/* Connecting Nodes (Outer Ring) */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-6 h-6 rounded-lg bg-white border border-sand shadow-lg flex items-center justify-center z-10"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-120px) rotate(-${i * 60}deg)`
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              {/* Connection Line back to core */}
              <div
                className="absolute h-px bg-gradient-to-r from-gold/20 to-transparent pointer-events-none"
                style={{
                  width: '120px',
                  right: '100%',
                  transform: 'rotate(0deg)',
                  transformOrigin: 'right center'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export function Hero() {
  const { openModal } = useModal();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center bg-cream-light overflow-hidden pt-20">

      {/* Background Architectural Markings */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-0 w-full h-px bg-charcoal" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-charcoal" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-charcoal" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-charcoal" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-charcoal" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-charcoal" />
      </div>

      {/* Atmospheric Video (Low Opacity) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.2] mix-blend-multiply"
        >
          <source src="/hero_background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-transparent to-cream-light" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">

          {/* LEFT: System Narrative */}
          <motion.div style={{ y, opacity }}>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold text-warm-gray leading-[1.3] mb-12">
                If you are copying the <br />
                world with a voice bot,{" "}<br />
                <span className="text-gold uppercase text-[0.8em] block mt-2">
                  you may be copying the <br /> world's blind spots too.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 mb-12 relative"
            >
              <div className="absolute -left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-sand to-transparent opacity-30" />

              <div className="p-2 max-w-xl bg-white/40 backdrop-blur-md border border-sand shadow-inner group transition-all hover:bg-white/60">
                <p className="text-md md:text-lg text-warm-gray-light font-serif italic selection:bg-gold/20">
                  "Everyone is just following everyone else, installing a voice bot like a widget.
                  A quick win. A clean demo. A bot that sounds ready. <span className="text-warm-gray not-italic font-black">That is how it starts.</span>"
                </p>
              </div>

              <p className="text-lg md:text-xl font-serif text-warm-gray max-w-xl mt-6">
                Most teams set rules. <span className="text-gold font-black underline decoration-gold/20">Very few know</span> when the bot quietly stopped following the right one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button
                size="sm"
                className="w-full sm:w-auto py-6 px-10 text-sm font-serif bg-[#1a1a1a] text-white hover:bg-gold hover:text-[#1a1a1a] transition-all duration-500 shadow-2xl group/btn active:scale-95 border-2 border-[#1a1a1a]"
                onClick={openModal}
              >
                I need a system, not a bot
                <ArrowRight className="ml-3 h-8 w-8 group-hover/btn:translate-x-3 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto py-6 px-10 text-sm font-serif border-2 border-gold text-warm-gray hover:bg-gold/5 transition-all duration-500 shadow-lg group/btn-sec active:scale-95 bg-white/50"
                onClick={openModal}
              >
                <Shield className="mr-3 h-7 w-7 text-gold" />
                Stress Test My Current Build
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: The Logic Engine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="hidden lg:block relative"
          >
            <LogicEngineVisual />

            {/* HUD Callouts */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 p-6 bg-white rounded-3xl border border-sand shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-3 h-3 text-gold" />
                <span className="text-[9px] font-black text-warm-gray tracking-widest uppercase">Drift_Monitor</span>
              </div>
              <div className="h-1.5 w-full bg-sand rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ["10%", "85%", "10%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="h-full bg-gold"
                />
              </div>
            </motion.div>

            <div className="absolute -bottom-12 -left-8 p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-sand shadow-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <Layers className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest block">Structural_Health</span>
                <span className="text-xl font-serif font-black text-warm-gray">100%_SECURE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-8 rounded-full border-2 border-sand flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-gold"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
