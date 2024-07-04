import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";
import { Button } from "@/types/Button";
import { ImageRef } from "@/types/ImageRef";

export type Hero = ComponentProps & {
  _type: "hero";
  title: PortableTextBlock[];
  subtitle?: string;
  text?: PortableTextBlock[];
  display: "fan" | "single-image";
  images: ImageRef[];
  button: Button[];
};
