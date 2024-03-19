const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        "dark":"#1D1A43",
        "dark-secondary": "#211E48",
  
      },
    },
    fontFamily: {
      "neue":"Helvetica Neue,Helvetica,Arial,sans-serif"
    }
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('all-center', ['justify-center', 'items-center'])
    })
  ],
  darkMode: "class"
}

