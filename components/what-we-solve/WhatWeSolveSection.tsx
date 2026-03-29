"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AlertTriangle,
  FileQuestion,
  ShieldAlert,
  HelpCircle,
  Lock,
  Hand,
  ArrowUpRight,
  RotateCcw,
  Shield,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";

const problems = [
  { icon: AlertTriangle, text: "When policies conflict across systems." },
  { icon: FileQuestion, text: "When exceptions get handled but never logged." },
  { icon: ShieldAlert, text: "When it sounds certain, but skipped the checks." },
  { icon: HelpCircle, text: "When the log text differs from spoken playback." },
];


export const WhatWeSolveSection = () => {
  const { openModal } = useModal();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <section id="hero" className="py-24 md:py-40 pb-12 bg-black lg:text-left text-center relative overflow-hidden">

      {/* Background Image with Depth Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-solve.png"
          alt="Technical blueprint structure representing VoiShift system design"
          fill
          priority
          className="object-cover opacity-[0.6]"
        />
        {/* Radial Gradient for depth and focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN GRID LAYOUT */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center mb-20 whitespace-normal">

          {/* LEFT SIDE: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-[1] tracking-tight mb-8">
              What We <br /> <span className="text-gold italic">Solve</span>
            </h1>

            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gold/50 rounded-full hidden lg:block" />
              <p className="text-xl md:text-2xl text-cream font-serif italic leading-relaxed">
                The problems that show up after deployment. <br />
                <span className="not-italic font-black text-white/90">
                  The gap between “talks well” and “works well.”
                </span>
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <Button
                onClick={() => openModal()}
                className="bg-gold text-black hover:bg-white hover:text-black px-10 py-7 rounded-none font-serif text-lg tracking-widest uppercase transition-all duration-500 group shadow-2xl border border-gold/20"
              >
                Design My System
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Technical Problem Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
          >

            {problems.map((problem, index) => (
              <motion.div
                key={problem.text}
                variants={item}
                className="group relative p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-gold/40 transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[220px] md:min-h-[260px]"
              >
                {/* Visual Accent - Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold/40 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/0 group-hover:border-gold/40 transition-all duration-700" />

                {/* Sublte Glow on Hover */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.03] transition-colors duration-700" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-none mb-8 group-hover:bg-gold transition-all duration-500 group-hover:scale-110 shadow-xl">
                    <problem.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white hover:text-gold transition-colors leading-tight mb-4">
                    {problem.text}
                  </h3>
                </div>

                <div className="relative z-10 w-full">
                  <div className="h-px w-0 bg-gold/50 group-hover:w-full transition-all duration-1000 ease-out" />
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};