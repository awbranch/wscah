import { NewsCategory } from "@/types/NewsCategory";

export type NewsBlock = {
  _type: "newsBlock";
  _key: string;
  title: string;
  text?: string;
  categories: NewsCategory[];
};
