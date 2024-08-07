import { MediaCardProps } from "@/types/MediaCard";
import { Image } from "@/types/Image";

export type ImageCard = MediaCardProps & {
  _type: "imageCard";
  image: Image;
  eyebrow?: string;
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
};
