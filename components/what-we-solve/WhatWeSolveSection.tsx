"use client"

import { motion } from "framer-motion";
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
  { icon: AlertTriangle, text: "When rules disagree" },
  { icon: FileQuestion, text: "When exceptions are undocumented" },
  { icon: ShieldAlert, text: "When confidence hides missing checks" },
  { icon: HelpCircle, text: "When no one can explain why the agent did what it did" },
];

const solutions = [
  { icon: Lock, text: "Act only on approved truth" },
  { icon: Hand, text: "Refuse cleanly when certainty is missing" },
  { icon: ArrowUpRight, text: "Escalate instead of improvising" },
  { icon: RotateCcw, text: "Can be replayed, reviewed, and corrected" },
];

export const WhatWeSolveSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-40 pb-12 bg-white relative overflow-hidden">
      {/* Structural Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5dbba_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.1]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN GRID LAYOUT (Replaces flex layout) */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center mb-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-7xl font-serif font-black text-gold leading-[1.05] tracking-tight mb-8">
              What We <br /> <span className="text-gold italic">Solve</span>
            </h2>

            <p className="text-xl text-warm-gray-light font-serif italic leading-relaxed">
              The problem that appears <br />
              <span className="not-italic font-black">
                after the bot starts sounding good.
              </span>
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
                className="bg-gold text-[#1a1a1a] hover:bg-gold-dark hover:text-white px-8 py-6 rounded-full font-serif text-lg transition-all duration-500 group shadow-xl"
              >
                Design My System
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {problems.map((problem, index) => (
              <motion.div
                key={problem.text}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 border border-sand bg-cream hover:border-gold/30 hover:shadow-2xl transition-all duration-700 overflow-hidden"
              >

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 bg-gold rounded-2xl border border-sand flex items-center justify-center shadow-inner group-hover:bg-gold-dark group-hover:text-white transition-all duration-500">
                      <problem.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h4 className="text-lg font-black text-warm-gray leading-tight mb-4">
                    {problem.text}
                  </h4>

                  <div className="h-px w-full bg-sand/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};