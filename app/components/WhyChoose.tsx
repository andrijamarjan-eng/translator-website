'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, GraduationCap, Plane, BookOpen, Lock } from 'lucide-react'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function WhyChoose({ language }: { language: Language }) {
  const t = translations[language]

  const benefits = [
    { icon: Award, title: t.whyChoose.experience, description: t.whyChoose.experience_desc },
    { icon: ShieldCheck, title: t.whyChoose.certified, description: t.whyChoose.certified_desc },
    { icon: GraduationCap, title: t.whyChoose.academic, description: t.whyChoose.academic_desc },
    { icon: Plane, title: t.whyChoose.scholarships, description: t.whyChoose.scholarships_desc },
    { icon: BookOpen, title: t.whyChoose.books, description: t.whyChoose.books_desc },
    { icon: Lock, title: t.whyChoose.confidentiality, description: t.whyChoose.confidentiality_desc },
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
    <section className="relative overflow-hidden section-padding bg-surface">
      <div className="glow-blob -top-20 -right-20 w-[400px] h-[400px]" aria-hidden="true" />

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="mb-4">{t.whyChoose.title}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t.whyChoose.subtitle}
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
                  <h3 className="text-lg font-semibold text-title mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-body leading-relaxed">
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
