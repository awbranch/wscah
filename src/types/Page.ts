import { Block } from "@/types/Block";
import { MaxWidth } from "@/types/MaxWidth";

export type Page = {
  _type: "page";
  _id: string;
  path: string;
  title: string;
  description: string;
  maxWidth?: MaxWidth;
  blocks?: Block[];
};
