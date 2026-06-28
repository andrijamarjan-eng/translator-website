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
    <section id="prices" className="section-padding bg-navy">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
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
                className={`rounded-xl p-8 flex flex-col ${
                  plan.highlighted
                    ? 'bg-accent text-navy border-2 border-accent shadow-2xl shadow-accent/20 scale-105 md:scale-100'
                    : 'bg-white/[0.03] border border-white/10 text-lightest hover:border-accent/40 hover:shadow-lg'
                } transition-all duration-300`}
              >
                <Icon className={`w-8 h-8 mb-4 ${plan.highlighted ? 'text-navy' : 'text-accent'}`} />

                {/* Plan Name */}
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.highlighted ? 'text-navy' : 'text-lightest'
                }`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 flex-grow ${
                  plan.highlighted ? 'text-navy/80' : 'text-slate'
                }`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-2xl sm:text-3xl font-bold ${
                    plan.highlighted ? 'text-navy' : 'text-accent'
                  }`}>
                    {plan.price}
                  </div>
                  {plan.unit && (
                    <div className={`text-sm ${
                      plan.highlighted ? 'text-navy/70' : 'text-slate'
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
                      ? 'bg-navy text-accent hover:bg-navy-light'
                      : 'bg-accent text-navy hover:opacity-90'
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
          <p className="text-slate max-w-2xl mx-auto">
            {t.pricing.note}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
