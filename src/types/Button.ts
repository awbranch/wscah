export type ButtonIcon = "down" | "right" | "left";
export type ButtonVariant =
  | "orange-solid"
  | "white-solid"
  | "white-text"
  | "blue-text";

export type Button = {
  _type: "button";
  _key: string;
  variant: ButtonVariant;
  icon?: ButtonIcon;
  label: string;
  href: string;
};
