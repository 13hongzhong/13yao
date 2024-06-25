/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9", 
        red: "#D7D7D7",
        pink: "#E3C5BC",
        footer: "#EFCDC2",
        beige: "#d8b0a4",
        blue: "#b3d8ea",
        black: "#8a8b99",
        darkbeige: "#c99585",
        pressbeige: "#c38976",
        darkpink: "#d7d7d7",
        lightpink: "#ffd6c8",
      }
    },
  },
  plugins: [],
}

