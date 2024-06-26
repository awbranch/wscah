import { ComponentProps } from "@/types/Component";
import { Palette } from "@/types/Palette";
import { PortableTextBlock } from "sanity";
import { MediaCard } from "@/types/MediaCard";

export type MediaCardSet = ComponentProps & {
  _type: "mediaCardSet";
  palette: Palette;
  eyebrow?: string;
  title?: PortableTextBlock[];
  text?: string;
  cards: MediaCard[];
};
