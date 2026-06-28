'use client'

import { motion } from 'framer-motion'
import { Phone, Stamp, Zap, GraduationCap, PenTool } from 'lucide-react'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function Pricing({ language }: { language: Language }) {
  const t = translations[language]

  const pricingPlans = [
    {
      icon: Stamp,
      name: t.pricing.documents,
      price: t.pricing.documents_price,
      unit: t.pricing.documents_unit,
      description: t.pricing.documents_desc,
      highlighted: true,
    },
    {
      icon: Zap,
      name: t.pricing.urgent,
      price: t.pricing.byArrangement,
      unit: '',
      description: t.pricing.urgent_desc,
    },
    {
      icon: GraduationCap,
      name: t.pricing.academic,
      price: t.pricing.byArrangement,
      unit: '',
      description: t.pricing.academic_desc,
    },
    {
      icon: PenTool,
      name: t.pricing.proofreading,
      price: t.pricing.byArrangement,
      unit: '',
      description: t.pricing.proofreading_desc,
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
    <section id="prices" className="relative overflow-hidden section-padding bg-main">
      <div className="glow-blob top-0 -left-32 w-[480px] h-[480px]" aria-hidden="true" />
      <div className="glow-blob bottom-0 -right-32 w-[400px] h-[400px]" aria-hidden="true" />

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-accent border-2 border-accent shadow-xl shadow-accent/20 scale-105 md:scale-100'
                    : 'bg-surface border border-line shadow-[0_4px_6px_-1px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-accent/40'
                }`}
              >
                <Icon className={`w-8 h-8 mb-4 ${plan.highlighted ? 'text-white' : 'text-accent'}`} />

                {/* Plan Name */}
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-title'
                }`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 flex-grow ${
                  plan.highlighted ? 'text-white/85' : 'text-muted'
                }`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-2xl sm:text-3xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-accent'
                  }`}>
                    {plan.price}
                  </div>
                  {plan.unit && (
                    <div className={`text-sm ${
                      plan.highlighted ? 'text-white/75' : 'text-muted'
                    }`}>
                      {plan.unit}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href="tel:+381641531165"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-white text-accent hover:bg-main'
                      : 'bg-accent text-white hover:bg-accent-hover'
                  }`}
                >
                  <Phone size={18} />
                  {t.pricing.contact}
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-muted max-w-2xl mx-auto">
            {t.pricing.note}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
