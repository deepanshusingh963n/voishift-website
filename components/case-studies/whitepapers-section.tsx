"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, FileText, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Whitepaper {
    id: string
    title: string
    subtitle: string
    description: string
    //journal: string
    tag: string
    accentColor: string
    thumbnail: string
}

const whitepapers: Whitepaper[] = [
    {
        id: "1",
        title: "Frustration Threshold Mapping",
        subtitle: "A discipline for adoption immunity",
        description:
            "A research-grounded method for measuring where voice adoption collapses and designing VoiceOps behavior so users keep trusting the workflow under real conditions.",
        //journal: "Journal of Human-Computer Studies · Adapted Field Notes",
        tag: "LATENCY & UX",
        accentColor: "#D4AF37",
        thumbnail: "/whitepapers/Frustration Threshold Mapping.png",
    },
    {
        id: "2",
        title: "Interactional DNA as Enterprise IP",
        subtitle: "How to build owned intelligence",
        description:
            "A research-grounded whitepaper for teams building or buying conversational intelligence for recorded voice calls, and for teams trying to turn call data into a durable internal capability.",
        //journal: "IEEE Transactions on Audio, Speech & Language · Adapted Field Notes",
        tag: "ASR SYSTEMS",
        accentColor: "#C9A227",
        thumbnail: "/whitepapers/Interactional DNA as Enterprise IP.png",
    },
    {
        id: "3",
        title: "Drift Monitoring for Voice Systems",
        subtitle: "How to stop silent degradation",
        description:
            "A research-grounded whitepaper for teams building, buying, or operating voice systems for recorded calls, where performance can degrade quietly until trust and adoption collapse.",
        //journal: "Computer & Security Journal · Adapted Field Notes",
        tag: "SECURITY",
        accentColor: "#B8972B",
        thumbnail: "/whitepapers/Drift Monitoring for Voice Systems.png",
    },
    {
        id: "4",
        title: "The VoiceOps Operating Model",
        subtitle: "From interactional DNA to adoption loops",
        description:
            "A research-grounded operating model for teams building, buying, or running voice and conversational intelligence systems for recorded calls, where timing, trust, and workflow integrity decide adoption.",
        //journal: "Frontiers in Artificial Intelligence · Adapted Field Notes",
        tag: "MULTIMODAL AI",
        accentColor: "#D4AF37",
        thumbnail: "/whitepapers/The VoiceOps Operating Model.png",
    },
]

function WhitepaperCover({ paper }: { paper: Whitepaper }) {
    return (
        <div className="relative w-20 h-28 sm:w-24 sm:h-32 flex-shrink-0 rounded-md overflow-hidden shadow-xl bg-[#faf9f6] border border-sand ring-1 ring-black/5">
            {/* Whitepaper Thumbnail Image */}
            <Image
                src={paper.thumbnail}
                alt={paper.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, 96px"
            />

            {/* Top accent bar (On top of image) */}
            <div
                className="absolute top-0 left-0 right-0 h-1.5 z-10"
                style={{ backgroundColor: paper.accentColor }}
            />

            {/* Lined paper texture overlay (Subtle, on top) */}
            <div className="absolute inset-0 pt-4 z-10 pointer-events-none opacity-20">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div
                        key={i}
                        className="mx-3 mb-2 h-px"
                        style={{ backgroundColor: `${paper.accentColor}44` }}
                    />
                ))}
            </div>

            {/* Shadow overlay for "paper stack" depth */}
            <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/5 to-transparent z-10" />

            {/* Bottom tag strip */}
            <div
                className="absolute bottom-0 left-0 right-0 py-1 px-1.5 text-center border-t z-10"
                style={{
                    borderColor: `${paper.accentColor}44`,
                    backgroundColor: `${paper.accentColor}dd`,
                    backdropFilter: "blur(4px)"
                }}
            >
                <span
                    className="text-[6px] font-black tracking-widest uppercase leading-none text-white drop-shadow-sm"
                >
                    {paper.tag}
                </span>
            </div>
        </div>
    )
}

