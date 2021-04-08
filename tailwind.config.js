const colors = {
  babyBlue: "#87A4CA",
  white: "#fff",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.babyBlue,
        shadow: colors.white,
      },
      boxShadow: {
        white: "0 0 5px 10px #FFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
