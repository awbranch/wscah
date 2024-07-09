import { MediaCardProps } from "@/types/MediaCard";
import { Image } from "@/types/Image";
import { Button } from "@/types/Button";

export type IconCard = MediaCardProps & { 
  _type: "iconCard";
  icon: Image;
  title?: string;
  text?: string;
  button: Button[];
  href?: string;
};
