import { PortableTextBlock, Slug } from "sanity";
import { Button } from "@/types/Button";
import { BlockStyle } from "@/types/BlockStyle";

export type AnnounceBlock = {
  _type: "announceBlock";
  _key: string;
  id?: Slug;
  style: BlockStyle;
  eyebrow?: string;
  title: PortableTextBlock[];
  text?: string;
  button?: Button;
};
