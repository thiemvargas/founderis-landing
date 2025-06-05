'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="flex bg-black/20 backdrop-blur-md rounded-lg p-1 border border-white/10 shadow-lg">
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300 ${
            language === 'es' 
              ? 'bg-white/10 text-white shadow-sm' 
              : 'text-white/60 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300 ${
            language === 'en' 
              ? 'bg-white/10 text-white shadow-sm' 
              : 'text-white/60 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  )
}