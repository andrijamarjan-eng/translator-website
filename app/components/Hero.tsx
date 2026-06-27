'use client'

import { Phone, Mail, Clock, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const infoCards = [
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+381 64 123 4567',
      href: 'tel:+381641234567',
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: 'zorana.kozomaric@gmail.com',
      href: 'mailto:zorana.kozomaric@gmail.com',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM',
      href: null,
    },
    {
      icon: DollarSign,
      label: 'Prices',
      value: 'From €0.05 per word',
      href: '#prices',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="container-wide">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-gray-900 mb-4 leading-tight">
            Professional German–Serbian<br />Translation Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expert translations for documents, legal texts, business correspondence, and more. Fast turnaround, certified quality, competitive prices.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {infoCards.map((card) => {
            const Icon = card.icon
            const content = (
              <motion.div
                variants={itemVariants}
                className="info-card h-full flex flex-col items-center text-center hover:border-accent transition-colors duration-300"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <p className="text-sm text-gray-600 mb-2">{card.label}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">
                  {card.value}
                </p>
              </motion.div>
            )

            return card.href ? (
              <a key={card.label} href={card.href} className="block">
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            )
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <a href="tel:+381641234567" className="btn-primary text-center">
            <Phone className="inline mr-2" size={20} />
            Call Now
          </a>
          <a href="mailto:zorana.kozomaric@gmail.com" className="btn-secondary text-center">
            <Mail className="inline mr-2" size={20} />
            Send Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
