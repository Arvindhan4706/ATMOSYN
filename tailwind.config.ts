import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          primary: "#fdfbf7",
          secondary: "#f4f0e6",
        },
        accent: {
          atmosyn: "#86b847",
        },
        brand: {
          forest: "#123b32",
        },
        ink: {
          primary: "#1e2622",
        },
      },
      fontFamily: {
        sans: ["var(--font-league-spartan)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "16": "16px",
        "20": "20px",
        "24": "24px",
      },
      transitionTimingFunction: {
        "motion-weighted": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;