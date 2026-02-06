"use client"

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { WhyWeExistSection } from "@/components/about/WhyWeExistSection";
import { WhatWeSolveSection } from "@/components/about/WhatWeSolveSection";
import { HowWeDoDifferentlySection } from "@/components/about/HowWeDoDifferentlySection";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { HowWeGetPaidSection } from "@/components/about/HowWeGetPaidSection";
import { AboutClosingSection } from "@/components/about/AboutClosingSection";
import { CareersSection } from "@/components/about/CareersSection";

export function AboutContent() {
    return (
        <main>
            <AboutHeroSection />
            <WhyWeExistSection />
            <WhatWeSolveSection />
            <HowWeDoDifferentlySection />
            <WhoWeAreSection />
            <LeadershipSection />
            <HowWeGetPaidSection />
            <AboutClosingSection />
            <CareersSection />
        </main>
    );
}
