import { PageWidth } from "@/types/Page";
import { Palette } from "@/types/Palette";
import { ButtonVariant } from "@/types/Button";

export const maxPageWidth = 1280;

export const pageWidths: { [V in PageWidth]: number } = {
  xs: 750,
  sm: 840,
  md: 930,
  lg: maxPageWidth,
};

export const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const socialMediaImageDimensions = {
  width: 1200,
  height: 630,
};

export const themeColors = {
  black: "#111111",
  white: "#ffffff",
  paper: "#ADADAD",
  grape: {
    700: "#1E357C", // darkest
    600: "#32498D", // dark
    500: "#475D9F", // acc
    400: "#5D77B7", // blue
    DEFAULT: "#5D77B7",
    300: "#9FACD3", // tint
  },
  carrot: {
    700: "#CF4804", // dark
    600: "#E56E32", // middle
    DEFAULT: "#E56E32",
    500: "#F58034", // wscah
  },
  kale: {
    700: "#6E932C", // dark
    DEFAULT: "#89AD47", // green
    600: "#89AD47",
  },
};

type PaletteClass = {
  [P in Palette]: {
    [C in "block" | "divide"]: string;
  };
};

export const userPaletteButtonProps: {
  [P in Palette]: {
    variant: ButtonVariant;
  };
} = {
  white: {
    variant: "orange-solid",
  },
  gray: {
    variant: "orange-solid",
  },
  blue: {
    variant: "white-solid",
  },
};

export const userPaletteClasses: PaletteClass = {
  white: {
    block: "bg-white text-black",
    divide: "divide-black",
  },
  gray: {
    block: "bg-gray-100 text-black",
    divide: "divide-white",
  },
  blue: {
    block: "bg-grape-500 text-white",
    divide: "divide-grape-300",
  },
};

export const userHeaderClasses: Record<Palette, string> = {
  white: "text-grape-500",
  gray: "text-grape-500",
  blue: "text-white",
};
