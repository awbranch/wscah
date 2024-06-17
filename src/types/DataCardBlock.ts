import { PortableTextBlock, Slug } from "sanity";
import { FillColor } from "@/types/FillColor";
import { DataCardSet } from "@/types/DataCardSet";

export type DataCardBlock = {
  _type: "dataCardBlock";
  _key: string;
  id?: Slug;
  fill: FillColor;
  title?: PortableTextBlock[];
  cards: DataCardSet;
};
