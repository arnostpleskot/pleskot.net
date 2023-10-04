/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        alter: "rgb(var(--color-alter) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "Lato",
          "Helvetica Neue",
          "Helvetica",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      spacing: {
        m: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
