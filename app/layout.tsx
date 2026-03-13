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
  icons: {
    icon: '/voishift.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
    description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean.',
    type: 'website',
    siteName: 'VoiShift',
    images: [image],
    url: 'https://voishiftai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
    description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean.',
    images: [image],
  },
};

export const viewport: Viewport = {
  themeColor: '#E2A746',
  width: 'device-width',
  initialScale: 1,
}

import { ModalProvider } from "@/context/modal-context"
import { CTAFormModal } from "@/components/cta/form"
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
            __html: JSON.stringify({
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
            })
          }}
        />
        <ModalProvider>
          {children}
          <CTAFormModal />
          <ScrollTrigger />
          <BackToTopButton />
        </ModalProvider>
      </body>
    </html>
  )
}
