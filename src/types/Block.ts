import { Palette } from "@/types/Palette";
import { Component } from "@/types/Component";

export type BlockWidth = "xs" | "sm" | "md" | "lg";
export type BlockSpacing = "sm" | "md" | "lg";

export type Block = {
  _type: "pageBlock";
  _key: string;
  id: string;
  hidden: boolean;
  palette: Palette;
  components?: Component[];
  spacing?: BlockSpacing;
  maxWidth?: BlockWidth;
};
