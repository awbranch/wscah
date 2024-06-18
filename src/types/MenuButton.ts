import { MenuItem } from "@/types/MenuItem";

export type MenuButton = {
  _type: "menuButton";
  _key: string;
  name: "string";
  style: "text" | "rounded";
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
