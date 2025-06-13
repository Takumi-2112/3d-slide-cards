import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "custom-blue": "0 0 1rem rgb(255, 255, 255), 0 0 1rem rgb(255, 255, 255)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Add default themes
    darkTheme: "dark", // Optional: if you want dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },
};