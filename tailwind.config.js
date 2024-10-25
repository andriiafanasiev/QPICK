/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'primary-shadow': '0px 0px 20px 0px #0000001A',
      },
      colors: {
        gray: '#838383',
      },
    },
  },
  plugins: [],
};
