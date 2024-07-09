import { MediaCardProps } from "@/types/MediaCard";
import { Image } from "@/types/Image";
import { Button } from "@/types/Button";

export type ImageCard = MediaCardProps & {
  _type: "imageCard";
  image: Image;
  title?: string;
  text?: string;
  button: Button[];
  href?: string;
};
