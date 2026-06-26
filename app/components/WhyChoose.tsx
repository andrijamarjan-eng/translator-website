'use client'

import { motion } from 'framer-motion'
import {
  Star,
  Zap,
  MessageSquare,
  CheckCircle,
  Lock,
  DollarSign,
} from 'lucide-react'

export default function WhyChoose() {
  const benefits = [
    {
      icon: Star,
      title: 'Years of Experience',
      description: 'Over 15+ years of professional translation experience in German-Serbian language pair.',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick translation delivery without compromising on quality. Urgent orders welcome.',
    },
    {
      icon: MessageSquare,
      title: 'Reliable Communication',
      description: 'Always available to discuss your project requirements and answer your questions.',
    },
    {
      icon: CheckCircle,
      title: 'Professional Quality',
      description: 'Native speaker quality with meticulous attention to cultural context and terminology.',
    },
    {
      icon: Lock,
      title: 'Confidentiality',
      description: 'Your documents are completely confidential. We respect privacy and data security.',
    },
    {
      icon: DollarSign,
      title: 'Competitive Prices',
      description: 'Transparent pricing with no hidden fees. Fair rates for professional quality work.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-gray-900 mb-4">Why Choose Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key advantages that make me your trusted translation partner
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
