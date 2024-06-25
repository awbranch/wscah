import { PortableTextBlock } from "sanity";
import { Image } from "@/types/Image";
import { Menu } from "@/types/Menu";
import { Palette } from "@/types/Palette";

export type Header = {
  _type: "footer";
  _key: string;
  showAlert: boolean;
  alertMessage: PortableTextBlock[];
  alertPalette: Palette;
  logo: Image;
  menus: Menu[];
};
