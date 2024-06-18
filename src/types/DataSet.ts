import { DataPoint } from "@/types/DataPoint";

export type DataUnit = "%" | "K" | "M";

export type DataSet = {
  _type: "dataSet";
  _key: string;
  units: DataUnit;
  data: DataPoint[];
};
