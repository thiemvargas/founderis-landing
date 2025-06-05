'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface BenefitCardProps {
  titleKey: string
  descriptionKey: string
  index: number
  gradient: string
}

function getIcon(titleKey: string) {
  const iconClass = "w-6 h-6 text-white/90"
  
  switch (titleKey) {
    case 'benefits.vision.title':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    case 'benefits.market.title':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    case 'benefits.strategic.title':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    case 'benefits.decision.title':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    case 'benefits.execution.title':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'benefits.emotional.title':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    default:
      return <div className="w-6 h-6 bg-white/90 rounded"></div>
  }
}

function BenefitCard({ titleKey, descriptionKey, index, gradient }: BenefitCardProps) {
  const { t } = useLanguage()
  return (
    <motion.div
      className="group relative p-6 sm:p-8 rounded-xl bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className={`w-12 h-12 rounded-lg ${gradient} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        {getIcon(titleKey)}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-white transition-colors">
        {t(titleKey)}
      </h3>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
        {t(descriptionKey)}
      </p>
      
      {/* Hover effect line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function BenefitsSection() {
  const { t } = useLanguage()
  
  const benefits = [
    {
      titleKey: 'benefits.vision.title',
      descriptionKey: 'benefits.vision.description',
      gradient: 'bg-gradient-to-br from-blue-400/20 to-blue-300/10'
    },
    {
      titleKey: 'benefits.market.title',
      descriptionKey: 'benefits.market.description',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-blue-400/10'
    },
    {
      titleKey: 'benefits.strategic.title',
      descriptionKey: 'benefits.strategic.description',
      gradient: 'bg-gradient-to-br from-blue-300/25 to-blue-200/15'
    },
    {
      titleKey: 'benefits.decision.title',
      descriptionKey: 'benefits.decision.description',
      gradient: 'bg-gradient-to-br from-blue-600/20 to-blue-500/10'
    },
    {
      titleKey: 'benefits.execution.title',
      descriptionKey: 'benefits.execution.description',
      gradient: 'bg-gradient-to-br from-slate-400/15 to-blue-400/10'
    },
    {
      titleKey: 'benefits.emotional.title',
      descriptionKey: 'benefits.emotional.description',
      gradient: 'bg-gradient-to-br from-blue-200/20 to-slate-400/15'
    }
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative bg-transparent">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium bg-white/5 backdrop-blur-sm">
              {t('benefits.badge')}
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight">
            {t('benefits.title')}
            <span className="gradient-text block mt-1 sm:mt-2">{t('benefits.title.highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            {t('benefits.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              titleKey={benefit.titleKey}
              descriptionKey={benefit.descriptionKey}
              index={index}
              gradient={benefit.gradient}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="group relative overflow-hidden bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{t('benefits.button')}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white to-gray-200"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}