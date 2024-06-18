import { ComponentProps } from "@/types/Component";
import { NewsCategory } from "@/types/NewsCategory";

// Displays the latest count news in the specified categories.
export type LatestNews = ComponentProps & {
  _type: "latestNews";
  count: number;
  categories: NewsCategory[];
};
