import { Slug } from "sanity";
import { Palette } from "@/types/Palette";
import { Wallpaper } from "@/types/Wallpaper";
import { Component } from "@/types/Component";
import { MaxWidth } from "@/types/MaxWidth";

export type Block = {
  _type: "pageBlock";
  _key: string;
  id: string;
  hidden: boolean;
  palette: Palette;
  wallpaper?: Wallpaper;
  components?: Component[];

  // Optional spacing between component
  spacing?: "sm" | "md" | "lg";

  // Optional max width of a block. If not set it will inherit from the page
  maxWidth?: MaxWidth;
};