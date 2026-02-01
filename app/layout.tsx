import React from "react"
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: '../public/fonts/inter.woff2',
  variable: '--font-inter',
  display: 'swap',
});

const libreBaskerville = localFont({
  src: [
    {
      path: '../public/fonts/libre_baskerville_400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/libre_baskerville_700.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VoiShift | Voice AI That Holds Up When Reality Gets Messy',
  description: 'VoiShift turns voice AI from a speaking layer into a business system that holds up when conditions are not clean. Build voice AI that behaves safely when things break.',
  keywords: ['voice AI', 'voice automation', 'AI system', 'voice bot', 'enterprise AI', 'AI safety'],
  authors: [{ name: 'VoiShift' }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
