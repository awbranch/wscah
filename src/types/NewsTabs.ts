import { ComponentProps } from "@/types/Component";
import { NewsCategory } from "@/types/NewsCategory";

export type NewsTabs = ComponentProps & {
  _type: "newsTabs";
  categories: NewsCategory[]; // The news to display in tabs
};
