/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'word-green': '#538D4E',
        'word-yellow': '#B59F3B',
        'word-dark-grey': '#3A3A3C'
      },
      gridTemplateColumns: {
        'logo': 'repeat(6, 2rem)',
        'logo-small': 'repeat(6, 1.25rem)'
      }
    },
  },
  plugins: [],
}

