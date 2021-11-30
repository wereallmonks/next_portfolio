module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "40vh": "40vh",
      },
      margin: {
        "-22": "-5.5rem",
      },
      colors: {
        vienna: "var(--vienna-roast)",
        spanish: "var(--spanish-purple)",
        mushroom: "var(--mushroom-cream)",
        redorpiment: "var(--red-orpiment)",
      },
      minWidth: {
        "hero-min": "11.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
