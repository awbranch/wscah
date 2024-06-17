import { ImageCard } from "@/types/ImageCard";

export type ImageCardSet = {
  _type: "imageCardSet";
  _key: string;
  cards: ImageCard[];
};

