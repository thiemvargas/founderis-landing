'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface StepProps {
  number: string
  titleKey: string
  descriptionKey: string
  detailKeys: string[]
  index: number
}

function Step({ number, titleKey, descriptionKey, detailKeys, index }: StepProps) {
  const { t } = useLanguage()
  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Elegant connection elements */}
      {index < 2 && (
        <div className="hidden xl:block absolute top-20 -right-4 z-10">
          {/* Main connecting line */}
          <motion.div
            className="w-8 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-400/40 to-blue-300/10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
          />
          {/* Animated dots */}
          <motion.div
            className="absolute top-1/2 left-2 w-1 h-1 bg-blue-400/60 rounded-full transform -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-2 w-1 h-1 bg-blue-300/40 rounded-full transform -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: index * 0.5 + 0.5,
              ease: "easeInOut"
            }}
          />
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent blur-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.3 + 1 }}
          />
        </div>
      )}
      
      <div className="group relative bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 sm:p-8 hover:border-blue-400/30 transition-all duration-500 hover:bg-blue-900/20 h-full flex flex-col">
        {/* Step number */}
        <motion.div
          className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center text-lg sm:text-2xl font-bold mb-6 sm:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">{number}</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="text-center flex-grow flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-white transition-colors">
            {t(titleKey)}
          </h3>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6 group-hover:text-white/80 transition-colors flex-grow">
            {t(descriptionKey)}
          </p>
          
          {/* Feature details */}
          <ul className="space-y-3 mt-auto">
            {detailKeys.map((detailKey, detailIndex) => (
              <motion.li
                key={detailIndex}
                className="flex items-start text-sm text-white/60 group-hover:text-white/70 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + detailIndex * 0.1 + 0.5 }}
              >
                <div className="w-1.5 h-1.5 bg-blue-400/40 rounded-full mr-3 mt-1.5 group-hover:bg-blue-300/60 transition-colors flex-shrink-0"></div>
                <span>{t(detailKey)}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Hover gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.div>
  )
}

export default function HowItWorksSection() {
  const { t } = useLanguage()
  
  const steps = [
    {
      number: '01',
      titleKey: 'howworks.step1.title',
      descriptionKey: 'howworks.step1.description',
      detailKeys: [
        'howworks.step1.detail1',
        'howworks.step1.detail2',
        'howworks.step1.detail3',
        'howworks.step1.detail4'
      ]
    },
    {
      number: '02',
      titleKey: 'howworks.step2.title',
      descriptionKey: 'howworks.step2.description',
      detailKeys: [
        'howworks.step2.detail1',
        'howworks.step2.detail2',
        'howworks.step2.detail3',
        'howworks.step2.detail4'
      ]
    },
    {
      number: '03',
      titleKey: 'howworks.step3.title',
      descriptionKey: 'howworks.step3.description',
      detailKeys: [
        'howworks.step3.detail1',
        'howworks.step3.detail2',
        'howworks.step3.detail3',
        'howworks.step3.detail4'
      ]
    }
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-transparent">

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
              {t('howworks.badge')}
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight">
            {t('howworks.title')}
            <span className="gradient-text block mt-1 sm:mt-2">{t('howworks.title.highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            {t('howworks.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 items-stretch">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              titleKey={step.titleKey}
              descriptionKey={step.descriptionKey}
              detailKeys={step.detailKeys}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative overflow-hidden bg-white text-black px-6 sm:px-10 py-3 sm:py-5 font-semibold rounded-lg transition-all duration-300 text-base sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{t('howworks.button')}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white to-gray-200"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <p className="text-white/50 text-xs sm:text-sm mt-3 sm:mt-4">
            {t('howworks.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}