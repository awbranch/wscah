import { Image } from '@/types/Image';
import { Team } from "@/types/Team";

export type TeamMember = {
  _type: "teamMember";
  _key: string;
  image: Image;
  name: string;
  title: string;
  bio: string;
  teams: Team[]; // Thge teams the member is part of
};
