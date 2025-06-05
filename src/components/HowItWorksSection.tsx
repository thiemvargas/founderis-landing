'use client'

import { motion } from 'framer-motion'

interface StepProps {
  number: string
  title: string
  description: string
  details: string[]
  index: number
}

function Step({ number, title, description, details, index }: StepProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Connection line */}
      {index < 2 && (
        <motion.div
          className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-white/10 z-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
        />
      )}
      
      <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
        {/* Step number */}
        <motion.div
          className="relative w-16 h-16 bg-gradient-to-br from-white to-gray-300 text-black rounded-2xl flex items-center justify-center text-2xl font-bold mb-8 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">{number}</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-200 to-white rounded-2xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
            {description}
          </p>
          
          {/* Feature details */}
          <ul className="space-y-2">
            {details.map((detail, detailIndex) => (
              <motion.li
                key={detailIndex}
                className="flex items-center text-sm text-white/60 group-hover:text-white/70 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + detailIndex * 0.1 + 0.5 }}
              >
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 group-hover:bg-white/60 transition-colors"></div>
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Hover gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.div>
  )
}

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Thinking Partnership',
      description: 'Engage in interactive brainstorming sessions to clarify your vision, refine your value proposition, and develop strategic plans.',
      details: [
        'Interactive idea refinement',
        'Value proposition development',
        'Strategic planning assistance',
        'Communication and pitch support'
      ]
    },
    {
      number: '02',
      title: 'Validation Framework',
      description: 'Design and execute market validation experiments with AI-guided research to prove product-market fit.',
      details: [
        'Hypothesis testing design',
        'Market research guidance',
        'Customer feedback analysis',
        'Demand assessment tools'
      ]
    },
    {
      number: '03',
      title: 'Continuous Support',
      description: 'Access ongoing emotional support, productivity optimization, and strategic guidance throughout your founder journey.',
      details: [
        'Confidential emotional support',
        'Productivity and focus coaching',
        'Stress management techniques',
        'Motivational reinforcement'
      ]
    }
  ]

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">

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
              How It Works
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Your journey from
            <span className="gradient-text block mt-2">spark to success</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Three core pillars of support that provide comprehensive guidance, 
            validation insights, and emotional resilience for solo founders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-20">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              details={step.details}
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
            className="group relative overflow-hidden bg-white text-black px-10 py-5 font-semibold rounded-lg transition-all duration-300 text-lg"
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
          
          <p className="text-white/50 text-sm mt-4">
            Join solo founders who no longer journey alone
          </p>
        </motion.div>
      </div>
    </section>
  )
}