import { MediaCardProps } from "@/types/MediaCard";
import { Image } from "@/types/Image";

export type IconCard = MediaCardProps & {
  _type: "iconCard";
  icon: Image;
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
};
