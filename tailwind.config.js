/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "forest-green": "#2C5F2D",
        "moss-green": "#97BC62FF"
      }
    },
    fontFamily : {
      raleway: "Raleway"
    }
  },
  plugins: [],
}

