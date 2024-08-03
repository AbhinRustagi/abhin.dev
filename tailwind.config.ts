import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-vidaloka)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
export default config;
