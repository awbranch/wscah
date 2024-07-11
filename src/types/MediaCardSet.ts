import { ComponentProps } from "@/types/Component";
import { Palette } from "@/types/Palette";
import { MediaCard } from "@/types/MediaCard";

export type ClickArea = "card" | "button" | "hybrid" | "none";
export type ButtonVariant = "text" | "solid";

export type MediaCardSet = ComponentProps & {
  _type: "mediaCardSet";
  palette?: Palette;
  clickArea: ClickArea;
  buttonVariant: ButtonVariant;
  cards: MediaCard[];
};
