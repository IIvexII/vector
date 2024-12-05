/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}", // Include files in the src folder
    "./src/screens/*.{js,jsx,ts,tsx}", // Include files in nested directories
    "./src/components/*.{js,jsx,ts,tsx}", // Include files in deeply nested directories
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        plum: "#5a112e",
        darkPlum: "#5d052a",
        darkOrange: "#e97f02",
      },
    },
  },
  plugins: [],
};
