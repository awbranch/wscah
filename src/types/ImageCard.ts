import { Image } from "@/types/Image";
import { Button } from "@/types/Button";

export type ImageCard = {
  _type: "imageCard";
  _key: string;
  image: Image;
  eyebrow?: string;
  title?: string;
  text?: string;
  button?: Button; // If no button you can have a full card link
  cardLink?: string;
};
