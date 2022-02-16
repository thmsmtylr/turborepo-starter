module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  preFlight: true,
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1046px",
      xl: "1280px",
      xxl: "1536px",
      xxxl: "1800px",
    },
    borderRadius: {
      DEFAULT: "0.188rem",
    },
    colors: {
      primary: "#ef3e24",
      black: "#191919",
      white: "#ffffff",
      grey1: "#2f2f2f",
      grey2: "#a1a1a1",
      grey3: "#e9e9e9",
      grey4: "#f2f2f2",
      background: "#f8f8f8",
      error: "#FF0000",
    },
    fontSize: {
      heading: [
        "8.75rem",
        {
          letterSpacing: "-0.281rem",
          lineHeight: "8.875rem",
        },
      ],
      heading1: [
        "4.375rem",
        {
          letterSpacing: "-0.063rem",
          lineHeight: "6.25rem",
        },
      ],
      heading2: [
        "3.375rem",
        {
          letterSpacing: "-0.031rem",
          lineHeight: "4.75rem",
        },
      ],
      heading3: [
        "3rem",
        {
          lineHeight: "4.375rem",
        },
      ],
      heading4: [
        "2.125rem",
        {
          lineHeight: "3.125rem",
        },
      ],
      heading5: [
        "1.5rem",
        {
          lineHeight: "2.188rem",
        },
      ],
      heading6: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      body1: [
        "1.063rem",
        {
          lineHeight: "1.688rem",
        },
      ],
      body2: [
        "0.875rem",
        {
          lineHeight: "1.375rem",
        },
      ],
      caption: [
        "0.75rem",
        {
          lineHeight: "1.25rem",
        },
      ],
    },
    fontFamily: {
      sans: [
        "DM Sans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      height: {
        navbar: "6.5rem",
        logo: "1.75rem",
      },
      maxWidth: {
        navbar: "71.25rem",
      },
      gap: {
        grid: "4.25rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
