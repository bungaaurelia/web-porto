/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        crimsonDepth: '#710014',
        warmSand: '#B38F6f',
        softPearl: '#F2F1ED',
        obsidianBlack: '#161616',
        dustyRed: '#A0525A',
      },
    },
  }
}