import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Simple Plans for Every Founder',
  description: 'Choose the perfect FounderIs plan for your startup journey. Start free with basic AI features, upgrade to Pro for unlimited access, or get Enterprise for teams.',
  openGraph: {
    title: 'Pricing - Simple Plans for Every Founder | FounderIs',
    description: 'Transparent pricing for AI-powered startup support. Free plan available, Pro at $49/month, Enterprise custom pricing.',
  },
}

'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'
import LanguageToggle from '../../components/LanguageToggle'

export default function PricingPage() {
  const { t } = useLanguage()

  const plans = [
    {
      nameKey: 'pricing.starter.name',
      priceKey: 'pricing.starter.price',
      descriptionKey: 'pricing.starter.description',
      features: [
        'pricing.starter.feature1',
        'pricing.starter.feature2',
        'pricing.starter.feature3',
        'pricing.starter.feature4'
      ],
      buttonKey: 'pricing.starter.button',
      popular: false
    },
    {
      nameKey: 'pricing.pro.name',
      priceKey: 'pricing.pro.price',
      descriptionKey: 'pricing.pro.description',
      features: [
        'pricing.pro.feature1',
        'pricing.pro.feature2',
        'pricing.pro.feature3',
        'pricing.pro.feature4',
        'pricing.pro.feature5',
        'pricing.pro.feature6'
      ],
      buttonKey: 'pricing.pro.button',
      popular: true
    },
    {
      nameKey: 'pricing.enterprise.name',
      priceKey: 'pricing.enterprise.price',
      descriptionKey: 'pricing.enterprise.description',
      features: [
        'pricing.enterprise.feature1',
        'pricing.enterprise.feature2',
        'pricing.enterprise.feature3',
        'pricing.enterprise.feature4',
        'pricing.enterprise.feature5',
        'pricing.enterprise.feature6',
        'pricing.enterprise.feature7'
      ],
      buttonKey: 'pricing.enterprise.button',
      popular: false
    }
  ]

  return (
    <main className="min-h-screen pt-16">
      <Header />
      <LanguageToggle />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-blue-400/20 text-sm font-medium bg-blue-950/20 backdrop-blur-sm">
              {t('pricing.badge')}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('pricing.title')}
            <span className="gradient-text block mt-2">{t('pricing.title.highlight')}</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('pricing.description')}
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-900/30 border-blue-400/50 scale-105'
                    : 'bg-blue-950/20 border-blue-500/10 hover:border-blue-400/30'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02, y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {t('pricing.popular')}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t(plan.nameKey)}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {t(plan.priceKey)}
                  </div>
                  <p className="text-white/60">
                    {t(plan.descriptionKey)}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-white/70">
                      <svg
                        className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'border border-blue-400/30 text-white hover:bg-blue-500/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t(plan.buttonKey)}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('pricing.faq.title')}
          </motion.h2>

          <div className="space-y-6">
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t(`pricing.faq.q${i + 1}.question`)}
                </h3>
                <p className="text-white/70">
                  {t(`pricing.faq.q${i + 1}.answer`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}