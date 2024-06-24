import { Block } from "@/types/Block";
export type PageWidth = "xs" | "sm" | "md" | "lg";

export type Page = {
  _type: "page";
  _id: string;
  path: string;
  title: string;
  description: string;
  maxWidth?: PageWidth;
  blocks?: Block[];
};
