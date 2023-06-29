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
        burgundy: "#391400",
        magenta:'#B550F6',
        purple: "#28293E",
      },
      boxShadow: {
        button: "0px 3px 9px 0px rgba(57, 20, 0, 0.08)",
      },
      borderColor: {
        buttonOutline: "rgba(255, 255, 255, 0.30)",
      },
      padding: { min: "23px" },
    },
  },
  plugins: [],
};
