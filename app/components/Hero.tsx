'use client'

import { Phone, Mail, Clock, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function Hero({ language }: { language: Language }) {
  const t = translations[language]

  const infoCards = [
    {
      icon: Phone,
      label: t.hero.phone,
      value: '+381 64 153 1165',
      href: 'tel:+381641531165',
    },
    {
      icon: Mail,
      label: t.hero.email,
      value: 'zorana.kozomaric@gmail.com',
      href: 'mailto:zorana.kozomaric@gmail.com',
    },
    {
      icon: Clock,
      label: t.hero.hours,
      value: 'Mon-Fri: 9:00 AM - 6:00 PM',
      href: null,
    },
    {
      icon: DollarSign,
      label: t.hero.prices,
      value: '2.000 din / strana',
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
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 bg-main">
      {/* Zlatni "glow" prelazi - dekorativni, ne smetaju citljivosti */}
      <div className="glow-blob -top-40 -right-40 w-[520px] h-[520px]" aria-hidden="true" />
      <div className="glow-blob top-1/3 -left-40 w-[420px] h-[420px]" aria-hidden="true" />

      <div className="container-wide relative">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="mb-3 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-accent mb-4">
            {t.hero.name}
          </p>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
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
                className="info-card h-full flex flex-col items-center text-center"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <p className="text-sm text-muted mb-2">{card.label}</p>
                <p className="text-base sm:text-lg font-semibold text-title break-all">
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
          <a href="tel:+381641531165" className="btn-primary text-center">
            <Phone className="inline mr-2" size={20} />
            {t.hero.callNow}
          </a>
          <a href="mailto:zorana.kozomaric@gmail.com" className="btn-secondary text-center">
            <Mail className="inline mr-2" size={20} />
            {t.hero.sendEmail}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
