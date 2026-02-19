import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#20202a",
        card: "#2a2a34",
        accent: "#ff6b35",
        "accent-hover": "#e55a2b",
        textMain: "#ffffff",
        textSoft: "#b0b0b0",
        border: "#404040",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.3)",
        cardHover: "0 8px 30px rgba(0,0,0,0.4)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
} satisfies Config;
