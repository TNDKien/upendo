module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
          "100%": { transform: `translateX(-64.2%)` },
        },
        mobileMarquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: `translateX(-292%)` },
        },
        "bounce-to-left": {
          "0%": {
            transform: "translateX(50vw)",
          },
          "50%": {
            transform: "translateX(25vw)",
          },
          "100%": {
            transform: "translateX(0vw)",
          },
        },
        "bounce-to-right": {
          "0%": {
            transform: "translateX(0vw)",
          },
          "50%": {
            transform: "translateX(25vw)",
          },
          "100%": {
            transform: "translateX(50vw)",
          },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        mobileMarquee: "mobileMarquee 30s linear infinite",
        "bounce-to-left": "bounce-to-left 1s ease-in-out",
        "bounce-to-right": "bounce-to-right 1s ease-in-out",
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
