/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      ibm:['IBM Plex Mono','monospace'],
      osw:['Oswald','sans-serif'],
      sort:['Short Stack','cursive']
    }
  },
  plugins: [require("daisyui")],
}
