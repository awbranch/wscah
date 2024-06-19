import { ComponentProps } from "@/types/Component";
import { Palette } from "@/types/Palette";
import { MediaCard } from "@/types/MediaCard";

export type MediaCardSet = ComponentProps & {
  _type: "mediaCardSet";
  palette: Palette;
  cards: MediaCard[];
};
