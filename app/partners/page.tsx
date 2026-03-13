import { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { PartnersHeroSection } from '@/components/partners/PartnersHeroSection';
import { PartnerProgramsSection } from '@/components/partners/PartnerProgramsSection';
import { PartnerBenefitsSection } from '@/components/partners/PartnerBenefitsSection';
import { PartnerCTASection } from '@/components/partners/PartnerCTASection';

export const metadata: Metadata = {
    title: 'Partners | VoiShift',
    description: 'Join the VoiShift Partner Network to deliver generative voice AI solutions that drive growth for your clients and your business.',
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-background pt-24 font-sans">
            <Navbar />
            <PartnersHeroSection />
            <PartnerProgramsSection />
            <PartnerBenefitsSection />
            <PartnerCTASection />
            <Footer />
        </main>
    );
}