export function WhitepapersSection() {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <section className="relative py-24 px-6 bg-[#faf9f6] overflow-hidden">
            {/* Structural backdrop */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
                {/* Faint diagonal rule lines — "academic paper" feel */}
                <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(90deg,#D4AF37,#D4AF37_1px,transparent_1px,transparent_60px)]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] gap-12 lg:gap-16 items-start">

                    {/* ─── LEFT: Accordion Whitepapers ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="space-y-8 self-start"
                    >
                        {whitepapers.map((paper, index) => {
                            const isOpen = openId === paper.id
                            return (
                                <motion.div
                                    key={paper.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.07 }}
                                    viewport={{ once: true }}
                                    className={cn(
                                        "border rounded-2xl overflow-hidden transition-all duration-500",
                                        isOpen
                                            ? "border-gold/40 bg-white shadow-lg shadow-gold/5"
                                            : "border-sand bg-white/60 hover:border-gold/25 hover:bg-white"
                                    )}
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggle(paper.id)}
                                        className="w-full flex items-center justify-between px-6 py-5 group text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-4 min-w-0">
                                            {/* Number */}
                                            <span className="text-[25px] font-black text-gold/50 font-mono tabular-nums flex-shrink-0">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            {/* Title block */}
                                            <div className="min-w-0">
                                                <p
                                                    className={cn(
                                                        "font-serif text-base md:text-lg leading-snug transition-colors duration-300",
                                                        isOpen
                                                            ? "text-warm-gray"
                                                            : "text-warm-gray group-hover:text-gold"
                                                    )}
                                                >
                                                    {paper.title}
                                                </p>
                                                {!isOpen && (
                                                    <p className="text-[15px] text-warm-gray-light mt-0.5 font-mono truncate">
                                                        {paper.subtitle}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Chevron */}
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="flex-shrink-0 ml-4"
                                        >
                                            <ChevronDown
                                                className={cn(
                                                    "w-4 h-4 transition-colors duration-300",
                                                    isOpen
                                                        ? "text-gold"
                                                        : "text-warm-gray/30 group-hover:text-warm-gray/60"
                                                )}
                                            />
                                        </motion.div>
                                    </button>

                                    {/* Accordion Body */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <div className="px-6 pb-6">
                                                    {/* Divider */}
                                                    <div className="w-full h-px bg-sand mb-6" />

                                                    <div className="flex gap-5 sm:gap-6 items-start">
                                                        {/* Cover */}
                                                        <WhitepaperCover paper={paper} />

                                                        {/* Content */}
                                                        <div className="flex-1 min-w-0">
                                                            {/* Tag */}
                                                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-gold/8 border border-gold/15 rounded-full mb-3">
                                                                <span className="text-[9px] font-black tracking-[0.2em] text-gold uppercase">
                                                                    {paper.tag}
                                                                </span>
                                                            </div>

                                                            {/* Subtitle */}
                                                            <h3 className="font-serif text-sm md:text-base text-warm-gray leading-snug mb-3">
                                                                {paper.subtitle}
                                                            </h3>

                                                            {/* Description */}
                                                            <p className="text-sm text-warm-gray-light leading-relaxed font-serif italic mb-3">
                                                                {paper.description}
                                                            </p>

                                                            {/* Source label 
                                                            <p className="text-[10px] font-mono text-warm-gray/40 tracking-wide mb-5">
                                                                Source basis: {paper.journal}
                                                            </p>
                                                            */}

                                                            {/* CTA */}
                                                            <button className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-warm-gray text-warm-gray rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 hover:bg-warm-gray hover:text-white hover:shadow-lg group/btn">
                                                                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                                                Read Whitepaper
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* ─── RIGHT: Copy Block ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-28 item-start"
                        style={{ willChange: "transform" }}
                    >
                        {/* Label pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-gold border border-gold/15 rounded-full mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                            <span className="text-[15px] font-black tracking-[0.3em] text-gold uppercase">
                                Research Translated
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl text-warm-gray tracking-tighter leading-[0.85] mb-10">
                            White<span className="text-gold italic">papers</span>
                        </h2>

                        {/* Faint rule */}
                        <div className="w-16 h-px bg-gold/30 mb-10" />

                        {/* Body copy */}
                        <div className="space-y-5 max-w-7xl">
                            <p className="text-warm-gray-light font-serif text-base leading-relaxed">
                                We are not set up to run large, controlled studies in-house. So we do the next best thing.
                            </p>

                            <p className="text-warm-gray font-serif text-base leading-relaxed">
                                We study{" "}
                                <span className="font-semibold">peer-reviewed research</span> from journals with high impact factor. We then translate it into{" "}
                                <span className="text-gold font-semibold">practical takeaways</span> for voice systems and enterprise workflows.
                            </p>

                            <p className="text-warm-gray-light font-serif text-base leading-relaxed">
                                These whitepapers are our learning notes in public.
                            </p>

                            {/* Separator */}
                            <div className="flex items-center gap-4 py-2">
                                <div className="flex-1 h-px bg-sand" />
                                <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                                <div className="flex-1 h-px bg-sand" />
                            </div>

                            {/* Collaboration invite — highlighted block */}
                            <div className="relative border border-gold/20 rounded-2xl p-6 bg-white/60">
                                {/* Corner accent */}
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl" />
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />

                                <p className="text-sm text-warm-gray font-serif leading-relaxed">
                                    Want to write the next one with us as a mini research team?
                                </p>
                                <p className="text-sm text-warm-gray-light font-serif italic leading-relaxed mt-2">
                                    No fees on either side. Just{" "}
                                    <span className="text-warm-gray not-italic font-medium">effort</span>,{" "}
                                    <span className="text-warm-gray not-italic font-medium">curiosity</span>, and a{" "}
                                    <span className="text-gold not-italic font-semibold">hunger to improve.</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
