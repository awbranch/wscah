import type { Config } from "tailwindcss";
import { themeColors } from "./src/utils/globals";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontWeight: {
      medium: "500",
      bold: "700",
      black: "900",
    },
    fontSize: {
      xs: "12px",
      sm: "15px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "35px",
      "4xl": "40px",
      "5xl": "45px",
      "6xl": "50px",
      "7xl": "70px",
    },
    extend: {
      colors: themeColors,
      fontFamily: {
        sans: ["var(--font-gotham)"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
export default config;
