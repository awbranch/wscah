export type ButtonIcon = "down" | "right" | "left";
export type ButtonStyle =
  | "orange-solid"
  | "white-solid"
  | "white-text"
  | "blue-text";

export type Button = {
  _type: "button";
  _key: string;
  style: ButtonStyle;
  icon?: ButtonIcon;
  label: string;
  href: string;
};
