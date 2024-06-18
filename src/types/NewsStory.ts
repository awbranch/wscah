import { PortableTextBlock, Slug } from "sanity";
import { Image } from "@/types/Image";
import { Block } from "@/types/Block";

export type NewsStory = {
  _type: "newsStory";
  _id: string;
  tags: string[];
  date: string;
  title: string;
  slug: Slug;
  summary: string;
  preview: Image;
  text: PortableTextBlock[];
  blocks?: Block[];
};
