import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        "cream-dark": "#F0EBE1",
        "cream-deeper": "#E8DFD0",
        earth: "#8B6914",
        "earth-light": "#C4952A",
        forest: "#2D4A22",
        "forest-light": "#4A7A35",
        charcoal: "#1A1A1A",
        "charcoal-soft": "#2C2C2C",
        "gray-warm": "#8A8078",
        "gray-light": "#D4CEC6",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-dancing)", "cursive"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "1.05" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        "10xl": ["10rem", { lineHeight: "0.95" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.8s ease forwards",
        "slide-right": "slideRight 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-warm":
          "linear-gradient(135deg, #FAF7F2 0%, #E8DFD0 50%, #D4CEC6 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
