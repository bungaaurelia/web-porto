/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],

  theme: {
    extend: {
      colors: {
        neonPurple: "#d822c6",
        neonPink: "#f532ab",
        pureWhite: "#ffffff",
        darkGreen: "#012528",
        neonBlue: "#05f0d8",
      },
    },
  },
};
