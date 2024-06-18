import { Image } from "@/types/Image";
import { Redirect } from "@/types/Redirect";

export type Settings = {
  title: string;
  description: string;
  socialImage: Image;
  redirects: Redirect;
};
