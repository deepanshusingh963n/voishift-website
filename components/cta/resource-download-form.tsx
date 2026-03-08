import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Mail, Building, User, Briefcase, Network, ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Option {
  label: string
  value: string
}

interface BeautifiedSelectProps {
  label: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  icon?: React.ReactNode
  required?: boolean
}

function BeautifiedSelect({ label, options, value, onChange, placeholder, icon, required }: BeautifiedSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="space-y-1.5 relative" ref={containerRef}>
      <label className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest flex items-center gap-2">
        {icon} {label}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full bg-white border border-sand px-4 py-3 rounded-xl text-sm italic font-serif flex items-center justify-between transition-all duration-300",
          isOpen ? "border-gold ring-1 ring-gold/20 shadow-lg" : "hover:border-gold/50"
        )}
      >
        <span className={cn(value ? "text-warm-gray" : "text-warm-gray/20")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={cn("w-4 h-4 text-gold transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-50 w-full mt-2 bg-white/90 backdrop-blur-md border border-gold/20 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto py-1 custom-scrollbar">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 text-xs font-serif italic transition-colors flex items-center justify-between group",
                    value === option.value ? "bg-gold/10 text-warm-gray" : "text-warm-gray-light hover:bg-gold/5 hover:text-gold"
                  )}
                >
                  {option.label}
                  {value === option.value && <Check className="w-3 h-3 text-gold" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden input for form requirement */}
      {required && (
        <input 
          tabIndex={-1} 
          autoComplete="off" 
          style={{ opacity: 0, position: 'absolute', height: 0, width: 0 }} 
          value={value} 
          required 
          readOnly 
        />
      )}
    </div>
  )
}

interface ResourceDownloadFormProps {
  resourceName: string
  resourceType: "eBook" | "Whitepaper" | "Case Study"
}

export function ResourceDownloadForm({ resourceName, resourceType }: ResourceDownloadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  // State for beautified select
  const [role, setRole] = useState("")
  const [discipline, setDiscipline] = useState("")

  const roleOptions = [
    { label: "CXOs (CEO, CTO, COO, CMO, CHRO)", value: "cxos" },
    { label: "VP / AVP / RVP", value: "executives" },
    { label: "GM / AGM", value: "general-managers" },
    { label: "Director / Head of", value: "director" },
    { label: "Senior manager / Junior manager / Team lead", value: "managers" },
    { label: "Individual contributor", value: "ic" },
  ]

  const disciplineOptions = [
    { label: "Manufacturing & Industrial", value: "manufacuring" },
    { label: "Logistics & Supply Chain", value: "logistics" },
    { label: "SaaS & Enterprise Tech", value: "saas" },
    { label: "Healthcare & Life Sciences", value: "healthcare" },
    { label: "Global Retail / E-commerce", value: "retail" },
    { label: "BFSI / FinTech", value: "finance" },
    { label: "EdTech / Public Sector", value: "education" },
    { label: "Travel & Hospitality", value: "travel" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 text-center bg-white border border-sand rounded-3xl"
      >
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-serif text-2xl text-warm-gray mb-3 italic">
          Access Initialized
        </h3>
        <p className="text-warm-gray-light font-serif text-sm leading-relaxed">
          The {resourceType} for <span className="text-gold font-bold">"{resourceName}"</span> has been sent to your business email.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-warm-gray mb-4 tracking-tight">
          Get Archive <span className="text-gold italic">Access</span>
        </h2>
        <div className="flex items-center justify-center gap-4 text-warm-gray/40">
          <div className="h-px w-8 bg-sand" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational Access Request</span>
          <div className="h-px w-8 bg-sand" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest flex items-center gap-2">
              <User className="w-3 h-3 text-gold/60" /> First Name
            </label>
            <input
              required
              type="text"
              placeholder="Ex: Marcus"
              className="w-full bg-white border border-sand px-4 py-3 rounded-xl text-sm italic font-serif focus:outline-none focus:border-gold transition-colors placeholder:text-warm-gray/20"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest flex items-center gap-2">
              <User className="w-3 h-3 text-gold/60" /> Last Name
            </label>
            <input
              required
              type="text"
              placeholder="Ex: Webb"
              className="w-full bg-white border border-sand px-4 py-3 rounded-xl text-sm italic font-serif focus:outline-none focus:border-gold transition-colors placeholder:text-warm-gray/20"
            />
          </div>
        </div>

        {/* Professional Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest flex items-center gap-2">
              <Mail className="w-3 h-3 text-gold/60" /> Business Email
            </label>
            <input
              required
              type="email"
              placeholder="marcus@global-logistics.com"
              className="w-full bg-white border border-sand px-4 py-3 rounded-xl text-sm italic font-serif focus:outline-none focus:border-gold transition-colors placeholder:text-warm-gray/20"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest flex items-center gap-2">
              <Building className="w-3 h-3 text-gold/60" /> Company Name
            </label>
            <input
              required
              type="text"
              placeholder="Enterprise Organization"
              className="w-full bg-white border border-sand px-4 py-3 rounded-xl text-sm italic font-serif focus:outline-none focus:border-gold transition-colors placeholder:text-warm-gray/20"
            />
          </div>
        </div>

        {/* Roles & Responsibility Grid - Beautified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BeautifiedSelect 
            label="Role Selection"
            options={roleOptions}
            value={role}
            onChange={setRole}
            placeholder="Select your role..."
            required
            icon={<Briefcase className="w-3 h-3 text-gold/60" />}
          />
          <BeautifiedSelect 
            label="Industry Discipline"
            options={disciplineOptions}
            value={discipline}
            onChange={setDiscipline}
            placeholder="Select discipline..."
            required
            icon={<Network className="w-3 h-3 text-gold/60" />}
          />
        </div>

        {/* Permission Protocol */}
        <div className="py-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center mt-1">
              <input 
                type="checkbox" 
                required
                className="peer h-4 w-4 border border-sand rounded bg-white checked:bg-gold checked:border-gold transition-all appearance-none cursor-pointer"
              />
              <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none left-0.5" />
            </div>
            <span className="text-[11px] leading-relaxed text-warm-gray-light font-serif italic">
              I agree to the VoiShift data storage protocol. Please send me this {resourceType} and include me in future research updates and unpolished field reports.
            </span>
          </label>
        </div>

        {/* CTA Button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className={cn(
            "group relative w-full flex flex-col items-center justify-center gap-1 px-8 py-5 rounded-2xl transition-all duration-500 overflow-hidden",
            isSubmitting ? "bg-warm-gray/40 cursor-wait" : "bg-[#1a1a1a] text-white hover:bg-gold hover:text-[#1a1a1a]"
          )}
        >
          <div className="flex items-center gap-3 relative z-10 font-black uppercase tracking-widest text-sm">
            {isSubmitting ? "Initializing Access..." : "Get access"}
            {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />}
          </div>
          
          {/* Subtle Scanline on processing */}
          {isSubmitting && (
            <motion.div 
               animate={{ x: ["-100%", "200%"] }}
               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 bottom-0 left-0 w-1/3 bg-white/10 skew-x-12"
            />
          )}
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
        </button>

        <p className="text-[9px] font-black text-center text-warm-gray/30 uppercase tracking-[0.2em]">
          PDF will be delivered to your business email. No sales deck.
        </p>
      </form>
    </div>
  )
}
