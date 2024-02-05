/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["var(--font-serif)"],
      cursive: ["var(--font-cursive)"],
      tanker: ["var(--font-tanker)"],
    },
    extend: {
      cursor: {
        draw: "url(./assets/marker.svg),pointer",
      },
    },
  },
  plugins: [],
};
