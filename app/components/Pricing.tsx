'use client'

import { motion } from 'framer-motion'
import { Check, Phone } from 'lucide-react'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function Pricing({ language }: { language: Language }) {
  const t = translations[language]

  const pricingPlans = [
    {
      name: t.pricing.standard,
      price: '2.000',
      unit: 'dinara per page',
      description: t.pricing.standard_desc,
      features: ['Accurate translation', 'Professional quality', '2-3 day turnaround', 'Unlimited revisions', 'Competitive rates'],
    },
    {
      name: t.pricing.certified,
      price: '3.000',
      unit: 'dinara per page',
      description: t.pricing.certified_desc,
      features: ['Official certification', 'Legal documents support', '24-48 hour turnaround', 'Stamped & notarized', 'Government approved'],
      highlighted: true,
    },
    {
      name: t.pricing.urgent,
      price: '4.000',
      unit: 'dinara per page',
      description: t.pricing.urgent_desc,
      features: ['Same-day delivery', 'Priority handling', 'Premium quality', '24/7 availability', 'Direct communication'],
    },
    {
      name: t.pricing.custom,
      price: 'Custom',
      unit: 'Negotiable',
      description: t.pricing.custom_desc,
      features: ['Volume discounts', 'Long-term contracts', 'Specialized terminology', 'Project management', 'Bulk pricing'],
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
    <section id="prices" className="section-padding bg-gray-50">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-gray-900 mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`rounded-xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-accent text-white border-2 border-accent shadow-2xl scale-105 md:scale-100'
                  : 'bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-lg'
              } transition-all duration-300`}
            >
              {/* Plan Name */}
              <h3 className={`text-xl font-semibold mb-2 ${
                plan.highlighted ? 'text-white' : 'text-gray-900'
              }`}>
                {plan.name}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-6 ${
                plan.highlighted ? 'text-blue-100' : 'text-gray-600'
              }`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className={`text-3xl sm:text-4xl font-bold ${
                  plan.highlighted ? 'text-white' : 'text-accent'
                }`}>
                  {plan.price}
                </div>
                <div className={`text-sm ${
                  plan.highlighted ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {plan.unit}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-blue-100' : 'text-accent'
                    }`} />
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-blue-100' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="tel:+381641234567"
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-white text-accent hover:bg-blue-50'
                    : 'bg-accent text-white hover:bg-blue-900'
                }`}
              >
                <Phone size={18} />
                {t.pricing.contact}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.pricing.note}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
