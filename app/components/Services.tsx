'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  ArrowLeftRight,
  GraduationCap,
  BookMarked,
  FileText,
  Briefcase,
  PenTool,
} from 'lucide-react'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function Services({ language }: { language: Language }) {
  const t = translations[language]

  const services = [
    { icon: Shield, title: t.services.certified, description: t.services.certified_desc },
    { icon: ArrowLeftRight, title: t.services.de_sr, description: t.services.de_sr_desc },
    { icon: ArrowLeftRight, title: t.services.sr_de, description: t.services.sr_de_desc },
    { icon: GraduationCap, title: t.services.academic, description: t.services.academic_desc },
    { icon: BookMarked, title: t.services.books, description: t.services.books_desc },
    { icon: FileText, title: t.services.personal, description: t.services.personal_desc },
    { icon: Briefcase, title: t.services.business, description: t.services.business_desc },
    { icon: PenTool, title: t.services.other, description: t.services.other_desc },
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
    <section id="services" className="section-padding bg-navy">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="mb-4">{t.services.title}</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            {t.services.subtitle}
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
                <h3 className="text-lg font-semibold text-lightest mb-2">
                  {service.title}
                </h3>
                <p className="text-slate leading-relaxed">
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
