'use client'

import { motion } from 'framer-motion'

interface BenefitCardProps {
  title: string
  description: string
  index: number
  gradient: string
}

function BenefitCard({ title, description, index, gradient }: BenefitCardProps) {
  return (
    <motion.div
      className="group relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className={`w-12 h-12 rounded-lg ${gradient} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <div className="w-6 h-6 bg-white/90 rounded"></div>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
        {description}
      </p>
      
      {/* Hover effect line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/50 to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced algorithms analyze market trends, competitor landscapes, and opportunity gaps to guide your strategic decisions.',
      gradient: 'bg-gradient-to-br from-white/20 to-white/10'
    },
    {
      title: 'Rapid Validation',
      description: 'Test and validate your business concepts in days, not months, with our intelligent validation framework.',
      gradient: 'bg-gradient-to-br from-gray-400/20 to-gray-500/10'
    },
    {
      title: 'Smart Launch Strategy',
      description: 'Orchestrate your go-to-market strategy with precision-guided recommendations and real-time adjustments.',
      gradient: 'bg-gradient-to-br from-white/25 to-gray-300/15'
    },
    {
      title: 'Market Intelligence',
      description: 'Deep dive into industry dynamics, consumer behavior patterns, and emerging opportunities in your sector.',
      gradient: 'bg-gradient-to-br from-gray-200/20 to-white/10'
    },
    {
      title: 'Ideation Engine',
      description: 'Amplify your creative potential with AI-generated insights and innovative solution pathways.',
      gradient: 'bg-gradient-to-br from-white/15 to-gray-400/10'
    },
    {
      title: 'Precision Planning',
      description: 'Data-driven roadmaps and milestone tracking ensure your startup stays on the optimal growth trajectory.',
      gradient: 'bg-gradient-to-br from-gray-300/20 to-white/15'
    }
  ]

  return (
    <section className="py-32 px-6 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
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
              Why Choose FounderIs
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Everything you need to
            <span className="gradient-text block mt-2">build the future</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            FounderIs combines cutting-edge artificial intelligence with proven entrepreneurial methodologies 
            to accelerate your journey from concept to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              index={index}
              gradient={benefit.gradient}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="group relative overflow-hidden bg-white text-black px-8 py-4 font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Experience the Power</span>
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