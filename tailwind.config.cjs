/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#090909",
        white: "#FDFDFD",
        primary: "#7756ff",
      },
      fontFamily: {
        "sans-serif": ["Manrope", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
