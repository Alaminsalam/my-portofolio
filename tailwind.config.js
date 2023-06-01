/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      container : {
        center : true,
        padding : '16px'
      },
      colors : {
        primary : '#4f46e5',
        secondary : '#262626',
        dark: '#0f172a',
      },
      screems: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: []
}
