/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spinner-grow": "spinner-grow 1.5s ease-in-out infinite",
        "floating-orb": "floating-orb 3s ease-in-out infinite",
        "color-shift": "color-shift 5s linear infinite",
        "particle-explode": "particle-explode 2s ease-out infinite",
        "rotate-3d": "rotate-3d 6s linear infinite",
      },
      keyframes: {
        "spinner-grow": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        "floating-orb": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        "color-shift": {
          "0%": { backgroundColor: "#3fada8" },
          "25%": { backgroundColor: "#ff6f61" },
          "50%": { backgroundColor: "#6b5b95" },
          "75%": { backgroundColor: "#88b04b" },
          "100%": { backgroundColor: "#3fada8" },
        },
        "particle-explode": {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "rotate-3d": {
          "0%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "100%": { transform: "rotateY(360deg) rotateX(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
