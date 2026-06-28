'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, GraduationCap, BookOpen } from 'lucide-react'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function About({ language }: { language: Language }) {
  const t = translations[language]

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
  ]

  const authors = [
    'Zubin Mehta',
    'Ulrich Beck',
    'Rüdiger Safranski',
    'Katarina Šturcenegger',
    'Feliks Kanic',
  ]

  return (
    <section id="about" className="section-padding bg-navy-light">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="mb-4">{t.about.title}</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold text-accent">
              <ShieldCheck size={16} />
              {t.about.badge}
            </div>

            <p className="text-slate leading-relaxed">{t.about.bio1}</p>
            <p className="text-slate leading-relaxed">{t.about.bio2}</p>
            <p className="text-slate leading-relaxed">{t.about.bio3}</p>

            {/* Translated authors */}
            <div className="pt-4">
              <h3 className="text-sm uppercase tracking-wide text-slate mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-accent" />
                {t.about.booksTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {authors.map((author) => (
                  <span
                    key={author}
                    className="text-sm text-lightest bg-white/[0.04] border border-white/10 rounded-full px-3 py-1"
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6"
          >
            <GraduationCap className="w-10 h-10 text-accent" />
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                <div className="text-3xl sm:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-slate mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
