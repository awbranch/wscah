import { Palette } from "@/types/Palette";
import { PortableTextBlock } from "sanity";
import { Button } from "@/types/Button";
import { Image } from "@/types/Image";

export type PageHeader = {
  _type: "pageHeader";
  palette?: Palette;
  breadcrumbs?: boolean;  
  title?: PortableTextBlock[];
  description?: string;
  buttons: Button[];
  image?: Image;
  wallpaper?: boolean;
};
