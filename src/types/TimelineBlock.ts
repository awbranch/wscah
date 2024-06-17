import { Slug } from "sanity";
import { TimelineItem } from "@/types/TimelineItem";

export type TimelineBlock = {
  _type: "timelineBlock";
  _key: string;
  id?: Slug;
  title: string;
  text?: string;
  items: TimelineItem[];
};
