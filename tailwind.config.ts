import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#070B14",
        panel: "#0D1526",
        edge: "#1A2540",
        royal: "#1C4FB8",
        bright: "#2E6BE6",
        steel: "#C7CDD8",
        mist: "#8B94A6",
        snow: "#EEF1F6",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(46, 107, 230, 0.25)",
        card: "0 8px 30px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "steel-text":
          "linear-gradient(180deg, #F4F6FA 0%, #C7CDD8 45%, #8B94A6 55%, #E4E8EF 100%)",
        "blue-sheen":
          "linear-gradient(135deg, #1C4FB8 0%, #2E6BE6 50%, #163E93 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
