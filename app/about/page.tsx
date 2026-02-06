import { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
    title: "About VoiShift | The Team Behind Reliable Voice AI",
    description: "Learn why VoiShift was built for teams who need voice AI that works in the real world. Meet the team shifting the industry toward reliability.",
    keywords: ["VoiShift team", "voice AI mission", "about VoiShift", "reliable AI systems"],
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <AboutContent />
            <Footer />
        </div>
    );
}
