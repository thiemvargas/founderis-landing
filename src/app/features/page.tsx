import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - AI-Powered Startup Tools',
  description: 'Discover FounderIs\' comprehensive AI features: strategic planning, market validation, business analytics, emotional support, and founder networking tools.',
  openGraph: {
    title: 'Features - AI-Powered Startup Tools | FounderIs',
    description: 'Discover comprehensive AI features designed for startup success: strategic planning, market validation, analytics, and 24/7 founder support.',
  },
}

'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'
import LanguageToggle from '../../components/LanguageToggle'

export default function FeaturesPage() {
  const { t } = useLanguage()

  const features = [
    {
      titleKey: 'features.ai.title',
      descriptionKey: 'features.ai.description',
      icon: '🤖',
      details: ['features.ai.detail1', 'features.ai.detail2', 'features.ai.detail3']
    },
    {
      titleKey: 'features.validation.title',
      descriptionKey: 'features.validation.description',
      icon: '🎯',
      details: ['features.validation.detail1', 'features.validation.detail2', 'features.validation.detail3']
    },
    {
      titleKey: 'features.planning.title',
      descriptionKey: 'features.planning.description',
      icon: '📋',
      details: ['features.planning.detail1', 'features.planning.detail2', 'features.planning.detail3']
    },
    {
      titleKey: 'features.support.title',
      descriptionKey: 'features.support.description',
      icon: '💪',
      details: ['features.support.detail1', 'features.support.detail2', 'features.support.detail3']
    },
    {
      titleKey: 'features.analytics.title',
      descriptionKey: 'features.analytics.description',
      icon: '📊',
      details: ['features.analytics.detail1', 'features.analytics.detail2', 'features.analytics.detail3']
    },
    {
      titleKey: 'features.community.title',
      descriptionKey: 'features.community.description',
      icon: '🌐',
      details: ['features.community.detail1', 'features.community.detail2', 'features.community.detail3']
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
              {t('features.badge')}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('features.title')}
            <span className="gradient-text block mt-2">{t('features.title.highlight')}</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('features.description')}
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-white/60">
                      <div className="w-1.5 h-1.5 bg-blue-400/40 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                      <span>{t(detail)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('features.cta.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('features.cta.description')}
          </motion.p>
          <motion.button
            className="bg-white text-black px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.button.start')}
          </motion.button>
        </div>
      </section>
    </main>
  )
}