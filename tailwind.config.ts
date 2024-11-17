import type { Config } from "tailwindcss";
// import tailwind default theme

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["var(--font-cascadia-code)", "ui-monospace", "system-ui"],
      sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--accent)",
        card: "var(--card)",
      },
      backgroundImage: {
        ytm: "linear-gradient(-45deg, rgba(255,8,68,0.45) 0%, rgba(255,117,140,0) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
