'use client'

import { motion } from 'framer-motion'

export default function Footer() {
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
              Ready to Transform?
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight">
            Ready to transform your
            <span className="gradient-text block mt-1 sm:mt-2">founder journey?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Join solo founders who no longer navigate uncertainty alone. Get the strategic thinking partner, 
            validation framework, and emotional support you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2">
            <motion.button
              className="group relative overflow-hidden bg-white text-black px-6 sm:px-10 py-3 sm:py-5 font-semibold rounded-lg transition-all duration-300 text-base sm:text-lg w-full sm:w-auto sm:min-w-[220px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Journey</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white to-gray-200"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              className="group border border-blue-400/30 text-white px-6 sm:px-10 py-3 sm:py-5 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg w-full sm:w-auto sm:min-w-[220px]"
              whileHover={{ scale: 1.05, borderColor: "rgba(96, 165, 250, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
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
                Your AI-powered thinking partner providing strategic guidance, validation frameworks, and emotional support for solo founders.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Platform</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Features', 'Pricing', 'Success Stories', 'Documentation'].map((item, index) => (
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
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['About Us', 'Careers', 'Contact', 'Privacy'].map((item, index) => (
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
                © 2024 FounderIs. All rights reserved.
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
                { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
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