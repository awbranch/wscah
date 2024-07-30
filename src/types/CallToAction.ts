import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";
import { Button } from "@/types/Button";
import { Image } from "@/types/Image";

export type Orientation = "left" | "right";

export type CallToAction = ComponentProps & {
  _type: "callToAction";
  orientation: Orientation;
  image: Image;
  eyebrow?: string;
  title?: PortableTextBlock[];
  text?: string;
  buttons: Button[];
};
