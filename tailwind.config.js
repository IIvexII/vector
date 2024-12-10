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
        primary: "#47C74E",
        seconday: "#B6FFA1",
        accent: "#313131",
      },
    },
  },
  plugins: [],
};
