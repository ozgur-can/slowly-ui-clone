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
        '14': '3.5rem',
        '18': '4.5rem',
        '25': '6.25rem',
        '132': '33rem',
        '144': '36rem',
        '207': '51.75rem',
        '208': '52rem',
        '228': '57rem',
        '232': '58rem',
        '320':  '80rem',
        '368':  '92rem'
      },
      width: {
        '85p': '85%',
        '90p': '90%',
        '95p': '95%',
        '100w': '100vw'
      },
      maxWidth: {
        'xss': '16rem',
        'xss1': '18rem'
      },
      borderWidth: {
        '5': '5px'
      }
    },
  },
  plugins: [],
}
