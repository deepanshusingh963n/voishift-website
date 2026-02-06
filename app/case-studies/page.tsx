import { Metadata } from "next"
import { Navbar } from "@/components/sections/navbar"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid"
import { Testimonials } from "@/components/case-studies/testimonials"
import { CaseStudiesCTA } from "@/components/case-studies/case-studies-cta"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Case Studies | VoiShift | Real Voice AI Outcomes",
  description: "See how teams transformed their voice AI with VoiShift. Real case studies, real metrics, real confidence.",
  keywords: [
    "case studies",
    "voice AI success",
    "enterprise outcomes",
    "customer success stories",
  ],
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CaseStudiesHero />
      <CaseStudyGrid />
      <Testimonials />
      <CaseStudiesCTA />
      <Footer />
    </main>
  )
}
