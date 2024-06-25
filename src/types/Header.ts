import { PortableTextBlock } from "sanity";
import { Menu } from "@/types/Menu";

export type Header = {
  _type: "header";
  _key: string;
  showAlert: boolean;
  alertMessage: PortableTextBlock[];
  menus: Menu[];
};
