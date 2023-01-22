/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#29335C",
        red: "#DB2B39",
        yellow: "#F3A712",
        grey: "#534D41",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #29335C 7.21%, #DB2B39 45.05%, #F3A712 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #29335C 14.53%, #DB2B39 69.36%, #F3A712 117.73%)",

        "gradient-happyColors":
          "linear-gradient(81.66deg, #DB2B39 14.53%, #F3A712 69.36%, #F3A712 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
