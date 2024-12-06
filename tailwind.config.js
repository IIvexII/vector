/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}", // Include files in the src folder
    "./src/screens/*.{js,jsx,ts,tsx}", // Include files in nested directories
    "./src/components/*.{js,jsx,ts,tsx}", // Include files in deeply nested directories
    "./src/components/**/*.{js,jsx,ts,tsx}", // Include files in deeply nested directories
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary100: "#d21b67",
        primary200: "#be185d",
        primary500: "#5a112e",
        primary800: "#5d052a",
        accent200: "#fed7aa",
        accent800: "#e97f02",
      },
    },
  },
  plugins: [],
};
