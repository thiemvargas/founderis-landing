'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'

export default function AboutPage() {
  const { t } = useLanguage()

  const team = [
    {
      name: 'Juan Pablo Vargas',
      role: 'Founder & CEO',
      bio: 'Serial entrepreneur and AI enthusiast building the future of startup support. Passionate about democratizing access to world-class entrepreneurial guidance.',
      image: '👨‍💼'
    }
  ]

  const values = [
    {
      titleKey: 'about.values.innovation.title',
      descriptionKey: 'about.values.innovation.description',
      icon: '💡'
    },
    {
      titleKey: 'about.values.transparency.title',
      descriptionKey: 'about.values.transparency.description',
      icon: '🔍'
    },
    {
      titleKey: 'about.values.support.title',
      descriptionKey: 'about.values.support.description',
      icon: '🤝'
    },
    {
      titleKey: 'about.values.excellence.title',
      descriptionKey: 'about.values.excellence.description',
      icon: '⭐'
    }
  ]

  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-blue-400/20 text-sm font-medium bg-blue-950/20 backdrop-blur-sm">
              {t('about.badge')}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('about.title')}
            <span className="gradient-text block mt-2">{t('about.title.highlight')}</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('about.description')}
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                {t('about.mission.description')}
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                {t('about.mission.description2')}
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-8xl mb-6">🚀</div>
              <div className="bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('about.stats.title')}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">1000+</div>
                    <div className="text-white/60">{t('about.stats.founders')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">50+</div>
                    <div className="text-white/60">{t('about.stats.features')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">24/7</div>
                    <div className="text-white/60">{t('about.stats.support')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">93%</div>
                    <div className="text-white/60">{t('about.stats.success')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t('about.values.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {t(value.titleKey)}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {t(value.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t('about.team.description')}
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="max-w-sm">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-white/70 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}