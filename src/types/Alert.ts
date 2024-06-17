import { AlertStyle } from "@/types/AlertStyle";

export type Alert = {
  _type: "alert";
  _key: string;
  style: AlertStyle;
  text: string;
  label: string;
  link?: string;
};
