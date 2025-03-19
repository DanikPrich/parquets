/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#253125", //"#15355f",
        black: "#17181B",
        white: "#FFFFFF",
        gray: "#F9FAFB",
        graylight: "#EEF1F4",
        grayLight2: "#f1f1f1",
        "gray-light-500": "#F5F5F5",
        grayDark: "#646572",
        grayDark2: "#94959F",
        grayDark3: "#646572",
      },
    },
  },
  plugins: [],
};
