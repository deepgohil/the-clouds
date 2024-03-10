/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradientBG 15s ease infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}

