/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#4772fa",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light"],
  },
}