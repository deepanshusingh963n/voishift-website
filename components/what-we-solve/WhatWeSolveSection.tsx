"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import {
  AlertTriangle,
  FileQuestion,
  ShieldAlert,
  HelpCircle,
  CheckCircle,
  XCircle,
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

const forTeams = [
  "Voice AI can take action, not just answer",
  "Wrong actions cost more than slow ones",
  "Someone must explain outcomes internally or externally",
  '"Why did it do that?" is not acceptable',
];



const ProblemVisual = ({ type }: { type: number }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" className="text-gold/20 group-hover:text-gold/40 transition-colors duration-700">
      {type === 0 && ( /* When rules disagree */
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path
            d="M 20,50 L 80,50 M 50,20 L 50,80"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          {[...Array(4)].map((_, i) => (
            <motion.circle
              key={i}
              cx={i % 2 === 0 ? 30 : 70}
              cy={i < 2 ? 30 : 70}
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              animate={{
                scale: [1, 1.2, 1],
                strokeWidth: ["0.5px", "1.5px", "0.5px"]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
          <motion.path
            d="M 30,30 L 70,70 M 70,30 L 30,70"
            stroke="currentColor"
            strokeWidth="1"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.g>
      )}
      {type === 1 && ( /* When exceptions are undocumented */
        <motion.g>
          <pattern id="dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          <motion.path
            d="M 10,10 Q 50,90 90,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            animate={{ d: ["M 10,10 Q 50,90 90,10", "M 10,90 Q 50,10 90,90", "M 10,10 Q 50,90 90,10"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            r="3"
            fill="currentColor"
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ offsetPath: "path('M 10,10 Q 50,90 90,10')" }}
          />
        </motion.g>
      )}
      {type === 2 && ( /* When confidence hides missing checks */
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <path d="M 50,10 L 50,90 M 10,50 L 90,50" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
          {[...Array(3)].map((_, i) => (
            <motion.rect
              key={i}
              x="45" y="10" width="10" height="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              style={{ transformOrigin: "50px 50px", transform: `rotate(${i * 120}deg)` }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
            />
          ))}
        </motion.g>
      )}
      {type === 3 && ( /* Explainability */
        <motion.g>
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <motion.path
            d="M 20,20 L 80,80"
            stroke="currentColor"
            strokeWidth="1"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M 20,50 L 80,50"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 3"
            animate={{ x: [-20, 20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <circle cx="20" cy="20" r="2" fill="currentColor" />
          <circle cx="80" cy="80" r="2" fill="currentColor" />
        </motion.g>
      )}
    </svg>
  </div>
);

export const WhatWeSolveSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Structural Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5dbba_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.1]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-black text-warm-gray leading-[1.05] tracking-tight mb-8">
              What We <br /> <span className="text-gold italic">Solve</span>
            </h2>
            <p className="text-xl text-warm-gray-light font-serif italic max-w-md leading-relaxed">
              The problem that appears <br />
              <span className="text-gold not-italic font-black">after the bot starts sounding good.</span>
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

          {/* Staggered Technical Problems Grid */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.text}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-8 rounded-[0rem] border border-sand bg-cream hover:border-gold/30 hover:shadow-2xl transition-all duration-700 overflow-hidden ${index % 3 === 0 ? "md:col-span-2" : ""
                  }`}
              >
                <ProblemVisual type={index} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 bg-gold rounded-2xl border border-sand flex items-center justify-center shadow-inner group-hover:bg-gold-dark group-hover:text-white transition-all duration-500">
                      <problem.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h4 className="text-lg font-black text-warm-gray leading-tight max-w-[200px] mb-4">
                    {problem.text}
                  </h4>
                  <div className="h-px w-full bg-sand/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Validation Matrix / Solutions */}
        <div className="relative py-20 px-8 lg:px-12 bg-[#1a1a1a] rounded-[0rem] text-center overflow-hidden shadow-2xl mb-32">
          {/* Matrix Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,167,70,0.1),transparent_70%)]"
            />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col items-center mb-16">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.6em] mb-4">The Solution Engine</p>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">We design voice AI systems that:</h3>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <solution.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-gold group-hover:text-white transition-colors duration-300">
                    {solution.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
