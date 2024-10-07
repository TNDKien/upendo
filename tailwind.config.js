module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "Arial", "sans-serif"],
        mono: ["Martian Mono", "monospace"],
        area: ["area-normal", "sans-serif"],
      },
      colors: {
        offWhite: "#FEFFF8",
        darkGreen: "#002626",
        darkTeal: "#003A47",
        pink: "#F4C5FF",
        limeGreen: "#A8FF1A",
        lightLime: "#EAFFBD",
        limeGradient: "var(--LimeGradient)",
        pinkGradient: "var(--PinkGradient)",
        tealGradient: "var(--TealGradient)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-226%)" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        fadeInUp: "fadeInUp 1s ease-out",
      },
      spacing: {
        "min-image-size": "48px",
        "max-image-size": "50px",
      },
      screens: {
        "max-lg": { max: "900px" },
      },
    },
  },
};
