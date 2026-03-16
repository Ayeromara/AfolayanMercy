import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1a33",
        mint: "#b7d8c7",
        mist: "#eff6f2",
        sand: "#f6f5f1"
      },
      boxShadow: {
        card: "0 18px 45px rgba(10, 22, 44, 0.12)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 420px at 10% 10%, rgba(183, 216, 199, 0.4), transparent 55%)",
        "subtle-grid":
          "linear-gradient(to right, rgba(11, 26, 51, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11, 26, 51, 0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
