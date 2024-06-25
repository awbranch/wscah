import { MenuItem } from "@/types/MenuItem";

export type Menu = {
  _type: "menu";
  _key: string;
  name: "string";
  variant: "text" | "button";
} & (
  | {
      action: "link";
      href: string;
    }
  | {
      action: "menu";
      items: MenuItem[];
    }
);
