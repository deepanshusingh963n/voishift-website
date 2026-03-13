"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Volume2, VolumeX } from "lucide-react"

const faqs = [
  { question: "Are we even the right kind of operation for voice automation?", answer: "You are a good fit if your day-to-day work is decision-heavy, exception-heavy, and spread across people plus systems, meaning the answer is rarely in one place, and “done” often means “someone said it’s done.” Voice automation helps when teams lose time to status chasing, approvals, handoffs, and rework because context is scattered across dashboards, tickets, chats, emails, calls, and tribal memory. You are also a fit if you care about defensible decisions, meaning you need to know why an action was taken, what it was based on, and who owned it. You are probably not a fit if your workflows are low-risk, already cleanly automated, exceptions are rare, and there is no real cost to being wrong for a few hours. Also not a fit if you want voice automation mainly for “innovation optics” without appetite to define boundaries, owners, and proof gates. The blunt truth: voice automation is not magic, it is a new interface on top of messy operations. If your operation is already simple and stable, voice can become noise. If your operation is messy and high-stakes, voice can become leverage, but only if it is built as a system with controls, not a talk layer.", id: "Q-01" },
  { question: "Where would voice automation help us, and where would it create risk?", answer: "Voice helps most when people already know the intent and just want to get to action without decoding tools, hunting for the right screen, or pulling three reports to answer one question. It also helps where the work is naturally conversational or interruption-driven, handoffs, approvals, exceptions, escalations, quick status checks, and decisions that need fast context assembly. The risk shows up when voice is used to execute irreversible actions without the right guardrails, or when the system is allowed to “sound complete” while missing key facts. Voice can also create risk if it becomes a shortcut that bypasses required checks, permissions, or approvals because it feels faster. Another real risk is social: if people start trusting the voice layer more than the source systems, they stop verifying, and that is how confident mistakes scale. The honest framing is this: voice should reduce cognitive load, not reduce responsibility. In safe zones, voice can execute directly with confirmation. In risky zones, voice should prepare, summarize, route, and require explicit human sign-off. If you want voice to act, you must be willing to define what it cannot do.", id: "Q-02" },
  { question: "What are the “do not automate” zones in our business?", answer: "The “do not automate” zones are not about industry, they are about consequence. Any area where one wrong action can cause irreversible damage should never be fully automated end-to-end by voice without a hard stop. That includes actions that are financially irreversible, legally binding, safety-critical, privacy-sensitive, or reputation-critical, especially when the input is ambiguous or the situation is evolving. It also includes decisions that require human judgment, empathy, negotiation, or ethical context that is not codified in rules. Another do-not-automate zone is anything where you cannot define a clear boundary line, because if you cannot define it, the system cannot enforce it. Here’s the nuance that most vendors avoid: “do not automate” does not mean “do not use voice.” It means voice should shift from execution to assistance. Voice can still help by collecting missing details, creating a clean context packet, pulling evidence, suggesting next steps, routing to the right owner, and logging what happened, but it should not cross the final line. If you are not sure what your do-not-automate zones are, that is already a signal that your current process relies on informal human checks that are not documented.", id: "Q-03" },
  { question: "What’s the smallest workflow we can touch safely, and what must stay human?", answer: "The smallest safe workflow is one where voice can create value without being allowed to cause irreversible harm. In practice, that usually means starting with read-only decisions, draft creation, structured capture, routing, and confirmation-based execution. A safe starting point is “ask, prepare, confirm”: the voice layer gathers required details, pulls the right status or policy, prepares the action plan, shows what it will do, and waits for an explicit confirmation before committing anything. That lets you get speed without losing control. What must stay human is anything that requires judgment beyond written rules, anything that carries legal, safety, or reputation blast radius, and anything where a wrong action cannot be easily reversed. Humans should also own exceptions, overrides, and final approvals, at least until you have repeated proof that the system behaves under messy edge cases. A good test for “must stay human” is this: if you would not let a new hire execute it alone in week one, you should not let voice execute it alone either. Voice can still be present, but as a controlled helper, not the final actor.", id: "Q-04" },
  { question: "How do we choose the first workflow so ROI is real, not hype?", answer: "Pick the first workflow like a CFO, not like a demo buyer. ROI becomes real when you start where frequency is high, time is wasted repeatedly, errors are costly, and the next step is clear enough to systemize. The best first workflow usually has three traits: it happens often, it has a predictable structure, and it creates downstream cost when it is delayed or done wrong. Avoid “cool workflows” that are rare, hard to measure, or politically visible but operationally small. Also avoid workflows with heavy edge cases as your very first build unless you are willing to spend time proving behavior. The honest method is to score candidates on value, time criticality, risk reduction, and job size, then choose the top item that is small enough to validate quickly. You should also ask: can we prove success in two weeks with evidence, not opinions? If you cannot define what success looks like, you are picking hype. A good first workflow has clear proof signals: fewer handoffs, fewer escalations, faster closure, less rework, cleaner records, and less time spent “finding” and more time spent “doing.” If you want, we will push you away from workflows that look exciting but cannot be proven.", id: "Q-05" },
  { question: "If we talk, will you help me decide or try to sell me?", answer: "A first conversation with us will feel like mutual brainstorming, not us persuading you to do something you are not yet confident about. It will feel like buy vs build vs do nothing decision coaching. We believe that the only way we can earn trust is by being willing to say “do nothing” when it is the right move. On a first call, we should be able to do three things: understand one real workflow you care about, identify where the current process guesses or loses ownership, and outline what proof would be required before any live rollout. You should also leave with a clear view of whether your situation is a fit for voice automation at all, and which zones should not be touched. If we cannot give you that clarity in one conversation, we have not earned a second. Also, you should expect us to challenge you on the hard parts: boundaries, approvals, missing-info capture, and what happens under pressure. If you want someone to tell you “yes, AI can do everything,” that will feel good for five minutes and hurt you for months. We would rather wait for the “Right Project” than push you into an unsafe build. If that honesty makes you leave, that’s fine. It is cheaper than you learning the lesson in production.", id: "Q-06" },
  { question: "If we already built or bought something, can you harden it instead of starting over?", answer: "Yes, and in many cases, hardening is the smartest move. Most first versions are built to prove speed and usability. They optimize for fluent interaction and fast adoption. Hardening is what comes next, when the priority shifts from “sounds good” to “stays controlled under real ops.” Hardening usually means adding the parts that were intentionally deferred because they slow v1 down: boundary rules, refusal logic, missing-information capture, approval enforcement, traceability, and failure-mode design. It also means connecting the voice layer to the system of record so it stops being a talk layer and starts being an execution layer with audit trails. Sometimes we can keep your existing model stack and UI and still fix the core risks by changing how decisions are made, validated, and recorded. Sometimes we cannot, especially if the architecture has no way to enforce permissions, no reliable sources, no safe write-back controls, or no ability to change behavior without breaking everything. We will tell you which one it is. The honest truth: “starting over” is rarely the real cost. The real cost is continuing with a system that guesses, cannot explain itself, and cannot be audited. If you have already invested, we respect that investment, but we will not pretend a cosmetic fix is a safety fix.", id: "Q-07" },
  { question: "What proof do we get before anything goes live?", answer: "You should demand proof that the system behaves correctly under the conditions that actually break things: missing details, conflicting inputs, pressure, unclear ownership, policy edge cases, and messy real-world language. “It worked in a demo” is not proof. Proof is a pass or fail outcome against agreed checks. Before anything goes live, you should receive evidence that guessing has been reduced or eliminated in the critical paths, that refusal and escalation triggers work, that required fields are captured before execution, and that actions are traceable back to sources, rules, and approvals. You should also see where it still breaks, because every system breaks somewhere. The difference is whether the break is safe and visible, or silent and dangerous. We treat validation as a stress test of behavior, not a rollout. If the system cannot survive edge cases, it does not ship. If it survives, it ships in a small scope with proof gates. This is the part where we are blunt: if a vendor cannot show you what would fail the system, they either have not tested it, or they are hiding the truth. A safe system is not one that never fails. It is one that fails safely and leaves a trail.", id: "Q-08" },
  { question: "How do you handle safety, sensitive data, and risk?", answer: "We handle safety and risk by designing for control, not by promising perfection. That starts with least privilege access, meaning the system can only see and do what it must, and nothing more. It continues with data minimization and masking where needed, so sensitive fields are not exposed unnecessarily. It also includes strict boundaries for what actions are allowed, what actions are blocked, and what actions require human approval, and those boundaries are enforced even when the user pushes. Traceability is non-negotiable: you need to reconstruct who asked what, what sources and rules were used, what decision was made, and what action was taken. Risk also includes “soft failures” like reputational damage from confidently wrong answers, so we build missing-info capture and refusal behavior where uncertainty is high. The honest truth is that any system touching real operations carries risk, including humans. The goal is not to pretend risk disappears. The goal is to reduce risk before scale, make failures visible, and make decisions defensible. If your risk tolerance is zero, you should not deploy voice automation for execution at all, only for read-only assistance and draft preparation.", id: "Q-09" }
];

