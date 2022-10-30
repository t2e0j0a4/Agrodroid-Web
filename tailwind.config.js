/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/*"],
  theme: {
    extend: {
      fontFamily: {
        leaguespartan: ["League Spartan", "serif"],
        nunitosans: ["Nunito Sans" , "serif"],
      },
    },
  },
  plugins: [],
}
