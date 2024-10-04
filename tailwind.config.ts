import type { Config } from "tailwindcss";
// import tailwind default theme
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["var(--font-cascadia-code)", "ui-monospace", "system-ui"],
      sans: ["var(--font-pp-mori)", "ui-sans-serif", "system-ui"],
    },
    backgroundImage: {
      preFooterBg:
        "linear-gradient(135deg, rgba(255,154,137,1) 0%, rgba(215,149,85,1) 25%, rgba(158,192,113,1) 50%, rgba(0,202,200,1) 75%, rgba(191,252,249,1) 100%)",
    },
    colors: {
      ...defaultTheme.colors,
      accent: "var(--accent)",
      background: "var(--background)",
      foreground: "var(--foreground)",
      title: "var(--title)",
      separator: "var(--separator)",
      gray: "var(--gray)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
