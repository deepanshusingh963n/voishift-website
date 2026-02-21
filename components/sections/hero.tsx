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
          className="w-full h-full object-cover opacity-[0.3] mix-blend-multiply"
        >
          <source src="/Merged VDOs.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-transparent to-cream-light" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center w-full">

          {/* CENTER: System Narrative */}
          <motion.div style={{ y, opacity }} className="flex flex-col items-center text-center max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-gray leading-[1.5] mb-12 text-center">
                If you are copying the world with a voice bot,{" "}<br />
                <span className="text-gold uppercase text-[0.8em] block mt-2">
                  you may be copying the world's blind spots too.
                </span>
              </h1>
            </motion.div>

          

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
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
