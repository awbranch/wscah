import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";
import { Button } from "@/types/Button";
import { Image } from "@/types/Image";

export type Hero = ComponentProps & {
  _type: "hero";
  title: PortableTextBlock[];
  subtitle?: string;
  text?: PortableTextBlock[];
  display: "fan" | "single-image";
  images: Image[];
  button?: Button;
};
