'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Prices', href: '#prices' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
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
              className="text-gray-700 hover:text-accent transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <a
          href="tel:+381641234567"
          className="hidden md:flex items-center gap-2 btn-primary"
        >
          <Phone size={20} />
          Call Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
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
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container-wide py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-accent transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+381641234567"
              className="block w-full text-center btn-primary mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="inline mr-2" size={18} />
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
