import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "rgb(var(--color-bone) / <alpha-value>)",
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        beige: "rgb(var(--color-beige) / <alpha-value>)",
        "pastel-pink": "rgb(var(--color-pastel-pink) / <alpha-value>)",
        coffee: "rgb(var(--color-coffee) / <alpha-value>)",
        olive: "rgb(var(--color-olive) / <alpha-value>)",
        parchment: "rgb(var(--color-parchment) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-light": "rgb(var(--color-ink-light) / <alpha-value>)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        letter: "var(--shadow-letter)",
        card: "var(--shadow-card)",
      },
      borderRadius: {
        scrapbook: "var(--radius-scrapbook)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-in-up": "fadeInUp 0.9s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionDuration: {
        slow: "600ms",
        slower: "900ms",
      },
    },
  },
  plugins: [],
};

export default config;
