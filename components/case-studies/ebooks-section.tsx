"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Download, BookOpen, CheckCheck, FileText, ClipboardList, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface EBook {
    id: string
    title: string
    subtitle: string
    description: string
    coverColor: string
    coverAccent: string
    tag: string
}

const ebooks: EBook[] = [
    {
        id: "1",
        title: "Voice AI Implementation Playbook",
        subtitle: "From Zero to Production in 90 Days",
        description:
            "A step-by-step field manual for deploying enterprise voice AI. Includes environment checklists, rollout timelines, escalation templates, and go-live criteria you can hand to your team on day one.",
        coverColor: "#1a1a1a",
        coverAccent: "#D4AF37",
        tag: "DEPLOYMENT",
    },
    {
        id: "2",
        title: "The Operations Breakdown Guide",
        subtitle: "Diagnosing What Is Actually Failing",
        description:
            "A diagnostic framework for operations teams. Maps common failure modes across logistics, manufacturing, and field service into root causes and specific voice AI interventions with before/after metrics.",
        coverColor: "#2a2016",
        coverAccent: "#C9A227",
        tag: "OPERATIONS",
    },
    {
        id: "3",
        title: "CX Automation Without the Chaos",
        subtitle: "Keeping Human Quality at Machine Scale",
        description:
            "Covers handoff logic, fallback design, CSAT instrumentation, and the exact triggers that separate effective automation from the kind that generates callbacks. Includes a ready-to-use QA scorecard.",
        coverColor: "#1a1f1a",
        coverAccent: "#D4AF37",
        tag: "CUSTOMER EXPERIENCE",
    },
    {
        id: "4",
        title: "The Voice AI Vendor Audit Kit",
        subtitle: "Questions They Hope You Never Ask",
        description:
            "A structured evaluation framework for comparing voice AI vendors. Thirty-two adversarial questions, scoring rubric, red-flag checklist, and a contract clause reference sheet built from real procurement cycles.",
        coverColor: "#1a1a2a",
        coverAccent: "#B8972B",
        tag: "PROCUREMENT",
    },
    {
        id: "5",
        title: "RevOps & Sales Velocity Manual",
        subtitle: "Voice AI for Pipeline You Can Actually Measure",
        description:
            "Practical guide for RevOps teams on deploying voice AI across outbound, inbound routing, and post-call workflows. Includes CRM integration patterns, attribution logic, and a pipeline impact calculator.",
        coverColor: "#1f1a1a",
        coverAccent: "#D4AF37",
        tag: "REVENUE OPS",
    },
    {
        id: "6",
        title: "Incident Response at 2 A.M.",
        subtitle: "The Voice AI Runbook for When Things Break",
        description:
            "The manual you want on your desk when the system is down and the clock is running. Covers triage sequences, rollback procedures, escalation trees, and post-mortem templates that prevent repeat failures.",
        coverColor: "#1a1a1a",
        coverAccent: "#D4AF37",
        tag: "INCIDENT RESPONSE",
    },
]

