import DifferenceHero from "@/components/difference/differenceHero"
import { Differentiation } from "@/components/difference/differentiation"
import { HowWeDoDifferentlySection } from "@/components/difference/HowWeDoDifferentlySection"
import { Proof } from "@/components/difference/proof"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "The Difference | VoiShift",
  description: "Learn what makes VoiShift different: systems instead of agents, proven edge cases, and governed by rules.",
  openGraph: {
    title: "The Difference | VoiShift",
    description: "Learn what makes VoiShift different: systems instead of agents, proven edge cases, and governed by rules.",
  },
  alternates: {
    canonical: "/difference",
  },
  twitter: {
    title: "The Difference | VoiShift",
    description: "Learn what makes VoiShift different: systems instead of agents, proven edge cases, and governed by rules.",
  },
}

export default function DifferencePage() {
  return (
    <main className="min-h-screen bg-cream-dark">
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
                "name": "The Difference",
                "item": "https://voishiftai.com/difference"
              }
            ]
          })
        }}
      />
      <Navbar />
      <DifferenceHero />
      <Differentiation />
      <HowWeDoDifferentlySection />
      <Proof />
      <Footer />
    </main>
  )
}
