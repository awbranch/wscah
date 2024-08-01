import { Block } from "@/types/Block";
import { PageHeader } from "@/types/PageHeader";
export type PageWidth = "xs" | "sm" | "md" | "lg";

export type Page = {
  _type: "page";
  _id: string;
  path: string;
  title: string;
  showHeader: boolean;
  header?: PageHeader;
  maxWidth?: PageWidth;
  blocks?: Block[];
  metaDescription: string;
};
