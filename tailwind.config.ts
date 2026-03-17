import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#e6edf3",
        mint: "#5fbf91",
        mist: "#14223a",
        sand: "#0b1220",
        night: "#0a0f1c",
        navy: "#101b2f"
      },
      boxShadow: {
        card: "0 18px 45px rgba(5, 10, 20, 0.45)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 420px at 10% 10%, rgba(95, 191, 145, 0.18), transparent 55%)",
        "subtle-grid":
          "linear-gradient(to right, rgba(230, 237, 243, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(230, 237, 243, 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
