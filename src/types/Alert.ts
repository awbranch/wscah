import { Palette } from "@/types/Palette";
import { ComponentProps } from "@/types/Component";

export type Alert = ComponentProps &  {
  _type: "alert";
  text: string;
  label: string;
  link?: string;
};
