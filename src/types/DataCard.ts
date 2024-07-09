import { MediaCardProps } from "@/types/MediaCard";
import { DataPoint } from "@/types/DataPoint";

export type DataUnit = "%" | "N" | "K" | "M" | "B";

export type DataCard = MediaCardProps & {
  _type: "dataCard";
  title?: string;
  text?: string;
  units: DataUnit;
  data: DataPoint[];
};
