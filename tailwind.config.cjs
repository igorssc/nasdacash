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
        gradient: "linear-gradient(to top, #ff6f15, #fdb303)",
        world: "url('./src/hero-glow.svg')",
        // " linear-gradient(22deg, rgba(29,7,46,1) 0%, rgba(113,62,153,0.6530987394957983) 14%, rgba(29,7,46,1) 35%, rgba(29,7,46,1) 70%, rgba(113,62,153,1) 100%)",
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