const ProtocolCard = ({ 
  faq, 
  isOpen, 
  onClick,
  isSpeaking,
  isPaused,
  onSpeechToggle,
  currentCharIndex
}: { 
  faq: any, 
  isOpen: boolean, 
  onClick: () => void,
  isSpeaking: boolean,
  isPaused: boolean,
  onSpeechToggle: (e: React.MouseEvent) => void,
  currentCharIndex: number | null
}) => {
  // Split text into words while keeping track of their character indices
  const normalizedAnswer = faq.answer.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").trim();
  const words = normalizedAnswer.split(/(\s+)/).map((part: string, index: number, array: string[]) => {
    const start = array.slice(0, index).join('').length;
    return {
      text: part,
      start,
      end: start + part.length
    };
  });

  return (
    <motion.div
      layout
      className={`bg-white border-2 transition-all duration-700 overflow-hidden relative group/card ${isOpen ? 'border-gold/30 shadow-2xl' : 'border-sand hover:border-gold/20 hover:shadow-xl'}`}
    >
      <div className="w-full flex items-center pr-4">
        <button
          onClick={onClick}
          className="flex-1 px-8 py-7 flex items-center justify-between text-left relative z-10"
        >
          <span className="text-[17px] font-black text-warm-gray leading-tight tracking-tight pr-4">{faq.question}</span>
          <ChevronDown className={`w-6 h-6 text-gold transition-transform duration-700 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <button
          onClick={onSpeechToggle}
          className={`relative z-20 p-3 rounded-full transition-all duration-300 ${isSpeaking ? (isPaused ? 'bg-gold/50 text-white' : 'bg-gold text-white scale-110 shadow-lg') : 'bg-gold text-white hover:bg-black hover:text-white'}`}
          title={isSpeaking ? (isPaused ? "Resume" : "Pause") : "Listen to the answer"}
        >
          {isSpeaking ? (
            <motion.div
              animate={isPaused ? {} : { scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {isPaused ? <Volume2 className="w-5 h-5 opacity-70" /> : <VolumeX className="w-5 h-5" />}
            </motion.div>
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 pb-10 relative z-10">
              <div className="pt-4 border-t border-sand/30">
                <p className="text-warm-gray-light leading-relaxed text-[16px] font-medium selection:bg-gold/20">
                  {words.map((word: any, i: number) => {
                    const isHighlighted = isSpeaking && currentCharIndex !== null && 
                                       currentCharIndex >= word.start && 
                                       currentCharIndex < word.end && 
                                       /\S/.test(word.text); // Only highlight non-whitespace
                    
                    return (
                      <span 
                        key={i} 
                        className={`transition-colors duration-200 rounded-sm ${isHighlighted ? 'bg-gold text-white px-0.5' : ''}`}
                      >
                        {word.text}
                      </span>
                    )
                  })}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState<number | null>(null);
  const [preferredVoice, setPreferredVoice] = useState<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Initialize and stabilize voices
  useEffect(() => {
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0 && !preferredVoice) {
        // Highlighting (onboundary) is most reliable on local voices.
        // We prioritize local voices that sound natural.
        const voice = voices.find(v => v.localService && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Premium")) && v.lang.startsWith("en"))
                      || voices.find(v => v.localService && v.lang.startsWith("en"))
                      || voices.find(v => (v.name.includes("Google") || v.name.includes("Natural")) && v.lang.startsWith("en"))
                      || voices.find(v => v.lang.startsWith("en"))
                      || voices[0];
        setPreferredVoice(voice);
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [preferredVoice]);

  const stopSpeech = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeakingId(null);
    setIsPaused(false);
    setCurrentCharIndex(null);
    utteranceRef.current = null;
  }, []);

  const toggleSpeech = useCallback((id: string, text: string, index: number) => {
    // If clicking the same FAQ
    if (speakingId === id) {
      if (window.speechSynthesis.speaking) {
        if (isPaused) {
          window.speechSynthesis.resume();
          setIsPaused(false);
        } else {
          window.speechSynthesis.pause();
          setIsPaused(true);
        }
        return;
      }
    }

    // New speech or restart: Full cleanup first
    window.speechSynthesis.cancel();
    
    // Normalize text (curly quotes can break charIndex sync in some browsers)
    const normalizedText = text.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").trim();

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(normalizedText);
    
    // CRITICAL: Attach to window to prevent garbage collection in Chrome
    (window as any)._currentUtterance = utterance;
    utteranceRef.current = utterance;
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = 0.90;
    utterance.pitch = 1;

    // Use both addEventListener and property assignment for maximum compatibility
    const onStart = () => {
      setOpenIndex(index);
      setSpeakingId(id);
      setIsPaused(false);
      // Initialize to 0 so the first word highlights immediately
      setCurrentCharIndex(0);
    };

    const onBoundary = (event: any) => {
      if (event.name === 'word') {
        setCurrentCharIndex(event.charIndex);
      }
    };

    const onEnd = () => {
      setSpeakingId(null);
      setIsPaused(false);
      setCurrentCharIndex(null);
      utteranceRef.current = null;
      (window as any)._currentUtterance = null;
    };

    const onError = (event: any) => {
      if (event.error === 'interrupted' || event.error === 'canceled') return;
      console.error("SpeechSynthesisUtterance error:", event.error);
      stopSpeech();
    };

    utterance.onstart = onStart;
    utterance.onboundary = onBoundary;
    utterance.onend = onEnd;
    utterance.onerror = onError;

    // Small delay to ensure previous cancel() has cleared the queue
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 50);
  }, [speakingId, isPaused, preferredVoice, stopSpeech]);

  // Cleanup and Visibility Logic
  useEffect(() => {
    const handleGlobalCancel = () => {
      window.speechSynthesis.cancel();
    };

    // Stop speech if section goes out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && window.speechSynthesis.speaking) {
          stopSpeech();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Event listeners for refresh/close/navigate
    window.addEventListener('beforeunload', handleGlobalCancel);
    window.addEventListener('pagehide', handleGlobalCancel);

    return () => {
      handleGlobalCancel();
      window.removeEventListener('beforeunload', handleGlobalCancel);
      window.removeEventListener('pagehide', handleGlobalCancel);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [stopSpeech]);

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="py-18 lg:py-24 bg-cream relative shadow-[inset_0_0_120px_rgba(0,0,0,0.03)] overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-gold font-black leading-[0.9] mb-6 tracking-tighter">
            Frequently asked questions
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <ProtocolCard
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(isOpen => openIndex === index ? null : index)}
                isSpeaking={speakingId === faq.id}
                isPaused={speakingId === faq.id && isPaused}
                onSpeechToggle={(e) => {
                  e.stopPropagation();
                  toggleSpeech(faq.id, faq.answer, index);
                }}
                currentCharIndex={speakingId === faq.id ? currentCharIndex : null}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
