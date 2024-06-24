import { PageWidth } from "@/types/Page";
import { Palette } from "@/types/Palette";

export const maxPageWidth = 1280;

export const pageWidths: { [V in PageWidth]: number } = {
  xs: 750,
  sm: 840,
  md: 930,
  lg: maxPageWidth,
};

type PaletteClass = {
  [P in Palette]: {
    [C in "block" | "accent" | "divide"]: string;
  };
};

export const userPaletteClasses: PaletteClass = {
  white: {
    block: "bg-white text-black",
    accent: "text-black",
    divide: "divide-black",
  },
  gray: {
    block: "bg-gray-200 text-black",
    accent: "text-white",
    divide: "divide-white",
  },
  blue: {
    block: "bg-blue-600 text-white",
    accent: "text-sunset",
    divide: "divide-white",
  },
  "dark-blue": {
    block: "bg-blue-800 text-white",
    accent: "text-white",
    divide: "divide-white",
  },
};
