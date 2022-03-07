module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
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
      fontFamily: {
        second: ["Montserrat, serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
