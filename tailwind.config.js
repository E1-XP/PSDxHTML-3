/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        sandy: "#FDF0E9",
        orange: "#EF6D58",
        burgundy:"#391400",
        purple: "#28293E",
      },
    },
  },
  plugins: [],
};
