/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typist: "blinker 0.7s linear infinite",
      },
      keyframes: {
        blinker: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      backgroundImage: {
        header: "linear-gradient(to bottom, #000, #1D072E)",
        footer: "linear-gradient(to top, #000, #1D072E)",
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
