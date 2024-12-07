/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
    content: [
      "./**/*.html",
      "!./node_modules", // Exclude node_modules for performance
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

