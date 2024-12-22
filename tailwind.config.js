/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf7e4',
          100: '#f5ebc7',
          200: '#e9d89b',
          300: '#dcc46e',
          400: '#d0b041',
          500: '#c49c14',
          600: '#a47e10',
          700: '#85600c',
          800: '#654307',
          900: '#462c03',
          950: '#271602',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};