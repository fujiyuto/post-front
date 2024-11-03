import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: '#a0db7a',
        subTheme: '#feffeb',
        black: '#525252',
        white: '#ffffff',
        red: '#ff0000',
        gray: '#d5d5d5',
        formLine: '#e5e5e5'
      },
    },
  },
  plugins: [],
};
export default config;
