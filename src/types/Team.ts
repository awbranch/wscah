import { TeamMember } from "@/types/TeamMember";

export type Team = {
  _id: string;
  _type: "team";
  name: string;
  members: TeamMember[];
};
