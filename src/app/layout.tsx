import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://founderis.com'),
  title: {
    default: 'FounderIs - Your AI Startup Copilot',
    template: '%s | FounderIs'
  },
  description: 'FounderIs is an intelligent platform for entrepreneurs that functions as an AI copilot to create, validate, and launch startups with artificial intelligence. Get strategic insights, validation frameworks, and emotional support 24/7.',
  keywords: ['startup', 'AI', 'entrepreneur', 'business planning', 'market validation', 'founder support', 'artificial intelligence', 'business strategy'],
  authors: [{ name: 'FounderIs Team' }],
  creator: 'FounderIs',
  publisher: 'FounderIs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://founderis.com',
    siteName: 'FounderIs',
    title: 'FounderIs - Your AI Startup Copilot',
    description: 'FounderIs is an intelligent platform for entrepreneurs that functions as an AI copilot to create, validate, and launch startups with artificial intelligence.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FounderIs - AI Startup Copilot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FounderIs - Your AI Startup Copilot',
    description: 'FounderIs is an intelligent platform for entrepreneurs that functions as an AI copilot to create, validate, and launch startups with artificial intelligence.',
    images: ['/og-image.png'],
    creator: '@FounderIs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-white antialiased relative">
        <div className="grid-background"></div>
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}