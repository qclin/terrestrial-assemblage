const colors = {
  babyBlue: "#87A4CA",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.babyBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
