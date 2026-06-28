'use client'

import { Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function Footer({ language }: { language: Language }) {
  const t = translations[language]

  return (
    <footer className="bg-navy text-lightest py-12 sm:py-16 border-t border-white/10">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 pb-12 border-b border-white/10"
        >
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <a
                href="tel:+381641531165"
                className="flex items-center gap-3 text-slate hover:text-accent transition-colors"
              >
                <Phone size={18} />
                +381 64 153 1165
              </a>
              <a
                href="mailto:zorana.kozomaric@gmail.com"
                className="flex items-center gap-3 text-slate hover:text-accent transition-colors"
              >
                <Mail size={18} />
                zorana.kozomaric@gmail.com
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.hours}</h3>
            <div className="space-y-2 text-slate">
              <p className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  {t.contact.mondayFriday}<br />
                  8:00 AM - 6:00 PM
                </span>
              </p>
              <p className="text-sm text-slate/70 ml-9">
                {t.contact.saturday} 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-slate hover:text-accent transition-colors">
                {t.footer.home}
              </a>
              <a href="#about" className="block text-slate hover:text-accent transition-colors">
                {t.footer.about}
              </a>
              <a href="#services" className="block text-slate hover:text-accent transition-colors">
                {t.footer.services}
              </a>
              <a href="#prices" className="block text-slate hover:text-accent transition-colors">
                {t.footer.prices}
              </a>
              <a href="#contact" className="block text-slate hover:text-accent transition-colors">
                {t.footer.contact_link}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate text-sm"
        >
          <p>
            {t.footer.copyright}
          </p>
          <p className="mt-2 text-xs">
            {t.footer.description}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
