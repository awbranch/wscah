import { MediaCardProps } from "@/types/MediaCard";
import { Button } from "@/types/Button";
import { DataPoint } from "@/types/DataPoint";

export type DataUnit = "%" | "N" | "K" | "M" | "M";

export type DataCard = MediaCardProps & {
  _type: "dataCard";
  title?: string;
  text?: string;
  units: DataUnit;
  data: DataPoint[];
};
