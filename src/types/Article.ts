import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";

export type Article = ComponentProps & {
  _type: "article";
  text: PortableTextBlock[];
  columns: 1 | 2 | 3 | 4;
};
