import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#D97706',         // Primarna akcentna boja (zlatna)
        'accent-hover': '#B45309', // Hover stanje za zlatne elemente
        main: '#F0F0EC,            // Glavna pozadina stranice
        surface: '#FCFBF8',        // Pozadina kartica / sekcija
        title: '#18181B',          // Glavni naslovi (H1, H2, H3)
        body: '#27272A',           // Tekst u paragrafima
        muted: '#52525B',          // Manje vazni opisi i podnaslovi
        line: '#E4E4E7',           // Suptilne linije i ivice kartica
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
