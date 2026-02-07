"use client"

import { motion } from "framer-motion"

export function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-white overflow-hidden">
      {/* Structural Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5dbba_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.1]" />
        
        {/* Outcome Constellation SVG */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
          <defs>
            <pattern id="constellation-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#D4AF37" />
              <motion.path 
                d="M 50,50 L 100,0 M 50,50 L 0,0 M 50,50 L 50,100" 
                stroke="#D4AF37" 
                strokeWidth="0.2" 
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation-grid)" />
        </svg>

        {/* Blueprint Frames */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Breadcrumbs Status Bar */}
          <div className="inline-flex items-center bg-white border border-sand px-6 py-2.4 rounded-full mb-10 shadow-sm">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
               <div className="flex items-center gap-2">
                 <span className="text-[10px] font-black text-warm-gray-light uppercase tracking-widest">Home</span>
                 <span className="text-sand">/</span>
                 <span className="text-[10px] font-black text-gold uppercase tracking-widest">Case Studies</span>
               </div>
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-gray leading-[0.9] tracking-tighter mb-8 text-balance">
            Voices That <br /> <span className="text-gold italic">Build</span> Clarity
          </h1>

          <div className="relative inline-block mt-4">
             <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-px bg-gold/30 hidden md:block" />
             <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-px bg-gold/30 hidden md:block" />
             <p className="text-xl md:text-2xl text-warm-gray-light leading-relaxed max-w-2xl mx-auto font-serif italic selection:bg-gold/20">
               How teams transformed their voice AI from experimental to essential. Real outcomes. Real challenges. Real solutions.
             </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Meta Tags */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex gap-4">
           {[ "Outcome_Analysis", "Operational_Shift", "Clarity_System" ].map((tag, i) => (
             <div key={tag} className="px-3 py-1 border border-sand rounded-md text-[8px] font-mono font-black text-warm-gray/30 uppercase tracking-widest">
               {tag}
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
