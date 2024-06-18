import { PortableTextBlock, Slug } from "sanity";
import { BlockStyle } from "@/types/BlockStyle";

export type GenericBlock = {
  _type: "genericBlock";
  _key: string;
  id?: Slug;
  style: BlockStyle;
  content: PortableTextBlock[];
};
