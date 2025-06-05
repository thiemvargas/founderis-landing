'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'
import LanguageToggle from '../../components/LanguageToggle'

export default function TermsPage() {
  const { t } = useLanguage()

  const sections = [
    {
      titleKey: 'terms.acceptance.title',
      contentKey: 'terms.acceptance.content'
    },
    {
      titleKey: 'terms.services.title',
      contentKey: 'terms.services.content'
    },
    {
      titleKey: 'terms.account.title',
      contentKey: 'terms.account.content'
    },
    {
      titleKey: 'terms.usage.title',
      contentKey: 'terms.usage.content'
    },
    {
      titleKey: 'terms.intellectual.title',
      contentKey: 'terms.intellectual.content'
    },
    {
      titleKey: 'terms.payment.title',
      contentKey: 'terms.payment.content'
    },
    {
      titleKey: 'terms.termination.title',
      contentKey: 'terms.termination.content'
    },
    {
      titleKey: 'terms.limitation.title',
      contentKey: 'terms.limitation.content'
    },
    {
      titleKey: 'terms.changes.title',
      contentKey: 'terms.changes.content'
    },
    {
      titleKey: 'terms.contact.title',
      contentKey: 'terms.contact.content'
    }
  ]

  return (
    <main className="min-h-screen pt-16">
      <Header />
      <LanguageToggle />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-blue-400/20 text-sm font-medium bg-blue-950/20 backdrop-blur-sm">
              {t('terms.badge')}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('terms.title')}
          </motion.h1>

          <motion.p
            className="text-lg text-white/70 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('terms.description')}
          </motion.p>

          <motion.p
            className="text-sm text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('terms.lastUpdated')}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-white">
                  {t(section.titleKey)}
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/70 leading-relaxed whitespace-pre-line">
                    {t(section.contentKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className="mt-16 text-center bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('terms.questions.title')}
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t('terms.questions.description')}
            </p>
            <motion.button
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('terms.questions.button')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}