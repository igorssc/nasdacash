/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typist: "blinker 0.7s linear infinite",
        details: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blinker: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%": {
            "drop-shadow": "0 5px 15px 0 rgba(0,0,0,.6)",
            transform: "translatey(0)",
          },
          "50%": {
            "drop-shadow": "0 25px 15px 0 rgba(0,0,0,.2)",
            transform: "translatey(-30px)",
          },
          "100%": {
            "drop-shadow": "0 5px 15px 0 rgba(0,0,0,.6)",
            transform: "translatey(0)",
          },
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
