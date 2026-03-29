import { Metadata } from "next"
import { Navbar } from "@/components/sections/navbar"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid"
import { EBooksSection } from "@/components/case-studies/ebooks-section"
import { WhitepapersSection } from "@/components/case-studies/whitepapers-section"
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
  openGraph: {
    title: "Case Studies | VoiShift | Real Voice AI Outcomes",
    description: "See how teams transformed their voice AI with VoiShift. Real case studies, real metrics, real confidence.",
  },
  alternates: {
    canonical: "/case-studies",
  },
  twitter: {
    title: "Case Studies | VoiShift | Real Voice AI Outcomes",
    description: "See how teams transformed their voice AI with VoiShift. Real case studies, real metrics, real confidence.",
  },
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://voishiftai.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Case Studies",
                "item": "https://voishiftai.com/case-studies"
              }
            ]
          })
        }}
      />
      <Navbar />
      <CaseStudiesHero />
      <CaseStudyGrid />
      <EBooksSection />
      <WhitepapersSection />
      <CaseStudiesCTA />
      <Footer />
    </main>
  )
}
