/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          normal: '#77D5AF',
          dark: '#6BC29F'
        },
        cornflower: {
          normal: '#5DA9E9'
        },
        dark: {
          light: '#303036',
          normal: '#2C2F33',
          dark: '#23272A'
        }
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem'
      }
    },
  },
  plugins: [],
}
