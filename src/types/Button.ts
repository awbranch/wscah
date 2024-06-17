import { ButtonStyle } from "@/types/ButtonStyle";
import { ButtonIcon } from "@/types/ButtonIcon";

export type Button = {
  _type: "button";
  _key: string;
  style: ButtonStyle;
  icon?: ButtonIcon;
  label: string;
  link: string;
};
