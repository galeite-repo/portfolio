/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        marigold: '#ffbe1a',
        ink: '#12171c',
        petrol: { DEFAULT: '#0d2b35', line: '#2a4b56', soft: '#bfd0d5' },
        paper: '#f5f7f8',
        muted: '#4b5761',
        rule: '#cfd6da',
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
