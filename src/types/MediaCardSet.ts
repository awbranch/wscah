import { ComponentProps } from "@/types/Component";
import { MediaCard } from "@/types/MediaCard";

export type MediaCardSet = ComponentProps & {
  _type: "mediaCardSet";
  cards: MediaCard[];
};
