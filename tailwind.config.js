/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
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
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out'
      },
      backgroundImage: {
        'slider-bg': "url('./assets/slide-bg.jpg')"
      }
    },
  },
  plugins: [],
}