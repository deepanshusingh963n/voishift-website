import { Metadata } from 'next';
import { ContactHeroSection } from "@/components/contactus/ContactHeroSection";
import { ContactOptionsSection } from "@/components/contactus/ContactOptionsSection";
import { ContactGlobalReachSection } from "@/components/contactus/ContactGlobalReachSection";
import { ContactAvailabilitySection } from "@/components/contactus/ContactAvailabilitySection";
import { ContactFormSection } from "@/components/contactus/ContactFormSection";
import { Navbar } from '@/components/sections/navbar';

export const metadata: Metadata = {
    title: 'Contact Us | VoiShift',
    description: 'Get in touch with the VoiShift team to discuss voice AI solutions, technical support, or security inquiries.',
};

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <Navbar />
            <ContactHeroSection />
            <ContactOptionsSection />
            <ContactGlobalReachSection />
            <ContactAvailabilitySection />
            <ContactFormSection />
        </main>
    );
}
