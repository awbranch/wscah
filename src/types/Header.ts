import { PortableTextBlock } from "sanity";
import { Menu } from "@/types/Menu";

export type AlertPalette = "blue" | "dark-blue" | "orange";

export type Header = {
  _type: "header";
  _key: string;
  menus: Menu[];
} & (
  | {
      showAlert: true;
      alertMessage: PortableTextBlock[];
      alertPalette: AlertPalette;
    }
  | {
      showAlert: false;
    }
);
