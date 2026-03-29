import { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
    title: "About VoiShift | The Team Behind Reliable Voice AI",
    description: "Learn why VoiShift was built for teams who need voice AI that works in the real world. Meet the team shifting the industry toward reliability.",
    keywords: ["VoiShift team", "voice AI mission", "about VoiShift", "reliable AI systems"],
    openGraph: {
        title: "About VoiShift | The Team Behind Reliable Voice AI",
        description: "Learn why VoiShift was built for teams who need voice AI that works in the real world. Meet the team shifting the industry toward reliability.",
    },
    alternates: {
        canonical: "/about",
    },
    twitter: {
        title: "About VoiShift | The Team Behind Reliable Voice AI",
        description: "Learn why VoiShift was built for teams who need voice AI that works in the real world. Meet the team shifting the industry toward reliability.",
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
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
                                "name": "About",
                                "item": "https://voishiftai.com/about"
                            }
                        ]
                    })
                }}
            />
            <Navbar />
            <AboutContent />
            <Footer />
        </div>
    );
}
