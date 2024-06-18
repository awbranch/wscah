import { Image } from "@/types/Image";
import { Team } from "@/types/Team";

export type TeamMember = {
  _type: "teamMember";
  _id: string;
  image: Image;
  name: string;
  title: string;
  bio: string;
  teams: Team[]; // The teams the member is part of
};
