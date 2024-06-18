import { Block } from "@/types/Block";

export type Page = {
  path: string;
  title: string;
  description: string;
  blocks?: Block[];
};
