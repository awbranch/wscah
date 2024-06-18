import { Image } from "@/types/Image";

export type TimelineItem = {
  _type: "timelineItem";
  _key: string;
  year: string;
  text?: string;
  image: Image;
};
