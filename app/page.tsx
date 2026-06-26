import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
