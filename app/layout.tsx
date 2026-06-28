import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Professional German-Serbian Translator | Expert Translation Services',
  description: 'Professional translation services from German to Serbian and Serbian to German. Certified translations for legal, business, and personal documents. Fast turnaround, confidential, competitive prices.',
  keywords: [
    'German translator',
    'German to Serbian translation',
    'Serbian to German translation',
    'Certified translator',
    'Professional translator',
    'Translation services',
  ],
  authors: [{ name: 'Professional Translator' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'Professional German-Serbian Translation Services',
    description: 'Expert certified translations from German to Serbian and vice versa',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="preload" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-main text-body font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
