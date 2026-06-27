'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

type Language = 'sr' | 'de' | 'en'

export default function Home() {
  const [language, setLanguage] = useState<Language>('sr')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved) setLanguage(saved)
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <main className="min-h-screen bg-navy">
      <Header language={language} setLanguage={handleLanguageChange} />
      <Hero language={language} />
      <Services language={language} />
      <WhyChoose language={language} />
      <Pricing language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  )
}
