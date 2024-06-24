import type { Config } from "tailwindcss";
import { themeColors } from "./src/utils/globals";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: themeColors,
    },
  },
  plugins: [],
};
export default config;
