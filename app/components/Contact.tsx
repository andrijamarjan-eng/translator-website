'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function Contact({ language }: { language: Language }) {
  const t = translations[language]

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+381 64 153 1165',
      href: 'tel:+381641531165',
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'zorana.kozomaric@gmail.com',
      href: 'mailto:zorana.kozomaric@gmail.com',
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: `${t.contact.mondayFriday}: 8:00 AM - 6:00 PM\n${t.contact.saturday}: 10:00 AM - 2:00 PM`,
      href: null,
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: 'Knez Miletina 32, Beograd',
      href: 'https://maps.google.com/?q=Knez+Miletina+32+Beograd+Serbia',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-navy-light">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="mb-4">{t.contact.title}</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((info) => {
                const Icon = info.icon
                const content = (
                  <div className="flex gap-6">
                    <div>
                      <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-lightest mb-2">
                        {info.label}
                      </h3>
                      <p className="text-slate whitespace-pre-wrap">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )

                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="tel:+381641531165"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block btn-primary mt-10"
            >
              <Phone className="inline mr-2" size={20} />
              {t.contact.callNow}
            </motion.a>
          </motion.div>

          {/* Google Maps Iframe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.5!2d20.4!3d44.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a8b1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sKnez%20Miletina%2032%2C%20Beograd!5e0!3m2!1sen!2s!4v1234567890"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
