"use client"

import { useState, useRef } from "react"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useModal } from "@/context/modal-context"
import { cn } from "@/lib/utils"
import {
  Hammer,
  Truck,
  Factory,
  Stethoscope,
  Wifi,
  ShoppingBag,
  ShieldCheck,
  Globe,
  Code2,
  Tv2,
  MousePointer2,
  Binary,
  ArrowRight,
  Book,
  HammerIcon
} from "lucide-react"

interface CaseStudy {
  id: string
  title: string
  category: string
  image: string
  description: string
  outcome: string
}

const industries = [
  { name: "ALL", icon: Binary },
  { name: "MANUFACTURING", icon: Factory },
  { name: "TECH/SaaS", icon: Code2 },
  { name: "SOCIAL MEDIA MARKETING", icon: Wifi },
  { name: "PROCUREMENT", icon: Tv2 },
  { name: "OPERATIONS MANAGEMENT", icon: Truck },
  { name: "B2B SALES", icon: Tv2 },
  { name: "EdTech", icon: Book },
]

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Role-Aware Policy, SOP, and Safety Voice Copilot",
    category: "MANUFACTURING",
    image: "/Case-studies/Role-Aware Policy, SOP, and Safety Voice Copilot.png",
    description: "A mobile voice AI app that delivers the correct policy, SOP, or safety answer to employees based on their role, department, and site by retrieving information from the relevant documents.",
    outcome: "Enabled faster and more accurate policy access, reduced confusion from multiple document versions, and created a clear audit trail of guidance provided.",
  },
  {
    id: "2",
    title: "Floor and QA Voice Desk",
    category: "MANUFACTURING",
    image: "/Case-studies/Floor and QA Voice Desk.png",
    description: "A voice-enabled system that allows floor and QA teams to log downtime, quality holds, and shift handovers in real time while automatically generating structured operational records.",
    outcome: "Reduced reporting errors and operational confusion by enforcing required checkpoints, capturing accurate records, and improving traceability across production and quality processes.",
  },
  {
    id: "3",
    title: "Contract and Supplier Change Voice Copilot",
    category: "PROCUREMENT",
    image: "/Case-studies/Contract and Supplier Change Voice Copilot.png",
    description: "A voice-enabled copilot that helps procurement and legal teams manage supplier changes and contract clauses by retrieving the correct rules and automatically creating structured approval requests with required context.",
    outcome: "Accelerated approvals and reduced compliance risks by ensuring complete requests, enforcing required sign-offs, and maintaining a clear traceable record of decisions.",
  },
  {
    id: "4",
    title: "Store Performance Voice Analyst",
    category: "RETAIL",
    image: "/Case-studies/Store Performance Voice Analyst.png",
    description: "A voice-powered analytics assistant that helps sales teams analyze store performance, identify sales drivers, and forecast demand by combining sales, inventory, and promotion data.",
    outcome: "Enabled sales teams to explain performance with data, improve replenishment decisions, and act earlier on stockout risks and demand changes.",
  },
  {
    id: "5",
    title: "Operational Action Voice Copilot",
    category: "OPERATIONS MANAGEMENT",
    image: "/Case-studies/Operational Action Voice Copilot.png",
    description: "A voice and automation system that captures issues mentioned in calls and converts them into structured actions linked to sites, assets, vendors, and work orders.",
    outcome: "Improved accountability and operational visibility by assigning clear owners, tracking proof of resolution, and preventing recurring issues from being overlooked.",
  },
  {
    id: "6",
    title: "Buyer Request Capture and Routing Module",
    category: "B2B SALES",
    image: "/Case-studies/Buyer Request Capture and Routing Module.png",
    description: "A system that captures buyer questions from webinars and sales calls, converts them into structured requests, and routes them to the right internal owners with clear deadlines.",
    outcome: "Improved follow-up execution and buyer experience by ensuring every request is tracked, assigned to the correct team, and resolved with a clear response.",
  },
  {
    id: "7",
    title: "Voice-First Learner Support Assistant",
    category: "EdTech",
    image: "/Case-studies/Voice-First Learner Support Assistant.png",
    description: "A voice-enabled support assistant integrated into the learner portal and help center that answers student questions using approved lesson content, policies, and FAQs.",
    outcome: "Reduced support workload and improved learner experience by providing instant, consistent answers while escalating complex cases to human support with full context.",
  },
  {
    id: "8",
    title: "Voice Command and Control Layer for SaaS Analytics",
    category: "TECH/SaaS",
    image: "/Case-studies/Voice Command and Control Layer for SaaS Analytics.png",
    description: "A voice-enabled control layer embedded in a SaaS analytics product that lets users execute analysis and configuration tasks by speaking commands instead of navigating complex UI workflows.",
    outcome: "Reduced workflow friction and improved product adoption by allowing users to move from insight to action faster while keeping all changes visible and reviewable before execution.",
  },
  {
    id: "9",
    title: "Voice Diagnostic Dialogue Layer for SaaS Analytics",
    category: "TECH/SaaS",
    image: "/Case-studies/Voice Diagnostic Dialogue Layer for SaaS Analytics.png",
    description: "A voice-enabled interaction layer inside a diagnostic analytics tool that allows users to question results, add context, and re-run analyses with updated assumptions directly within the product.",
    outcome: "Improved trust and usability of diagnostic reports by enabling users to challenge insights, apply contextual changes, and generate traceable updated analysis versions.",
  },
  {
    id: "10",
    title: "Voice Editing Layer for AI Content Tools",
    category: "SOCIAL MEDIA MARKETING",
    image: "/Case-studies/Voice Editing Layer for AI Content Tools.png",
    description: "A voice-based editing layer integrated into a content editor that allows users to refine drafts through spoken instructions instead of repeatedly typing revision prompts.",
    outcome: "Improved content quality and user engagement by enabling faster revisions, longer iteration cycles, and more precise editing through natural voice commands.",
  },
]

