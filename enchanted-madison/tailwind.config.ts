import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2C3E2D",
        rose: "#C4917B",
        gold: "#B8965A",
        cream: "#F5F0EB",
        charcoal: "#2D2926",
        stone: "#8B8178",
        ivory: "#FEFCFA",
        night: "#1A2A1E",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      maxWidth: {
        "content-sm": "40rem",
        "content-md": "56rem",
        "content-lg": "72rem",
        "content-xl": "80rem",
      },
      boxShadow: {
        warm: "0 18px 45px rgba(45, 41, 38, 0.12)",
      },
    },
  },
};

export default config;
