import { DataUnit } from "@/types/DataUnit";
import { DataPoint } from "@/types/DataPoint";

export type DataCard = {
  _type: "dataCard";
  _key: string;
  title: string;
  text: string;
  units: DataUnit;
  data: DataPoint[];
};
