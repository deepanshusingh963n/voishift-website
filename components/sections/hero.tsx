"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useModal } from "@/context/modal-context";
import { useRef, useState, useEffect } from "react";

/* --- v2.0 System Logic Engine Illustration --- */

const list = [
  "Decision Intelligence",
  "Conversational DNA",
  "Contextual Precision",
]

export function Hero() {
  const { openModal } = useModal();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (currentIndex >= list.length) {
      setCurrentIndex(0);
      setDisplayText("");
      setIsDeleting(false);
      return;
    }

    const currentWord = list[currentIndex];
    let typeSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % list.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Atmospheric Video (Dark Overlay) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover md:opacity-[0.9] opacity-[0.7]"
        >
          <source src="/Merged VDOs.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center w-full">

          {/* CENTER: System Narrative */}
          <motion.div style={{ y, opacity }} className="flex flex-col items-center text-center max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center"
            >
              {/* Top Hook with lines */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-8 md:w-12 bg-gold" />
                <p className="text-gold text-[10px] md:text-xs lg:text-sm font-medium tracking-[0.3em] uppercase bg-black rounded-full p-2">
                  Exploring voice AI that can run work, not just talk?
                </p>
                <div className="h-[2px] w-8 md:w-12 bg-gold" />
              </div>

              {/* Multi-styled Heading */}
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.1] mb-12">
                <span className="font-normal block mb-2">Build Voice-AI that <span className="font-bold italic block mb-2">compounds human edge,</span></span>
                <span className="font-bold text-gold block">not erase it.</span>
              </h1>

              {/* Subheading/Narration */}
              <div className="text-white uppercase font-sans text-lg md:text-lg lg:text-3xl flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 mb-12">
                <span className="font-bold">OWN</span>
                <span className="lowercase font-serif italic opacity-90 mx-1">, don’t hand over to a</span>
                <span className="relative inline-block font-bold px-1">
                  BOT IN A BOX
                  <span className="absolute left-0 top-1/2 w-full h-[2px] bg-red-600/80 -translate-y-1/2"></span>
                </span>
                <span className="lowercase font-serif italic opacity-90 mx-1">, your organization’s</span>
                <span className="font-bold text-gold border border-gold/60 px-2 py-0.5 leading-none">YOU!</span>
              </div>

              {/* Animated Text Section - Large Gold Box */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-16">
                <div className="text-gold font-serif text-3xl md:text-5xl lg:text-6xl">
                  Your
                </div>
                <div className="bg-gold px-4 py-2 md:px-8 md:py-4 shadow-2xl min-w-[300px] md:min-w-[500px] lg:min-w-[600px] flex items-center justify-center">
                  <span className="text-black text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                    {displayText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 opacity-70"
                    >
                      |
                    </motion.span>
                  </span>
                </div>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full flex justify-center"
            >
              <Button
                variant="outline"
                size="xl"
                className="group border bg-white/60 hover:bg-gold hover:text-black text-black text-sm md:text-base lg:text-lg font-bold tracking-widest uppercase py-6 px-10 transition-all duration-300 rounded-none"
                onClick={() => openModal()}
              >
                I need a system, not a bot
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}