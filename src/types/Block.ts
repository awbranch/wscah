import { Palette } from "@/types/Palette";
import { Wallpaper } from "@/types/Wallpaper";
import { Component } from "@/types/Component";

export type BlockWidth = "xs" | "sm" | "md" | "lg";
export type BlockSpacing = "sm" | "md" | "lg";

export type Block = {
  _type: "pageBlock";
  _key: string;
  id: string;
  hidden: boolean;
  palette: Palette;
  wallpaper?: Wallpaper;
  components?: Component[];
  spacing?: BlockSpacing;
  maxWidth?: BlockWidth;
};
