/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      tech: ["Arial", "monospace"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    extend: {},
  },
  plugins: [],
};
