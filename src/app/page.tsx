import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <Footer />
    </main>
  )
}