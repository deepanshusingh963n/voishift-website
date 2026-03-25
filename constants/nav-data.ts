import {
  Info, Users, CreditCard,
  Rocket, ShieldAlert, FileText,
  BarChart, BookOpen, Trophy,
  Map, Layout, Zap,
  Handshake, Briefcase, Award,
  Target, CheckCircle,
  Filter, Search,
  Mail, Globe, Clock, Send,
  Repeat, ShieldCheck,
  type LucideIcon
} from "lucide-react";

export interface NavSection {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  sections?: NavSection[];
  sidebarContent?: {
    title: string;
    icon: LucideIcon;
    description: string;
    footerText: string;
    footerLink: string;
    footerLabel: string;
    secondaryLink?: {
      label: string;
      href: string;
      icon: LucideIcon;
      isModalTrigger?: boolean;
    };
    isModalTrigger?: boolean;
  };
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "What We Solve",
    href: "/what-we-solve",
    sections: [
      { title: "Why Things Go Wrong", description: "The reality of Bot-in-a-Box failures.", icon: ShieldAlert, href: "/what-we-solve#challenges" },
      { title: "Built For Operations", description: "Engineering the Path of Veracity for real teams.", icon: Users, href: "/what-we-solve#teams" },
      { title: "System Governance", description: "Controlled truth and designed refusal.", icon: ShieldCheck, href: "/what-we-solve#governance" },
    ],
    sidebarContent: {
      title: "Core Services",
      icon: Target,
      description: "See how our controlled systems resolve common voice AI failures and hallucinations.",
      footerText: "What We Solve",
      footerLink: "/what-we-solve",
      footerLabel: "Explore"
    }
  },
  {
    label: "Our Difference",
    href: "/difference",
    sections: [
      { title: "Core Disciplines", description: "Controlled truth, designed refusal, proof-gated evaluation.", icon: Zap, href: "/difference#disciplines" },
      { title: "How We Start", description: "Starting with behavior, not prompts and models.", icon: Repeat, href: "/difference#approach" },
      { title: "Proof That Holds Up", description: "We bring evidence from your own reality.", icon: ShieldCheck, href: "/difference#proof" },
    ],
    sidebarContent: {
      title: "The Advantage",
      icon: Zap,
      description: "See why VoiShift succeeds where black-box agents fail in high-stakes ops.",
      footerText: "Predictable by design",
      footerLink: "/difference",
      footerLabel: "Learn More"
    }
  },
  {
    label: "How It Works",
    href: "/how-it-works",
    sections: [
      { title: "Phase 1: OppMap", description: "Opportunity Mapping + WSJF Prioritization.", icon: Map, href: "/how-it-works#phase-1" },
      { title: "Phase 2: Sandbox", description: "Edge-Case Testing + Guardrails Verified.", icon: Layout, href: "/how-it-works#phase-2" },
      { title: "Phase 3: Rollout", description: "Mini Rollout + Production Hardening + Drift Monitoring.", icon: Zap, href: "/how-it-works#phase-3" },
      { title: "How We Get Paid", description: "Not for activity, but for evidence.", icon: CreditCard, href: "/how-it-works#pricing" },
    ],
    sidebarContent: {
      title: "The Process",
      icon: Map,
      description: "Milestone-based payments are outdated. You pay for business outcomes, not just completed steps.",
      footerText: "You Pay for What Works",
      footerLink: "/how-it-works",
      footerLabel: "Go to Page"
    }
  },
  /*
  {
    label: "Who It's For",
    href: "/who-is-this-for",
    sections: [
      { title: "Who This Hits", description: "Different roles. Same structural fragility.", icon: Filter, href: "/who-is-this-for#operators" },
      { title: "Decision Criteria", description: "Voice AI as a system of record, not an interface.", icon: Target, href: "/who-is-this-for#criteria" },
    ],
    sidebarContent: {
      title: "Strategic Fit",
      icon: Filter,
      description: "Our solutions are designed for teams that need outcomes, not just answers.",
      footerText: "For professionals only",
      footerLink: "/who-is-this-for",
      footerLabel: "Check Fit"
    }
  },
  {
    label: "Build Vs Buy",
    href: "/build-vs-buy",
    sections: [
      { title: "Renting AI", description: "What renting AI looks like.", icon: Rocket, href: "/build-vs-buy#renting" },
      { title: "Building is Owning", description: "When you build, you own how it behaves.", icon: ShieldCheck, href: "/build-vs-buy#owning" },
      { title: "The Turning Point", description: "The moment renting starts to hurt.", icon: ShieldAlert, href: "/build-vs-buy#pain-points" },
      { title: "Decision Framework", description: "One question decides build vs buy.", icon: FileText, href: "/build-vs-buy#framework" },
    ],
    sidebarContent: {
      title: "Case Analysis",
      icon: Rocket,
      description: "Understand why building internal assets is the only way to scale voice AI reliably.",
      footerText: "Ownership over rental",
      footerLink: "/build-vs-buy",
      footerLabel: "Visit Page"
    }
  },
  */
  {
    label: "About Us",
    href: "/about",
    sections: [
      { title: "Who We Are", description: "Replacing guesswork with structure.", icon: Users, href: "/about#who-we-are" },
      { title: "Our Mission", description: "Replacing guesswork with structure.", icon: Info, href: "/about#why-we-exist" },
      { title: "Our Leadership", description: "Systems holding up under pressure.", icon: Users, href: "/about#leadership" },
      { title: "Careers", description: "Torchbearers with skin in.", icon: Briefcase, href: "/about#careers" },
    ],
    sidebarContent: {
      title: "About Us",
      icon: Info,
      description: "Explore the internal sections of our About page to learn more about our origins and values.",
      footerText: "Built for reliability",
      footerLink: "/about",
      footerLabel: "Visit Page",
      secondaryLink: {
        label: "Contact Us",
        href: "#",
        icon: Mail,
        isModalTrigger: true
      }
    }
  },
  {
    label: "Resources",
    href: "/case-studies",
    sections: [
      { title: "Voices That Build Clarity", description: "Real outcomes. Real challenges. Real solutions.", icon: BarChart, href: "/case-studies#hero" },
      { title: "eBooks", description: "Operator field manuals. Clear steps and examples.", icon: BookOpen, href: "/case-studies#ebooks" },
      { title: "Whitepapers", description: "Peer-reviewed research practical takeaways.", icon: FileText, href: "/case-studies#whitepapers" },
      { title: "Case Studies", description: "An exposé of our work, including the parts we got wrong.", icon: Trophy, href: "/case-studies#studies" },
    ],
    sidebarContent: {
      title: "Learning Center",
      icon: BookOpen,
      description: "Access our library of research and success stories to see how AI transforms ops.",
      footerText: "Evidence over hype",
      footerLink: "/case-studies",
      footerLabel: "View All"
    }
  },
];
