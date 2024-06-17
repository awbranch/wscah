import { Image } from "@/types/Image";

export type TimelineItem = {
  _type: "timelineItem";
  year: string;
  text?: string;
  image: Image;
};
