import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink: "#080D19", panel: "#111B2D", cyan: "#22C8F6", electric: "#258BFF" },
    boxShadow: { glow: "0 0 28px rgba(34,200,246,.22)" }
  }},
  plugins: []
};
export default config;
