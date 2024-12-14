/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#ff7e5f', // Starting color
        'gradient-end': '#feb47b',  // Ending color
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
