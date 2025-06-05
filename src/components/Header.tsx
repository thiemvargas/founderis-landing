'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Link from 'next/link'

export default function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: t('nav.features'), href: '/features' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Founder<span className="text-gray-400">Is</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.button
              className="bg-white text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.button.start')}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <motion.button
                className="w-full bg-white text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.button.start')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}