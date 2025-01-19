/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./javascript/*.js", "./src/*.css"],
  theme: {
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
    },
    fontFamily:{
      'header': 'Manrope, sans-serif',
      'content': 'Noto sans, sans-serif',
    },
    extend: {
    },
  },
  plugins: [],
}

