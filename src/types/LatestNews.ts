import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";

// Displays the latest count news items
export type LatestNews = ComponentProps & {
  _type: "latestNews";
  eyebrow?: string;
  title?: PortableTextBlock[];
  text?: string;
  count: number;
};
