import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";

export type Text = ComponentProps & {
  _type: "richText";
  columns: 1 | 2 | 3;
  content: PortableTextBlock[];
};
