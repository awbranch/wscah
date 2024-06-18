import { PortableTextBlock } from "sanity";
import { Image } from "@/types/Image";
import { MenuButton } from "@/types/Menu";
import { MenuItem } from "@/types/MenuItem";

export type Header = {
  _type: "footer";
  _key: string;
  showAlert: boolean;
  alertMessage: PortableTextBlock[];
  logo: Image;
  menus: (MenuButton | MenuItem)[];
};
