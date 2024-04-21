const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 10s linear infinite normal',
      },
      colors: {
        'dark-color':'rgb(52, 58, 64)',
        'navdark-color':'rgba(52, 58, 64, 0.75)',
        'darken-color':'rgba(58, 66, 72, 0.9)',
        'yellow-color': 'rgb(255, 244, 85)',
        'subyellow-color': 'rgba(255, 244, 85, 0.7)',
        'sub-color':'rgba(225, 232, 235, 1)',
        'secondary-color':'rgb(136, 146, 176)',
        'sub-color70':'rgba(225, 232, 235, 0.7)',

      },
      fontFamily: {
        Roboto: ["var(--font-roboto)", ...fontFamily.sans],
        Space: ["var(--font-spacemono)", ...fontFamily.sans],

      },
    },
  },
  plugins: [],
};
