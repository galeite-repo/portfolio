/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1f4e79',            // azul do CV
        accent: 'var(--accent)',     // muda sobre fundo escuro, ver .on-dark em styles.scss
        ink: '#101820',
        night: { DEFAULT: '#0b1a2a', line: '#2c4560', soft: '#b9c9d9' },
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
