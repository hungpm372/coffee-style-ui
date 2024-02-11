/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        "coffee": {
          50: "#e8d6d0",
          200: "#C89F94",
          400: '#a25f4b',
          600: "#744838",
        }
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },
      backgroundImage: {
        'slider-bg': "url('./assets/slide-bg.jpg')"
      }
    },
  },
  plugins: [],
}