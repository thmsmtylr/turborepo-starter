/** @type {import('tailwindcss').Config} */
module.exports = {
  // Optionally pull the tailwind.config.js from our `ui` stub
  // presets: [require("../../packages/ui/tailwind.config.js")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Ensure the styles for our components are included from our `ui` stub
    "../../packages/ui/components/Button.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
