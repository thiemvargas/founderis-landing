'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const words = ['Innovate', 'Create', 'Validate', 'Launch', 'Scale']

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-transparent">

      <div className="max-w-5xl mx-auto text-center relative z-20">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-sm font-medium bg-white/5 backdrop-blur-sm">
            AI-Powered Startup Intelligence
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">Founder<span className="text-gray-400">Is</span></span>{' '}
          <span className="block md:inline relative inline-block" style={{ perspective: "1000px" }}>
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
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your AI-powered thinking partner that guides you from 
          <span className="text-white font-medium"> initial spark to market success</span>
          — offering strategic insights, validation frameworks, and emotional support every step of the way.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative overflow-hidden bg-white text-black px-8 py-4 font-semibold rounded-lg min-w-[200px] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Building</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white to-gray-200"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button
            className="group border border-white/30 text-white px-8 py-4 font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 min-w-[200px] backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "10K+", label: "Ideas Refined" },
            { number: "85%", label: "Market Validation Rate" },
            { number: "24/7", label: "Strategic Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}