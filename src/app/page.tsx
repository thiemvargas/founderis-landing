import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <Footer />
    </main>
  )
}