const CaseStudyVisual = ({ category }: { category: string }) => {
  const animations: Record<string, React.ReactNode> = {
    LOGISTICS: (
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
        <motion.path
          d="M 10 10 L 40 40 L 60 20 L 90 80"
          fill="none"
          stroke="gold"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        {[10, 40, 60, 90].map((x, i) => (
          <circle key={i} cx={x} cy={[10, 40, 20, 80][i]} r="1" fill="gold" />
        ))}
      </svg>
    ),
    HEALTHCARE: (
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
        <motion.path
          d="M 0 50 Q 25 20 50 50 T 100 50"
          fill="none"
          stroke="gold"
          strokeWidth="0.5"
          animate={{ x: [-100, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    ),
    BFSI: (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,gold_1px,transparent_1px)] bg-[size:10px_10px]" />
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-x-0 h-px bg-gold/50 shadow-[0_0_10px_gold]"
        />
      </div>
    ),
    MANUFACTURING: (
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="gold" strokeWidth="0.2" />
        <motion.circle
          cx="50" cy="50" r="20"
          fill="none" stroke="gold" strokeWidth="0.5" strokeDasharray="2 2"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    )
  }

  return animations[category] || (
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,gold_1px,transparent_1px)] bg-[size:20px_20px]" />
  )
}

