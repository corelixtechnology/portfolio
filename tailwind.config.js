/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
        display: ["'Outfit'", "'Plus Jakarta Sans'", "sans-serif"],
        outfit: ["'Outfit'", "sans-serif"],
        space: ["'Space Grotesk'", "'Plus Jakarta Sans'", "sans-serif"],
        syne: ["'Outfit'", "'Syne'", "sans-serif"],
      },
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "text-primary": "hsl(var(--text) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        stroke: "hsl(var(--stroke) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        tubik: {
          dark: "#09090c",
          surface: "#111116",
          card: "#16161f",
          cardHover: "#1d1d28",
          purple: "#6344f5",
          purpleHover: "#785cf7",
          lavender: "#C9C1FF",
          mint: "#00F59B",
          border: "rgba(255, 255, 255, 0.09)",
          borderHover: "rgba(255, 255, 255, 0.2)",
        }
      },
      animation: {
        "scroll-down": "scroll-down 1.5s ease-in-out infinite",
        "role-fade-in": "role-fade-in 0.4s ease-out",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "marquee": "marquee 35s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
