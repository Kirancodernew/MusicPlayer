/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dynapuff: ["DynaPuff", "cursive"],
      },
      colors:{
        musicColor:'#6b0000'
      }
    },
  },
  plugins: [],
}