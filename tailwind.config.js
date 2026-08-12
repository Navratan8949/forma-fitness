/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F3EE',
        beige: '#E9E5DC',
        charcoal: '#1D1D1B',
        ink: '#111111',
        lime: {
          DEFAULT: '#B7E635',
          dark: '#A6D420',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.3em',
      },
      maxWidth: {
        editorial: '36rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
