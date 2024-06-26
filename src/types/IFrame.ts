import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";

export type IFrame = ComponentProps & {
  _type: "iframe";
  eyebrow?: string;
  title?: PortableTextBlock[];
  text?: string;
  code: string;
};
