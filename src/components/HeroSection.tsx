'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function HeroSection() {
  const { language, setLanguage, t } = useLanguage()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const words = [
    t('hero.words.innovate'),
    t('hero.words.create'),
    t('hero.words.validate'),
    t('hero.words.launch'),
    t('hero.words.scale')
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-transparent pt-16" style={{zIndex: 10}}>

      <div className="max-w-5xl mx-auto text-center relative z-30 px-2">
        <motion.div
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-2 rounded-full border border-blue-400/20 text-xs sm:text-sm font-medium bg-blue-950/20 backdrop-blur-sm">
            {t('hero.badge')}
          </span>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">{t('hero.title.part1')}<span className="text-gray-400">{t('hero.title.part2')}</span></span>{' '}
          <span className="block sm:inline relative inline-block" style={{ perspective: "1000px" }}>
            <motion.span
              key={currentWordIndex}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              className="inline-block metallic-text"
              style={{ 
                transformOrigin: "center center",
                transformStyle: "preserve-3d"
              }}
            >
              {words[currentWordIndex]}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.description')}
          <span className="text-white font-medium">{t('hero.description.highlight')}</span>
          {t('hero.description.end')}
        </motion.p>

        <motion.div 
          className="flex justify-center items-center mb-12 sm:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative overflow-hidden bg-white/20 text-white px-8 sm:px-12 py-4 sm:py-5 font-semibold rounded-lg transition-all duration-300 text-lg opacity-60 cursor-not-allowed border border-white/30"
            disabled
          >
            <span className="relative z-10">Coming Soon</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "50+", label: t('hero.stats.features') },
            { number: "93%", label: t('hero.stats.success') },
            { number: "24/7", label: t('hero.stats.support') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}