function EBookCover({ ebook }: { ebook: EBook }) {
    return (
        <div
            className="relative w-24 h-32 sm:w-28 sm:h-36 flex-shrink-0 rounded-md overflow-hidden shadow-xl"
            style={{ backgroundColor: ebook.coverColor }}
        >
            {/* Spine accent */}
            <div
                className="absolute left-0 top-0 bottom-0 w-1.5"
                style={{ backgroundColor: ebook.coverAccent }}
            />
            {/* Grid texture */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(${ebook.coverAccent}44 1px, transparent 1px), linear-gradient(90deg, ${ebook.coverAccent}44 1px, transparent 1px)`,
                    backgroundSize: "12px 12px",
                }}
            />
            {/* Book icon */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3">
                <BookOpen
                    className="w-6 h-6 opacity-80"
                    style={{ color: ebook.coverAccent }}
                />
                <div
                    className="w-8 h-px opacity-60"
                    style={{ backgroundColor: ebook.coverAccent }}
                />
                <div
                    className="w-5 h-px opacity-40"
                    style={{ backgroundColor: ebook.coverAccent }}
                />
            </div>
            {/* Tag strip at bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 py-1 px-2 text-center"
                style={{ backgroundColor: `${ebook.coverAccent}22` }}
            >
                <span
                    className="text-[6px] font-black tracking-widest uppercase"
                    style={{ color: ebook.coverAccent }}
                >
                    {ebook.tag}
                </span>
            </div>
        </div>
    )
}

export function EBooksSection() {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <section className="relative py-24 px-6 bg-white overflow-hidden">
            {/* Structural backdrop lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(#e5dbba_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.06]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-16 lg:gap-20 items-start">

                    {/* ─── LEFT: Persuasion Block ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-28"
                    >
                        {/* Label pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-gold border border-gold/15 rounded-full mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                            <span className="text-[15px] font-black tracking-[0.3em] text-gold uppercase">
                                Operator Field Manuals
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl text-warm-gray tracking-tighter leading-[0.85] mb-10">
                            e<span className="text-gold italic">Books</span>
                        </h2>

                        {/* Faint rule */}
                        <div className="w-16 h-px bg-gold/30 mb-10" />

                        {/* ── ZONE A: What these are ── */}
                        <div className="space-y-5 max-w-md">
                            <p className="text-warm-gray font-serif text-lg leading-relaxed">
                                These are not{" "}
                                <span className="text-warm-gray font-bold">&ldquo;thought leadership&rdquo;</span>{" "}
                                e-books.
                            </p>

                            <p className="text-warm-gray-light font-serif text-base leading-relaxed">
                                They are{" "}
                                <span className="text-warm-gray font-semibold">operator field manuals.</span>{" "}
                                Built from what we have seen fail, what we have tested in the real world, and what
                                we would want on our desk when something breaks at{" "}
                                <span className="text-gold font-bold">2 a.m.</span>
                            </p>

                            {/* Option 2 — Scannable bullet points */}
                            <div className="space-y-3 pt-1">
                                {[
                                    { icon: CheckCheck, text: "Clear steps. Concrete examples." },
                                    { icon: FileText, text: <><span className="text-warm-gray font-semibold">Templates you can copy-paste.</span></> },
                                    { icon: ClipboardList, text: "Checklists you can run." },
                                ].map(({ icon: Icon, text }, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-gold/20 bg-gold/5 mt-0.5">
                                            <Icon className="w-3.5 h-3.5 text-gold" />
                                        </div>
                                        <p className="text-warm-gray-light font-serif text-base leading-snug pt-0.5">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Separator between zones */}
                        <div className="flex items-center gap-4 py-2 max-w-md">
                            <div className="flex-1 h-px bg-sand" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                            <div className="flex-1 h-px bg-sand" />
                        </div>

                        {/* ── ZONE B: Our promise ── */}
                        <div className="max-w-md border-l-2 border-gold/20 pl-4 space-y-3">
                            <p className="text-sm text-warm-gray-light font-serif italic leading-relaxed">
                                No filler chapters. No padding. No vague frameworks that sound smart but do nothing.
                            </p>
                        </div>

                        {/* Option 5 — Guarantee callout */}
                        <div className="max-w-md border-l-2 border-gold/50 pl-4 bg-gold/4 py-4 pr-4">
                            <div className="flex items-start gap-2.5 mb-2">
                                <Quote className="w-3.5 h-3.5 text-gold/60 flex-shrink-0 mt-0.5" />
                                <span className="text-[9px] font-black tracking-[0.25em] text-gold uppercase">Our commitment</span>
                            </div>
                            <p className="text-sm text-warm-gray-light font-serif italic leading-relaxed">
                                If you finish one and still cannot make a decision, run a test, or change a workflow
                                that week — then it is just another e-book.{" "}
                                <span className="text-warm-gray not-italic font-medium">
                                    Tell us, and we will make it better.
                                </span>
                            </p>
                        </div>
                    </motion.div>

                    {/* ─── RIGHT: Accordion eBooks ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {ebooks.map((ebook, index) => {
                            const isOpen = openId === ebook.id
                            return (
                                <motion.div
                                    key={ebook.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                    viewport={{ once: true }}
                                    className={cn(
                                        "border rounded-2xl overflow-hidden transition-all duration-500",
                                        isOpen
                                            ? "border-gold/40 bg-[#faf9f6] shadow-lg shadow-gold/5"
                                            : "border-sand bg-white hover:border-gold/25 hover:bg-[#fdfcf9]"
                                    )}
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggle(ebook.id)}
                                        className="w-full flex items-center justify-between px-6 py-5 group text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-4 min-w-0">
                                            {/* Number */}
                                            <span className="text-[25px] font-black text-gold/50 font-mono tabular-nums flex-shrink-0">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            {/* Title */}
                                            <div className="min-w-0">
                                                <p
                                                    className={cn(
                                                        "font-serif text-base md:text-lg leading-snug transition-colors duration-300 truncate",
                                                        isOpen ? "text-warm-gray" : "text-warm-gray group-hover:text-gold"
                                                    )}
                                                >
                                                    {ebook.title}
                                                </p>
                                                {!isOpen && (
                                                    <p className="text-[15px] text-warm-gray-light mt-0.5 truncate font-mono">
                                                        {ebook.subtitle}
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
                                                    isOpen ? "text-gold" : "text-warm-gray/30 group-hover:text-warm-gray/60"
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
                                                    {/* Top divider */}
                                                    <div className="w-full h-px bg-sand mb-6" />

                                                    <div className="flex gap-5 sm:gap-6 items-start">
                                                        {/* eBook Cover */}
                                                        <EBookCover ebook={ebook} />

                                                        {/* Content */}
                                                        <div className="flex-1 min-w-0">
                                                            {/* Tag */}
                                                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-gold/8 border border-gold/15 rounded-full mb-3">
                                                                <span className="text-[9px] font-black tracking-[0.2em] text-gold uppercase">
                                                                    {ebook.tag}
                                                                </span>
                                                            </div>

                                                            {/* Subtitle */}
                                                            <h3 className="font-serif text-sm md:text-base text-warm-gray leading-snug mb-3">
                                                                {ebook.subtitle}
                                                            </h3>

                                                            {/* Description */}
                                                            <p className="text-sm text-warm-gray-light leading-relaxed font-serif italic mb-5">
                                                                {ebook.description}
                                                            </p>

                                                            {/* CTA */}
                                                            <button className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-warm-gray text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 hover:bg-gold hover:text-[#1a1a1a] hover:shadow-lg hover:shadow-gold/20 group/btn">
                                                                <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0" />
                                                                Download eBook
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
                </div>
            </div>
        </section>
    )
}
