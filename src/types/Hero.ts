import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";
import { Button } from "@/types/Button";
import { Image } from "@/types/Image";

export type Hero = ComponentProps & {
  _type: "hero";
  text: PortableTextBlock[];
  images: Image[];
  button?: Button;
};
