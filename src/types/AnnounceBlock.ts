import { PortableTextBlock, Slug } from "sanity";
import { Button } from "@/types/Button";
import { FillColor } from "@/types/FillColor";

export type AnnounceBlock = {
  _type: "AnnounceBlock";
  _key: string;
  id?: Slug;
  fill: FillColor;
  eyebrow?: string;
  title: PortableTextBlock[];
  text?: string;
  button?: Button;
};
