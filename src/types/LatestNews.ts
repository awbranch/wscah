import { NewsCategory } from "@/types/NewsCategory";

// Displays the latest count news in the specified categories.
export type LatestNews = {
  _type: "latestNews";
  _key: string;
  count: number;
  categories: NewsCategory[];
};
