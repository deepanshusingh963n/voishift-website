import DifferenceHero from "@/components/difference/differenceHero"
import { Differentiation } from "@/components/difference/differentiation"
import { HowWeDoDifferentlySection } from "@/components/difference/HowWeDoDifferentlySection"
import { Proof } from "@/components/difference/proof"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "The Difference | VoiShift",
  description: "Learn what makes VoiShift different: systems instead of agents, proven edge cases, and governed by rules.",
}

export default function DifferencePage() {
  return (
    <main className="min-h-screen bg-cream-dark">
      <Navbar />
      <DifferenceHero />
      <Differentiation />
      <HowWeDoDifferentlySection />
      <Proof />
      <Footer />
    </main>
  )
}
