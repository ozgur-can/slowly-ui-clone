/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxHeight: {
        '144': '36rem',
        '208': '52rem'
      },
      minHeight: {
        '208': '52rem'
      },
      height: {
        '132': '33rem',
        '144': '36rem',
        '208': '52rem',
        '232': '58rem',
        '320':  '80rem',
        '368':  '92rem'
      }
    },
  },
  plugins: [],
}
