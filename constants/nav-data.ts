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
      { title: "Specific Challenges", description: "Solving for revenue and ops efficiency.", icon: Target, href: "/what-we-solve#challenges" },
      { title: "The Threat", description: "Why black-box AI is a liability.", icon: CheckCircle, href: "/what-we-solve#teams" },
      { title: "Built for", description: "Enterprise-grade safety features.", icon: Users, href: "/what-we-solve#governance" },
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
      { title: "Differentiation", description: "Why we focus on systems, not agents.", icon: Zap, href: "/difference#differentiation" },
      { title: "Our Methodology", description: "How we solve for edge cases reliably.", icon: Repeat, href: "/difference#methodology" },
      { title: "Proof & Metrics", description: "Verification gated by rules and data.", icon: ShieldCheck, href: "/difference#proof" },
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
      { title: "Phase 1: Mapping", description: "Opportunity mapping and strategy.", icon: Map, href: "/how-it-works#discovery" },
      { title: "Phase 2: Sandbox", description: "Validation and testing environment.", icon: Layout, href: "/how-it-works#sandbox" },
      { title: "Phase 3: Rollout", description: "Proof gated production launch.", icon: Zap, href: "/how-it-works#rollout" },
      { title: "Payment Model", description: "Performance-based results.", icon: CreditCard, href: "/how-it-works#payment" },
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
      { title: "Operator Filter", description: "Why we focus on operators, not just owners.", icon: Filter, href: "/who-is-this-for#filter" },
      { title: "Market Fit", description: "Industries where reliability is non-negotiable.", icon: Target, href: "/who-is-this-for#hits" },
      { title: "Use Cases", description: "Real-world scenarios we handle daily.", icon: Search, href: "/who-is-this-for#for" },
    ],
    sidebarContent: {
      title: "Strategic Fit",
      icon: Filter,
      description: "Our solutions are designed for teams that require predictable outcomes.",
      footerText: "For professionals only",
      footerLink: "/who-is-this-for",
      footerLabel: "Check Fit"
    }
  },
  {
    label: "Build Vs Buy",
    href: "/build-vs-buy",
    sections: [
      { title: "Renting vs Owning", description: "Why renting AI is a short-term trap.", icon: Rocket, href: "/build-vs-buy#renting" },
      { title: "Pain Points", description: "Identifying the gaps in generic AI bots.", icon: ShieldAlert, href: "/build-vs-buy#pain-points" },
      { title: "Decision Framework", description: "A guide for ROI-focused leaders.", icon: FileText, href: "/build-vs-buy#framework" },
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
      { title: "Our Story", description: "The evolution of VoiShift and our mission.", icon: Info, href: "/about#story" },
      { title: "The Team", description: "Meet the experts building reliable voice AI.", icon: Users, href: "/about#team" },
      { title: "Financial Model", description: "Transparency on how we get paid.", icon: CreditCard, href: "/about#model" },
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
      { title: "Real Outcomes", description: "Hard metrics from real-world deployments.", icon: BarChart, href: "/case-studies#hero" },
      { title: "Expert Ebooks", description: "Deep dives into voice AI strategy.", icon: BookOpen, href: "/case-studies#ebooks" },
      { title: "Whitepapers", description: "Technical research and industry findings.", icon: FileText, href: "/case-studies#whitepapers" },
      { title: "Success Stories", description: "How teams hit 98% accuracy.", icon: Trophy, href: "/case-studies#grid" },
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
