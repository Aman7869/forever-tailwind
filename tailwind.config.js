/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your React files here
  ],
  theme: {
    extend: {
      fontFamily:{
        "prata": ['Prata', 'Georgia', 'serif'],
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', // Your custom shadow
      },
    },
  },
  plugins: [],
};