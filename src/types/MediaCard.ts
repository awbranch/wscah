import { PortableTextBlock } from "sanity";
import { Alignment } from "@/types/Alignment";
import { Palette } from "@/types/Palette";
import { Image } from "@/types/Image";
import { DataSet } from "@/types/DataSet";
import { Button } from "@/types/Button";

export type MediaCard = {
  _type: "mediaCard";
  _key: string;
  palette: Palette;
  alignment: Alignment;
  image?: Image;
  imageLayout?: "fill" | "center";
  title?: PortableTextBlock[];
  text?: string;
  dataSet?: DataSet;
  button?: Button;
  cardHref?: string;
};
