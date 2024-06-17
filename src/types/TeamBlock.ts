import { Slug } from "sanity";
import { Team } from "@/types/Team";

export type TeamBlock = {
  _type: "teamBlock";
  _key: string;
  id?: Slug;
  title: string;
  text?: string;
  teams: Team[]; // The teams to display
};
