/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Design tokens: colors live under colors; sizes below provide a uniform scale
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      // Unified font stacks used across the app
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      // Spacing scale additions (Tailwind base preserved). Also used by w-/h-/p-/m- utilities.
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      // Consistent font sizes for semantic usage via utilities and components
      fontSize: {
        // mirrors Tailwind defaults for clarity, with a couple extras for headings
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
      },
      // Border radii for surfaces and controls
      borderRadius: {
        xs: "0.125rem",
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        pill: "9999px",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      // Elevation scale for cards, nav, and buttons
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.06)",
        sm: "0 2px 4px rgba(0,0,0,0.08)",
        md: "0 6px 12px rgba(0,0,0,0.10)",
        lg: "0 10px 20px rgba(0,0,0,0.12)",
        xl: "0 16px 32px rgba(0,0,0,0.14)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      // Base element resets and variables should live in CSS; keep minimal here
      addBase({});
      addComponents({
        // Layout container with consistent paddings and max-widths
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        // Typographic scale for headings and body text
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        // Button primitives with size variants
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
        ".btn": {
          "@apply inline-flex items-center justify-center rounded bg-orange-500 text-white shadow-sm hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors":
            {},
        },
        ".btn-sm": { "@apply h-9 px-3 text-sm": {} },
        ".btn-md": { "@apply h-10 px-4 text-base": {} },
        ".btn-lg": { "@apply h-12 px-6 text-lg": {} },
        ".btn-primary": { "@apply bg-orange-600 hover:bg-orange-500": {} },
        ".btn-secondary": { "@apply bg-neutral-700 hover:bg-neutral-600": {} },
        // Icon sizing helpers to standardize icons across the app
        ".icon-sm": { "@apply h-4 w-4": {} },
        ".icon-md": { "@apply h-6 w-6": {} },
        ".icon-lg": { "@apply h-8 w-8": {} },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
