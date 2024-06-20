import { ComponentProps } from "@/types/Component";

// Displays the latest count news items
export type LatestNews = ComponentProps & {
  _type: "latestNews";
  count: number;
};
