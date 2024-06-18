import { ComponentProps } from "@/types/Component";
import { Image } from "@/types/Image";

export type TimelineItem = {
  _type: "timelineItem";
  _key: string;
  year: string;
  text?: string;
  image: Image;
};

export type Timeline = ComponentProps & {
  _type: "timeline";
  items: TimelineItem[];
};
