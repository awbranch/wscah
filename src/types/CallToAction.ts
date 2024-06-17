import { PortableTextBlock, Slug } from "sanity";
import { Button } from "@/types/Button";
import { Image } from "@/types/Image";
import { Orientation } from "@/types/Orientation";

export type CallToAction = {
  _type: "callToAction";
  _key: string;
  eyebrow?: string;
  title: PortableTextBlock[];
  text?: string;
  button?: Button;
  image: Image;
  orientation: Orientation;
};
