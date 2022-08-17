/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "linear-gradient(to bottom, #000, #1D072E)",
        gradient: "linear-gradient(to top, #ff6f15, #fdb303)",
      },
      colors: {
        primary: "#1D072E",
        secondary: "#3F1762",
        tertiary: "#fe910c",
      },
    },
  },
  plugins: [],
};
