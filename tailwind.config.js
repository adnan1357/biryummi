/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#F5F1E9',
          gold: '#C6A45C',
          charcoal: '#2C2C2C',
          sage: '#8A8B7A',
          sand: '#E8E1D5'
        }
      },
      fontFamily: {
        serif: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        slideUp: 'slideUp 0.4s ease-out',
      },
    },
  },
  plugins: [],
};