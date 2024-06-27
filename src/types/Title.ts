import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";
import { Alignment } from "@/types/Alignment";

export type TitleWidth = "xs" | "sm" | "md" | "lg";

export type Title = ComponentProps & {
  _type: "title";
  eyebrow?: string;
  title: PortableTextBlock[];
  text?: string;
  alignment: Alignment;
  maxWidth?: TitleWidth;
};
