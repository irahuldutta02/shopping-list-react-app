/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5a2448",
        secondary: "#f94f46",
        cYellow: "#ffcf2d",
        cSeaGreen: "#3fb1b5",
      },
    },
  },
  plugins: [],
};
