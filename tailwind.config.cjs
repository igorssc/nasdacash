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
            transform: "translatey(0)",
          },
          "50%": {
            transform: "translatey(-30px)",
          },
          "100%": {
            transform: "translatey(0)",
          },
        },
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      backgroundImage: {
        featured:
          "url(../assets/feature-box-bg.svg),linear-gradient(90deg,#2b1542,#230f3c)",
        featuredHover:
          "url(../assets/feature-box-bg.svg),linear-gradient(90deg,#500f83,#2c0b4c 80%)",
        header: "linear-gradient(to bottom, #000, #1D072E)",
        footer: "linear-gradient(to top, #000, #1D072E)",
        miningDetails:
          "radial-gradient(30vw 75% at 67.5% 50%,rgba(162,50,255,.3),rgba(44,11,76,0) 87.5%),linear-gradient(90deg,rgba(44,11,76,.6),rgba(80,15,131,.2) 60%,rgba(44,11,76,.6)),linear-gradient(35deg,rgba(44,11,76,.3),rgba(80,15,131,.3) 37%,rgba(44,11,76,.3) 0,rgba(80,15,131,.3) 76%,rgba(44,11,76,.3) 0,rgba(80,15,131,.3)),linear-gradient(90deg,rgba(44,11,76,.5),rgba(80,15,131,.5) 60%,rgba(44,11,76,.5))",
        group: "linear-gradient(165deg,rgba(36,24,52,.75),rgba(26,14,42,.75))",
        banner:
          "linear-gradient(100deg,rgba(43,9,80,0),rgba(43,9,80,.75),rgba(43,9,80,0))",
        EstimateMasternodes:
          "linear-gradient(90deg,rgba(44,11,76,.4),rgba(80,15,131,.2),rgba(44,11,76,.4)),linear-gradient(35deg,rgba(44,11,76,.3),rgba(80,15,131,.3) 45%,rgba(44,11,76,.3) 0,rgba(80,15,131,.3)),linear-gradient(90deg,rgba(44,11,76,.6),rgba(80,15,131,.6),rgba(44,11,76,.6))",
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
