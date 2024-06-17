import { PortableTextBlock, Slug } from "sanity";
import { ImageCardSet } from "@/types/ImageCardSet";
import { FillColor } from "@/types/FillColor";

export type ImageCardBlock = {
  _type: "imageCardBlock";
  _key: string;
  id?: Slug;
  fill: FillColor;
  eyebrow?: string;
  title: PortableTextBlock[];
  text?: string;
  cards: ImageCardSet;
};