export function CaseStudyGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL")
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const { openModal } = useModal();

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setIsExpanded(false)
  }

  const handleToggle = () => {
    if (isExpanded) {
      // Collapse: scroll to grid instantly first, then collapse (so animation is out of view)
      if (gridRef.current) {
        gridRef.current.scrollIntoView({ behavior: "instant" })
      }
      setIsExpanded(false)
    } else {
      // Expand: just expand downwards, no scroll needed
      setIsExpanded(true)
    }
  }

  const filteredStudies = activeCategory === "ALL"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory)

  const initialVisible = filteredStudies.slice(0, 3)
  const extraVisible = filteredStudies.slice(3)

  return (
    <section ref={sectionRef} id="studies" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Structural Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-sand/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-sand/30" />
        <div className="absolute left-[10%] top-0 w-px h-full bg-sand/10" />
        <div className="absolute right-[10%] top-0 w-px h-full bg-sand/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[40fr_1fr_59fr] gap-8 lg:gap-16 items-start">

            {/* Left Column: Branding & Title */}
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-gold border border-gold/15 rounded-full mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[15px] font-black tracking-[0.3em] text-gold uppercase">
                  Operational Archive
                </span>
              </div>

              <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-warm-gray tracking-tighter leading-[0.8] mb-4">
                Case <span className="text-gold italic block lg:inline-block lg:mt-2">Studies</span>
              </h2>
            </div>

            {/* Vertical Spine (Desktop only) / Horizontal (Mobile) */}
            <div className="relative flex justify-center lg:justify-start h-px lg:h-full lg:min-h-[300px]">
              <div className="w-full lg:w-px h-px lg:h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-40 lg:absolute lg:left-0 lg:top-0" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Right Column: Narrative Content */}
            <div className="space-y-6 text-left max-w-2xl">
              <p className="text-warm-gray font-serif text-xl md:text-2xl leading-relaxed">
                These are not{" "}
                <span className="text-warm-gray font-bold">&ldquo;look how great we are&rdquo;</span>{" "}
                case studies.
              </p>

              <div className="space-y-6">
                <p className="text-warm-gray-light font-serif text-base leading-relaxed">
                  They are an{" "}
                  <span className="text-warm-gray font-semibold">exposé of our work, including the parts we got wrong.</span>{" "}
                  You will see what we attempted, the assumptions we carried, the failures we created, what we changed after it broke, and what still does not feel solved.
                  {" "}
                  <span className="text-gold font-bold">No polishing.</span>
                </p>

                <p className="text-warm-gray-light font-serif text-base leading-relaxed">
                  The point is reflection, {" "}
                  <span className="text-warm-gray font-semibold">not flex.</span>{" "}
                  We are not trying to win a narrative. We are trying to get better.
                </p>

                {/* Micro-separator for narrative flow */}
                <div className="w-12 h-px bg-gold/30 my-8" />

                <p className="text-sm text-warm-gray-light font-serif italic leading-relaxed">
                  If this helps your team spot a blind spot, avoid a mistake, or tighten your system, good. If you are already doing this better than us, even better.
                  {" "}
                  <span className="text-warm-gray not-italic font-medium ">
                    We want to learn from you too.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* HUD Navigation Filter */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-2 mb-20 bg-[#faf9f6] p-2 rounded-2xl border border-sand shadow-inner max-w-4xl mx-auto">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <button
                key={ind.name}
                onClick={() => handleCategoryChange(ind.name)}
                className={cn(
                  "relative group flex items-center justify-center lg:justify-start gap-2 lg:gap-3 px-2 lg:px-5 py-3 rounded-xl transition-all duration-500 overflow-hidden",
                  activeCategory === ind.name
                    ? "bg-white shadow-xl border border-sand"
                    : "hover:bg-white/40"
                )}
              >
                <Icon className={cn(
                  "w-4 h-4 transition-colors duration-500 flex-shrink-0",
                  activeCategory === ind.name ? "text-gold" : "text-warm-gray/40 group-hover:text-warm-gray"
                )} />
                <div className="flex flex-col items-start text-left leading-[1]">
                  <span className={cn(
                    "text-[9px] lg:text-[10px] font-black uppercase tracking-wider lg:tracking-widest line-clamp-1 break-all lg:break-normal",
                    activeCategory === ind.name ? "text-warm-gray" : "text-warm-gray/30 group-hover:text-warm-gray/60"
                  )}>
                    {ind.name}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <motion.div
          ref={gridRef}
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16"
        >
          {initialVisible.map((study, index) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={cn(
                "group relative",
                index % 3 === 1 ? "lg:mt-12" : index % 3 === 2 ? "lg:mt-24" : ""
              )}
            >
              <div className="relative bg-white border border-sand rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-gold group/card">
                {/* Case Study Image Wrapper */}
                <div className="relative h-64 overflow-hidden bg-[#faf9f6]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-all duration-1000 grayscale group-hover/card:grayscale-0 group-hover/card:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />

                  {/* Illustrated Overlays */}
                  <CaseStudyVisual category={study.category} />

                  {/* Category Floating Tag */}
                  <div className="absolute top-6 left-6 flex flex-col gap-1 items-start">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-md text-[8px] font-mono font-black text-gold uppercase tracking-[0.2em] border border-white/10">
                      {study.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 relative">
                  {/* Card Narrative */}
                  <h3 className="font-serif text-2xl text-warm-gray mb-4 leading-tight group-hover/card:text-gold transition-colors duration-500">
                    {study.title}
                  </h3>

                  <p className="text-sm text-warm-gray-light leading-relaxed mb-6 italic font-serif">
                    "{study.description}"
                  </p>

                  {/* Outcome Evidence Panel */}
                  <div className="bg-[#faf9f6] border border-sand rounded-2xl p-6 mb-8 group-hover/card:bg-white transition-colors duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <MousePointer2 className="w-3 h-3 text-gold" />
                      <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest">Outcome_Protocol</span>
                    </div>
                    <p className="text-sm font-bold text-warm-gray leading-snug">
                      {study.outcome}
                    </p>
                  </div>

                  <button
                    onClick={() => openModal("resource", { name: study.title, type: "Case Study" })}
                    className="flex items-center gap-3 text-xs font-black text-warm-gray uppercase tracking-widest group/btn transition-all"
                  >
                    <span className="border-b-2 border-gold pb-1">Read full story</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover/btn:translate-x-3 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {isExpanded && extraVisible.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 mt-16 pb-8">
                {extraVisible.map((study, index) => {
                  const globalIndex = index + 3;
                  return (
                    <motion.div
                      key={study.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={cn(
                        "group relative",
                        globalIndex % 3 === 1 ? "lg:mt-12" : globalIndex % 3 === 2 ? "lg:mt-24" : ""
                      )}
                    >
                      <div className="relative bg-white border border-sand rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-gold group/card">
                        {/* Case Study Image Wrapper */}
                        <div className="relative h-64 overflow-hidden bg-[#faf9f6]">
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover transition-all duration-1000 grayscale group-hover/card:grayscale-0 group-hover/card:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />

                          {/* Illustrated Overlays */}
                          <CaseStudyVisual category={study.category} />

                          {/* Category Floating Tag */}
                          <div className="absolute top-6 left-6 flex flex-col gap-1 items-start">
                            <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-md text-[8px] font-mono font-black text-gold uppercase tracking-[0.2em] border border-white/10">
                              {study.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-10 relative">
                          {/* Card Narrative */}
                          <h3 className="font-serif text-2xl text-warm-gray mb-4 leading-tight group-hover/card:text-gold transition-colors duration-500">
                            {study.title}
                          </h3>

                          <p className="text-sm text-warm-gray-light leading-relaxed mb-6 italic font-serif">
                            "{study.description}"
                          </p>

                          {/* Outcome Evidence Panel */}
                          <div className="bg-[#faf9f6] border border-sand rounded-2xl p-6 mb-8 group-hover/card:bg-white transition-colors duration-500">
                            <div className="flex items-center gap-2 mb-3">
                              <MousePointer2 className="w-3 h-3 text-gold" />
                              <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest">Outcome_Protocol</span>
                            </div>
                            <p className="text-sm font-bold text-warm-gray leading-snug">
                              {study.outcome}
                            </p>
                          </div>

                          <button
                            onClick={() => openModal("resource", { name: study.title, type: "Case Study" })}
                            className="flex items-center gap-3 text-xs font-black text-warm-gray uppercase tracking-widest group/btn transition-all"
                          >
                            <span className="border-b-2 border-gold pb-1">Read full story</span>
                            <ArrowRight className="w-4 h-4 text-gold group-hover/btn:translate-x-3 transition-transform duration-500" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show All/Less Toggle */}
        {filteredStudies.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 flex justify-center"
          >
            <button
               onClick={handleToggle}
              className="group relative px-10 py-4 bg-white border border-sand hover:border-gold transition-all duration-500 overflow-hidden shadow-sm"
            >
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-warm-gray group-hover:text-gold transition-colors">
                  {isExpanded ? "Show Less" : "Show All"}
                </span>
                <ArrowRight className={cn(
                  "w-4 h-4 text-gold transition-transform duration-500",
                  isExpanded ? "-rotate-90" : "group-hover:translate-x-1"
                )} />
              </div>
            </button>
          </motion.div>
        )}

        {filteredStudies.length === 0 && (
          <div className="text-center py-32 border-2 border-dashed border-sand rounded-[3rem]">
            <p className="text-warm-gray-light italic font-serif text-xl">System archive empty for this sector.</p>
          </div>
        )}
      </div>
    </section >
  )
}
