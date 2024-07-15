import type { Config } from "tailwindcss";
import { breakpoints, themeColors } from "./src/utils/globals";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontWeight: {
      medium: "500",
      bold: "700",
      black: "900",
    },
    fontSize: {
      xs: "12px", // Body Tiny - Weight: Medium or Bold
      sm: "15px", // Body Small - Weight: Medium or Bold
      base: "16px", // Body Regular - Weight: Medium or Bold
      lg: "18px", // Body Large - Weight: Medium or Bold

      xl: "20px", // Header XXS - Black, Uppercase
      "2xl": "24px", // Header XS - Bold
      "3xl": "35px", // Header S - H2 - Bold
      "4xl": "40px", // Header M - H2 - Bold
      "5xl": "45px", // Header L - H1 - Black
      "6xl": "50px", // Header XL - Hero - Black
      "7xl": "70px", // Header XXL - Black
    },
    borderRadius: {
      none: "0",
      sm: "4px",
      DEFAULT: "6px",
      md: "6px",
      lg: "8px",
      xl: "10px",
      "2xl": "20px",
      "3xl": "30px",
      full: "9999px",
    },
    screens: Object.entries(breakpoints).reduce(
      (a, [k, v]) => {
        a[k] = `${v}px`;
        return a;
      },
      {} as { [key: string]: string }
    ),
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
