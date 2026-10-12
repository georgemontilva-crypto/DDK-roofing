/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#132034",
        night: "#1B2C45",
        ddk: "#354F72",
        steel: "#5B6470",
        sky: "#DCE8F2",
        paper: "#F4F7FA",
        hardhat: "#F5B82E",
      },
      fontFamily: {
        sans: ['"Archivo Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
