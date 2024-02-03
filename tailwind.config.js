/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // serif: ["Satoshi", "sans-serif"],
      serif: ["var(--font-serif)"],
      // cursive: ["Reenie Beanie", "cursive"],
      cursive: ["var(--font-cursive)"],

      // tanker: ["Tanker", "sans-serif"],
      tanker: ["var(--font-tanker)"],
    },
  },
  plugins: [],
};
