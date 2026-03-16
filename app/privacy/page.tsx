import { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy & Data Protocol | VoiShift",
    description: "VoiShift Privacy Policy & Data Protocol. Global compliance notice.",
    keywords: ["Privacy Policy", "Data Protocol", "VoiShift Privacy", "Compliance"],
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
                <div className="bg-cream border border-sand shadow-2xl overflow-hidden flex flex-col rounded-xl">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 md:p-8 border-b border-sand bg-white shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h1 className="font-serif text-2xl text-warm-gray">Privacy & Data Protocol</h1>
                                <p className="text-[10px] font-black uppercase tracking-widest text-warm-gray/40 mt-1">Global Compliance Notice</p>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 bg-cream-dark">
                        <div className="prose prose-warm max-w-none space-y-8 text-warm-gray-light leading-relaxed">

                            <p className="text-xl font-serif italic text-warm-gray border-l-4 border-gold pl-6 py-2">
                                We believe in radical honesty and industrial stability. This means we do not use tracking cookies, we do not sell your personal data, and we collect only what is strictly necessary to operate our business and fulfill your requests.
                            </p>

                            <div>
                                <h3 className="text-sm font-black text-warm-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-gold">01</span> Data We Collect
                                </h3>
                                <p>When you interact with VoiShift, such as requesting an eBook or booking a consultation, we collect specific professional information you directly provide:</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Full Name</li>
                                    <li>Business Email Address</li>
                                    <li>Company Name</li>
                                    <li>Professional Role and Industry Discipline</li>
                                </ul>
                                <p className="mt-2 font-medium text-warm-gray">We actively avoid collecting non-essential data. We do not deploy third-party advertising trackers (like Meta Pixels) or analytics cookies that follow you across the web.</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-black text-warm-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-gold">02</span> Purpose of Processing
                                </h3>
                                <p>We process your data for the following essential purposes (establishing our "Lawful Basis" under GDPR and global frameworks):</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li><strong>Fulfillment (Consent):</strong> Delivering requested resources (eBooks, whitepapers) directly to your inbox.</li>
                                    <li><strong>Service Engagement (Legitimate Interest):</strong> Initiating professional dialogue regarding system architecture, pricing, and potential partnerships.</li>
                                    <li><strong>Operational Updates (Legitimate Interest):</strong> Sending unpolished field reports and research updates, which you may opt out of at any time.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-black text-warm-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-gold">03</span> Data Storage & Third Parties
                                </h3>
                                <p>Your data is securely routed and stored using enterprise-grade infrastructure. Forms submitted on our site securely transmit data to connected systems (like Google Workspace via Apps Script) to facilitate operational execution.</p>
                                <p className="mt-2"><strong>We do not sell, rent, or lease your data to data brokers or third parties.</strong> Data may be processed in the United States or other operational regions, secured by standard contractual clauses and encryption protocols.</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-black text-warm-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-gold">04</span> Your Global Rights (GDPR, CCPA, DPDP)
                                </h3>
                                <p>Regardless of your jurisdiction, we respect your right to control your data. You have the right to:</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                                    <li><strong>Rectification:</strong> Request correction of inaccurate data.</li>
                                    <li><strong>Erasure / Deletion:</strong> Request full deletion of your records from our systems ("Right to be Forgotten").</li>
                                    <li><strong>Restriction:</strong> Opt-out of future communications or restrict how we use your data.</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 border border-sand">
                                <h3 className="text-sm font-black text-warm-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-gold">05</span> Contact for Privacy Operations
                                </h3>
                                <p>To exercise any of your data rights or if you have questions regarding this protocol, please contact our operational team directly:</p>
                                <a href="mailto:dpo.voishift@klyrr.com" className="inline-block mt-4 text-gold border-b border-gold/30 hover:border-gold font-bold italic transition-colors">
                                    dpo.voishift@klyrr.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
