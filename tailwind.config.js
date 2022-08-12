/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kdam: ['Kdam Thmor Pro', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
      }, //end of fontFamily
    },
  },
  plugins: [],
}