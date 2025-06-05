'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
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
            <span className="px-3 py-2 rounded-full border border-blue-400/20 text-xs sm:text-sm font-medium bg-blue-950/20 backdrop-blur-sm">
              {t('footer.badge')}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight">
            {t('footer.title')}
            <span className="gradient-text block mt-1 sm:mt-2">{t('footer.title.highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            {t('footer.description')}
          </p>
          
          <div className="flex justify-center items-center px-2">
            <motion.button
              className="group relative overflow-hidden bg-white/20 text-white px-10 sm:px-16 py-4 sm:py-6 font-semibold rounded-lg transition-all duration-300 text-lg sm:text-xl opacity-60 cursor-not-allowed border border-white/30"
              disabled
            >
              <span className="relative z-10">Coming Soon</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Footer content */}
        <div className="border-t border-white/10 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 gradient-text">FounderIs</h3>
              <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                {t('footer.brand.description')}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.platform')}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[t('footer.features'), t('footer.pricing'), t('footer.stories'), t('footer.documentation')].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.company')}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[t('footer.about'), t('footer.careers'), t('footer.contact'), t('footer.privacy')].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/5">
            <motion.div
              className="mb-6 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-white/50 text-xs sm:text-sm">
                {t('footer.copyright')}
              </p>
            </motion.div>

            <motion.div
              className="flex space-x-4 sm:space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}