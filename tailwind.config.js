/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'myOrange': 'rgba(255, 127, 80, 0.82)',
        'myDark': '#0C466C',
      },
      fontFamily: {
        'inspiration': ['"Inspiration"', 'cursive'],
        'imprima': ['Imprima', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

