const defaultTheme = require("tailwindcss/defaultTheme");

const coreTheme = {
  fontFamily: {
    inter: ["Inter", ...defaultTheme.fontFamily.sans],
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: "#7F56D9",
        600: "#7F56D9",
      },
    },
  },
};

module.exports = coreTheme;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  preFlight: true,
  theme: {
    ...coreTheme,
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
