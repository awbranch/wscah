import { PortableTextBlock, Slug } from "sanity";
import { ImageCardSet } from "@/types/ImageCardSet";
import { BlockStyle } from "@/types/BlockStyle";

export type ImageCardBlock = {
  _type: "imageCardBlock";
  _key: string;
  id?: Slug;
  style: BlockStyle;
  eyebrow?: string;
  title: PortableTextBlock[];
  text?: string;
  cards: ImageCardSet;
};
