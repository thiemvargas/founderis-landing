import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LanguageToggle from '@/components/LanguageToggle'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <LanguageToggle />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <Footer />
    </main>
  )
}