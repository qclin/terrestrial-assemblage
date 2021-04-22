const colors = {
  babyBlue: "#87A4CA",
  white: "#fff",
  algea: "#e3e6c0",
  lightAlgea: "#c9c99e",
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
        lightAlgea: colors.lightAlgea,
      },
      boxShadow: {
        white: "0 0 5px 10px #FFF",
        algea: "0 0 50px -12px #e3e6c0",
      },
      backgroundBlendMode: ["hover", "focus"],
      mixBlendMode: ["hover", "focus"],
      border: ["hover"],
      fontStyle: ["hover"],
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
