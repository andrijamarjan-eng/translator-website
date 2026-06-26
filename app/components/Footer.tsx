'use client'

import { Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 pb-12 border-b border-gray-700"
        >
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+381641234567"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                +381 64 123 4567
              </a>
              <a
                href="mailto:info@translator.rs"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                info@translator.rs
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  Monday - Friday<br />
                  8:00 AM - 6:00 PM
                </span>
              </p>
              <p className="text-sm text-gray-400 ml-9">
                Saturday 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#prices" className="block text-gray-300 hover:text-white transition-colors">
                Prices
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
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
          className="text-center text-gray-400 text-sm"
        >
          <p>
            © {currentYear} Professional Translator. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            German - Serbian Translation Services
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
