/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spinner-grow": "spinner-grow 0.75s linear infinite",
      },
      keyframes: {
        "spinner-grow": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(0.5)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
