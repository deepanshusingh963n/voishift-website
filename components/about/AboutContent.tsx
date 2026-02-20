"use client"

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { WhyWeExistSection } from "@/components/about/WhyWeExistSection";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { CareersSection } from "@/components/about/CareersSection";

export function AboutContent() {
    return (
        <main>
            <AboutHeroSection />
            <WhoWeAreSection />
            <LeadershipSection />
            <WhyWeExistSection />
            <CareersSection />
        </main>
    );
}
