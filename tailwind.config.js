/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        jetbrain: ["JetBrains Mono", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
      mixBlendMode: {
        difference: "difference",
      },
    },
  },
  plugins: [],
};
