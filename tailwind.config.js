/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        dark : '#101415',
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

