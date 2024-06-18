export type ButtonVariant = "rounded" | "text";
export type ButtonIcon = "down" | "right" | "left";
export type ButtonStyle =
  | "orange"
  | "green"
  | "blue"
  | "blue-text"
  | "white-text";

export type Button = {
  _type: "button";
  _key: string;
  variant: ButtonVariant;
  style: ButtonStyle;
  icon?: ButtonIcon;
  label: string;
  href: string;
};
