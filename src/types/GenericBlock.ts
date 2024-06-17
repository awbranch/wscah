import { PortableTextBlock, Slug } from "sanity";
import { FillColor } from "@/types/FillColor";

export type GenericBlock = {
  _type: "genericBlock";
  _key: string;
  id?: Slug;
  fill: FillColor;
  content: PortableTextBlock[];
};
