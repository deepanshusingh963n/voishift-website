import React from "react"
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: '../public/fonts/inter.woff2',
  variable: '--font-inter',
  display: 'swap',
});

const image = "/voishift.png"

export const metadata: Metadata = {
  title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
  description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean. Build voice AI that behaves safely when things break.',
  keywords: ['voice AI', 'voice automation', 'AI system', 'voice bot', 'enterprise AI', 'AI safety'],
  authors: [{ name: 'VoiShift' }],
  metadataBase: new URL('https://voishiftai.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/voishift.png', sizes: '32x32' },
      { url: '/voishift.png', sizes: '16x16' },
    ],
    apple: '/voishift.png',
  },
  manifest: '/site.webmanifest',

  openGraph: {
    title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
    description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean.',
    type: 'website',
    siteName: 'VoiShift',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
      },
    ],
    url: 'https://voishiftai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
    description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#E2A746',
  width: 'device-width',
  initialScale: 1,
}

import { ModalProvider } from "@/context/modal-context"
import { CTAFormModal } from "@/components/cta/form"
import { PrivacyModal } from "@/components/legal/privacy-modal"
import { ScrollTrigger } from "@/components/cta/scroll-trigger"
import { BackToTopButton } from "@/components/ui/back-to-top"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className="font-sans antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "VoiShift",
                "url": "https://voishiftai.com",
                "logo": "https://voishiftai.com/voishift.png",
                "description": "VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean.",
                "sameAs": [
                  "https://twitter.com/voishift",
                  "https://linkedin.com/company/voishift"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "VoiShift",
                "url": "https://voishiftai.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://voishiftai.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "VoiShift Enterprise Voice AI",
                "provider": {
                  "@type": "Organization",
                  "name": "VoiShift"
                },
                "description": "System-first voice AI designed for reliability and safety in complex business environments.",
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "VoiShift Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Voice AI Architecture Review"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Voice AI System Implementation"
                      }
                    }
                  ]
                }
              }
            ])
          }}
        />
        <ModalProvider>
          {children}
          <CTAFormModal />
          <PrivacyModal />
          <ScrollTrigger />
          <BackToTopButton />
        </ModalProvider>
      </body>
    </html>
  )
}
