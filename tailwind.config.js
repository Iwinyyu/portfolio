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
        'yellow-color': 'rgb(255, 193, 7)',
        'sub-color':'rgba(225, 232, 235, 1)',
        'sub-color85':'rgba(225, 232, 235, 0.85)',
        'sub-color70':'rgba(225, 232, 235, 0.7)',

      },
    },
  },
  plugins: [],
};
