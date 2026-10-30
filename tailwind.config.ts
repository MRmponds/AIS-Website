import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ink — premium near-black system
        ink: "#0B0B0F",
        "ink-2": "#14141B",
        "ink-3": "#1E1E28",
        "ink-soft": "#3A3A46",
        // Brand flame (from the AIS profile icons ≈ #FA5000)
        flame: "#FF5A1F",
        "flame-hot": "#FF7A33",
        "flame-deep": "#E5470C",
        ember: "#FFB347",
        // Warm light surfaces
        paper: "#FAFAF8",
        surface: "#FFFFFF",
        sand: "#F2EFE9",
        // Lines & muted
        line: "#EAE7E1",
        "line-dark": "#26262F",
        muted: "#6B6B76",
        "muted-2": "#8A8A94",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        widest2: "0.32em",
      },
      maxWidth: {
        shell: "78rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,15,0.05), 0 18px 50px -24px rgba(11,11,15,0.22)",
        "card-lift":
          "0 2px 4px rgba(11,11,15,0.05), 0 34px 70px -30px rgba(229,71,12,0.30)",
        glow: "0 0 0 1px rgba(255,90,31,0.28), 0 24px 70px -24px rgba(255,90,31,0.55)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(11,11,15,0.05) 1px, transparent 0)",
        "grain-dark":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
        flame: "linear-gradient(120deg, #FF7A33 0%, #FF5A1F 42%, #E5470C 100%)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "spin-rev": {
          to: { transform: "rotate(-360deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-sm": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.7)", opacity: "0.6" },
          "100%": { transform: "scale(2.1)", opacity: "0" },
        },
        "grid-pan": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "56px 56px" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "marquee-fast": "marquee 26s linear infinite",
        "spin-slow": "spin-slow 34s linear infinite",
        "spin-rev": "spin-rev 46s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-sm": "float-sm 5.5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 3s ease-out infinite",
        "grid-pan": "grid-pan 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
