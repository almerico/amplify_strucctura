/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#f9fafb",
          100: "#f9fafb",
          200: "#f3f4f6",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#0a0f14",
        },
        // from https://www.tailwindshades.com
        indigo: {
          50: "#ACBBD6",
          100: "#9EB0CF",
          200: "#839AC1",
          300: "#6884B4",
          400: "#516FA2",
          500: "#435c87",
          600: "#304262",
          700: "#1E293C",
          800: "#0B0F17",
          900: "#000000",
          950: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
