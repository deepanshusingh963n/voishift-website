import React from "react"
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: '../public/fonts/inter.woff2',
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
  description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean. Build voice AI that behaves safely when things break.',
  keywords: ['voice AI', 'voice automation', 'AI system', 'voice bot', 'enterprise AI', 'AI safety'],
  authors: [{ name: 'VoiShift' }],
  metadataBase: new URL('https://voishift.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
    description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean.',
    type: 'website',
    siteName: 'VoiShift',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
    description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean.',
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
        <ModalProvider>
          {children}
          <CTAFormModal />
          <ScrollTrigger />
        </ModalProvider>
      </body>
    </html>
  )
}
