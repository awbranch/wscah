import { PortableTextBlock, Slug } from "sanity";
import { Button } from "@/types/Button";
import { IconCard } from "@/types/IconCard";
import { Image } from "@/types/Image";

export type HeroBlock = {
  _type: "heroBlock";
  _key: string;
  title: PortableTextBlock[];
  subtitle?: string;
  images: Image[];
  button?: Button;
  mission?: PortableTextBlock[];
  cards: IconCard[];
  wallpaper: boolean;
};
