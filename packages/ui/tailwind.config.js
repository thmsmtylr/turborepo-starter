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
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7F56D9",
          600: "#7F56D9",
        },
      },
      padding: {
        2.5: "0.625rem",
        3.5: "0.875rem",
        4.5: "1.125rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
