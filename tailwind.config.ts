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
        title: "var(--title)",
        subtitle: "var(--subtitle)",
        body: "var(--body)",
        accent: "var(--accent)",
        card: "var(--card)",
        border: "var(--border)",
        button: "var(--button)",
      },
      backgroundImage: {
        ytm: "linear-gradient(-45deg, rgba(255,8,68,0.45) 0%, rgba(255,117,140,0) 100%)",
        buttonGradient: "linear-gradient(60deg, #96deda 0%, #50c9c3 100%);",
      },
    },
  },
  plugins: [],
};
export default config;
