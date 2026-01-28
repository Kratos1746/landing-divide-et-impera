import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {

        "dot-1": {
          "0%, 20%": { opacity: "0.15" },
          "30%, 100%": { opacity: "1" },
        },
        "dot-2": {
          "0%, 40%": { opacity: "0.15" },
          "50%, 100%": { opacity: "1" },
        },
        "dot-3": {
          "0%, 60%": { opacity: "0.15" },
          "70%, 100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0,14px,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translate3d(0,-12px,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "soft-pop": {
          "0%": { opacity: "0", transform: "scale(0.985)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-6px,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 800ms cubic-bezier(.2,.8,.2,1) both",
        "fade-down": "fade-down 800ms cubic-bezier(.2,.8,.2,1) both",
        "fade-in": "fade-in 700ms cubic-bezier(.2,.8,.2,1) both",
        "soft-pop": "soft-pop 700ms cubic-bezier(.2,.8,.2,1) both",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "dot-1": "dot-1 1.4s infinite",
        "dot-2": "dot-2 1.4s infinite",
        "dot-3": "dot-3 1.4s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
