/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      sans: ["Cairo", "sans-serif"],
      colors: {
        primary: "#007DFC",
        secondary: "#FAFAFA",
        "text-primary": "#303030",
        "text-sec": "#4B4C79",
      },
    },
  },
  plugins: [],
};
