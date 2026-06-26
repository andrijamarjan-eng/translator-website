'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeftRight,
  Shield,
  FileText,
  Briefcase,
  Users,
  Zap,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: ArrowLeftRight,
      title: 'German → Serbian',
      description: 'Professional translation from German to Serbian with attention to detail and cultural nuances.',
    },
    {
      icon: ArrowLeftRight,
      title: 'Serbian → German',
      description: 'Expert translation from Serbian to German for business, legal, and personal documents.',
    },
    {
      icon: Shield,
      title: 'Certified Translations',
      description: 'Official certified translations for government, immigration, and legal purposes.',
    },
    {
      icon: FileText,
      title: 'Legal Documents',
      description: 'Contracts, agreements, certificates, permits, and other legal documentation.',
    },
    {
      icon: Users,
      title: 'Personal Documents',
      description: 'Resumes, cover letters, birth certificates, and personal correspondence.',
    },
    {
      icon: Briefcase,
      title: 'Business Documents',
      description: 'Marketing materials, technical documentation, emails, and business correspondence.',
    },
    {
      icon: Zap,
      title: 'Technical Translations',
      description: 'Software, manuals, technical specifications, and specialized documentation.',
    },
    {
      icon: FileText,
      title: 'Other Services',
      description: 'Proofreading, editing, localization, and other translation-related services.',
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
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive translation solutions tailored to your specific needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="info-card group"
              >
                <Icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
