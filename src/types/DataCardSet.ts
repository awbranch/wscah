import { DataCard } from "@/types/DataCard";

export type DataCardSet = {
  _type: "dataCardSet";
  _key: string;
  cards: DataCard[];
};
