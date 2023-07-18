/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Garcia",
      }, colors: {
        'primary': '#31B2EA',
      },
    },
  },
  plugins: [],
};

