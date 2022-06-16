/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxHeight: {
        '144': '36rem'
      },
      height: {
        '144': '36rem'
      }
    },
  },
  plugins: [],
}
