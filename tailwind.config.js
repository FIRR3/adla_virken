import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files:   ["./public/*.html", "./javascript/*.js", "./src/*.css"],
    extract,
  },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    colors: {
      'primary':{
        "full": "#6fab4e", //rgba(111, 171, 78, 1)
        "transparent": "#7FB164", //"rgba(111, 171, 78, 0.9)"
      },
      'secondary': "#BEE7A8",

      'white': "#ffffff",
      'black': "#000000",
      'grey': "#909090",
      'grey-light': "#ebebeb", //"rgba(144, 144, 144, 0.15)"

      'transparent': "00FFFFFF",
    },
    fontFamily:{
      'manrope': 'Manrope, sans-serif',
      'noto-sans': 'Noto sans, sans-serif',
    },
    extend: {
      screens: {
        xs: '20rem'
      },
      fontSize: {
        'header': '3.5rem',
        'sub': '2.25rem',
        'paragraph': '1rem',
      },
      
    },
  },
  plugins: [
    fluid({
      checkSC144: false // default: true
    })
  ],
}

