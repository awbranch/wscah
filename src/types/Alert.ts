import { ComponentProps } from "@/types/Component";

export type AlertStyle = 'orange' | 'blue' | 'dark-blue';

export type Alert = ComponentProps &  {
  _type: "alert";
  style: AlertStyle;
  text: string;
  label: string;
  link?: string;
};
