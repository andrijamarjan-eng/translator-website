'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { translations } from '../translations'

type Language = 'sr' | 'de' | 'en'

export default function Header({
  language,
  setLanguage,
}: {
  language: Language
  setLanguage: (lang: Language) => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  const t = translations[language]
  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.prices, href: '#prices' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-main/90 backdrop-blur-md border-b border-line z-50">
      <div className="container-wide flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#home" className="text-lg sm:text-xl font-bold text-accent">
          Translator.de-sr
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-body hover:text-accent transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher + CTA - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-2">
            {(['sr', 'de', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded text-sm font-semibold transition-colors duration-300 ${
                  language === lang
                    ? 'bg-accent text-white'
                    : 'bg-surface border border-line text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="tel:+381641531165"
            className="flex items-center gap-2 btn-primary !px-6 !py-2.5"
          >
            <Phone size={18} />
            {t.nav.callNow}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-title"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-surface border-t border-line"
        >
          <div className="container-wide py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-body hover:text-accent transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex gap-2 py-2">
              {(['sr', 'de', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang)
                    setIsOpen(false)
                  }}
                  className={`px-3 py-1 rounded text-sm font-semibold transition-colors duration-300 ${
                    language === lang
                      ? 'bg-accent text-white'
                      : 'bg-main border border-line text-muted hover:border-accent hover:text-accent'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="tel:+381641531165"
              className="block w-full text-center btn-primary mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="inline mr-2" size={18} />
              {t.nav.callNow}
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
