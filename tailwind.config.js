module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'OffWhite': 'rgb(var(--OffWhite))',
      'DarkGreen': 'rgb(var(--DarkGreen))',
      'DarkTeal': 'rgb(var(--DarkTeal))',
      'Pink': 'rgb(var(--Pink))',
      'LimeGreen': 'rgb(var(--LimeGreen))',
      'LightLime': 'rgb(var(--LightLime))',
      'LimeGradient': 'linear-gradient(var(--LimeGradient))',
      'PinkGradient': 'linear-gradient(var(--PinkGradient))',
      'TealGradient': 'linear-gradient(var(--TealGradient))',
    },
  },
};
