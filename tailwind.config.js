/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      animation: {
        jump: "jump 0.6s ease-in-out",
      },
      keyframes: {
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
};
