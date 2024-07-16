import { PortableTextBlock, Slug } from "sanity";
import { Image } from "@/types/Image";
import { Block } from "@/types/Block"
import { NewsCategory } from '@/types/NewsCategory';

export type NewsStory = {
  _type: "newsStory";
  _id: string;
  categories: NewsCategory[];
  date: string;
  title: string;
  slug: Slug;
  summary: string;
  previewImage: Image;
  text: PortableTextBlock[];
  blocks?: Block[];
};
