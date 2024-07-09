import { MediaCardProps } from "@/types/MediaCard";
import { PortableTextBlock } from "sanity";

export type TitleCard = MediaCardProps & {
  _type: "titleCard";
  eyebrow?: string;
  title: PortableTextBlock[];
  text?: string;
};
