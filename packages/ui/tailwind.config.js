const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  preFlight: true,
  theme: {
    fontFamily: {
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
