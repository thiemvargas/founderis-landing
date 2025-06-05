'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import Header from '../components/Header'
import LanguageToggle from '../components/LanguageToggle'
import Link from 'next/link'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-3xl mx-auto text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl mb-8">🚀</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/80">
              Página no encontrada
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
              La página que buscas no existe o ha sido movida. Pero no te preocupes, ¡tu viaje emprendedor puede comenzar desde aquí!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volver al inicio
                </motion.button>
              </Link>
              
              <Link href="/features">
                <motion.button
                  className="border border-blue-400/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver características
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}