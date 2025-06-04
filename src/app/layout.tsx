import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FounderIs - Your AI Startup Copilot',
  description: 'FounderIs is an intelligent platform for entrepreneurs that functions as an AI copilot to create, validate, and launch startups with artificial intelligence.',
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
        {children}
      </body>
    </html>
  )
}