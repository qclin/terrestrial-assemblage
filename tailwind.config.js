const colors = {
  babyBlue: "#87A4CA",
  white: "#fff",
  algea: "#e3e6c0",
  lightAlgea: "#c9c99e",
  darkAlgea: "#ADA77A",
  halfAlgea: "#ada77a87",
  halfWhite: "#ffffff87",
  tintWhite: "#ffffffE6",
  tintAlgea: "#e3e6c0E6",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.babyBlue,
        shadow: colors.white,
        algea: {
          DEFAULT: colors.algea,
          light: colors.lightAlgea,
          tint: colors.tintAlgea,
          dark: colors.darkAlgea,
        },
        white: {
          DEFAULT: colors.white,
          tint: colors.tintWhite,
          half: colors.halfWhite,
        },
        button: {
          DEFAULT: colors.halfAlgea,
          hover: colors.halfWhite,
        },
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "90%",
      },
      height: {
        modal: "80vh",
      },
      boxShadow: {
        white: "0 0 5px 10px #FFF",
        whiteTint: "0 0 5px 10px #ffffffE6",
        tintAlgea: "0 0 10px 10px #e3e6c0E6",
        algea: "0 0 50px -12px #e3e6c0",
      },
      backgroundBlendMode: ["hover", "focus"],
      mixBlendMode: ["hover", "focus"],
      border: ["hover"],
    },
  },
  variants: {
    extend: {
      padding: ["odd", "even"],
      margin: ["odd", "even"],
      textAlign: ["odd", "even"],
      display: ["odd", "even"],
    },
  },
  plugins: [],
};
