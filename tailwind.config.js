/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bg': "url('./files/bg.jpg')",
      }
    },
  },
  plugins: [],
}
