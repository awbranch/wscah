import { Image } from "@/types/Image";

export type TeamMember = {
  _type: "teamMember";
  _key: string;
  name: string;
  role: string;
  email: string;
  image: Image;
  bio: string;
};
