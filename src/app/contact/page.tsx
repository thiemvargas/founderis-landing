'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      titleKey: 'contact.info.email.title',
      valueKey: 'contact.info.email.value',
      icon: '📧'
    },
    {
      titleKey: 'contact.info.support.title',
      valueKey: 'contact.info.support.value',
      icon: '💬'
    },
    {
      titleKey: 'contact.info.response.title',
      valueKey: 'contact.info.response.value',
      icon: '⏱️'
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
              {t('contact.badge')}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('contact.title')}
            <span className="gradient-text block mt-2">{t('contact.title.highlight')}</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('contact.description')}
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center bg-blue-950/20 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {t(info.titleKey)}
                </h3>
                <p className="text-white/70">
                  {t(info.valueKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">
                {t('contact.form.title')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/70 mb-2 font-medium">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/20 border border-blue-500/20 rounded-lg text-white placeholder-white/40 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-2 font-medium">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/20 border border-blue-500/20 rounded-lg text-white placeholder-white/40 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-2 font-medium">
                    {t('contact.form.subject')}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/20 border border-blue-500/20 rounded-lg text-white focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">{t('contact.form.subject.placeholder')}</option>
                    <option value="general">{t('contact.form.subject.general')}</option>
                    <option value="support">{t('contact.form.subject.support')}</option>
                    <option value="partnership">{t('contact.form.subject.partnership')}</option>
                    <option value="feedback">{t('contact.form.subject.feedback')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 mb-2 font-medium">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-blue-950/20 border border-blue-500/20 rounded-lg text-white placeholder-white/40 focus:border-blue-400/50 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('contact.form.submit')}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">
                {t('contact.info.title')}
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {t('contact.info.help.title')}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {t('contact.info.help.description')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {t('contact.info.community.title')}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    {t('contact.info.community.description')}
                  </p>
                  <motion.button
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {t('contact.info.community.button')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {t('contact.info.office.title')}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {t('contact.info.office.address')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}