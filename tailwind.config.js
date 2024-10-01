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
    },
  },
};
