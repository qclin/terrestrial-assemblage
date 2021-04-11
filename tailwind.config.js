const colors = {
  babyBlue: "#87A4CA",
  white: "#fff",
  algea: "#e3e6c0",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.babyBlue,
        shadow: colors.white,
        algea: colors.algea,
      },
      boxShadow: {
        white: "0 0 5px 10px #FFF",
        algea: "0 0 5px 10px #e3e6c0",
      },
      mixBlendMode: ["hover", "focus"],
    },
  },
  variants: {
    extend: {
      padding: ["odd", "even"],
      margin: ["odd", "even"],
      textAlign: ["odd", "even"],
    },
  },
  plugins: [],
};
