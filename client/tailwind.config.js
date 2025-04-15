/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          'wicked-green': '#1A9641',
          'wicked-pink': '#FF69B4',
          'wicked-dark': '#0A3D1A',
          'wicked-light': '#E9F7EF'
        },
        animation: {
          'float': 'float 5s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        }
      },
    },
    plugins: [],
  }