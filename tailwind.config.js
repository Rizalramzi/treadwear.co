/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        dark : '#131314',
        text_dark : '#1E1F20'
      },
      screens: {
        'xl': '1440px',
        'xxl' : '1920px'
      },
    },
  },
  plugins: [],
}

