import { PortableTextBlock } from "sanity";
import { Image } from "@/types/Image";
import { Menu } from "@/types/Menu";

export type Header = {
  _type: "footer";
  _key: string;
  showAlert: boolean;
  alertMessage: PortableTextBlock[];
  logo: Image;
  menus: Menu[];
};
