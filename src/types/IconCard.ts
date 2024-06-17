import { Button } from "@/types/Button";

export type IconCard = {
  _type: "iconCard";
  _key: string;
  icon: "apple" | "bread" | "carrot" | "lettuce" | "can";
  title: string;
  text: string;
  button?: Button;
};
