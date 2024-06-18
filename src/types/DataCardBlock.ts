import { PortableTextBlock, Slug } from "sanity";
import { BlockStyle } from "@/types/BlockStyle";
import { DataCardSet } from "@/types/DataCardSet";

export type DataCardBlock = {
  _type: "dataCardBlock";
  _key: string;
  id?: Slug;
  style: BlockStyle;
  title?: PortableTextBlock[];
  cards: DataCardSet;
};
